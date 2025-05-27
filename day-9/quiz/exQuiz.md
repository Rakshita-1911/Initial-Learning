1. What is NodeJS?

Node.js is a runtime environment that lets us run JavaScript code outside the browser, like on a server. Normally, JS runs in the browser (like Chrome), but with Node.js, we can build backend apps like APIs, servers, and tools.


2. What is V8 Engine?
V8 is the JavaScript engine made by Google. It takes our JavaScript code and turns it into fast machine code that the computer can understand. Node.js uses this engine to run JavaScript outside the browser.


3. What is Event Loop in NodeJS?

The event loop is like a manager that handles all the tasks in Node.js. It allows Node to handle multiple things at the same time (asynchronously), like reading files or calling APIs, without waiting for one to finish before starting the next.


4. What is the use of tsconfig.json file?

tsconfig.json is used in TypeScript projects. It tells the TypeScript compiler how to behave—what files to include, how to convert TS to JS, and which features to use. It’s like a settings file for the TypeScript project.


5. What are the methods provided by fs module to manipulate files?

The fs (File System) module lets us work with files in Node.js. Some common methods are:

fs.readFile() – to read a file

fs.writeFile() – to create/write to a file

fs.appendFile() – to add more data to a file

fs.unlink() – to delete a file

fs.rename() – to rename a file


6. What is API?

API stands for Application Programming Interface. It’s like a waiter in a restaurant—you ask for something (send a request), and it brings it back from the kitchen (server response). APIs let different apps to communicate  with each other.


7. What is JSON format?
JSON (JavaScript Object Notation) is a way to store and exchange data. It looks like JavaScript objects and uses key-value pairs.

Example -

{
  "name": "Ram",
  "age": 21
}


8. Why we use JSON format for API?

We use JSON in APIs because:

1. It's easy to read and write

2. Works well with JavaScript

3. Lightweight and fast

4. Most programming languages can understand JSON easily.


9. What is a Framework?

A framework is a ready-made structure or toolkit that helps us build applications faster. Instead of writing everything from scratch, we use a framework to make common tasks easier. 

Example: Express.js is a framework for building web servers using Node.js.

10. How an HTTP Communication works?
It works like this:

The client (like a browser) sends a request to the server using HTTP.

The server receives the request, processes it, and sends back a response.

The response contains the data the client asked for, like a webpage or some JSON data.


11. What is Middleware in ExpressJS?

Middleware is a function that runs between the request and response. It can be used to:

1. Log details
2. Check user authentication
3. Modify the request
4. Handle errors
5. It’s like a checkpoint that runs before the final response is sent.