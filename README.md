# Clean-response
## Description
This project help you to response your data from backend to frontend more clear.

## Installation

```bash
$ npm install clean-response
```

## How to Use 
First you add project the file.

```js
const SuccessResponse = require("clean-response")
```

You must give data and status code that you will return to frontend.There is example below.First field should be status code.SuccessResponse will understand which status code is used thus you can use all status code here.Second field should be data that you want to response to frontend.Finally you must call dataResult function.
```js
var data = {
    name: "emin",
    surname: "oz",
    email: "example@gmail.com",
    contury: "turkey",
    hobbies: ["cooking", "learn new languages", "travel"],
};

const response = new SuccessResponse(201, data).dataResult()
```
Frontend will see this clean data.There are all information that frontend need such as data, status message, status code etc. Now frontend handle that data more easily.
```js
{
  success: true,
  statusCode: 201,
  message: 'Created',
  data: {
    name: 'emin',
    surname: 'oz',
    email: 'example@gmail.com',
    country: 'turkey',
    hobbies: [ 'cooking', 'learn new languages', 'travel' ]
  }
}
```
### Error Response
This packege use for error response as well.Here the example. Firstly ErrorResponse is added

```js
const ErrorResponse = require("clean-response")
```
You can give all error status code and the call the dataResult function.
```js
const response = new ErrorResponse(400).dataResult()
```
Frontend will see this clean data.
```js
{ success: false, statusCode: 400, message: 'Bad Request' }
```
