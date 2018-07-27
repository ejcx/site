const Mustache = require("mustache")
const pageTemplate = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="index.css">
  <title>Welcome to my greetings service!</title>
</head>
<body>
{{message}}
</body>
`

function page(message) {
  return Mustache.render(pageTemplate, {message:message});
}

module.exports = {
  page: page
};

