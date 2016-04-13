"use strict";

var config = require('../config');

module.exports = ({title, type, icon_name}) => {
  return `
    <button class="st-block-controls__button st-block__button st-block__button--${type}" data-type="${type}" type="button">
      ${title()}
    </button>
  `;
};
