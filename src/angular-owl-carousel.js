
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
                    $element.owlCarousel(options);
                    owlCarousel = $element.data('owlCarousel');

                    for (var i in newItems) {
                        $transclude(function(clone, scope) {

                            scope.item = newItems[i];

                            console.log(scope.item);
                            console.log(clone[1]);
                            owlCarousel.addItem(clone[1], -1);

                        });
                    }
                });
            }
        };
    }

})();
