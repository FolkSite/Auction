Auction.page.Home = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        components: [{
            xtype: 'auction-panel-home',
            renderTo: 'auction-panel-home-div'
        }]
    });
    Auction.page.Home.superclass.constructor.call(this, config);
};
Ext.extend(Auction.page.Home, MODx.Component);
Ext.reg('auction-page-home', Auction.page.Home);