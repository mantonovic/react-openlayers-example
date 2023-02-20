import React from "react";
import VectorComponent from "./vector";
import MapComponent from "./map";
import Measure from "../measure";

export const MapContext = React.createContext(null);

function App() {
  const [map, setMap] = React.useState(null);

  return (
    <MapContext.Provider value={map}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            padding: "1em",
          }}
        >
          <VectorComponent />
        </div>
        <div
          style={{
            padding: "1em",
          }}
        >
          <Measure />
        </div>
        <MapComponent
          onReady={(m) => {
            setMap(m);
          }}
        />
      </div>
    </MapContext.Provider>
  );
}

export default App;
