# Express REST API Packages
- <font style="color:blue"> express </font>:
- <font style="color:blue"> body-parser </font>:
- <font style="color:blue"> cookie-parser</font>:
- <font style="color:blue"> multer</font>:
- <font style="color:blue"> jsonwebtoken</font>:
- <font style="color:blue"> MySQL Driver</font>:
- <font style="color:blue"> Mongo dB Driver</font>:
- <font style="color:blue"> dotenv</font>:
- <font style="color:blue"> cors</font>:
- <font style="color:blue"> express-mongo-sanitize</font></font>:
- <font style="color:blue"> express-rate-limit</font></font>:
- <font style="color:blue"> helmet </font></font>:
- <font style="color:blue"> hpp </font></font>:
- <font style="color:blue"> validator </font></font>:
- <font style="color:blue"> xss-clean </font></font>:

# File Folder Structure
- <font style="color:blue">Index.js :</font> Responsible for connecting the MongoDB and starting the server.

- <font style="color:blue">App.js :</font> Configure everything that has to do with Express application.

- <font style="color:blue">Config.env:</font> for Enivrement Variables.

- <font style="color:blue">Routes -> Routes.js:</font> The goal of the route is to guide the request to the correct handler function which will be in one of the controllers.

- <font style="color:blue">Controllers -> Controller.js:</font> Handle the application request, interact with models and send back the response to the client.

- <font style="color:blue">Models -> Model.js:</font> If we use Mongoose this will be schema definition for creating and reading documents from the underlying MongoDB database.