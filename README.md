### DEPRICATED: I am no longer maintaining this, and it could be faulty.

# Winston SumoLogic Transport

[![Build Status](https://travis-ci.org/gwing33/winston-sumologic.svg)](https://travis-ci.org/gwing33/winston-sumologic)

Transport for Winston to a "preferred" SumoLogic log format. See [here for details.](https://service.sumologic.com/help/Default.htm#JSON_Operator.htm%3FTocPath%3DSearch%7COperators%7C_____16)

Most of the code was pulled from the default [File.js](https://github.com/flatiron/winston/blob/master/lib%2Fwinston%2Ftransports%2Ffile.js) code, just changed the way it's formatted.


## Options

- **silent:** Boolean flag indicating whether to suppress output.
- **filename:** The filename of the logfile to write output to.
- **maxsize:** Max size in bytes of the logfile, if the size is exceeded then a new file is created.
- **maxFiles:** Limit the number of files created when the size of the logfile is exceeded.
- **stream:** The WriteableStream to write output to.

```js
var WinstonSumoLogic = require('winston-sumologic');

new WinstonSumoLogic({
  filename: 'error.log'
});
```

## Log output format
```
2014-11-18T21:55:11.241Z ERROR [project-name] {"some":"data","is":false}
2014-11-18T21:55:11.241Z INFO [project-name-metric] {"some":"data","is":true}
```
