import React from "react";
import { Map, View } from "ol";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import { Vector as VectorSource } from "ol/source";
import { Vector as VectorLayer } from "ol/layer";
import { Circle as CircleStyle, Fill, Style } from "ol/style";


const MapComponent = (props) => {
  
  React.useEffect(() => {
    console.log("Map initialization...")
    if (!window.olmap) {
      window.olmap = new Map({
        layers: [
          new TileLayer({
            source: new OSM(),
            name: "osm",
          }),
          new VectorLayer({
            name: "vector-1",
            source: new VectorSource({
              features: [],
            }),
            style: [
              new Style({
                image: new CircleStyle({
                  radius: 10,
                  fill: new Fill({
                    color: "red",
                  }),
                }),
                fill: new Fill({
                  color: "rgba(0, 0, 255, 0.1)",
                }),
              }),
            ],
          }),
        ],
        target: "map",
        view: new View({
          center: [-10997148, 4569099],
          zoom: 4,
        }),
      });
    }
  }, []);

  return (
    <div
      id="map"
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "black",
      }}
    />
  );
};

MapComponent.propTypes = {};

export default MapComponent;
