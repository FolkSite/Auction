<?php

/**
 * The home manager controller for Auction.
 *
 */
class AuctionHomeManagerController extends modExtraManagerController
{
    /** @var Auction $Auction */
    public $Auction;


    /**
     *
     */
    public function initialize()
    {
        $path = $this->modx->getOption('auction_core_path', null,
                $this->modx->getOption('core_path') . 'components/auction/') . 'model/auction/';
        $this->Auction = $this->modx->getService('auction', 'Auction', $path);
        parent::initialize();
    }


    /**
     * @return array
     */
    public function getLanguageTopics()
    {
        return array('auction:default');
    }


    /**
     * @return bool
     */
    public function checkPermissions()
    {
        return true;
    }


    /**
     * @return null|string
     */
    public function getPageTitle()
    {
        return $this->modx->lexicon('auction');
    }


    /**
     * @return void
     */
    public function loadCustomCssJs()
    {
        $this->addCss($this->Auction->config['cssUrl'] . 'mgr/main.css');
        $this->addCss($this->Auction->config['cssUrl'] . 'mgr/bootstrap.buttons.css');
        $this->addJavascript($this->Auction->config['jsUrl'] . 'mgr/auction.js');
        $this->addJavascript($this->Auction->config['jsUrl'] . 'mgr/misc/utils.js');
        $this->addJavascript($this->Auction->config['jsUrl'] . 'mgr/misc/combo.js');
        $this->addJavascript($this->Auction->config['jsUrl'] . 'mgr/widgets/items.grid.js');
        $this->addJavascript($this->Auction->config['jsUrl'] . 'mgr/widgets/items.windows.js');
        $this->addJavascript($this->Auction->config['jsUrl'] . 'mgr/widgets/home.panel.js');
        $this->addJavascript($this->Auction->config['jsUrl'] . 'mgr/sections/home.js');

        $this->addHtml('<script type="text/javascript">
        Auction.config = ' . json_encode($this->Auction->config) . ';
        Auction.config.connector_url = "' . $this->Auction->config['connectorUrl'] . '";
        Ext.onReady(function() {
            MODx.load({ xtype: "auction-page-home"});
        });
        </script>
        ');
    }


    /**
     * @return string
     */
    public function getTemplateFile()
    {
        return $this->Auction->config['templatesPath'] . 'home.tpl';
    }
}