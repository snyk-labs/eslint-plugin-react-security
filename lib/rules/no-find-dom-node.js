/**
 * @file Rule to detect usage of ReactDOM.findDOMNode().
 * @author Ron Perris
 */

"use strict";

// -----------------------------------------------------------------------------
// Requirements
// -----------------------------------------------------------------------------

const docs = require("../util/docs");

const message = require("../../shared/messages")["no-find-dom-node"];

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    type: "suggestion",

    docs: {
      description: "Detect usage of ReactDOM.findDOMNode().",
      category: "Security",
      recommended: true,
      url: docs("no-find-dom-node"),
    },
  },
  create: function (context) {
    return {
      CallExpression: function (node) {
        if (node.callee.name === "findDOMNode") {
          return context.report(node, message);
        }

        if (
          node.callee.property &&
          node.callee.property.name === "findDOMNode"
        ) {
          return context.report(node, message);
        }
      },
    };
  },
};
