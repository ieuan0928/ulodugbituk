(function($) {
              
    $.fn.applyGridBehavior = function(options) {
        var settings = $.extend({
            rowDefinitions: [],
            columnDefinitions: []
        }, options);

        var gridPoints = {
            rows : [],
            columns: []
        };

        var columnPoint = function() {
            this.definition = {};
            this.leftOffset = 0;
            this.width = 0;
        };
        
        var elements = [];

        return this.each(function() {
            var me = $(this);

            var createColumnPoints = function(gridControl) {
                gridPoints.columns = [];
                var count = settings.columnDefinitions.length;

                if (count > 0) {
                    var firstCd = settings.columnDefinitions[0];
                    var firstPoint = new columnPoint();
                    var firstCdProp = firstPoint.properties;
                    firstPoint.definition = firstCdProp;
                    firstPoint.width = firstCdProp.width;
                    gridPoints.columns.push(firstPoint);

                    for (var ctr = 1; ctr < count; ctr++) {
                        var newCd = settings.columnDefinitions[ctr];
                        var newPoint = new columnPoint();
                        var newCdProp = newCd.properties;

                        newPoint.definition = newCdProp;
                        newPoint.width = newCdProp.width;

                        gridPoint.columns.push(newPoint);
                    }
                }
            };

            var createRowPoints = function(gridControl) {
               
            };

            var arrangeChildren = function(childElements) {
                for (var childElement in childElements) {
                    
                }
            }

            $(window).resize(function() {
                createColumnPoints(me);
                createRowPoints(me);
                var childElements = me.children();
               
                arrangeChildren(childElements);
            });
        });
    }

})(jQuery);