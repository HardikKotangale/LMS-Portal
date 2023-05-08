import { Col, Row, Alert } from "react-bootstrap";
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import Map, {Marker, NavigationControl} from 'react-map-gl';
import React from 'react';

export const Maps = () => {
  

  return (
      <Col lg={12}>
        <div className="map-bx wow slideInUp">
          <a target="_blank" href="https://www.google.com/maps/place/Oytie+Learning+IT+Training+Academy/@18.5176701,73.8786868,21z/data=!4m5!3m4!1s0x3bc2c71fe2ee4663:0x1c3a701ad6d844ce!8m2!3d18.5177914!4d73.8787769">
          <Map className="position-absolute" mapLib={maplibregl} initialViewState={{longitude: 73.878849 , latitude: 18.517846, zoom: 17}} 
          style={{ borderRadius:"30px",width: "20rem", height: "20rem"}}
         mapStyle="https://api.maptiler.com/maps/streets-v2-dark/style.json?key=Mi9EaKjKLd1TvZdKfHE7">
        <NavigationControl position="top-left" />
        <Marker longitude={73.878849} latitude={18.517846} color="#0a1e7d"></Marker>
      </Map></a>
        </div>
      </Col>
  )
}
