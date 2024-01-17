// Este es un bloque de código autoejecutable. Se ejecuta automáticamente cuando se carga el plugin.
(function() {
    // Aquí estamos guardando la función original 'createBuyWindow' en una variable para que podamos llamarla más tarde.
    var _Scene_Shop_createBuyWindow = Scene_Shop.prototype.createBuyWindow;

    // Aquí estamos sobrescribiendo la función 'createBuyWindow'.
    Scene_Shop.prototype.createBuyWindow = function() {
        // Llamamos a la función original 'createBuyWindow' para que se ejecute como de costumbre.
        _Scene_Shop_createBuyWindow.call(this);

        // Aquí estamos creando un nuevo botón de cancelación.
        var cancelButton = new Sprite_Button();
        cancelButton.bitmap = ImageManager.loadSystem('CancelButton');
        cancelButton.x = 0
        cancelButton.y = 0
        cancelButton.setClickHandler(this.popScene.bind(this));

        // Finalmente, añadimos el botón de cancelación a la ventana de compra.
        this.addWindow(cancelButton);
    };
})();
