import React from 'react';
import ReactDOM from 'react-dom/client';
import VcMapComponent from "./VcMapComponent";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<VcMapComponent geoJSON={'./vienna-streets.geojson'}/>);
