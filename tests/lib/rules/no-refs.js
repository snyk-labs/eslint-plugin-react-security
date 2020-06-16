/**
 * @fileoverview Tests for JSX ref prop usage rule.
 * @author Ron Perris
 */

"use strict";

// -----------------------------------------------------------------------------
// Requirements
// -----------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-refs");
const { RuleTester } = require("eslint");
const message = require("../../../shared/messages")["no-refs"];

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

ruleTester.run("no-refs", rule, {
  valid: [{ code: '<div className="bar"></div>;' }],
  invalid: [
    {
      code: "<div ref={ this.myRef }></div>;",
      errors: [{ message }],
    },
  ],
});
