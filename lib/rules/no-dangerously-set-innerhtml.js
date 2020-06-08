/**
 * @file Rule to detect usage of dangerouslySetInnerHTML prop.
 * @author Ron Perris
 */

"use strict";

// -----------------------------------------------------------------------------
// Requirements
// -----------------------------------------------------------------------------

const docs = require("../util/docs");

const message = require("../../shared/messages")[
  "no-dangerously-set-innerhtml"
];

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    type: "suggestion",

    docs: {
      description: "Detect usage of dangerouslySetInnerHTML prop.",
      category: "Security",
      recommended: true,
      url: docs("no-dangerously-set-innerhtml"),
    },
  },
  create: function (context) {
    return {
      JSXAttribute: function (node) {
        const prop = node.name.name;

        if (prop === "dangerouslySetInnerHTML") {
          context.report(node, message);
        }
      },
    };
  },
};
