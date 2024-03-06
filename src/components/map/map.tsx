import {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from './use-map';
import { Location } from '../types/location';

type MapProps = {
  city: Location;
  points: Location[];
}

function Map({city, points}: MapProps) {
  const mapRef = useRef(null);
  const map = useMap({mapRef, city});

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        leaflet
          .marker({
            lat: point.latitude,
            lng: point.longitude,
          })
          .addTo(map);
      });
    }
  }, [map, points]);


  return (
    <section className="cities__map map" style={{height: '500px'}}
      ref={mapRef}
    />
  );
}

export default Map;
