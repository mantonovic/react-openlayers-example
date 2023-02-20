import React from "react";
import { MapContext } from "./context/App";
import Draw from "ol/interaction/Draw";

const Measure = (props) => {

  const map = React.useContext(MapContext);

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
    </div>
  );
};

Measure.propTypes = {};

export default Measure;
