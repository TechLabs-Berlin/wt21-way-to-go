import pandas as pd
import sqlite3

def create_SQL_DB():
    conn = sqlite3.connect('routes.db') # Creates the db file
    c = conn.cursor()

    # Enter column names from the csv file
    # Enter table name after CREATE TABLE
    c.execute('CREATE TABLE routes (route_id, route_linestring, num_of_waypoint, waypoint_longitude, waypoint_latitude, poi_lat_lgt, poi_longitude, poi_latitude, poi_category, poi_name, distance)')
    conn.commit()

    data = pd.read_csv ("joint_data.csv") # Enter the csv file name
    df = pd.DataFrame(data)

    # Fill in the existing db file with the data from the csv file:
    import flask
    from sqlalchemy import create_engine
    engine = create_engine('sqlite://', echo=False)
    # Enter the table name as a string after the "("
    df.to_sql('routes', conn, if_exists='replace', index=False)

    # Enter the table name after FROM
    c.execute('''SELECT * FROM routes''')

    for row in c.fetchall():
        print(row)

create_SQL_DB()