Auction.panel.Home = function (config) {
    config = config || {};
    Ext.apply(config, {
        baseCls: 'modx-formpanel',
        layout: 'anchor',
        /*
         stateful: true,
         stateId: 'auction-panel-home',
         stateEvents: ['tabchange'],
         getState:function() {return {activeTab:this.items.indexOf(this.getActiveTab())};},
         */
        hideMode: 'offsets',
        items: [{
            xtype: 'modx-tabs',
            defaults: {border: false, autoHeight: true},
            border: false,
            hideMode: 'offsets',
            items: [{
                title: _('auction_items'),
                layout: 'anchor',
                items: [{
                    html: _('auction_intro_msg'),
                    cls: 'panel-desc',
                }, {
                    xtype: 'auction-grid-items',
                    cls: 'main-wrapper',
                }]
            }]
        }]
    });
    Auction.panel.Home.superclass.constructor.call(this, config);
};
Ext.extend(Auction.panel.Home, MODx.Panel);
Ext.reg('auction-panel-home', Auction.panel.Home);
