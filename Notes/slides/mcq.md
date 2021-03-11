1. What code print the endianness of operating system?

- A. console.log('endianness : ' + os.getEndianness());
- B. console.log('endianness : ' + os.endianness);correct
- C. console.log('endianness : ' + os.endianness());
- D. None of the above.
- ANS : B

2. To use function which is declared in another module which of the following is correct to import
that module?
- A) import('./page2')
- B) inclue('./page2')
- C) require('./page2')
- D) required('./page2')
- Ans : C
Explanation : the syntax require('page path') is correct.

3. Which of the following is true about fs module of Node?
- A - Every method in fs module have synchronous as well as asynchronous form.
- B - Asynchronous methods of fs module take last parameter as completion function callback and
first parameter of the callback function as error.
- C - Both of the above.
- D - None of the above.
- Answer : C
- Explanation:
Every method in fs module have synchronous as well as asynchronous form. Asynchronous
methods of fs module take last parameter as completion function callback and first parameter of the
callback function as error.

4. Which of the following is correct code to create http server?
- A) http.startServer()
- B) https.createServer()
- C) http.createServer()
- D) http.listen()
- Ans : C
- Explaination : To create http server there is method in http object createServer()

5. which property is available in module object to export?
- a) export
- b) exports
- c) exporter
- answer - b) exports
Module object contains a property called exports that is used to export js file.

6. to create a web server in node js, which module is required?
- a.http
- b.fs
- c.os
- d.none of above
- ans: a. http , must be included for creating a web server

7.  Which of the following uses scripted HTTP?
- a) XML
- b) HTML
- c) Ajax
- d) CSS
- Answer: c
  - Explanation: AJAX stands for Asynchronous JavaScript And XML. The key feature of an Ajax
application is that it uses scripted HTTP to initiate data exchange with a web server without causing
pages to reload.
8. node js is-------------
- A. Synchronous
- B. Asynchronous
- ans :Asynchronous
  - explanation: Node. js favors asynchronous APIs because it is single-threaded.
This allows it to efficiently manage its own resources,
but requires that long-running operations be non-blocking,
and asynchronous APIs are a way to allow for control of flow with lots of non-blocking operations

9. What is the alternative command used in Node for load()?
- a) store()
- b) module()
- c) log()
- d) require()
- Answer: d
  - Explanation: require() is used for including other javascript files. Use require() instead of load(). It
loads and executes (only once) the named module, returning an object that contains its exported
symbols.

10. How can you kill node.js process?
- A. Ctrl + C
- B. Ctrl + B
- C. Ctrl + K
- Answer - A

11. Node.js is ___________ Language.
- A. Server Side
- B. Client Side
- C. Both
- Answer: A ( Server Side)

12. Which statement executes the code of sample.js file?
- A. nodejs sample.js
- B. node sample.js
- C. sample.js
- D. None of the above
- Answer-B

13. What are core features of Express framework?
- A. Allows to set up middlewares to respond to HTTP - Requests
- B. Defines a routing table which can works as per HTTP - Method and URL
- C. Dynamically render HTML Pages
- D. All of the above
- Answer: D

14. What function arguments are available to Express.js Route handlers?
- A. req - the request object
- B. res - the response object
- C. next
- D. All of the above
- Answer : Option D
     + Explaination: Above all are route handlers


15. which rout method is used for updating the table content?
- a)put
- b)post
- c)delele
- d)none
- answer:put

16. which route method is used for inserting and deleting the table content?
- a)put and post
- b)post and delele
- c) get and post
- answer:b

17. Which route method is used for execution of code for every request?
- a) each()
- b) use()
- c) common()
- d) none
- Answer : B
   - Explanation : To execute common code for every request we use use() method

18. How do you kill a process in Node.js?
- Ctrl + C
- Ctrl + B
- Ctrl + K
- Answer
- Ctrl + C

19. Node uses ___ engine in core.*
- Chorme V8
- Microsoft Chakra
- SpiderMonkey
- Node En
- Answer--Chorme V8

20. The $ npm is statement is used to list down all the locally installed module?
- A. True
- B. False
- Answer: True (Option A)

21. What are core features of Express framework?
- A. Allows to set up middlewares to respond to HTTP Requests
- B. Defines a routing table which can works as per HTTP Method and URL
- C. Dynamically render HTML Pages
- D. All of the above
- Answer: Option D

21. Route paths, in combination with a request method, define the endpoints at which requests can
be made. Which of following are valid form of route path?
- A. strings
- B. string patterns
- C. regular expressions
- D. All of above
- Answer= D

22. npm stands for______
- 1) Node project manager
- 2) Node Package manager
- 3) New project manager
- 4) New package manager
- Answer--2)Node package manager

23.  _____is not a valid HTTP method.
- A. setHeader
- B. PUT
- C. POST
- D. GET
- Answer: setHeader (Option A)

24. How to associate an object to a key on a node?
- a) getUserData()
- b) cloneNode()
- c) setUserData(key,data,handler)
- d) clonedata()
- Answer: c
   - Explanation: The Node.setUserData() method allows a user to attach (or remove) data to an
element, without needing to modify the DOM. This method is used to associate an object to a key
on a node.

25. Simple or complex functionality organized in a single or multiple JavaScript files which can be
reused throughout your Node.js application is called ________.
- A. Module
- B. Library
- C. Package
- D. Function
- ANSWER-Module
    - Explanation->Module is a simple or complex functionality organized in single or multiple
JavaScript files which can be reused throughout the Node application.

26. Which of the following are Node.js streams types?
- Writable
- Duplex
- Readable
- All of the above
- ANS:
- All of the above

27. to get the request body from the client(postman) , we need to include which module ?
- a. ‘parser’
- b.’request-parser’
- c.’client-parser’
- d.’body-parser’
- ans. d. to get request body, we need to include body-parser module, on which we can further specify
format, like json

28. Where is captured values are populated regarding route parameters?
- A. req.params object
- B. app.locals object
- C. req.data object
- D. None of above
- Answer - A

29. What is/are the purpose(s) of Node.js:
- A. Real-time web applications
- B. Network applications
- C. Distributed systems
- D. General purpose applications
- E. All of the above
- Answer - E. All of the Above

30. Javascript is -- language ?
- A) scripting
- B) application
- C) programming
- D)none
- Answer :A

31. Which of the following code can make a request to a web server?
- A - http.request(options, callback)
- B - http.createRequest(options, callback)
- C - http.makeRequest(options, callback)
- D - None of the above.
- Answer : A
     - Explanation
http.request(options, callback) method can be used to make a request a web server.

32. Which of the following is true about fs module of Node?
- A. Every method in fs module have synchronous as well as asynchronous form
- B. Asynchronous methods of fs module take last parameter as completion function callback and
first parameter of the callback function as error
- C. Both of the above
- D. None of the above
- answer is option c

33.  Where is captured values are populated regarding route parameters ?
- A. request.params object
- B. app.locals object
- C. request.data object
- D. None of above
- Answer :- A request.params object

34. Which method is used to compare the placement of two nodes in the DOM hierarchy
(document)?
- a) compareDocumentPosition()
- b) cloneNode()
- c) getUserData()
- d) getFeature()
- View Answer
- Answer: a
     - Explanation: The compareDocumentPosition() method is used to compare the placement of two
nodes in the DOM hierarchy (document). The return value is an integer value whose bits represent
the calling Node’s relationship to otherNode within the Document.

35. In Node process is ______
- a)Global Object
- b)Local Object
- answer-a

36.  Which of the following code prints current directory?
- A - console.log('Current directory: ' + process.cwd());
- B - console.log('Current directory: ' + console.cwd());
- C - console.log('Current directory: ' + process.currenWorkingDirectory());
- D - None of the above.
- Answer : A
     - Explanation
process.cwd() can be used to get the current working directory.

37. What does the nodeName of the nodeType Document return?
- a) doctype name
- b) target
- c) #comment
- d) #document
- Answer: d
     -Explanation: The nodeName of the nodeType Document returns #document. If the node is an
element node, the nodeName property will return the tag name. If the node is an attribute node, the
nodeName property will return the name of the attribute.

38. In Node.js APIs of Node.JS are which of the following?
- A. Asynchronous
- B. Synchronous
- C. Both of the above
- D. None of the above
- Answer: A

39. What are core features of Express framework?
- A. Allows to set up middlewares to respond to HTTP - Requests
- B. Defines a routing table which can works as per HTTP - Method and URL
- C. Dynamically render HTML Pages
- D. All of the above
- Answer: Option D

40. Which of the following is not considered a JavaScript operator?
- A. new
- B. this
- C. delete
- D. typeof
- Ans: B

41. who wrote Node.js?
- a. james gosling
- b. Ryan Dahl
- c. Jordan Walke
- d. Brendan Eich
- answer: b

42. Route paths, in combination with a request method, define the endpoints at which requests can
be made. Which of following are valid form of route path?
- A. strings
- B. string patterns
- C. regular expressions
- D. All of above
- Ans: D

43. When should you use JSON Web Tokens?
- a. Authorization: Once the user is logged in, each subsequent request will include the JWT, allowing
the user to access routes, services, and resources that are permitted with that token.
- b. Information Exchange: JSON Web Tokens are a good way of securely transmitting information
between parties.
- c. none
- d. a and b
- ans: a and b, a because because of its small overhead and its ability to be easily used across different
domains.
b beacuse Because JWTs can be signed—for example, using public/private key pairs—you can be
sure the senders are who they say they are.Additionally, as the signature is calculated using the
header and the payload, you can also verify that the content hasn't been tampered with.

44. JWT in the serialized form represents a string of the following format:
- A. [signature].[header].[payload]
- B. [header].[payload].[signature]
- C. All of these
- D. None of these
- Answer: Option B

45. How to install JWT(JSONWebToken)?
- A. npm install jsonwebtoken
- B. sudo install jsonwebtoken
- C. Both A and B
- D. None of these
- Answer: Option C

46. How to install crypto?
- A. npm install crypto-js
- B. npm install crypto
- C. npm install crypto>js
- D. None of these
- Answer: Option A

47. Which of the following core module is used to create a web server in Node.js?
- A. fs
- B. url
- C. connect
- D. http
- ans :- D

48. Response.status(401) is used for?
- A. Unauthorized Access
- B. Cannot Connect to server
- C. Both A and B
- D. None of these
- Answer: Option A

49. Which of the following us true regrading package.json file?
- A) It is contains metadata information about project
- B) npm install command read all dependencies available in package.json file to download
dependency files
- C) Both A & B
- D) None of the above
- Answer : C)
     - Explanation : package.json file contains all metadata about project, it include all dependencies of
project so that in future without sharing dependencies file we can just share package.json file

50. JavaScript implementations of standard and secure cryptographic algorithms to store data
includes?
- A. MD5
- B. HMAC
- C. SHA-512
- D. All of the above
- ANS : D

51. how many ways we can send data to server?
- 1 - 1
- 2 - 3
- 3 - 0
- 4 - none of the above
- answer: we can send data to server in three ways by using :
query parameter
body parameter
path parameter


52. To install Node.js express and mysql2 module
- A. $ npm install express mysql2
- B. $ node install express mysql2
- C. $ install express mysql2
- D. None of above
- ANSWER: A

53. Q : Which of the following template engines can be used with Node.js?
- A. Jade
- B. Vash
- C. Handlebars
- D. All of the above
- Answer= D

54. Simple or complex functionality organized in a single or multiple JavaScript files which can be
reused throughout your Node.js application is called ________.
- A) Library
- B) Package
- C) Function
- D) Module
- Answer : D-Module

55. What are core features of Express framework?
- A. Allows to set up middlewares to respond to HTTP Requests
- B. Defines a routing table which can works as per HTTP Method and URL
- C. Dynamically render HTML Pages
- D. All of the above
- ans = D all are features

56. _____is a great logging tool that anyone who works with HTTP servers in Node.js can use. it is a
middleware that allows us to easily log requests, errors, and more to the console. It’s easy to use,
but still powerful and customizable.
- a.nodemailer
- b.jwt
- c.morgan
- d.none
- ans: c ,morgan, we must include it using require method,and use method to make it functional,in
use,we can state standard string format like combined,tiny to display log, or can make a customize
string using callback function.

57. How install morgan module
- A. sudo install morgan
- B. node install morgan
- C. sudo npm install morgan
- D. None of above
- Ans : Option C

58.  Node REPL is used to
- 1. get the last command used
- 2. evaluate simple expressions
- 3. print informational warning
- 4. perform heavy computation
- ANS : 1

59. How install all npm module
- A. sudo install
- B. sudo npm install
- C. node install
- D. None of above
- Ans : Option B

60. Which module is used for API documentation?
- A. morgan
- B. multer
- C. cors
- D. swagger
- Answer: D

61. What is the function used to remove all handlers for name events?
- a) deleteAllListeners(name)
- b) deleteListener(name,f)
- c) removeListener(name,f)
- d) removeAllListeners(name)
- Answer: d
- Explanation: The removeAllListeners(name) is used to remove all handlers from name events
represented as :
emitter.removeAllListeners(name)

62. How to test if two nodes are equal?
- A. isEqualNode()
- B. equal()
- C. ==
- D. none of the mentioned
- answer-A

63. Where is captured values are populated regarding route parameters?
- A. req.params object
- B. app.locals object
- C. req.data object
- D .none of above
- answer : A

64. In Nodejs how node based web servers differ from traditional web servers?
- A. Node based server uses a single threaded model and can serve much larger number of requests
compared to any traditional server like Apache HTTP Server.
- B. Node based server process request much faster than traditional server.
- C. There is no much difference between the two.
- D. All of the above
- Answer: A

65. Middleware functions can perform the task/s:
- A. Make changes to the request and the response objects.
- B. End the request-response cycle.
- C. Call the next middleware function in the stack.
- D. All of the Above
- Answer: Option D

66. What is Middleware in Express.js?
- A. A function that is invoked by the Express routing layer before the final request handler.
- B. A function that is invoked by the Express routing layer after the final request handler.
- C. None of these
- D. Both A and B
- Answer: Option A

67. Which of the following are not Node.js web application frameworks for?
- A) Express.js
- B) Geddy
- C) Aurelia
- D) Locomotive
- answer= C) Aurelia

68. Node.js is ________ by default.
- A. Synchronous
- B. Multi-threaded
- C. Asynchronous
- D. None of the above
- Answer-> C. Node.js is Asynchronous by default

69. How can we create chainable route handlers for a route path in ExpressJS app?
- A. Using app.route()
- B. Using app.router()
- C. Using app.routing()
- D. All of these
- Answer A

70. Q: In ExpressJS, the method app.all(path, callback [, callback ...]) can accept all HTTP methods
- A. True
- B. False
- C. Insufficient data
- D. None
- Answer: Option A

71. Why a Node.JS code is pretty fast although being written in JavaScript?
- A . Node.JS internally converts JavaScript code to Java based code and then execute the same
- B. Node.JS internally converts JavaScript code to C based code and then execute the same
- C. Being built on Google Chrome's V8 JavaScript Engine
- D. None of the above
- Answer: Option C

72. Which of the following command will show all the modules installed globally?
- A - $ npm ls -g
- B - $ npm ls
- C - $ node ls -g
- D - $ node ls
- Ans : A

73. In Nodejs how node based web servers differ from traditional web servers?
- A. Node based server uses a single threaded model and can serve much larger number of requests
compared to any traditional server like Apache HTTP Server.
- B. Node based server process request much faster than traditional server.
- C. There is no much difference between the two.
- D. All of the above
- Answer - A

74. Middleware functions can perform which of the following tasks:
- A. Execute any code.
- B. Make changes to the request and the response objects.
- C. End the request-response cycle.
- D. Call the next middleware in the stack.
- E. All of the above
- answer : E. all of the above as,
    - Middleware functions are functions that have access to the request object (req), the response object
(res), and the next function in the application’s request-response cycle. The next function is a
function in the Express router which, when invoked, executes the middleware succeeding the
current middleware.

75. Which is a fast c++ based javascript interpreter ?
- a) Node
- b) Sockets
- c) Processors
- d) Closures
- Answer- a (Node)
     - Explanation : Node.js is an open source, cross platform javascript run-time environment that
executes javascript code outside of a browser

76. From the following options indicate a correct association of the PROMPT, HEAD and RCPT
commands with protocols where they are used?
- a. HTTP, SMTP, FTP
- b. FTP, HTTP, SMTP
- c. HTTP, FTP, SMTP
- d. SMTP, HTTP, FTP
- ANSWER: FTP, HTTP, SMTP
     - Explanation:
PROMPT- This command is used in FTP
HEAD-used in HTTP asks for the response identical to the one that would correspond to a GET
request but with

77. A software that lies between the OS and the applications running on it.
- a) Firmware
- b) Middleware
- c) Utility Software
- d) Application Software
- Answer: b
     - Explanation: It is called as middleware. Middleware enables the interaction between the Operating
System and the applications running on it. out the response body.
RCPT- used by SMTP. It is used to establish the return address or return path.

78. A software that lies between the OS and the applications running on it.
- a) Firmware
- b) Middleware
- c) Utility Software
- d) Application Software
- Answer: b
     - Explanation: It is called as middleware. Middleware enables the interaction between the Operating
System and the applications running on it.

79. Questions- How to store local variables that can be access within the application?
- A. Using app.locals
- B. Using app.storage
- C. Using database
- D. Config file
- Answer:A

80. How Node.js modules are availble externally
- A.module.exports
- B.module.spread
- C.module.expose
- D.None of Above
- ANSWER-module.exports

81. Which of the following is a GUI-based debugging tool for Node.js?
- A. Core node debugger
- B. Console
- C. REPL
- D. Node Inspector
- Answer:D

82. Which of the following statement is false about space parameter in JSON.stringify()?
1. It controls spacing in resulting JSON strin
2. It is an optional parameter
3. It removes white spaces
4. All are false
 - Answer:3

83. Which of the following code will not throw an error?
- A. JSON.parse(”);
- B. JSON.parse(null);
- C. JSON.parse();
- D. JSON.parse({});
- Ans:B

83. Which of the following is true about __filename global object?
- A - The __filename represents the filename of the code being executed.
- B - The __filename represents the resolved absolute path of code file.
- C - Both of the above.
- D - None of the above.
- Answer : C

84. What function arguments are available to Express.js Route handlers?
- A. req - the request object
- B. res - the response object
- C. next
- D. All of the above
- Answer: Option D

85. What are the HTTP methods supported by REST?
- A. GET
- B. HEAD
- C. OPTIONS
- D. ALL OF THESE
- Answer: Option D
     - Explaination:
GET: It requests a resource at the request URL. It should not contain a request body as it will be
discarded. Maybe it can be cached locally or on the server.
HEAD: About the request URL it returns meta information.
OPTIONS: It indicates which techniques are supported.

86. why is API documentation so important?
- A.Saves Support Time and Costs
- B.Easier Maintenance
- C.Improved User Adoption
- D.All of the above
- Answer: DQ 

87. Which of the following module is used to upload files?
- A) multer
- B) morgan
- C) swagger
- D) nodemailer
- ANS : A) multer
     - Explanation :
multer : To upload files
morgan : for logging
swagger : documentation
nodemailer : to send emails

88. The $ npm ls statement is used to list down all the locally installed module?
- A. True
- B. False
- Answer:True

89. How many number of callback functions can be attached to handle a request ?
- A. Just one
- B. Unlimited
- Answer: Option B - Unlimited
90. How can we create chainable route handlers for a route path in ExpressJS app?
- A. Using app.route()
- B. Using app.router()
- C. Using app.routing()
- D. All of these
- Ans A

91. Whether you can use GET request instead of PUT to update/create a resource?
- A. YES
- B. NO
- Answer: Option B
     - Explaination:
No, you are not supposed to use PUT for GET. GET operations should only have view rights, while
PUT resource is used for updating a data.

92. Which of the following HTTP Status code means BAD REQUEST?
- A - 400
- B - 401
- C - 404
- D - 409
- Answer:400

93. Which of the following is true about readable stream?
- A. Readable stream is used for read operation
- B. Output of readable stream can be input to a writable stream
- C. Both of the above
- D. None of the above
- Answer- C

94. The $ npm ls -g statement is used to list down all the locally installed module?
- A. True
- B. False
- ANSWER: False

96. Which of the following Node object property returns the local part of the name of a node?
- a) lastName
- b) localName
- c) firstName
- d) objectname
- Answer: b
     - Explanation: The Node object property localName Returns the local part of the name of a node. If
the selected node is not an element or attribute, this property returns NULL.

97. Node.js is ________ by default.
- A. Synchronous
- B. Multi-threaded
- C. Asynchronous
- D. None of the above
- Answer: C
     - Explaination: Node js is bydefault asynchronous in nature

98. Which node type represents the root-node of the DOM tree?
- a) Document
- b) DocumentFragment
- c) DocumentType
- d) Entity
- Answer: a
     - Explanation: Everything inside an html document is classified in the form of different nodes. The
node type Document represents the root-node of the DOM tree, the entire document.

99. multer is a node.js middleware,which
- A. is used for handling multipart/form-data.
- B. adds a body object and a file or files object to the request object.
- C. accepts an options object, the most basic of which is the dest property,
- D. will rename the files so as to avoid naming conflicts.
- E.all of the above
- ANS : E, all of the above because 
   - A. as it is primarily used for uploading files.
   - B. The body object contains the values of the text fields of the form, the file or files object contains
the files uploaded via the form.
   - C. which tells Multer where to upload the files.
   - D. By default,The renaming function can be customized according to your needs.

100. Which of the following statement is valid to use a Node module fs in a Node based application?
- A - var fs = require("fs");
- B - var fs = import("fs");
- C - package fs;
- D - import fs;
- Answer : A
     - Explanation
  Require directive is used to load a Node module(fs) and store returned its instance(fs) into its
variable(fs).

101. How to install multer js module?
- A. npm install --save multer
- B. sudo npm install multer
- C. npm install multer --save
- D. All of the above
- Answer- D. All of the above

102. multer is a node.js middleware,which
- A. is used for handling multipart/form-data.
- B. adds a body object and a file or files object to the - request object. 
- C. accepts an options object, the most basic of which - is the dest property, 
- D. will rename the files so as to avoid naming - conflicts. 
- E.all of the above
- ANS : E, all of the above because 
- A. as it is primarily used for uploading files.
- B. The body object contains the values of the text fields of the form, the file or files object contains the files uploaded via the form.
- C. which tells Multer where to upload the files.
- D. By default,The renaming function can be customized according to your needs.

103. Middleware functions can perform which of the following tasks:

- A. Execute any code.
- B. Make changes to the request and the response objects.
- C. End the request-response cycle.
- D. Call the next middleware in the stack.
- E. All of the above
- answer : E. all of the above as,
Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle. The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.

104. _____is a great logging tool that anyone who works with HTTP servers in Node.js can use. it is a middleware that allows us to easily log requests, errors, and more to the console. It’s easy to use, but still powerful and customizable.

- a.nodemailer
- b.jwt
- c.morgan
- d.none

- ans: c ,morgan, we must include it using require method,and use method to make it functional,in use,we can state standard string format like combined,tiny to display log, or can make a customize string using callback function.

105. in node.js pool connection, is used reduce the time spent connecting to the MySQL server by reusing a previous connection, leaving them open instead of closing when you are done with them, ______ module need to be included, and ______ command is used to create a pool connection ?
- a. mysql, pool
- b. mysql2, pool
- c.mysql2, createPool
- d.mysql,createPool

- answer: c, we need to include myql2 driver/module and use createPool command for pool connection.

106. Which extension is used to save NodeJs files?

- A .js
- B .node
- C .java
- D .txt
- Ans .js

107. Which function is used to include modules in Node Js.

- A. include();
- B. require();
- C. attach();
- Ans B. require()

108. How Node.js modules are availble externally?

- A. module.exports
- B. module.spread
- C. module.expose
- D. None of Above
- Ans A. module.exports

109. What does the fs module stand for?

- A. File Service
- B. File System
- C. File Store
- Ans B. file system

110. Command to show installed version of Node?

- A. $ npm --version
- B. $ node --version
- C. $ npm getVersion
- D. $ node getVersion
- Ans B. $ node --version

111. Which of the following core module is used to create a web server in Node.js?

- A. fs
- B. os 
- C. http
- Ans C. http 

112.  How to import module in Node.js?

- A. Using require() function.
- B. Using module.import
- C. Using include() function
- D. Using app.use() function
- Ans  A. using require() function

113. 7. Which Angular directive is used to binds the value of HTML controls (input, select, textarea) to application data?
- A. ng-cloak
- B. ng-bind
- C.  ng-model
- D. ng-blur
- Answer D. ng-model