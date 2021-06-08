(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.platform = window.opspark.platform || {};
    
    let platform = window.opspark.platform;
    
    /**
     * init: This function initializes the platforms for the level.
     * 
     * GOAL: Add as many platforms necessary to make your level challenging.
     * 
     * Use the createPlatform Function to create platforms for the level. 
     * 
     * createPlatform() takes these arguments:
     *      
     *      createPlatform(x, y, scaleX, scaleY);
     * 
     *      x: The x coordineate for the platform.
     *      y: The y coordineate for the platform.
     *      scaleX: OPTIONAL The scale factor on the x-axis, this value will 
     *              stretch the platform in width.
     *      scaleY: OPTIONAL The scale factor on the y-axis, this value will 
     *              stretch the platform in height.
     */ 
    function init(game) {
        let createPlatform = platform.create;

        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        createPlatform(0, game.world.height - 32, 3, 2);    // DO NOT DELETE
        createPlatform(400, 250);
        createPlatform(170, 460, 0.5);
        createPlatform(180, 485,);
        createPlatform(300, 270,); 
        createCannon("top", 450);
        createCannon("bottom", 450);
        createCannon("right", 450); 
        createCollectable(type.steve, 200, 170, 6, 0.7);
        createCollectable(type.max, 180, 150, 4, 0.5);
        createCollectable(type.grace, 165, 140, 3, 0.2); 
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    }
    platform.init = init;
})(window);