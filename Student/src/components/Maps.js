import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import Map, {Marker, NavigationControl} from 'react-map-gl';
import React from 'react';
function Maps (){
    return (
      <a target="_blank" href="https://www.google.com/maps/place/Oytie+Learning+IT+Training+Academy/@18.5176701,73.8786868,21z/data=!4m5!3m4!1s0x3bc2c71fe2ee4663:0x1c3a701ad6d844ce!8m2!3d18.5177914!4d73.8787769">
         <Map className="position-absolute" mapLib={maplibregl} initialViewState={{longitude: 73.878849 , latitude: 18.517846, zoom: 16}} 
         style={{ borderRadius:"30px",width: "15rem", height: "15rem"}}
         mapStyle="https://api.maptiler.com/maps/streets/style.json?key=zbj7mWZSXVFh5IFGR4e4">
        <NavigationControl position="top-left" />
        <Marker longitude={73.878849} latitude={18.517846} color="#0a1e7d"></Marker>
      </Map></a>
    );
  }
export default Maps;