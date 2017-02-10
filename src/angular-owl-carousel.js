(function () {
    'use strict';
    angular.module('angular-owl-carousel', [])
        .directive('owlCarousel', function ($timeout) {
            var owlOptions = [
                'items',
                'margin',
                'loop',
                'center',
                'mouseDrag',
                'touchDrag',
                'pullDrag',
                'freeDrag',
                'merge',
                'mergeFit',
                'autoWidth',
                'startPosition',
                'URLhashListener',
                'nav',
                'navRewind',
                'navText',
                'slideBy',
                'dots',
                'dotsEach',
                'dotData',
                'lazyLoad',
                'lazyContent',
                'autoplay',
                'autoplayTimeout',
                'autoplayHoverPause',
                'smartSpeed',
                'fluidSpeed',
                'autoplaySpeed',
                'dotsSpeed',
                'dragEndSpeed',
                'callbacks',
                'responsive',
                'responsiveRefreshRate',
                'responsiveBaseElement',
                'responsiveClass',
                'video',
                'videoHeight',
                'videoWidth',
                'animateOut',
                'animateIn',
                'fallbackEasing',
                'info',
                'nestedItemSelector',
                'itemElement',
                'stageElement',
                'navContainer',
                'dotsContainer',
                // Classes
                'themeClass',
                'baseClass',
                'itemClass',
                'centerClass',
                'activeClass',
                'navContainerClass',
                'navClass',
                'controlsClass',
                'dotClass',
                'dotsClass',
                'autoHeightClass',
                // Callbacks
                'onInitialize',
                'onInitialized',
                'onResize',
                'onResized',
                'onRefresh',
                'onRefreshed',
                'onDrag',
                'onDragged',
                'onTranslate',
                'onTranslated',
                'onChange',
                'onChanged',
                'onStopVideo',
                'onPlayVideo',
                'onLoadLazy',
                'onLoadedLazy'
            ];

            return {
                restrict: 'A',
                scope: {
                    owlOptions: '=owlOptions'
                },
                transclude: true,
                link: function (scope, element, attributes, controller, $transclude) {

                    var options = {},
                        $element = $(element),
                        owlCarousel = null,
                        propertyName = attributes.owlCarousel;

                    for (var optionValue in owlOptions) {
                        var currentOptionValue = owlOptions[optionValue];
                        if (scope.owlOptions[currentOptionValue] !== undefined) {
                            options[currentOptionValue] = scope.owlOptions[currentOptionValue];
                        }
                    }

                    element.addClass('owl-carousel');

                    scope.$watchCollection(propertyName, function (newItems) {

                        if (owlCarousel) {
                            owlCarousel.destroy();
                        }
                        $element.empty();

                        for (var i in newItems) {
                            $transclude(function (clone, scope) {
                                scope.item = newItems[i];
                                $element.append(clone[1]);
                            });
                        }

                        $timeout(function() {
                            $element.data('owl.carousel', null);
                            $element.owlCarousel(options);
                            owlCarousel = $element.data('owlCarousel');
                        }, 0);

                        owlCarousel = $element.data('owlCarousel');
                    });

                    scope.$on("$destroy", function () {
                        if (owlCarousel) {
                            owlCarousel.destroy();
                        }
                    });
                }
            };
        });
})();
