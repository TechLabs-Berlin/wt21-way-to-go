import csv, sqlite3

con = sqlite3.connect("/Users/mervebduman/wt21-way-to-go/flask/routes.db") # change to 'sqlite:///your_filename.db'
cur = con.cursor()
cur.execute("CREATE TABLE t (route_id, route_linestring, num_of_waypoint, poi_lat_lgt, poi_category, poi_name, distance);") # use your column names here

with open('joint_data.csv','r') as fin: # `with` statement available in 2.5+
    # csv.DictReader uses first line in file for column headings by default
    dr = csv.DictReader(fin) # comma is default delimiter
    to_db = [(i['route_id'], i['route_linestring'], i['num_of_waypoint,'], i['poi_lat_lgt'], i['poi_category'], i['poi_name'], i['distance']) for i in dr]

cur.executemany("INSERT INTO t (route_id, route_linestring, num_of_waypoint, poi_lat_lgt, poi_category, poi_name, distance) VALUES (?, ?);", to_db)
con.commit()
con.close()