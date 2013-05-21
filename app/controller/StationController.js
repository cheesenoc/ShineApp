/*
 * File: app/controller/StationController.js
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

Ext.define('Shine.controller.StationController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            stationList: 'stationlist',
            listCard: '#listCard',
            mainNav: 'mainnav',
            detailCard: 'detailpanel'
        },

        control: {
            "#stationList": {
                itemtap: 'onListItemTap'
            }
        }
    },

    onListItemTap: function(dataview, index, target, record, e, eOpts) {
        var me = this,
            map,
            lat,
            lon,
            loc,
            marker,
            weather,
            connection,
            details;

        if (record) {

            details = Ext.create('Shine.view.DetailPanel', {
                title: record.get('name')
            });

            // set the map
            map = details.child('#map').child('#googleMap');
            lat = record.get('latitude');
            lon = record.get('longitude');

            // fixes a bug in touch 2.1.1
            map.element.un('painted', 'setMapCenter', map);

            //    setTimeout(function() {
            map.setMapCenter({
                latitude: lat,
                longitude: lon
            });
            //	}, 10);

            // set the info
            weather = details.child('#weather');
            weather.child('#weatherNow').setData(record.data);
            weather.child('#weatherForecast').setData(record.data);
            connection = details.child('#connection');
            connection.child('#connectionDeparture').setData(record.data);
            connection.child('#connectionArrival').setData(record.data);

            me.getMainNav().push(details);
        }
    },

    launch: function() {
        var me = this;

        Ext.Viewport.setMasked({ message: 'Loading...' });
        // get the location, then...
        me.getLocation(function (location) {

            // then get the stations somehow
            me.getStations(location, function (store) {

                // then bind data to list and show it
                me.getStationList().setStore(store);

                Ext.Viewport.setMasked(false);
            });
        });	
    },

    getLocation: function(callback) {
        if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                callback(position);
            }, function(error) {
                alert(error);
            });
        }
    },

    getStations: function(location, callback) {
        // TODO: create this dynamically, maybe switch to jsonp
        var store = Ext.data.StoreManager.lookup('Stations'),
            url = 'stations.json';

        store.getProxy().setUrl(url);
        store.load(function() {
            callback(store);
        }
        );
    }

});