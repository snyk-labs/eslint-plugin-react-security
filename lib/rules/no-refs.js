/**
 * @file Rule to detect usage of dangerouslySetInnerHTML prop.
 * @author Ron Perris
 */

"use strict";

// -----------------------------------------------------------------------------
// Requirements
// -----------------------------------------------------------------------------

const docs = require("../util/docs");

const message = require("../../shared/messages")["no-refs"];

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    type: "suggestion",

    docs: {
      description: "Detect usage of ref prop.",
      category: "Security",
      recommended: true,
      url: docs("no-dangerously-set-innerhtml"),
    },
  },
  create: function (context) {
    return {
      JSXAttribute: function (node) {
        const prop = node.name.name;

        if (prop === "ref") {
          context.report(node, message);
        }
      },
    };
  },
};
