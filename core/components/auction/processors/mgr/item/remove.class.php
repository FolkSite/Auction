<?php

class AuctionItemRemoveProcessor extends modObjectProcessor
{
    public $objectType = 'AuctionItem';
    public $classKey = 'AuctionItem';
    public $languageTopics = array('auction');
    //public $permission = 'remove';


    /**
     * @return array|string
     */
    public function process()
    {
        if (!$this->checkPermissions()) {
            return $this->failure($this->modx->lexicon('access_denied'));
        }

        $ids = $this->modx->fromJSON($this->getProperty('ids'));
        if (empty($ids)) {
            return $this->failure($this->modx->lexicon('auction_item_err_ns'));
        }

        foreach ($ids as $id) {
            /** @var AuctionItem $object */
            if (!$object = $this->modx->getObject($this->classKey, $id)) {
                return $this->failure($this->modx->lexicon('auction_item_err_nf'));
            }

            $object->remove();
        }

        return $this->success();
    }

}

return 'AuctionItemRemoveProcessor';