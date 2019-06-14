<?php

namespace App\Observers;

use App\Address;
use AnthonyMartin\GeoLocation\GeoLocation;

class AddressObserver
{
    public function creating(Address $model)
    {
        if (!$model->latitude or $model->longitude) {
            $this->setLatAndLong($model);
        }
    }

    public function updating(Address $model)
    {
        $this->setLatAndLong($model);
    }

    private function setLatAndLong($model)
    {
        $key = env('GOOGLE_KEY');

        $location = $model->address . ',' .
            $model->number . ' - ' .
            $model->neighborhood . ' - ' .
            $model->city . ' - ' .
            $model->state . ' - ' .
            $model->address;

        $response = GeoLocation::getGeocodeFromGoogle($location, $key);

        if (!empty($response->results) and is_array($response->results)) {
            $result = array_pop($response->results);
            $model->latitude = $result->geometry->location->lat;
            $model->longitude = $result->geometry->location->lng;
        }
    }
}