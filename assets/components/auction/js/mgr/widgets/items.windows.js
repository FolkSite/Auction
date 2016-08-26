Auction.window.CreateItem = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'auction-item-window-create';
    }
    Ext.applyIf(config, {
        title: _('auction_item_create'),
        width: 550,
        autoHeight: true,
        url: Auction.config.connector_url,
        action: 'mgr/item/create',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    Auction.window.CreateItem.superclass.constructor.call(this, config);
};
Ext.extend(Auction.window.CreateItem, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'textfield',
            fieldLabel: _('auction_item_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }, {
            xtype: 'textarea',
            fieldLabel: _('auction_item_description'),
            name: 'description',
            id: config.id + '-description',
            height: 150,
            anchor: '99%'
        }, {
            xtype: 'xcheckbox',
            boxLabel: _('auction_item_active'),
            name: 'active',
            id: config.id + '-active',
            checked: true,
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('auction-item-window-create', Auction.window.CreateItem);


Auction.window.UpdateItem = function (config) {
    config = config || {};
    if (!config.id) {
        config.id = 'auction-item-window-update';
    }
    Ext.applyIf(config, {
        title: _('auction_item_update'),
        width: 550,
        autoHeight: true,
        url: Auction.config.connector_url,
        action: 'mgr/item/update',
        fields: this.getFields(config),
        keys: [{
            key: Ext.EventObject.ENTER, shift: true, fn: function () {
                this.submit()
            }, scope: this
        }]
    });
    Auction.window.UpdateItem.superclass.constructor.call(this, config);
};
Ext.extend(Auction.window.UpdateItem, MODx.Window, {

    getFields: function (config) {
        return [{
            xtype: 'hidden',
            name: 'id',
            id: config.id + '-id',
        }, {
            xtype: 'textfield',
            fieldLabel: _('auction_item_name'),
            name: 'name',
            id: config.id + '-name',
            anchor: '99%',
            allowBlank: false,
        }, {
            xtype: 'textarea',
            fieldLabel: _('auction_item_description'),
            name: 'description',
            id: config.id + '-description',
            anchor: '99%',
            height: 150,
        }, {
            xtype: 'xcheckbox',
            boxLabel: _('auction_item_active'),
            name: 'active',
            id: config.id + '-active',
        }];
    },

    loadDropZones: function () {
    }

});
Ext.reg('auction-item-window-update', Auction.window.UpdateItem);