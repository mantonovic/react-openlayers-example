import React from "react";
import { MapContext } from "./context/App";
import Draw from "ol/interaction/Draw";

const Measure = (props) => {

  const map = React.useContext(MapContext);

  const getLayer = () => {
    if (map !== null) {
      return map.getLayers().getArray().find((layer) => {
        if (layer.get("name") === "measure-layer") {
          return true;
        }
        return false;
      });
    }
    return null;
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
          map.getInteractions().forEach((interaction) => {
            if (interaction instanceof Draw) {
              interaction.setActive(!interaction.getActive());
            }
          });
        }}
      >
        Enable / Disable Measure
      </button>
      <button
        style={{
          fontSize: "inherit",
        }}
        onClick={() => {
          const layer = getLayer();
          if (layer !== null) {
            layer.getSource().clear();
          }
        }}
      >
        Clear
      </button>
    </div>
  );
};

Measure.propTypes = {};

export default Measure;
