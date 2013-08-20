# grunt-package-sync

> A grunt plugin to sync properties across multiple package.json files

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install https://github.com/jleonard/grunt-package-sync/archive/master.tar.gz --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-package-sync');
```

## The "package_sync" task

### Overview
In your project's Gruntfile, add a section named `package_sync` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
package_sync: {
      package: {
        options: {
          master: "../package.json",
          properties: [
            "name",
            "description",
            "repository",
            "maintainers",
            "contributors",
            "homepage"
          ]
        },
        files: {
          "default" : ['../docs/package.json','../grunt/package.json','../bower.json']
        }
      },
      grunt:{
        options: {
          master: "package.json",
          properties:["version"]
        },
        files: {
          "default" : ["../docs/package.json","../bower.json","../package.json"]
        }
      }
    }
})
```

### Options

#### master
Type: `String`  

The master package.json file to sync properties from.

#### files
Type: `String`

The list of package.json files to sync properties to.

