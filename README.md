# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

To install localy our dependecies

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Requirements

### API Keys

For this demo to work, please create a Google Map API Key, and ensure that the two services below are enabled... otherwise it won't work! This API key must be in the environment variable `REACT_APP_GOOGLE_PLACES_API_KEY`.

- Maps JavaScript API
- Places API
- Geocoding API

### Virtuel Enviroment

In order to run the Python and ipynb code, you need to have the following libraries installed:

- [os](https://docs.python.org/3/library/os.html)
- [pandas](https://pandas.pydata.org/docs/)
- [json](https://docs.python.org/3/library/json.html)
- [requests](https://docs.python-requests.org/en/latest/)
- [geopandas](https://geopandas.org/en/stable/) (If you're working on Windows it doesn't work unless you install [GDAL and Fiona wheels](https://iotespresso.com/how-to-install-geopandas-on-windows/) before)
- [urllib](https://docs.python.org/3/library/urllib.html)
- [gpxpy](https://github.com/tkrajina/gpxpy)
- [GoogleMaps Services](https://pythonrepo.com/repo/googlemaps-google-maps-services-python-python-third-party-apis-wrappers)

## Data

We have worked with data on popular routes and with data on points of interest, that pedestrians might want to look for when walking, both geographically constrained on Berlin and surroundings.

For obtaining the routes data, you need to scrape [wandermap.net](wandermap.net) on the query "Berlin".
The data on points of interest can be scraped from [OpenStreetMap.org](https://wiki.openstreetmap.org/wiki/Map_features)

For data visualisation, we used post code data from [suche-postleitzahl.org](https://www.suche-postleitzahl.org/plz-karte-erstellen), together with [Dr. Juan Camilo Orduz'wonderful Github repository and blogpost "Open Data: Germany Maps Viz"](https://juanitorduz.github.io/germany_plots/)

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
