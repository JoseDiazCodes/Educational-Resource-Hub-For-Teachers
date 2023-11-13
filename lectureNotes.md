# Line by line tit for tat. (Lecture = Savage-Auth Edition)

### Passpor JS module

- Handles all of my user authentication
  [Passport Website](passportjs.org)
- Website tells you how to use any strategy to login using facebook and google etc.
- The code is not written from scratch. C&P code from website
- Its the middleware and glue so you have to figure out how to bridge it into the code.

## Routes.js

- Controller that handles all the apis that are coming in.
- Separated from the Server.js because it makes some abstraction and allows you to go look for something. 'is it a server error or an abstraction error?'

---

### Lecture

- We wont use MongoClient we will be using Mongoose going forward.
- morgan is how we keep a log of what is going on.
- cookieParser allows us to see if a user is logged in still.
- configDB is just how we grab our database information.
- bodyParser is deprecated.
- Session secret can be anything as long as its not empty.

- Models and Schemas help us managing MongoDb and keeping our documents consistent. Keeping things tight and consistent.

- bcrypt is used to hash the passwords just incase we get hacked.
