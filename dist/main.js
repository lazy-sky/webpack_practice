"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));

var a = 1;

var abc = function abc() {
  console.log(a);
};

var b = [1, 2, 3];
(0, _includes["default"])(b).call(b, 2);