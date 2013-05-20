/*
 * File: app.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

//@require @packageOverrides
Ext.Loader.setConfig({

});

Ext.application({
    models: [
        'Station',
        'Business'
    ],
    stores: [
        'Stations',
        'BusinessStore'
    ],
    views: [
        'MainNav',
        'StationList',
        'StationContainer',
        'DetailPanel'
    ],
    appFolder: 'Shine',
    controllers: [
        'StationController'
    ],
    icon: 'resources/icons/Icon.png',
    name: 'Shine',

    launch: function() {

        Ext.create('Shine.view.MainNav', {fullscreen: true});
    }

});
