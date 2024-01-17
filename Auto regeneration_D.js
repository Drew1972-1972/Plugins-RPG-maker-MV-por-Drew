/*:
 * @author Drew
 * @plugindesc Regenera automaticamente la vida despues de cada batalla
 * 
 * @help
 * 
*/


var Imported = Imported || {}
Imported.MVDesigner = Imported.MVDesigner || {}
Imported.MVDesigner['Auto regeneration_D'] = true;
/*  -  -  -  -  -  -  -  -  -  -  -  -  -  -
 Plugin made with MVDesigner
 https://theunpropro.itch.io/mvdesigner
 *  -  -  -  -  -  -  -  -  -  -  -  -  -  */
(function() {
/**
 * @var $_mvdparams
 * This is the variable that stores
 * all of the parameters. 
*/
var $_mvdparams = PluginManager.parameters('Auto regeneration_D');

/**
 * @function param
 * @param {integer} id
 * This function returns a parameter.
*/
function param(id) {
    return $_mvdparams[id];
}

/**
 * @module $_mvdparams
 * @module alias
 * These variables control the alias
 * functions.
*/
var $_mvdalias = {},
    alias = {};

/**
 * @function alias.create
 * @param {string} name
 * @param {function} al
 * This stores a function inside the
 * $_mvdalias variable.
*/
alias.create = function(name, al) {
    $_mvdalias[name] = al;
};

/**
 * @function alias.get
 * @param {string} name
 * This returns the stored function
 * inside the $_mvdalias variable.
*/
alias.get = function(name) {
    return $_mvdalias[name];
};


/*:
* @plugindesc Auto-Regen Health Plugin
* @author Your Name
*
* @help This plugin automatically regenerates the player's health over time.
*/

var _Game_Actor_onBattleEnd = Game_Actor.prototype.onBattleEnd;
Game_Actor.prototype.onBattleEnd = function() {
    _Game_Actor_onBattleEnd.call(this);
    this._hp += 100; // Regenera 100 puntos de salud después de cada batalla
};


})();