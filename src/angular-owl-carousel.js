
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
                var owlCarousel = null;
                var propertyName = attributes.owlCarousel;
                var options = JSON.parse(attributes.owlOptions);

                scope.$watchCollection(propertyName, function(newItems, oldItems) {

                    if (owlCarousel) {
                        owlCarousel.destroy();
                    }
                    $element.empty();

                    for (var i in newItems) {
                        $transclude(function(clone, scope) {
                            scope.item = newItems[i];
                            $element.append(clone[1]);
                        });
                    }

                    $element.owlCarousel(options);
                    owlCarousel = $element.data('owlCarousel');
                });
            }
        };
    }

})();
