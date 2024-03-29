import {useRef, useEffect} from 'react';
import leaflet, {layerGroup} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from './use-map';
import { Location, Point } from '../types/location';
import './styles.css';
import { useAppSelector } from '../store/types';
import { activePin, defaultPin } from '../../const';
import { getHoverOnCardId } from '../store/app-data/selectors';

type MapProps = {
  city: Location;
  points: Point[];
  variant: 'mainScreen' | 'offerScreen';
}

function Map({city, points, variant}: MapProps) {
  const mapRef = useRef(null);
  const {map, className, height} = useMap({mapRef, city, variant});
  const hoverCardId = useAppSelector(getHoverOnCardId);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        leaflet
          .marker({
            lat: point.latitude,
            lng: point.longitude,
          })
          .setIcon(point.offerId === hoverCardId ? activePin : defaultPin)
          .addTo(markerLayer);
      });
      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, hoverCardId]);


  return (
    <section className={className} style={{height: height}}
      ref={mapRef}
    />
  );
}

export default Map;
