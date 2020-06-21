/**
 * @fileoverview Tests for javascript: urls in JSX rule.
 * @author Ron Perris
 */

"use strict";

// -----------------------------------------------------------------------------
// Requirements
// -----------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-javascript-urls");
const { RuleTester } = require("eslint");
const message = require("../../../shared/messages")["no-javascript-urls"];

const parserOptions = {
  ecmaVersion: 2018,
  sourceType: "module",
  ecmaFeatures: {
    jsx: true,
  },
};

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

const ruleTester = new RuleTester({ parserOptions });

ruleTester.run("no-javascript-urls", rule, {
  valid: [{ code: '<Link to={ "javascript:alert(1)" } />' }],
  invalid: [
    {
      code: '<a href="javascript:alert(1)"/>',
      errors: [{ message }],
    },
  ],
});
