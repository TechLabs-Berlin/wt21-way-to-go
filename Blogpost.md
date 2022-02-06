### UX
**Members:** [Sueon Ahn](https://www.linkedin.com/in/sueonahn/), Paula Sebastiano

**Tech Stack:** Miro, Figma, Adope Photoshop, Notion

The first step that we had to do was defining the problem. The problem is “There is no map app that provides a personalized route, which can suggest a recommendation and a route at the same time”. In order to get a better understanding of potential users’ needs, we decided to conduct the in-depth interviews, targeting Berlin residents aged 20-40s. 

The goal of the interview is to understand when, how, how often participants navigate with maps and which challenges they have while using it, and to examine general opinion of participants regarding a personalized map. As the interview consists of 16 questions and has much possibility to lead to a follow-up questions, in-person interview is preferably conducted. In case in-person interview is unavailable due to pandemic or other reasons, respondents submitted their opinions through SurveyMonkey. With collected data, Personas and User stories are created. In addition, Affinity Mapping is done to organize responses in groups.

!
    [img](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff96a8480-1d0c-4de4-a91a-5588d5cb3050%2FScreenshot_2022-02-05_at_18.35.05.png?table=block&id=6b22ad0f-4c4c-491a-9d1f-a2faf5b23c0a&spaceId=66f9507a-4ad7-4538-8157-98c0494da193&width=1880&userId=6fddb17b-77de-4e0b-8660-d2b44d0d7be9&cache=v2)
    
Through affinity mapping, several important components for users are shown up, such as
- Good recommendation is a key for user satisfaction → well-established and appropriate data analysis is imperative
- Many people find ‘time saving’ as a strength → the app should react in a couple of seconds
- Not only static points, some users are also interested in live events → getting related information from different platforms is required

Besides juggling around user data, competitive analysis carried out in order to examine similar apps and to understand their strengths and weaknesses. By exploring a webpage of BVG (major transportation in Berlin), Roadtrippers (road trip planning tool), and Google Maps (web mapping platform), we started working on low-fidelity and high-fidelity wireframes on [Figma](https://www.figma.com/embed?embed_host=notion&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FntRot2xviamxAUrRwP0aDS%2FWTG---FINAL-PROTOTYPE%3Fnode-id%3D86%253A1754).

As we worked on a prototype on Figma, we constantly communicated with Frontend developers, in order to check process and investigate what could be done and what not. Together with the Frontend developers, the prototype was further optimized to meet the app’s functionalities.

After the prototype is finished, we are planning to carry out user test.

### DS

**Members:** [Emilio Flores](https://github.com/floresbar), [Merve Busra Duman](https://github.com/mervebduman), [Stefanie Senger](https://github.com/StefanieSenger)

**Tech Stack:** Python, Pandas, NumPy, Matplotlib, Shapely, Flask, SQLite3, Seaborn, Scikit-learn, Turicreate, Jupyter Notebook

As complete beginners, we were lost in the beginning of the journey. We didn’t know where to start, and we didn’t have data to process. After a lot of thinking, researching and meeting with experts, we finally found “our way to go” after a month.

TechLabs Team (Max) scraped us 20000+ detour routes data from Wandermap and 50+ points of interest (poi) data from OpenStreetMap. We concatenated those route and poi data into single DataFrames.

![img](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ee975aa8-58f3-4b8c-9173-3816a4dd6e44/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220206T132512Z&X-Amz-Expires=86400&X-Amz-Signature=46ddb37b3237e0b027623673b64786ae17abf3d5e7bbe1c30208ea618bb3a9d3&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

Then, we cleaned the data and joined both DataFrames using GeoPandas on nearest geometry. It was time to understand our DataFrame deeply - so we did some statistical analysis and visualisation.

![img](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/bb7b510d-8af5-4dc1-a17c-5376cf9c846a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220206T132535Z&X-Amz-Expires=86400&X-Amz-Signature=819c0c7fdde1c64ae2939278e632a544d58207ce785b89a41d10b87ddbf4dd72&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

After we had a good sense on our data, we carried on with machine learning algorithms to implement a classification/recommendation system.

Since we didn’t have labeled data, we couldn’t pursue supervised algorithms. Thus, we applied KMeans clustering on our data to get true labels. Then, using those clusters, we implemented a classification method. Moreover, we also implemented a recommendation system using Turicreate to recommend similar clusters (route categories) as a return to a route id request.

![img](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8e2aff79-fd24-4c1f-a511-13d76adb2138/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220206T132608Z&X-Amz-Expires=86400&X-Amz-Signature=ae16bec400baaca959b1c864784a049e928500d6ed58a2289c47654503fdfe18&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

We still need to work on the machine learning algorithms and develop them. There is so much to improve, and we are eager to carry our app to the next level!
