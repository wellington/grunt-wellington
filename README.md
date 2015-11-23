grunt-wellington
================

[![NPM](https://nodei.co/npm/grunt-wellington.png)](https://nodei.co/npm/grunt-wellington/)

A Grunt wrapper for [Wellington](http://getwt.io/)

grunt-wellington does not currently build wellington.  Be sure to install wellington prior to using this tool: [Wellington Install](https://github.com/wellington/wellington#installation)

## Getting Started
If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-wellington --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-wellington');
```

## Wellington Task
Run this task with the `grunt wellington` command.

### Options
All of these options are taken from the list of available commands in the [Wellington project](https://github.com/wellington/wellington/#available-commands).

#### b

Type: `String`

Path to target directory to place generated CSS, relative paths inside project directory are preserved


#### comment

Type: `Boolean`

Turn on source comments


#### c

Type: `String`

Temporarily disabled: Location of the config file


#### debug

Type: `Boolean`


Show detailed debug information


#### d

Type: `String`


Path to locate images for spriting and image functions


#### font

Type: `String`

Path to directory containing fonts


#### gen

Type: `String`

Path to place generated images


#### no-line-comments

Type: `Boolean`

UNSUPPORTED: Disable line comments


#### p

Type: `String`

Path to directory containing Sass stylesheets


#### relative-assets

Type: `Boolean`

UNSUPPORTED: Make compass asset helpers generate relative urls to assets.


#### s

Type: `String`

nested style of output CSS
available options: `nested`, `expanded`, `compact`, `compressed`


#### time

Type: `Boolean`

Retrieve timing information

## Usage Examples

### Basic configuration

```
wellington: {
	your_target: {
		src: [
			'sass/**/*.scss'
		],
		options: {
			p: 'sass',
			b: 'build/css',
			d: 'img/sass',
			font: 'font-face',
			gen: 'build/img'
		}
	}
}
```
