// const express = require("express")
// var app = express()
// app.get("/",function(request,response){
// response.send("Hello World!")
// })
// app.listen(3000, function () {
// console.log("Started application on port %d", 3000)
// });

//throw new Error('error');

try {
    foo();
  } catch (e) {
    if (e instanceof RangeError) {
      console.error(`${e.name} - ${e.message}`)
    }
  }

  class CustomError extends Error {
    constructor(foo = 'bar', ...params) {
      super(...params)
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, CustomError)
      }
      this.name = 'CustomError'    
      this.foo = foo
      this.date = new Date()
    }
  }

  try {
    throw new CustomError('baz');
  } catch (e) {  
    if (e instanceof CustomError) {
      console.error(`${e.name} - ${e.foo}`)
    }
  }

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res, next) => {
  try {
    throw new Error('error')
    res.send('hello world')
  } catch (err) {
    next(err)
  }
});
app.use((err, req, res, next) => {
  res.send('error occurred')
})
app.listen(3000, () => console.log('server started'));

// const express = require('express');
// const bodyParser = require('body-parser');
// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger.json');
// const app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.get('/', (req, res, next) => {
//   res.send('hello world')
// });
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// app.listen(3000, () => console.log('server started'));
