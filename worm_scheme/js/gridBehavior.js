(function($) {
              
    $.fn.applyGridBehavior = function(options) {
        var settings = $.extend({
            rowDefinitions: [],
            columnDefinitions: []
        }, options);

        return this.each(function() {
            var me = $(this);
            var mySpace = me.children(".gridClient");
            var mySpaceCoord = null; 
            var elements = [];
           
            var gridPoints = {
                rows : [],
                columns: [],
                hasStar : false,
                hasAuto : false
            };

            var columnPoint = function() {};
            var rowPoint = function() {}

            var calculatePoints = function(points, definitionProperties, pointProperties) {
                var currentLoc = 0;

                var count = points.length;
                for (var pIndex = 0; pIndex < count; pIndex++) {
                    var point = points[pIndex];
                    var definition = point.definition;

                    point[pointProperties.location] = currentLoc;

                    currentLoc += parseFloat(point[pointProperties.size]);
                }
            }

            var getStarsShareCount = function(pointCollection, pointProperties, definitionProperties) {
                var result = 0;

                var count = pointCollection.length;
                for (var ctr = 0; ctr < count; ctr++) {
                    var pointDefinition = pointCollection[ctr];
                    if ((!pointDefinition[pointProperties.isFixed]) && (pointDefinition.definition.properties[definitionProperties.size].trim().toLowerCase() != "auto")) {
                        var size = parseFloat(pointDefinition.definition.properties[definitionProperties.size]); 
                        result += size ? size : 1;
                    }
                }

                return result;
            }

            var getUsedSpace = function(pointCollection, pointProperties, definitionProperties) {
                var result = 0;

                var count = pointCollection.length;
                for (var ctr = 0; ctr < count; ctr++) {
                    var pointDefinition = pointCollection[ctr];
                    if (pointDefinition[pointProperties.isFixed]) {
                        result += parseFloat(pointDefinition[pointProperties.size]);
                    }
                    else if (pointDefinition.definition.properties[definitionProperties.size].trim().toLowerCase() == "auto") {
                        result += parseFloat(pointDefinition[pointProperties.size]);
                    }
                }
                return result;
            }

            var setupUnfixedSizes = function(pointCollection, pointProperties, definitionProperties, spaceSize) {
                var starsShareCount = getStarsShareCount(pointCollection, pointProperties, definitionProperties);
                var spaceAvailable = spaceSize - getUsedSpace(pointCollection, pointProperties, definitionProperties);
                var spaceValue = spaceAvailable / starsShareCount;
                var mustResetup = false;

                spaceAvailable = spaceAvailable < 0 ? 0 : spaceAvailable;

                var count = pointCollection.length;
                for (var ctr = 0; ctr < count; ctr++) {
                    var pointDef = pointCollection[ctr];
                    var size = pointDef.definition.properties[definitionProperties.size];
                    if (!pointDef[pointProperties.isFixed] && (typeof(size) == "string") && (size.endsWith("*"))) {
                        if (spaceAvailable == 0) {
                            pointDef[pointProperties.size] = 0;
                            pointDef[pointProperties.isFixed] = true;
                        }
                        else {
                            var defSize = parseFloat(pointDef.definition.properties[definitionProperties.size]);
                            var pdStarShare = defSize ? defSize : 1;
                             
                            var size = spaceValue * pdStarShare;
                            var max = pointDef[pointProperties.maxSize];
                            var min = pointDef[pointProperties.minSize];
                            var isFixed = false;

                            if (max && size > parseFloat(max)) {
                                mustResetup = true;
                                size = max;
                                isFixed = true;
                            }

                            if (min && size < parseFloat(min)) {
                                mustResetup = true;
                                size = min;
                                isFixed = true;
                            }

                            pointDef[pointProperties.size] = size;
                            pointDef[pointProperties.isFixed] = isFixed;
                        }
                    }
                }

                if (mustResetup) setupUnfixedSizes(pointCollection, pointProperties, definitionProperties, spaceSize);
            }

            var getSpaceOfAuto = function() {
                var result = 0;

                return result;
            }

            var calculateAutoSize = function(definitions, definitionProperties, definitionIndex, childElements, childElementProperties, pointCollection, pointProperties) {
                var ceCount = childElements.length;
                var definition = definitions[definitionIndex];
                var maxPoint = 0;
                for (var ceCtr = 0; ceCtr < ceCount; ceCtr++) {
                    var element = childElements[ceCtr];
                    var dataIndex = parseInt(element.getAttribute(childElementProperties.dataIndex));
                    var dataSpan = parseInt(element.getAttribute(childElementProperties.dataSpan));
                    var elementSize = 0; 
                    if ((dataSpan == 1) && (definitionIndex == dataIndex)) {
                        elementSize = parseFloat(element.children[0].getBoundingClientRect()[definitionProperties.size]) / dataSpan;
                    }
                    else if (dataSpan > 1) {
                        var usedSize = 0;
                        var spanUsed = 0;
                        if (pointCollection.length > 0)
                            for (var ctr = dataIndex; (ctr <= definitionIndex) && (ctr < (dataSpan - 1 + dataIndex)); ctr++) {
                                usedSize += pointCollection[ctr][pointProperties.size];
                                spanUsed++; 
                            }

                        var unusedSpan = dataSpan - spanUsed;

                        elementSize = (parseFloat(element.children[0].getBoundingClientRect()[definitionProperties.size]) - usedSize) / unusedSpan;
                    }

                    if (elementSize > maxPoint) maxPoint = elementSize;

                    var defProperties = definition.properties;
                    var maxSize = parseFloat(defProperties[definitionProperties.maxSize]);
                    var minSize = parseFloat(defProperties[definitionProperties.minSize]);

                    if (maxPoint > maxSize) maxPoint = maxSize;
                    if (maxPoint < minSize) maxPoint = minSize;
                }

                return maxPoint;

            }

            var createPoints = function(definitions, pointCollection, pointObject, spaceSize, childElements, definitionProperties, pointProperties, childElementProperties) {
                for (var dIndex in definitions) {
                    var definition = definitions[dIndex];
                    var defProperties = definition.properties;
                    var size = defProperties[definitionProperties.size];

                    var newPoint = new pointObject();
                    newPoint.definition = definition;

                    if ((typeof(size) == "string") && (size.endsWith("*"))) {
                        gridPoints.hasStar = true;
                        newPoint[pointProperties.size] = size;
                        newPoint[pointProperties.isFixed] = false;
                    }
                    else if ((typeof(size) == "string") && (size.trim().toLowerCase() == "auto")) {
                        gridPoints.hasAuto = true;
                        var temp = calculateAutoSize(definitions, definitionProperties, dIndex, childElements, childElementProperties, pointCollection, pointProperties);
                        newPoint[pointProperties.size] = temp;
                        newPoint[pointProperties.isFixed] = true;
                    }
                    else {
                        newPoint[pointProperties.size] = parseFloat(size);
                        newPoint[pointProperties.isFixed] = true;
                    }

                    newPoint[pointProperties.maxSize] = defProperties[definitionProperties.maxSize];
                    newPoint[pointProperties.minSize] = defProperties[definitionProperties.minSize];
                    pointCollection.push(newPoint);
                }

                if (gridPoints.hasStar) setupUnfixedSizes(pointCollection, pointProperties, definitionProperties, spaceSize);

                calculatePoints(pointCollection, definitionProperties, pointProperties);
            }

            var calculateSize = function(defLoc, spanSize, pointCollection, sizeProperty) {
                var size = 0;

                for (var ctr = 0; ctr < spanSize; ctr++) {
                    size += pointCollection[ctr + parseFloat(defLoc)][sizeProperty];
                }

                return size;
            }

            var arrangeChildren = function(childElements) {
                gridPoints = { rows:[], columns:[], hasStar: false, hasAuto: false };
                mySpaceCoord = mySpace[0].getBoundingClientRect();

                createPoints(settings.columnDefinitions, gridPoints.columns, columnPoint, mySpaceCoord.width, childElements, 
                    {size: "width", minSize: "minWidth", maxSize: "maxWidth"}, 
                    {location: "leftOffset", size: "width", isFixed: "isFixedWidth", minSize: "minWidth", maxSize: "maxWidth"},
                    {dataIndex: "data-column", dataSpan: "data-columnspan", coordSize: "width" }    
                );
                
                createPoints(settings.rowDefinitions, gridPoints.rows, rowPoint, mySpaceCoord.height, childElements,
                    {size: "height", minSize: "minHeight", maxSize: "maxHeight"}, 
                    {location: "topOffset", size: "height", isFixed: "isFixedHeight", minSize: "minHeight", maxSize: "maxHeight"},
                    {dataIndex: "data-row", dataSpan: "data-rowspan", coordSize: "height"}
                );

                var childCount = childElements.length;
                for (var ctr = 0; ctr < childCount; ctr++) {
                    var childElement = childElements[ctr];
                    var column = childElement.getAttribute("data-column");
                    var row = childElement.getAttribute("data-row");
                    var colSpan = childElement.getAttribute("data-columnspan");
                    var rowSpan = childElement.getAttribute("data-rowspan");

                    $(childElement).css({
                        "left": gridPoints.columns[column].leftOffset,
                        "top" : gridPoints.rows[row].topOffset,
                        "width": calculateSize(column, colSpan, gridPoints.columns, "width") + "px",
                        "height": calculateSize(row, rowSpan, gridPoints.rows, "height") + "px"
                    });
                }
            }

            var resizeMe = function() {
                arrangeChildren(mySpace[0].children);
            };

            $(window).resize(resizeMe);

            resizeMe();
        });
    }

})(jQuery);