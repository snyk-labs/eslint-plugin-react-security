/**
 * @fileoverview Tests for no-dangerously-set-innerhtml rule.
 * @author Ron Perris
 */

"use strict";

// -----------------------------------------------------------------------------
// Requirements
// -----------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-dangerously-set-innerhtml");
const { RuleTester } = require("eslint");
const message = require("../../../shared/messages")[
  "no-dangerously-set-innerhtml"
];

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

ruleTester.run("no-dangerously-set-innerhtml", rule, {
  valid: [{ code: '<div className="bar"></div>;' }],
  invalid: [
    {
      code: '<div dangerouslySetInnerHTML={{ __html: "" }}></div>;',
      errors: [{ message }],
    },
  ],
});
