"""
This script creates a dataframe of the counts of each category grouped by route route and returns it as a .csv file.
It does this using joint_data and cleaned_all_routes_data_long.
- Requires pandas library to be installed
- Also requires 'joint_data.csv' and 'cleaned_all_routes_data_long.csv' to be in the same directory as this file
"""

import pandas as pd

# read in the datasets
joint_data = pd.read_csv('joint_data.csv')
routes = pd.read_csv('cleaned_all_routes_data_long.csv')


# getting poi_count
poi_count = joint_data.groupby( ["route_id"] ).size().to_frame(name = 'poi_count')

# getting wp_count
wp_count = routes.groupby(['route_id']).size().to_frame(name = 'wp_count')

# getting poi_count stratified by route with multiindexes
poi_val_cnts = joint_data.groupby( ["route_id"] ).poi_category.value_counts().to_frame()


# using pd.xs() to access multiindexes and so extract individual counts per category from poi_val_cnts
# then renaming the columns appropriately

tree_count = poi_val_cnts.xs("tree", level="poi_category")
tree_count = tree_count.rename(columns = {'poi_count': 'tree_count'})

bench_count = poi_val_cnts.xs("bench", level="poi_category")
bench_count = bench_count.rename(columns = {'poi_count': 'bench_count'})

restaurant_count = poi_val_cnts.xs("restaurant", level="poi_category")
restaurant_count = restaurant_count.rename(columns = {'poi_count': 'bench_count'})

cafe_count = poi_val_cnts.xs("cafe", level="poi_category")
cafe_count = cafe_count.rename(columns = {'poi_count': 'cafe_count'})

atm_count = poi_val_cnts.xs("atm", level="poi_category")
atm_count = atm_count.rename(columns = {'poi_count': 'atm_count'})

convenience_count = poi_val_cnts.xs("convenience", level="poi_category")
convenience_count = convenience_count.rename(columns = {'poi_count': 'convenience_count'})

bar_count = poi_val_cnts.xs("bar", level="poi_category")
bar_count = bar_count.rename(columns = {'poi_count': 'bar_count'})

ice_cream_count = poi_val_cnts.xs("ice_cream", level="poi_category")
ice_cream_count = ice_cream_count.rename(columns = {'poi_count': 'ice_cream_count'})

picnic_table_count = poi_val_cnts.xs("picnic_table", level="poi_category")
picnic_table_count = picnic_table_count.rename(columns = {'poi_count': 'picnic_table_count'})

viewpoint_count = poi_val_cnts.xs("viewpoint", level="poi_category")
viewpoint_count = viewpoint_count.rename(columns = {'poi_count': 'viewpoint_count'})

gallery_count = poi_val_cnts.xs("gallery", level="poi_category")
gallery_count = gallery_count.rename(columns = {'poi_count': 'gallery_count'})

museum_count = poi_val_cnts.xs("museum", level="poi_category")
museum_count = museum_count.rename(columns = {'poi_count': 'museum_count'})

nightclub_count = poi_val_cnts.xs("nightclub", level="poi_category")
nightclub_count = nightclub_count.rename(columns = {'poi_count': 'nightclub_count'})

drinking_water_count = poi_val_cnts.xs("drinking_water", level="poi_category")
drinking_water_count = drinking_water_count.rename(columns = {'poi_count': 'drinking_water_count'})

historic_count = poi_val_cnts.xs("historic", level="poi_category")
historic_count = historic_count.rename(columns = {'poi_count': 'historic_count'})

tourist_attraction_count = poi_val_cnts.xs("tourist_attraction", level="poi_category")
tourist_attraction_count = tourist_attraction_count.rename(columns = {'poi_count': 'tourist_attraction_count'})

# merging wp and poi into 'category_count'
category_count = pd.concat([wp_count, poi_count], axis=1, join='inner')#.sort_values("wp_count")

# merging the rest of the individual category counts into 'category_count' 

category_count = pd.concat([category_count,
                            tree_count,
                            bench_count, 
                            restaurant_count, 
                            cafe_count, 
                            atm_count, 
                            convenience_count, 
                            bar_count, 
                            ice_cream_count, 
                            picnic_table_count, 
                            viewpoint_count, 
                            gallery_count,
                            museum_count,
                            nightclub_count, 
                            drinking_water_count, 
                            historic_count, 
                            tourist_attraction_count,
                            ], axis=1, join='outer')

# sorting the df by number of waypoints
category_count.sort_values("wp_count", inplace=True)

# writing to .csv file
category_count.to_csv("category_count_per_route.csv")