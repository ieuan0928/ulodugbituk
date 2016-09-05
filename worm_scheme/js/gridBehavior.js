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
                columns: []
            };

            var columnPoint = function() {
                this.definition = {};
                this.leftOffset = 0;
                this.width = 0;
                this.isFixedWidth = false;
            };

            var rowPoint = function() {
                this.definition = {};
                this.topOffset = 0;
                this.height = 0;
                this.isFixedHeight = false;
            }

            var getExtraWidthColumn = function() {
                var result = 0;

                for (var index in gridPoints.columns) {
                    var colPoint = gridPoints.columns[index];

                    if (colPoint.isFixedWidth) {
                        result += colPoint.width;
                    }
                }
               
                return result;
            }

            var getExtraHeightRow = function() {
                var result = 0;

                for (var index in gridPoints.rows) {
                    var rowPoint = gridPoints.rows[index];

                    if (rowPoint.isFixedHeight) {
                        result += rowPoint.height;
                    }
                }
            }

            var computeColumnPoints = function() {
                var recalculate = false;
                var space = mySpaceCoord.width - getExtraWidthColumn();
                if (space < 0) space = 0;

                if (recalculate) computeColumnPoints();
            }

            var computeRowPoints = function() {
                var recalculate = false;
                var space = mySpaceCoord.height - getExtraHeightRow();

                if (space < 0) space = 0;

                if (recalculate) computeRowPoints();
            }

            var addColumnPointFromColumnDefinition = function(columnDefinition) {
                var cp = new columnPoint();
                var cdprop = columnDefinition.properties;

                cp.definition = cdprop;
                cp.width = cdprop.width;

                if (cp.width != "auto" && cp.width != "*") cp.isFixedWidth = true;

                gridPoints.columns.push(cp);
            }

            var addRowPointFromRowDefinition = function(rowDefinition) {
                var rp = new rowPoint();
                var rdprop = rowDefinition.properties;

                rp.definition = rdprop;
                rp.height = rdprop.height;

                if (rp.width != "auto" && rp.height != "*") rp.isFixedHeight = true;

                gridPoints.rows.push(rp);
            }

            var createColumnPoints = function() {
                gridPoints.columns = [];

                var count = Object.keys(settings.columnDefinitions).length;

                if (count > 0) {
                    addColumnPointFromColumnDefinition(settings.columnDefinitions[0]);

                    for (var ctr = 1; ctr < count; ctr++) {
                        addColumnPointFromColumnDefinition(settings.columnDefinitions[ctr]);
                    }

                    computeColumnPoints();
                }
            };

            var createRowPoints = function() {
                gridPoints.rows = [];

                var count = Object.keys(settings.rowDefinitions).length;

                if (count > 0) {
                    addRowPointFromRowDefinition(settings.rowDefinitions[0]);

                    for (var ctr = 1; ctr < count; ctr++) {
                        addRowPointFromRowDefinition(settings.rowDefinitions[ctr]);
                    }

                    computeRowPoints();
                }
            };

            var arrangeChildren = function(childElements) {
                for (var childElement in childElements) {
                    
                }
            }

            var resizeMe = function() {
                mySpaceCoord = mySpace[0].getBoundingClientRect();
                createColumnPoints();
                createRowPoints();
                var childElements = me.children();
               
                arrangeChildren(childElements);
            };

            $(window).resize(resizeMe);

            resizeMe();
        });
    }

})(jQuery);