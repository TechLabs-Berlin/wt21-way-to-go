#Blog post - WayToGo

A different Way To Go to your final destination, personalised routes suggestions based on what you feel like seeing today, coffee, museums, parks, ...? You tell us and we tell you the way to go!

##Introduction

Everyone has daily commutes, and sometimes happen that we have extra time to go from point A to B. But platforms like GoogleMaps only give you the fastest, straight to the point, direct and non-personal route suggestions. How many times happen to you to found out, months later, that if you did an extra 5minutes route you would pass by some open air gallery? Or for those days that you’ve an extra 10, 20 or 30minutes to arrive to some place and would not mind to pass by some nice places?

That’s how WayToGo was born, asking the user to choose what “he they you” would like to see, based some pre-defined categories, gives in return some personalised route to follow and enjoy different views and places to the final destination.

Joining 8 passionate TechLabs students with the orientation of a great mentor, we’ll now explain the process of building this app, details about the project and the challenges and bottlenecks we faced.

##The Beginning

The first step of the team was to define what we wanted to reach with the project, we did some brainstorming sessions, using Miro boards, where we define the essential functions, timelines and the MVP.

Was after this that our main pressing point show up, being a project that requires quite few request, either between Front and Backend but also to Google APIs, we got a bit confused to see how the whole information will circulate, how our production chain works. The whole group join and we start drawing and discussion a prototype to better understand this structure, and from there, everything got clear and work start showing up.

![name-of-you-image] (https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F671dabee-24a5-4891-94bd-dc0290260ec7%2FScreenshot_2022-02-01_at_13.32.08.png?table=block&id=7d7a8e57-0522-406a-ae4d-fb177c49286e&spaceId=66f9507a-4ad7-4538-8157-98c0494da193&width=2000&userId=9d79f1af-5b0e-4e70-8934-8ee272638717&cache=v2)

img: Workflows-Schemas created by the group.

##Our Journey

##UX:
Membesr: Paula Sebastiano, Sueon Ahn
Tech Stack:

##WD

Members: Leonor Cascais, Leonel Acosta, Sara Pulido
Tech Stack:

- ReactJS: Create React-App
- CSS, Bootstrap, React-Bootstrap, React-Icons: Style and Layout
- React-Google-Maps: To load Google Maps API script and calculate directions
- use-places-autocomplete: To provide intelligent places suggestions and geocoding them
- Axios: To create HTTP Request
- React Router: for routing in React
- SweetAlert2: replace Java Script pop-up boxes

##DS
Members: Emilio Flores, Merve Duman, Stefanie Senger
Tech Stack:

Since the very begging that we decided to use the basics and frameworks we learn during the academic phase, we wanted to practise and have deeper knowledge with the tools we acquire during the academic phase, but also considering what we could achieve in 7 weeks with a solid code – it was a consensual and easy decision – and from there we were ready to start working.

Regarding our work, we couldn’t wait for the UX team to give us the wireframes, or the DS team to send us the data to start working, so we start organising what could be done without these parts:

- It’s a project that requires a map –> we start researching and exploring the best and free available options for map visualisation libraries;
- We choose to work with Google maps, was the best option where we could use either the map and the directions service -> we start setting up the API key and prepare the code to display the map;
- We’ll always have to ask for the user’s origin and destination –> we prepare the inputs to ask origin and destination and display search suggestions;
- We eventually needed to do request to the BE -> we prepare the request with Axios to them taking the user origin and destination.

![name-of-you-image](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F04f1aa51-5c99-4568-97e1-b6ae3f052a2f%2FScreenshot_2022-02-02_at_19.07.02.png?table=block&id=cfd5da5e-4b99-40a8-b6a9-1ca7e967c82f&spaceId=66f9507a-4ad7-4538-8157-98c0494da193&width=2000&userId=9d79f1af-5b0e-4e70-8934-8ee272638717&cache=v2)

And that was when we start having information from both our UX and DS colleagues.
From the UX team we had now the Figma screens and user flow designed, so we started designing all the pages based on that: Landing page, Home, How it Works, About us, Contact and the page with the Map and the routes, all of those with the header and footer.
With the DS team first we had the Flask framework, that we could connect to its path and assure a request with a response. After, we get hardcoded static points that allowed us to start linking different categories with different points – and this was a very important moment for us, we now knew that we could display an alternative route suggestion to the user based on the category selected.
We had panned to create a web-app, being responsive also to mobile version. Unfortunately, due to schedule reasons we didn’t had time to fully finish the mobile version, but the team still plans to do it after the deadline.
The decision of choosing the tools we learn during the academic phase turned out to be a good decision since we reach a solid final project which we are all proud of and now we can also be confident with these tools.
! [name-of-you-image](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fcf0f3575-71a2-482b-a111-fa0b88699430%2FScreenshot_2022-02-02_at_19.08.03.png?table=block&id=5acdb0e4-58c9-482f-a7cb-831ce7850040&spaceId=66f9507a-4ad7-4538-8157-98c0494da193&width=2000&userId=9d79f1af-5b0e-4e70-8934-8ee272638717&cache=v2)

##Final Thoughts

We are very grateful to our mentor Kate Borovikova for all the support, we have made Way To Go come alive for our portfolio.

Future: of course we are thinking about the future of Way To Go, we would like to make the version more user friendly, with more features and to deploy the whole project.

Finally the road faced with many doubts, the lack of a Data Set with enough information that took too much time, we managed to deliver all the effort, in the short time to develop the entire project, as beginners, how much and complex to put together the pieces of a big team, with so many initial doubts, in the end it was a unique, immense and incredible experience.
