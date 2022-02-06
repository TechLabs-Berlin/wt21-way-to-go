<p align="center">
   <img src="https://github.com/TechLabs-Berlin/wt21-way-to-go/blob/readme_edit/logo.png?raw=true"/>
</p>

A different Way To Go to your final destination.

Way To Go is a personalised, map based web app that provides route recommendations in Berlin, based on a user's interests. You tell us what you feel like and we'll tell you the **Way To Go!**
## Introduction

Everyone has their daily commutes, and usually people rush to their destinations as fast possible. Sometimes, though, people might be early for an appointment, or be on holiday, and have time to spare on their way from A to B. How many times has it happened to you that you find out, months later, that you could have taken a 5-minute detour on your daily walk to pass by an open air gallery? On days where you have 10, 20 or 30 minutes to spare, would you not rather walk a beautiful or interesting route than arrive at your destination too early? Platforms like Google Maps, which only give you the fastest, most direct and non-personal route suggestions, offer no solutions.

This is what 8 passionate TechLabs students, under the capable guidance of a mentor, sought to address by creating Way To Go. Asking users to choose what they would like to see, based on pre-defined route profiles, the app returns personalised route options in Berlin based on location and destination, displaying it on a map for the user to follow and enjoy new views and places on the way to their final destination.

Read on for an in-depth dive into our process of planning and implementing the project, as well as the challenges and bottlenecks we faced.
## Our Journey

### The Beginning

The first step was to define what we wanted to reach with the project. We did some brainstorming sessions, using Miro boards, where we defined the essential functions, timelines and the MVP.

It was after this that our main pressing points showed up - being a project that requires quite a few requests, not only between Front- and Backend, but also with Google APIs, we got a bit confused about how the whole information would circulate i.e. how our production chain would work. 

Thus, the whole group joined to start drawing and discussing a prototype to better understand this structure. From this point on, things got a bit clearer and work started showing up.

![Workflows-Schemas created by the group](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/671dabee-24a5-4891-94bd-dc0290260ec7/Screenshot_2022-02-01_at_13.32.08.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220206T203701Z&X-Amz-Expires=86400&X-Amz-Signature=9b672d73eee0fd9a0388bdde11eaf04d09d09bfeecb89f67a71b241a6cbc8139&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Screenshot%25202022-02-01%2520at%252013.32.08.png%22&x-id=GetObject)

Workflows-Schemas created by the group

We'll now now talk through the process from the perspectives of each track.

### UX
**Members:** [Sueon Ahn](https://www.linkedin.com/in/sueonahn/), Paula Sebastiano

**Tech Stack:** Miro, Figma, Adope Photoshop, Notion, SurveyMonkey

The first step that we had to do was defining the problem: "There is no map app that provides a personalised route, which can suggest a recommendation and a route at the same time". In order to get a better understanding of potential users' needs, we decided to conduct in-depth interviews, targeting Berlin residents aged 20-40. 

The goal of the interview is to understand when, how, how often participants navigate with maps and which challenges they have while using it, and to examine general opinion of participants regarding a personalised map. As the interview consisted of 16 questions and had a high possibility of leading to follow-up questions, in-person interview was the preferred format. In case this was unavailable due to pandemic or other reasons, respondents would submit their opinions through SurveyMonkey. With the collected data, Personas and User stories were created. In addition, Affinity Mapping was done to organise responses in groups.

![img](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff96a8480-1d0c-4de4-a91a-5588d5cb3050%2FScreenshot_2022-02-05_at_18.35.05.png?table=block&id=6b22ad0f-4c4c-491a-9d1f-a2faf5b23c0a&spaceId=66f9507a-4ad7-4538-8157-98c0494da193&width=1880&userId=6fddb17b-77de-4e0b-8660-d2b44d0d7be9&cache=v2)
    
Through affinity mapping, several important components for users were shown up, such as

- Good recommendation is a key for user satisfaction → well-established and appropriate data analysis is imperative
- Many people find 'time saving' as a strength → the app should react in a couple of seconds
- Not only static points, some users are also interested in live events → getting related information from different platforms is required

Besides juggling around user data, competitive analysis was carried out in order to examine similar apps and to understand their strengths and weaknesses. By exploring a webpage of BVG (major transportation in Berlin), Roadtrippers (road trip planning tool), and Google Maps (web mapping platform), we started working on low-fidelity and high-fidelity wireframes on [Figma](https://www.figma.com/embed?embed_host=notion&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FntRot2xviamxAUrRwP0aDS%2FWTG---FINAL-PROTOTYPE%3Fnode-id%3D86%253A1754).

As we worked on a prototype on Figma, we constantly communicated with Frontend developers, in order to check the process and investigate what could be done and what couldn't. Together with the Frontend developers, the prototype was further optimised to meet the app's functionalities.

Once the prototype is fully implemented, we are planning to carry out user testing.
### Web Development (WD)

**Members:** [Leonel Acosta](https://github.com/Leonel-Acosta), [Leonor Cascais](https://github.com/cleonor), [Sara Pulido](https://github.com/sara01rizo)

**Tech Stack:** 

- ReactJS: Create React-App
- CSS, Bootstrap, React-Bootstrap, React-Icons: Style and Layout
- React-Google-Maps: To load Google Maps API script and calculate directions
- use-places-autocomplete: To provide intelligent places suggestions and geocode them
- Axios: To create HTTP Request
- React Router: for routing in React
- SweetAlert2: replace Java Script pop-up boxes

From the very beginning, we were keen to practise and deepen our knowledge of the tools we'd acquired during the academic phase (also considering what we thought was achievable in 7 weeks) - that's why we decided to stick to the basics and frameworks we'd already started to learn. It was an easy and consensual decision, and from that point on we were ready to start working.

Regarding our work, we couldn't wait for the UX team to give us the wireframes, or the DS team to send us the data to start working, so we started organising what could be done without these parts:

- It's a project that requires a map –> we started researching and exploring the best and free available options for map visualisation libraries;
- We choose to work with Google maps - it was the best option where we could use both the map and the directions service -> we started setting up the API key and preparing the code to display the map;
- We'll always have to ask for the user's origin and destination –> we prepared the inputs to ask origin and destination and display search suggestions;
- We would eventually need to make requests to the BE -> we prepared the request with Axios to them taking the user origin and destination.
    
    ![Screenshot 2022-02-02 at 19.07.02.png](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/04f1aa51-5c99-4568-97e1-b6ae3f052a2f/Screenshot_2022-02-02_at_19.07.02.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220206T203801Z&X-Amz-Expires=86400&X-Amz-Signature=fa6be9d7b9a9969d4735ef8a9a7a26a4d61532e6df54067b3a0cd5881269e129&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Screenshot%25202022-02-02%2520at%252019.07.02.png%22&x-id=GetObject)
    

And that was when we started getting information from both our UX and DS colleagues.

From the UX team we now had the Figma screens and user flow designed, so we started designing all the pages based on that: Landing page, Home, How it Works, About us, Contact and the page with the Map and the routes, all of those with the header and footer.

With the DS team we first had the Flask framework, that we could connect to its path and assure a request with a response. After that, we got hardcoded static points that allowed us to start linking different categories with different points – and this was a very important moment for us, because we now knew that we could display an alternative route suggestion to the user based on the category selected.

We had planned to create a web-app, being responsive also to mobile version. Unfortunately, due to schedule reasons we didn't have time to fully finish the mobile version, but the team still plans to do it after the deadline.

The decision of choosing the tools we learnt during the academic phase turned out to be a good decision since we reached a solid final project which we are all proud of and now we can also be confident with these tools.

![Screenshot 2022-02-02 at 19.08.03.png](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/cf0f3575-71a2-482b-a111-fa0b88699430/Screenshot_2022-02-02_at_19.08.03.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220206T203838Z&X-Amz-Expires=86400&X-Amz-Signature=1f3d389f521c03fb7da3acb03ac307643c0947f381cbacb379d5014540d797c5&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Screenshot%25202022-02-02%2520at%252019.08.03.png%22&x-id=GetObject)

### Data Science (DS)

**Members:** [Emilio Flores Bartelt](https://github.com/floresbar), [Merve Busra Duman](https://github.com/mervebduman), [Stefanie Senger](https://github.com/StefanieSenger)

**Tech Stack:** Python, Pandas, NumPy, Matplotlib, Shapely, Flask, SQLite3, Seaborn, Scikit-learn, Turicreate, Jupyter Notebook

As complete beginners, we were totally lost at the start of the journey. Since the original project pitch was not made with a data-driven approach in mind, we didn't have any data to process, and didn't even know where to start looking. After a lot of thinking,  researching and trialling various approaches (which turned out not to be data driven - see 'workflow-schemas' under 'The Beginning', above), we decided to reach out to our track leads who gave us the idea to make route predictions based on previous routes, rather than creating routes based purely on location, destination and points of interest ('POI'). One month into the project, we had finally found our own "way to go". 

Max from the TechLabs Team scraped about 20000+ routes data for us from Wandermap.net and 16 POI categories data from OpenStreetMap. We finally had data, and the cleaning could begin.

First, we concatenated the routes data and POI data into a single DataFrame each. 

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ee975aa8-58f3-4b8c-9173-3816a4dd6e44/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220206T203855Z&X-Amz-Expires=86400&X-Amz-Signature=f221677b535ea93004653087b98179f86b994519896942aac63a0fa095d79a4b&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

Since the POI categories were all hidden in the depths of a JSON file as dictionary values and keys, we had to do some extensive cleaning to extract the features we needed.

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2ffefd3e-9c21-43aa-aba1-d91adc3b8f7f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220206T203916Z&X-Amz-Expires=86400&X-Amz-Signature=b196cf80e4b8e486ae1780e87acb06b1b6e5b6589b3309023a5d3c4044c3448c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1499e4ca-2af6-4d3a-8014-b99993751b04/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220206T203935Z&X-Amz-Expires=86400&X-Amz-Signature=120e1ed39fb5f570fb510c1b6591125817a5042863f0e9e87301094527f59b86&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

Similarly, the routes we received in GPX format were a nightmare to try to fit into a DataFrame, and we spent a lot of time trying with both wide and long format. We ended up with a huge DataFrame one row per route waypoint of every route.

After a lot of research, we discovered GeoPandas - a library (almost too good to be true) which allowed us to join our POI data with route waypoints on nearest geometry (a GeoPandas feature).

![Joined dataset](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/664206a8-b146-4331-82a9-96cda80cb6fd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220206T203957Z&X-Amz-Expires=86400&X-Amz-Signature=d52339493f2a5f9b50326d092ec967f37dc606f372ba2b224ad903aa6c160b4b&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

Joined dataset

At this point, it was time to understand our data more deeply - so we did some statistical analysis and visualisation using Matplotlib and Seaborn

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/bb7b510d-8af5-4dc1-a17c-5376cf9c846a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220206T204010Z&X-Amz-Expires=86400&X-Amz-Signature=8abeccc931253270285c5e688e0c8c696a0fcd1fe401f4ddff6a337d8f2bb069&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

As mentioned, until now our data had been organised by waypoint, rather than by route. As such, in preparation for ML, we grouped our data by route ID and performed value counts for every category, before joining everything together into one DataFrame by Route ID with 16 features (a count value for every category of POI it contained)

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2fa8038f-8df0-4287-98c5-b2b0ba54932f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220206T204034Z&X-Amz-Expires=86400&X-Amz-Signature=d3340acbcc7f5c11fb708b5459ff19fcba53f715dbcff2afc8198a12a322e6c1&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

After another round of insightful office hours, we ploughed ahead to attempt to implement a classification/recommendation system in time for the final deadline. 

Since we didn't have labelled data, we couldn't pursue supervised algorithms taught in the learning track. Thus, we first applied KMeans clustering on our data to get true labels. Then, using those clusters, we implemented a classification method. Moreover, we also implemented a recommendation system using Turicreate to recommend similar clusters (route categories) as a return to a route ID request. 

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a4fcc16f-c0c8-4baa-a21f-f09e4de4bcc8/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220206T204052Z&X-Amz-Expires=86400&X-Amz-Signature=8021e901f79bce2416c7a38bffc5a262109f7678314a108f43b767ab5a65f882&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8e2aff79-fd24-4c1f-a511-13d76adb2138/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220206T204123Z&X-Amz-Expires=86400&X-Amz-Signature=8c93d33023106e62b7067812dd881d06ee72ae30933afcdb700ced52052d2cf7&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

Because our ML models were not ready for recommending personalised routes (we still didn't have great clusters and hadn't finished the recommendation algorithm, and one of our team got sick with Covid) we decided to use predetermined routes for our final presentation demonstration. Having already built a flask app to communicate with Frontend using a test API with hard coded POI, we proceeded to convert our .csv database into SQL so that Flask could communicate with it. For the final demonstration, although not sensitive to location and destination, the app was able to return four different routes from our database, depending on the category request received from Frontend. 

Next, we will continue to work on the machine learning algorithms and develop them further, to the point that we will be able to link up the clusters we found to the category requests from Frontend in order to filter routes, as well making a recommendation based on desired start and end point. Lastly, we would like to go back and improve our data by including POI data that we received as polygons (for now we just used nodes - single co-ordinate points) for the place type categories we scraped. After that, the possibilities for new categories and data sources are endless! 

In summary: there is much to improve, and we are eager to carry our app to the next level!

## Final Thoughts

We are very grateful to our mentor Kate Borovikova and the TechLabs team who supported us and helped us make Way To Go come alive for our portfolios.

Of course we are thinking about the future of Way To Go, and we would like to make the version more user friendly, with more features, such as adding the 'random category' feature suggested in the UX prototype, and eventually to deploy the whole project..

Although the road was paved with doubts, like the lack of a Data Set with enough information that took too much time, with all our combined efforts, we managed to develop and deliver the project. As beginners facing the challenge of working in a large team, all of us new to our own technologies (let alone each others'!), we feel incredibly proud of what we have achieved in such a short space of time. In the end it was a unique, immense and incredible experience, and we look forward to taking Way To Go to even greater heights.
