# Angular Owl Carousel

This directive allows you to back a Owl Carousel with data from an Angular controller.

*For use with Owl Carousel 2*

## Usage

Javascript:

    // Define app module
    angular
        .module('myApp', ['angular-owl-carousel']);

    // Create controller
    angular
        .module('myApp')
        .controller('MyController', MyController);

    function MyController() {
        this.owl = {
            items: ["item 1", "item 2"],
            options: {
                loop: true,
                nav: false
            }
        };
    }

HTML:

    <div ng-controller="MyController as main">
        <div owl-carousel="main.owl.items" owl-options="main.owl.options">
            <div class="item">{{ item }}</div>
        </div>
    </div>
