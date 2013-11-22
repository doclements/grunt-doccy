[![Build Status](https://travis-ci.org/doclements/grunt-doccy.png?branch=master)](https://travis-ci.org/doclements/grunt-doccy)


# grunt-doccy

> A grunt task for generating documentation using doccy from https://github.com/jackfranklin/doccy

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command (currently not on npm repository):

```shell
npm install git+https://github.com/doclements/grunt-doccy.git --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-doccy');
```

## The "doccy" task

### Overview
In your project's Gruntfile, add a section named `doccy` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  doccy: {
    sub_task: {
      options: {
        // currently no optionas available but will be used in future
      },
      src: // list or directoryies or files for your src ,
      dest: // directory where the generated docs will be placed, one per src file
    }
  },
})
```

### Options

#### None available yet

### Usage Examples

#### Basic Use
In this example all files matching the `'src/*.js'` glob will be doccy-fied.  Each src file will have a corresponding .md file generated

```js
grunt.initConfig({
  doccy: {
     basic : {
      options: {},
      src: ['src/*.js'],
      dest: 'doc'
    }
  },
})
```



## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
