(function ()
{
    'use strict';

    angular.module('Randomizer', [])
    .controller('AdderController', AdderController)
    .controller('ListerController', ListerController)
    .controller('RandomlySelectedController', RandomlySelectedController)
    .service('RandomizerService', RandomizerService);

    AdderController.$inject = ['RandomizerService'];
    function AdderController(RandomizerService)
    {
        this.Item = "";
        this.AddItem = function(){
            RandomizerService.AddItem(this.Item);
            this.Item = "";
        }
    };
    ListerController.$inject = ['RandomizerService'];
    function ListerController(RandomizerService)
    {
        this.Items = RandomizerService.GetItems();

        this.RemoveItem = function(itemIndex)
        {
            RandomizerService.RemoveItem(itemIndex);
        };
    };
    RandomlySelectedController.$inject = ['RandomizerService'];
    function RandomlySelectedController(RandomizerService)
    {
        this.Item = "";
        this.GetRandomItem = function(){
            this.Item = RandomizerService.PickRandomItem();
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
})();