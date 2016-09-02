(function($) {
              
    $.fn.applyGridBehavior = function(options) {
        var settings = $.extend({
            rowDefinitions: [],
            columnDefinitions: []
        }, options);

        return this.each(function() {
            var me = $(this);
            var getMyProperties = function() {
                return {
                    clientRect : me[0].getBoundingClientRect(),
                    paddingTop: parseInt(me.css("padding-top")),
                    paddingRight: parseInt(me.css("padding-right")),
                    paddingBottom: parseInt(me.css("padding-bottom")),
                    paddingLeft: parseInt(me.css("padding-left")),
                    containerWidth: null,
                    containerHeight: null,
                    getContainerWidth: function() {
                        if (!this.containerWidth) {
                            this.containerWidth = this.clientRect.width - this.paddingRight - this.paddingLeft;

                            if (this.containerWidth < 0) this.containerWidth = 0;
                        }
                        return this.containerWidth;
                    },
                    getContainerHeight: function() {
                        if (!this.containerHeight) {
                            this.containerHeight = this.clientHeight - this.paddingTop - this.paddingBottom;

                            if (this.containerHeight < 0) this.containerHeight = 0;
                        }

                        return this.containerHeight;
                    }
                }
            };


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

            var computeColumnPoints = function() {

            }

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

                    computeColumnPoints();
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