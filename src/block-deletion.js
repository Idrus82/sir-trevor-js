"use strict";

var config = require('./config');

var BlockDeletion = function() {
  this._ensureElement();
  this._bindFunctions();
};

Object.assign(BlockDeletion.prototype, require('./function-bind'), require('./renderable'), {

  tagName: 'a',
  className: 'st-block-ui-btn__delete st-block__button st-block__button--delete'

});

module.exports = BlockDeletion;
