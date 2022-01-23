import pandas as pd
import sqlite3

conn = sqlite3.connect('routes.db')
c = conn.cursor()

c.execute('CREATE TABLE routes (route_id, route_linestring, num_of_waypoint, poi_lat_lgt, poi_category, poi_name, distance)')
conn.commit()

data = pd.read_csv ("joint_data.csv")   
df = pd.DataFrame(data)

import flask
from sqlalchemy import create_engine
engine = create_engine('sqlite://', echo=False)
df.to_sql('routes.db', conn, if_exists='replace', index=False)

c.execute('''SELECT * FROM routes''')

for row in c.fetchall():
    print(row)

#engine.execute("SELECT * FROM routes").fetchall()

#header = route_id, route_linestring, num_of_waypoint, poi_lat_lgt, poi_category, poi_name, distance