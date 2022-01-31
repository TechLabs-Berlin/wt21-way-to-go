# WayToGo

A different Way To Go to your final destination, personalised routes suggestions based on what you feel like seeing today, coffee, museums, parks, ...? You tell us and we tell you the way to go!

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

## Setup

**1. Clone repository**

```shell
git clone https://github.com/TechLabs-Berlin/wt21-way-to-go.git
```

**2. Move to new directory**

```shell
cd wt21-way-to-go
```

**3. Install dependencies**

```shell
npm install
```

**4. Start up local development server**

```shell
npm start
```

**5. Run the app in the development mode**

```shell
http://localhost:3000
```

**6. Navigate into folder**

```shell
cd flask
```

**7. Activate the environment**

7.1 for MacOS

```shell
. venv/bin/activate
```

7.2 for Windows

```shell
venv\Scripts\activates
```

**8. Install the requirements**

```shell
pip install -r requirements.txt
```

**9. Export Flask**

```shell
export FLASK_APP=api
```

**10. Run flask server**

```shell
flask run
```

## Deployment

Soon to be deployed