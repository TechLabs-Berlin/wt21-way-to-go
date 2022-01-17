import os
import pandas as pd
import gpxpy

#defining working directories, please insert your paths or run with relative paths
indir = r'[please insert your path]\wt21-way-to-go\cleaning_data\routes_data'
outdir = r'[please insert your path]\wt21-way-to-go\cleaning_data\parsed_routes_data'
os.chdir(r'[please insert your path]\wt21-way-to-go\cleaning_data\routes_data')

#function for reading waypoints from a gps file into a list
def parsegpx(f):
    list_of_routes_dicts = []
    with open (f, 'r') as gpx_file:
        try:
            gpx = gpxpy.parse(gpx_file)
            for track in gpx.tracks:
                for segment in track.segments:
                    for point in segment.points:
                        lat_lgt_tuple = tuple(('({0},{1})'.format(point.latitude, point.longitude)).strip('()').split(','))
                        dict = ({'lat_lgt': lat_lgt_tuple, 'latitude' : point.latitude, 'longitude' : point.longitude})
                        list_of_routes_dicts.append(dict)
        except:
            pass
    return list_of_routes_dicts

#parsing all the .gpx files into a pandas DataFrame
files = os.listdir(indir)
df = pd.concat([pd.DataFrame(parsegpx(f)) for f in files], keys = files)

#writing the dataframe into a csv file
os.chdir(outdir)
df.to_csv('all_routes_data.csv')

#setting path back to where it was before
os.chdir(r'[please insert your path]\wt21-way-to-go\cleaning_data\parsed_routes_data')