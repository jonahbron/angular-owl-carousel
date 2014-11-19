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
        this.items = ['item1', 'item2'];
    }

HTML:

    <div ng-controller="MyController">
        <div owl-carousel="items">
            <div class="item">{{ item }}</div>
        </div>
    </div>

*Note:* There is a bug in Owl on the master branch that breaks this directive.  I've created a branch with the fix here:

https://github.com/jonahbron/OwlCarousel2
