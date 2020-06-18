/**
 * @fileoverview Tests for ReactDOM.findDOMNode() usage rule.
 * @author Ron Perris
 */

"use strict";

// -----------------------------------------------------------------------------
// Requirements
// -----------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-find-dom-node");
const { RuleTester } = require("eslint");
const message = require("../../../shared/messages")["no-find-dom-node"];

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

ruleTester.run("no-find-dom-node", rule, {
  valid: [{ code: "foo()" }],
  invalid: [
    {
      code: "findDOMNode()",
      errors: [{ message }],
    },
    {
      code: "ReactDOM.findDOMNode()",
      errors: [{ message }],
    },
  ],
});
