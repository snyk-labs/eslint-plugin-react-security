/**
 * @file Defines helper function for documentation URLs.
 * @author Ron Perris
 */

"use strict";

/**
 * Returns documentation url for rule.
 * @params {String} rule - Rule name.
 * @returns {String} URL for rule documentation.
 */
function docs(rule) {
  return `https://github.com/snyk-labs/eslint-plugin-react-security/tree/master/docs/rules/${rule}.md`;
}

module.exports = docs;
