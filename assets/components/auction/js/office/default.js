Ext.onReady(function () {
    Auction.config.connector_url = OfficeConfig.actionUrl;

    var grid = new Auction.panel.Home();
    grid.render('office-auction-wrapper');

    var preloader = document.getElementById('office-preloader');
    if (preloader) {
        preloader.parentNode.removeChild(preloader);
    }
});