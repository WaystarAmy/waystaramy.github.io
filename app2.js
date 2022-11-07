(function ()
{
    'use strict';

    angular.module('Randomizer', [])
    .controller('AdderController', AdderController)
    .service('RandomizerFactory', RandomizerFactory);

    AdderController.$inject = ['RandomizerFactory'];
    function AdderController(RandomizerFactory)
    {
        var RService = RandomizerFactory();
        this.Item = "";
        this.AddItem = function(){
            RService.AddItem(this.Item);
            this.Item = "";
        }

        this.Items = RService.GetItems();

        this.RemoveItem = function(itemIndex)
        {
            RService.RemoveItem(itemIndex);
        };

        this.RandomItem = "";
        this.GetRandomItem = function(){
            this.RandomItem = RService.PickRandomItem();
        };
    };
    function RandomizerService()
    {
        var items = [];

        this.AddItem = function(itemName){
            if(itemName != "")
            {
                items.push(itemName);
            }
        };
        this.RemoveItem =function(itemIndex){
            items.splice(itemIndex,1);
            console.log(items);
        };
        this.PickRandomItem = function(){
            var randomIndex = Math.floor(Math.random() * items.length);
            return items[randomIndex];
        };
        this.GetItems = function() { return items;}
    };

    function RandomizerFactory() {
        var factory = function (){
            return new RandomizerService();
        }
        return factory;
    }
})();