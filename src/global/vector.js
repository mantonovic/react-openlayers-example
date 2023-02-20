import React from "react";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";


const VectorComponent = (props) => {

  const [index, setIndex] = React.useState(0);

  // Ramdom points coordinates
  const coords = [
    [-10997148, 4569099],
    [-10123148, 4512399],
    [-12113148, 4532199],
  ];

  // Get the vector layer by name, null if not found
  const getLayer = () => {
    if (window.olmap !== null) {
      return window.olmap
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

  const clean = () => {
    const layer = getLayer();
    if (layer !== null) {
      layer.getSource().clear();
    }
  };

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

      window.olmap.getView().setCenter(coords[index]);

    }
  };

  return (
    <div>
      <button
        onClick={() => {
          loadData();
        }}
      >
        Add point
      </button>
      <button
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
