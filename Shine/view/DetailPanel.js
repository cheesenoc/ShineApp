/*
 * File: Shine/view/DetailPanel.js
 *
 * This file was generated by Sencha Architect version 2.2.1.
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

Ext.define('Shine.view.DetailPanel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.detailpanel',

    config: {
        tabBar: {
            docked: 'top',
            ui: 'light',
            layout: {
                pack: 'center',
                type: 'hbox'
            }
        },
        items: [
            {
                xtype: 'container',
                title: 'Transport',
                id: 'contact',
                items: [
                    {
                        xtype: 'container',
                        id: 'info',
                        padding: 10,
                        tpl: [
                            '<img class="photo" src="{photo_url}" width="100" height="100"/>;<h2>{name}</h2><div class="info">{address1}<br/><imm src="{rating_img_url_sall}"/></div>'
                        ],
                        layout: {
                            type: 'hbox'
                        },
                        items: [
                            {
                                xtype: 'component',
                                height: 100,
                                id: 'photo',
                                tpl: [
                                    '<img class="photo" src="{photo_url}" width="100" height="100"/>'
                                ],
                                width: 100
                            },
                            {
                                xtype: 'component',
                                id: 'data',
                                padding: 10,
                                tpl: [
                                    '<h2>{name}</h2><div class="info">{address1}<br/><img src="{rating_img_url_small}"/></div>'
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        id: 'call',
                        layout: {
                            pack: 'center',
                            type: 'hbox'
                        },
                        items: [
                            {
                                xtype: 'button',
                                id: 'callButton',
                                width: 100,
                                text: 'Call'
                            },
                            {
                                xtype: 'spacer',
                                width: 57
                            },
                            {
                                xtype: 'button',
                                id: 'moreButton',
                                width: 100,
                                text: 'More'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'map',
                title: 'Map',
                id: 'detailMap'
            }
        ]
    }

});