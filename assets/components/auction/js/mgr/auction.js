var Auction = function (config) {
    config = config || {};
    Auction.superclass.constructor.call(this, config);
};
Ext.extend(Auction, Ext.Component, {
    page: {}, window: {}, grid: {}, tree: {}, panel: {}, combo: {}, config: {}, view: {}, utils: {}
});
Ext.reg('auction', Auction);

Auction = new Auction();