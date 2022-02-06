![name-of-you-image](https://github.com/TechLabs-Berlin/wt21-way-to-go/blob/readme_edit/logo.png?raw=true)
# Way To Go

A different Way To Go to your final destination.

## Background

We all use Google Maps. However, when searching for directions between two places, Google only gives you the fastest, most direct routes, with very limited scope for personalisation. What if you have extra time to pass by interesting places on the way to your destination? This is what Way To Go seeks to address, asking a user to choose from pre-defined categories to determine what they will do or see along their journey. The suggested routes and route categories are based on data collected from previously walked routes and public locations across Berlin. 

## UX Research
To learn more about what UX researchers did in order to design a prototype for the app, check out their work in [Notion](https://sueon.notion.site/User-Experience-af8595c6f01d439082427b470a524045)!

## **Requirements**

**API Keys**

For this demo to work, please create a Google Map API Key, and ensure that the two services below are enabled... otherwise it won't work! This API key must be in the environment variable `REACT_APP_GOOGLE_PLACES_API_KEY`.

- Maps JavaScript API
- Places API
- Geocoding API

**Virtual Environment**

In order to run the Python and .ipynb code for data manipulation, you need to have the following libraries installed:

- [os](https://docs.python.org/3/library/os.html)
- [json](https://docs.python.org/3/library/json.html)
- [numpy](https://numpy.org/)
- [maplotlib](https://matplotlib.org/)
- [pandas](https://pandas.pydata.org/docs/)
- [requests](https://docs.python-requests.org/en/latest/)
- [geopandas](https://geopandas.org/en/stable/) (If you're working on Windows it doesn't work unless you install [GDAL and Fiona wheels](https://iotespresso.com/how-to-install-geopandas-on-windows/) before)
- [shapely](https://shapely.readthedocs.io/en/stable/manual.html)
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

**5. Run app in development mode**

```shell
http://localhost:3000
```

**6. Navigate into folder**

```shell
cd flask
```

**7. Create virtual environment**

```shell
python3 -m venv venv
```

**8. Activate environment**

8.1 for MacOS

```shell
. venv/bin/activate
```

8.2 for Windows

```shell
venv\Scripts\activates
```

**9. Install the requirements**

```shell
pip install -r requirements.txt
```
**10. Convert the .csv database into an SQL database**

i. Move the "joined_data.csv" in the same folder. 

ii. Create the SQL Database running create_sqlite_db.py. 

Output file is the "routes.db".

**11. Export Flask**

```shell
export FLASK_APP=api
```

**12. Run flask server**

```shell
flask run
```

## Deployment

Soon to be deployed

### **Data**

We worked with data on popular routes and with data on points of interest that pedestrians might want to look for when walking. The data is geographically constrained on Berlin and surroundings.

For obtaining the routes data, you need to scrape [wandermap.net](https://github.com/TechLabs-Berlin/wt21-way-to-go/blob/main/wandermap.net) on the query "Berlin". 

The data on points of interest can be scraped from [OpenStreetMap.org](https://wiki.openstreetmap.org/wiki/Map_features) filtering for the following place type categories:

- “amenity”: “bar”
- “amenity”: “cafe”
- “amenity”: “ice_cream”
- “amenity”: “restaurant”
- “amenity”: “nightclub”
- “amenity”: “atm”
- “amenity”: “bench”
- “amenity”: “drinking_water”
- “historic”: “yes”
- “leisure”: “picnic_table”
- “natural”: “tree”
- “shop”: “convenience”
- “tourism”: “art_work”
- “tourism”: “attraction”
- “tourism”: “gallery”
- “tourism”: “viewpoint”

For data visualisation, we used post code data from [suche-postleitzahl.org](https://www.suche-postleitzahl.org/plz-karte-erstellen), together with [Dr. Juan Camilo Orduz'wonderful Github repository and blogpost "Open Data: Germany Maps Viz"](https://juanitorduz.github.io/germany_plots/)

## **Deployment**

Pending to deploy on: [https://www.heroku.com/](https://www.heroku.com/)

## **Team**

### **Data Science**

Merve Büşra Duman, Emilio Flores Bartelt, Stefanie Senger

### **User Experience**

Sueon Ahn, Paula Sebastiano

### **Web Development**

Leonor Cascais, Sara Pulido, Leonel Acosta
