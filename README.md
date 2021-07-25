# cgApplicationTask
GSK programming challenge

# CGApp Application Exercise Instructions
## Overall Objective
Create a Node.js based application that manages chatbot information via a REST API.

## Instructions
Clone the repo - git clone https://github.com/brahamaVik/cgApplicationTask.git - and update the code, if any and commit it.
Create a Node.js REST API that implements the following functions. Endpoint names can be whatever you choose but you will get extra credit
for having names that follow best practices. 
1. Get all bots and print to the console all the bot information
2. Get one bot and print to the console information about that particular bot
3. Add a new bot
4. Update a bot
5. Delete a bot

bots.json contains the initial data for the bots and transfer the file contain into mongoDB. 

#create env variable files
1. create three different env files. 
   a. .env (default env variable file) contain the mongoDB connection details
   b. /env/mysql.env contain the mysql connection details. Which is not implemented.
   c. /env/jsonfile.env contain the bots.json file
2. create the config.js file to execute the different env file dynamically

#script in package.json
There are three different script, which execute and set the env variables and run different SQL segments
a. npm run start (it calls mongodb database connectivity)
b. npm run start:mysql (for mysql "Not yet implemented")
c. npm run start:json (for read the json file and perfrom operation)

## Where is the bot data?
bots.json contains the initial data for the bots

## How do I run the code?
You can use Postman or curl or any other tool that you are familiar with to exercise your endpoints
Postman collection for localhost
- If you use mongoDB
  get:: localhost:8181/api/chatbot/all
  get:: localhost:8181/api/chatbot/one/208
  post:: localhost:8181/api/chatbot/add/newbot
  put:: localhost:8181/api/chatbot/edit/208
  delete:: localhost:8181/api/chatbot/delete/208
  
- If you use bots.json
  get:: localhost:8181/api/botjson/all
  get:: localhost:8181/api/botjson/one/0
  
  
  
  
  
