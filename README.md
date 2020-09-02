Now that you've spent some time playing around with Express, we would like you to BYOB (build your own backend)! You will be responsible for creating data in your backend and building a server so you can get and post data. This project shouldn't take more than 3 hours to complete.

**Base Expectations:**

**1. Create a Data Source**

Pick some data you are interested in. It could be anything - birds! podcasts! games! Then build out what your data set will look like in your app. You data set should be an array of objects that represent an item from the set of data you chose. As you are building out, ask yourself - what properties will you need to create for each item? What data needs to be stored on those properties?

You only need to have a minimum of three pre-made objects included in your server.js file.

**2. Build a server**

Using Express, build a server that holds your data in app.locals. This server should spin up to a port of your choice on localhost and return a greeting message in your terminal when the server is started.

**3. Build 3 endpoints**

We would like you to build three endpoints on your server: 

- Two GET endpoints to retrieve data. One should retrieve all of the data in your data set. The other should take in an id of a specific item in your data set and retrieve that item from your data set.

- One POST endpoint to create new objects in your data set. This endpoint should check every property in the resource being passed in to make sure that all of the properties required to make a new resource were provided. If the user does not provide those required properties, you should send back an error with a message detailing why their request could not be completed.

**Submission:**

Comment with your name and a link to your repo on this gist before EOD Friday. 

**Extras:**

If you are wanting some more time to explore and work with Express, you can add two more endpoints! Add a PATCH endpoint that updates a specific part of a resource in your data set. Add a DELETE endpoint so you can destroy a resource in your data set.
