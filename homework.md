- Create a repository
- Initialize the repository
- node_modules, package.json, package-lock.json
- Install express
- Create a server
- Listen to port 7777
- Write request handlers for /test, /hello
- Install nodemon and update scripts inside package.json
- Difference between 'Caret' and 'Tilda' (~ vs ^)
- What are dependencies?
- What is the use of -g which npm install?

- Initialize git
- .gitignore
- Create a remote repo on github
- Push all code to remote origin
- Play with routes and route expensions eg. /hello, /hello/2
- Order of the routes matter a lot
- Install Postman app and make a workspace/collection -> test API call
- Write logic to handle GET, POST, PATCH, DELETE API call amd test them on Postman
- EXplore routing and use of ?, +, (), \* in the routes
- Use of regex in routes /a/, /.\*fly$/
- Reading query params in the routes
- Reading the dynamic routes

- Multiple Route Handlers - Play with the code
- next()
- next function and errors along with res.send()
- app.use("/route",rh1,rh2,rh3,rh4,rh5);
- What is a Middleware? Why do we need it?
- How express JS basically handles requests behind the scenes.
- Difference between app.use() and app.all()
- Write a dummy auth middleware for admin
- Write a dummy auth middleware for all user routes, except '/user/login'
- Error Handling using app.use("/", (err, req, res, next) => {});

- Create a free cluster on MongoDB official website (MongoDB Atlas)
- Install mongoos library
- Connect your application to the Database ("Connection URL"/devTinder)
- Call the connectDB function and connect to database before starting application on 3000
- Create a userSchema & user Model
- Create POST /signup API to add data to Database
- Push some documents using API calls from Postman
- Error Handling using try, catch block

- JS Object VS JSON
- Add the express.json() middleware to your app.
- Make your signup API dynamic to receive data from the end user
- User.findOne with duplicate emailId's which object will be returned?
- API- Get user by email
- API - Feed API- GET /feed - get all the users from the database
- API - GET user by Id
- Create a delete user API
- Difference between PUT and PATCH
- API - Update a user
- Explore the Mongoose Documentation for Model methods
- What are options in a Model.findOneAndUpdate method, explore more anout it
- API - Update the user with email Id

- Explore schematype options from the documentation
- add required, unique, trim, minLength, min, lowercase
- Add default
- Create a custom validate function for gender
- Improve the DB schema - Put all appropriate validations on each field in schema
- All timestamps to the userSchema
- Add API level validation on Patch request and Signup post API
- Data Sanitization - Add API validations for each field
- Install validator
- Explore validator library functions and use validator functions for password, email , URL
- NEVER TRUST req.body

- Validate data in signUp API
- Install bcrypt package
- Create a password Hash using bcrypt.hash() and save the user with encrypted password
- Create /login API
- Compare passwords and throw errors if email or password are invalid

- Install cookie-parser
- Send a dummy cookie to user
- Create a GET /projile api, check if you get the cookie back
- Install jsonwebtoken
- In login API, after email and password validation create a JWT token send it back to user inside cookies
- Read the cookies inside your /profile API and fing the logged-in user
- userAuth Middleware
- Add the userAuth middleware in /profile API and a new sendConnectionRequest API
- Send the expiry of JWT and cookies to 7 days
- Create userSchema method to getJWT()
- Create userSchema method to validatePassword(inputPassword)

- Explore tinder APIs
- Create a list of all APIs you can think of in DevTinder
- Group multiple Routes under respective Routers
- Read documentation for express.Router()
- Create routes folder for managing auth, profile, request routers
- Create authrouter, profileRouter, requestRouter
- Import these routers in app.js
- Create POST /logout API
- Create PATCH /profile/edit
- Create PATCH /profile/password API => forgot password API
- Make sure you validate all data in every POST, PATCH APIs

- Read this article about compound indexes - https://www.mongodb.com/docs/manual/core/indexes/index-types/index-compound/
- Read more about indexes in MongoDB
- Why do we need index in DB?
- What are the advantages and disadvantages of creating indexes?
- Create connectionRequestSchema
- Send Connection Request API
- Proper validation of Data
- Think about corner cases
- $or query and $and query in mongoose - Read more about the logical queries
- schema.pre("save") function

- Write code with proper validation for POST /request/review/:status/:requestId
- Thought process - POST vs GET
- Read about ref and populate and how you create relation between them - https://mongoosejs.com/docs/populate.html
- Create GET /user/requests/received with all the checks
- Create GET /user/connections

- Logic from GET /feed API
- Explore the $nin, $ne, and other query operators
- Pagination

NOTES:

/feed?page=1&limit=10 => first 10 users 1-10 => .skip(0) & .limit(10)
/feed?page=2&limit=10 => 11-20 => .skip(10) & .limit(10)
/feed?page=3&limit=10 => 21-30 => .skip(20) & .limit(10)

skip = (page-1)\*limit
