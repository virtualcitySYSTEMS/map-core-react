# GAIA-X VC Map preview as react component

This project provides a react component to show VC Map

### before your run `npm run build`

add the following two parts to your `node_modules/react-scripts/config/webpack.config.js`.

#### define consts in the top
```
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { DefinePlugin } = require('webpack');
const cesiumBaseUrl = "vcmap-core";
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
```

#### push the following to the `plugins` array in `module.exports` function.
```
new NodePolyfillPlugin(),
new CopyWebpackPlugin({
  patterns: [
    { from: 'node_modules/@vcmap-cesium/engine/Build/Workers', to: `${cesiumBaseUrl}/Workers` },
    { from: 'node_modules/@vcmap-cesium/engine/Build/ThirdParty', to: `${cesiumBaseUrl}/ThirdParty` },
    { from: 'node_modules/@vcmap-cesium/engine/Source/Assets', to: `${cesiumBaseUrl}/Assets` },
  ],
}),
new DefinePlugin({
  // Define relative base path in cesium for loading assets
  CESIUM_BASE_URL: JSON.stringify(cesiumBaseUrl),
}),
```
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
