/**
 * @file Gathers all the ESLint rules and exports them on one object.
 * @author Ron Perris
 */

"use strict";

module.exports.rules = require("requireindex")(`${__dirname}/rules`);
