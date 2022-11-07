(function() {
    'use strict';
    angular.module('MenuCategories', [])
    .controller('MenuCategoriesController', MenuCategoriesController)
    .service('MenuCategoriesService', MenuCategoriesService);

    MenuCategoriesController.$inject = ['MenuCategoriesService'];
    function MenuCategoriesController(MenuCategoriesService)
    {
        var promise = MenuCategoriesService.getMenuCategories();

        promise.then(function (response){
            this.categories = response.data;
        })
        .catch(function (error) {
            console.log("Something went terribly wrong.");

        });
    }
    MenuCategoriesService.$inject = ['$http']
    function MenuCategoriesService($http) {
        this.getMenuCategories = function () {
            var response = $http({
                method: "GET",
                url: ("http//davids-restaurant.herokuapp.com/categories.json")
            });

            return response;
        }
    }

}

)()