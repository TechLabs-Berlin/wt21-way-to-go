*Shoutout to TechLabs-Team: if you feel that something here is wrong or unhelpful, please let us know, we're quick to update. :)
Thank you. :)*


# Project Summary - WayToGo 

A different Way To Go to your destination.

Way To Go is a map based web application providing personalised walking routes based on user input. Powered by popular Berlin route and location data, the app goes beyond traditional route calculation: not merely returning the fastest route, Way To Go recommends detours based on a user’s location, destination, and selection from a list of clearly defined route profiles, each passing by a different set of interesting location types - from historical attractions to local amenities. From its easy-to-use interface to its integrated map, Way To Go will take you from dull walk to data-driven tour in seconds.

UX researchers began by mapping out user needs and goals, conducting in-depth interviews to study target users. With the collected data, user stories and personas were created. Affinity mapping was executed in Miro. Based on the user research and continuous communication with Frontend developers, the prototype was designed in Figma.

Frontend was mainly implemented with ReactJS (Java Script, CSS, Bootstrap, React-Bootstrap, React-Icons, React-Google-Maps, use-places-autocomplete, Axios, React Router, SweetAlert2), with Google Maps API used to display routes. The slick UI, with its minimalistic icons and repeating, well-matching colours was implemented from the UX prototype. A Flask-connected Backend stores data and model predictions to be visualised on the map.

For the innovative approach of recommending routes based on attractions located along them (within line of sight), the Data Science team integrated popular routes data with points of interest data from across Berlin, applying several machine learning models for clustering and recommendation. The team worked with multiple Python libraries, including Pandas, GeoPandas, NumPy, Matplotlib, Shapely, Scikit Learn, SQLite3 and others.

Way To Go was designed and implemented from scratch in an eight-week joint effort by TechLabs students from User Experience, Web Development and Data Science tracks.
