# Angular Owl Carousel

This directive allows you to back a Owl Carousel with data from an Angular controller.

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
