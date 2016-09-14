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

                    currentLoc += parseInt(point[pointProperties.size]);
                }
            }

            var getStarsShareCount = function(pointCollection, pointProperties, definitionProperties) {
                var result = 0;

                var count = pointCollection.length;
                for (var ctr = 0; ctr < count; ctr++) {
                    var pointDefinition = pointCollection[ctr];
                    if (!pointDefinition[pointProperties.isFixed]) {
                        var size = parseInt(pointDefinition.definition.properties[definitionProperties.size]); 
                        result += size ? size : 1;
                    }
                }

                return result;
            }

            var getUsedSpace = function(pointCollection, pointProperties) {
                var result = 0;

                var count = pointCollection.length;
                for (var ctr = 0; ctr < count; ctr++) {
                    var pointDefinition = pointCollection[ctr];
                    if (pointDefinition[pointProperties.isFixed]) {
                        result += parseInt(pointDefinition[pointProperties.size]);
                    }
                }
                return result;
            }

            var setupUnfixedSizes = function(pointCollection, pointProperties, definitionProperties, spaceSize) {
                var starsShareCount = getStarsShareCount(pointCollection, pointProperties, definitionProperties);
                var spaceAvailable = spaceSize - getUsedSpace(pointCollection, pointProperties);
                var spaceValue = spaceAvailable / starsShareCount;
                var mustResetup = false;

                spaceAvailable = spaceAvailable < 0 ? 0 : spaceAvailable;

                var count = pointCollection.length;
                for (var ctr = 0; ctr < count; ctr++) {
                    var pointDef = pointCollection[ctr];

                    if (!pointDef[pointProperties.isFixed]) {
                        if (spaceAvailable == 0) {
                            pointDef[pointProperties.size] = 0;
                            pointDef[pointProperties.isFixed] = true;
                        }
                        else {
                            var defSize = parseInt(pointDef.definition.properties[definitionProperties.size]);
                            var pdStarShare = defSize ? defSize : 1;
                             
                            var size = spaceValue * pdStarShare;
                            var max = pointDef[pointProperties.maxSize];
                            var min = pointDef[pointProperties.minSize];
                            var isFixed = false;

                            if (max && size > parseInt(max)) {
                                mustResetup = true;
                                size = max;
                                isFixed = true;
                            }

                            if (min && size < parseInt(min)) {
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

            var createPoints = function(definitions, pointCollection, pointObject, spaceSize, definitionProperties, pointProperties) {
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
                    else if ((typeof(size) == "string") && (size.trim().toLowerCase() == "auto")) {}
                    else {
                        newPoint[pointProperties.size] = parseInt(size);
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
                    size += pointCollection[ctr + parseInt(defLoc)][sizeProperty];
                }

                return size;
            }

            var arrangeChildren = function(childElements) {
                gridPoints = { rows:[], columns:[], hasStar: false, hasAuto: false };
                mySpaceCoord = mySpace[0].getBoundingClientRect();

                createPoints(settings.columnDefinitions, gridPoints.columns, columnPoint, mySpaceCoord.width, { 
                    size: "width", minSize: "minWidth", maxSize: "maxWidth"}, {
                    location: "leftOffset", size: "width", isFixed: "isFixedWidth", minSize: "minWidth", maxSize: "maxWidth"
                });
                
                createPoints(settings.rowDefinitions, gridPoints.rows, rowPoint, mySpaceCoord.height, {
                    size: "height", minSize: "minHeight", maxSize: "maxHeight"}, {
                    location: "topOffset", size: "height", isFixed: "isFixedHeight", minSize: "minHeight", maxSize: "maxHeight"            
                });

                var childCount = childElements.length;
                for (var ctr = 0; ctr < childCount; ctr++) {
                    var childElement = childElements[ctr];
                    var column = childElement.getAttribute("data-column");
                    var row = childElement.getAttribute("data-row");
                    var colSpan = childElement.getAttribute("data-columnspan");
                    var rowSpan = childElement.getAttribute("data-rowspan");

                    $(childElement).css({
                        "margin-left": gridPoints.columns[column].leftOffset,
                        "margin-top" : gridPoints.rows[row].topOffset,
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