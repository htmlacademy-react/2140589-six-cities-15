import {useEffect, useState, useRef, MutableRefObject} from 'react';
import leaflet, { Map } from 'leaflet';
import { Location } from '../types/location';
import classNames from 'classnames';

type UseMapProps = {
  mapRef: MutableRefObject<HTMLElement | null>;
  city: Location;
  variant: 'mainScreen' | 'offerScreen';
}

function useMap({mapRef, city, variant}: UseMapProps) {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false);
  const className = classNames(variant === 'mainScreen' ? 'cities__map' : 'offer__map', 'map');
  const height = variant === 'mainScreen' ? 552 : 578;

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: city.latitude,
          lng: city.longitude,
        },
        zoom: city.zoom,
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  return {map, className, height};
}

export default useMap;
