import os
import pandas as pd
import gpxpy

#print(os.getcwd())
indir = r'routes_data_to_parse'
outdir = r'parsed_routes_data'

#reading routes from all .gpx files into a list
def parsegpx(f):
    list_of_routes_dicts = []
    with open (f, 'r') as gpx_file:
        gpx = gpxpy.parse(gpx_file)
        for track in gpx.tracks:
            for segment in track.segments:
                for point in segment.points:
                    #lat_lgt_tuple = tuple(('({0},{1})'.format(point.latitude, point.longitude)).strip('()').split(',')) #that would make it into tuples of lat and lgt (might be more useful?)
                    dict = {'latitude' : point.latitude, 'longitude' : point.longitude}
                    list_of_routes_dicts.append(dict)
    return list_of_routes_dicts
#print(list_of_routes_dicts)

#parsing all the .gpx files into a pandas DataFrame
files = os.listdir(indir)
df = pd.concat([pd.DataFrame(parsegpx(f)) for f in files], keys = files) #error message: first file with 6 instead of 5 digits in it's name not recognised
#df.head()

#writing the data into a csv file
os.chdir(outdir)
df.to_csv('first_bulk_of_routes_data.csv')