
(function() {

    angular
        .module('angular-owl-carousel', [])
        .directive('owlCarousel', owlCarouselDirective);

    function owlCarouselDirective() {

        return {
            restrict: 'A',
            transclude: true,
            link: function(scope, element, attributes, controller, $transclude) {

                var $element = $(element);
                $element.owlCarousel(JSON.parse(attributes.owlOptions));

                var propertyName = attributes.owlCarousel;
                var owlCarousel = $element.data('owlCarousel');

                scope.$watchCollection(propertyName, function(newItems, oldItems) {
                    for (var i in newItems) {

                        $transclude(function(clone, scope) {

                            scope.item = newItems[i];
                            owlCarousel.addItem(clone[1]);

                        });
                    }
                });
            }
        };
    }

})();
