import React from "react";
import VectorComponent from "./vector";
import MapComponent from "./map";

// export const MapContext = React.createContext();

function App() {
  // const [map, setMap] = React.useState(null);

  return (
    // <MapContext.Provider value={map}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            height: "4em",
          }}
        >
          <VectorComponent />
        </div>
        <MapComponent
          // onReady={(m) => {
          //   setMap(m);
          // }}
        />
      </div>
    // </MapContext.Provider>
  );
}

export default App;
