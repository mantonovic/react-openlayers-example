import React from "react";
import PropTypes from "prop-types";
import { Map, View } from "ol";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import { Vector as VectorSource } from "ol/source";
import { Vector as VectorLayer } from "ol/layer";
import { Circle as CircleStyle, Stroke, Fill, Style } from "ol/style";
import { defaults as defaultInteractions } from "ol/interaction";
import Draw from "ol/interaction/Draw";

const MapComponent = ({ onReady }) => {

  const measureSource = new React.useRef(
    new VectorSource({
      features: [],
    })
  );

  const map = React.useRef(
    new Map({
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
        new VectorLayer({
          name: "measure-layer",
          // source: new VectorSource({
          //   features: [],
          // }),
          source: measureSource.current,
          style: {
            "fill-color": "rgba(255, 255, 255, 0.2)",
            "stroke-color": "#ffcc33",
            "stroke-width": 2,
            "circle-radius": 7,
            "circle-fill-color": "#ffcc33",
          },
        }),
      ],
      view: new View({
        center: [-10997148, 4569099],
        zoom: 4,
      }),
      interactions: defaultInteractions().extend([
        new Draw({
          active: false,
          source: measureSource.current,
          type: "LineString",
          style: new Style({
            fill: new Fill({
              color: 'rgba(255, 255, 255, 0.2)',
            }),
            stroke: new Stroke({
              color: 'rgba(0, 0, 0, 0.5)',
              lineDash: [10, 10],
              width: 2,
            }),
            image: new CircleStyle({
              radius: 5,
              stroke: new Stroke({
                color: 'rgba(0, 0, 0, 0.7)',
              }),
              fill: new Fill({
                color: 'rgba(255, 255, 255, 0.2)',
              }),
            }),
          }),
        })
      ]),
    })
  );

  // Assign the target on component mount
  React.useEffect(() => {
    map.current.setTarget("map");
    onReady && onReady(map.current);
  }, [onReady]);

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

MapComponent.propTypes = {
  onReady: PropTypes.func,
};

export default MapComponent;
