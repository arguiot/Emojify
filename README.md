# Catch
A small library to keep track of errors after deployment.

## Why?

Example of a situation:
> After you released your fancy new website, some people will start to send you emails about a bug that you never experienced. Unfortunately, these persons aren't developers and have no idea of what the inspector is, so you can't ask them to take a screenshot of the error. And because of that, this error will always happen to some people, which is a big issue.

Catch was created to fix that. You can detect errors, and send a fetch request with the content of the error and additional information.

# Installation

### NodeJS

> Open a terminal

```bash
npm i catch.js
```

> Now in your NodeJS file

```js
const d = require("catch.js")(err => {
	// Do something when there is an error
})
```

### Browser

> At the end of your `<body>` tag

```html
<!-- Make sure this is the first script to be loaded -->
<script src="https://unpkg.com/catch.js"></script>
```

> In your JavaScript file

```js
const d = new Catch(err => {
	// Do something when there is an error
})
```

# Error Object
When there is an error, Catch will automatically run a function and it will pass it an object. Here are all its properties:

### NodeJS
- `err`: The error message (String)
- `time`: When the error was thrown (String)

### Browser
- `err`: The error message (String)
- `src`: The file that thrown the error
- `line`: The line where the error was thrown
- `column`: The column where the error was thrown
- `errObj`: A native `ErrorObject` that contains all the information about the error.
- `time`: When the error was thrown (String)
- `userAgent`: Browser version and information

# Additional notes
I recommend using `html2canvas` in addition to this library to get a screenshot of the website.

You can also access all the previous errors using the `.errors` property.
---
## Support
ProType is a project that required a lot of work and effort. You can show your appreciation by leaving a ⭐️. But you can also contribute in a 'financial' way by giving to my [Patreon](https://www.patreon.com/bePatron?u=10987869)

## Contributing

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/arguiot/ProType/tags).

## Authors

- **Arthur Guiot** - *Initial work* - [@arguiot](https://github.com/arguiot)

See also the list of [contributors](https://github.com/arguiot/ProType/contributors) who participated in this project. If you don't code but you have great ideas, don't hesitate to write your idea in the issue part. If your idea is accepted, I will add you to this list 😊.
<dl>
  <dt>Thank You</dt>
  <dd>for support</dd>


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Copyright &copy; 2017 Arthur Guiot All Rights Reserved.
