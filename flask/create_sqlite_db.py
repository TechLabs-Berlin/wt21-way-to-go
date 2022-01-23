# Import required modules
import csv
import sqlite3

# Connecting to the routes database
connection = sqlite3.connect('routes.db')

# Creating a cursor object to execute
# SQL queries on a database table
cursor = connection.cursor()

# Table Definition
create_table = '''CREATE TABLE routes(
				route_id INTEGER,
				route_linestring LONGTEXT,
				num_of_waypoint INTEGER,
				poi_lat_lgt LONGTEXT,
				poi_category TEXT,
				poi_name TEXT,
				distance INTEGER);
				'''

# Creating the table into our database
cursor.execute(create_table)

# Opening the joint_data.csv file
file = open('joint_data.csv')

# Reading the contents of the joint_data.csv file
contents = csv.reader(file)

# SQL query to insert data into the person table
insert_records = "INSERT INTO routes (route_id, route_linestring, num_of_waypoint, poi_lat_lgt, poi_category, poi_name, distance) VALUES(?, ?, ?, ?, ?, ?, ?)"

# Importing the contents of the file into our routes table
cursor.executemany(insert_records, contents)

# SQL query to retrieve all data from the routes table to verify that the data of the csv file has been successfully inserted into the table
select_all = "SELECT * FROM routes"
rows = cursor.execute(select_all).fetchall()

# closing the database connection
connection.close()

