import {useRef, useEffect} from 'react';
import leaflet, {layerGroup} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from './use-map';
import { Location } from '../types/location';
import './styles.css';

type MapProps = {
  city: Location;
  points: Location[];
  variant: 'mainScreen' | 'offerScreen';
}

function Map({city, points, variant}: MapProps) {
  const mapRef = useRef(null);
  const {map, className, height} = useMap({mapRef, city, variant});

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        leaflet
          .marker({
            lat: point.latitude,
            lng: point.longitude,
          })
          .addTo(markerLayer);
      });
      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points]);


  return (
    <section className={className} style={{height: height}}
      ref={mapRef}
    />
  );
}

export default Map;
