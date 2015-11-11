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
