import React from "react";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { MapContext } from "./App";


const VectorComponent = (props) => {

  // get the map from the context
  const map = React.useContext(MapContext);

  // create the index to loop through the features
  const [index, setIndex] = React.useState(0);
  
  // Ramdom points coordinates
  const coords = [
    [-10997148, 4569099],
    [-10123148, 4512399],
    [-12113148, 4532199],
  ];
  
  // Get the vector layer by name, null if not found
  const getLayer = () => {
    if (map !== null) {
      return map
        .getLayers()
        .getArray()
        .find((layer) => {
          if (layer.get("name") === "vector-1") {
            return true;
          }

          return false;
        });
    }
    return null;
  };

  // Remove all features from the layer
  const clean = () => {
    const layer = getLayer();
    if (layer !== null) {
      layer.getSource().clear();
    }
  };

  // Add a feature to the layer
  const loadData = () => {
    const layer = getLayer();
    if (layer !== null) {

      // empty the layer
      layer.getSource().clear();

      // add a point
      layer.getSource().addFeatures([
        new Feature({
          geometry: new Point(coords[index]),
          name: "Null Island",
          population: 4000,
          rainfall: 500,
        }),
      ]);

      // update the index
      setIndex((index + 1) % 3);

      map.getView().setCenter(coords[index]);

    }
  };

  return (
    <div
      style={{
        fontSize: "1.2em",
      }}
    >
      <button
        style={{
          fontSize: "inherit",
        }}
        onClick={() => {
          loadData();
        }}
      >
        Add point
      </button>
      <button
        style={{
          fontSize: "inherit",
        }}
        onClick={() => {
          clean();
        }}
      >
        Clear
      </button>
    </div>
  );
};

VectorComponent.propTypes = {};

export default VectorComponent;
