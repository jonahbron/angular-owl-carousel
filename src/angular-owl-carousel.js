
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
                    var found;
                    var newItem;
                    var $oItem;
                    var angularItem;
                    for (var i in newItems) {
                        newItem = newItems[i];

                        if (owlCarousel.dom.$oItems.eq(i).length == 0
                         || !angular.equals(angular.element(owlCarousel.dom.$oItems.eq(i).children()).scope().item, newItem)) {
                            found = false;
                            owlCarousel.dom.$oItems.each(function() {
                                $oItem = $(this);
                                angularItem = angular.element($oItem.children());
                                if (angular.equals(angularItem.scope().item, newItem)) {
                                    owlCarousel.dom.$oItems.eq(i).before($oItem.detach());
                                    found = true;
                                    return false;
                                }
                            });

                            if (found == false) {
                                $transclude(function(clone, scope) {

                                    scope.item = newItems[i];
                                    owlCarousel.addItem(clone[1]);

                                });
                            }
                        }
                    }

                    while (i < owlCarousel.dom.$oItems.length) {
                        owlCarousel.removeItem(i);
                        i++;
                    }
                });
            }
        };
    }

})();
