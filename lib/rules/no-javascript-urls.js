/**
 * @file Rule to detect javascript: urls in JSX.
 * @author Ron Perris
 */

"use strict";

// -----------------------------------------------------------------------------
// Requirements
// -----------------------------------------------------------------------------

const docs = require("../util/docs");

const message = require("../../shared/messages")["no-javascript-urls"];

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

function isJavaScriptURL(prop) {
  console.log(prop);
  const url = new URL(prop);

  if (url.protocol !== "javascript:") return false;

  return true;
}

function isAnchor(name) {
  if (name === "a") return true;
}

function isHref(name) {
  if (name === "href") return true;
}

module.exports = {
  meta: {
    type: "suggestion",

    docs: {
      description: "Detect usage of javascript: urls in JSX.",
      category: "Security",
      recommended: true,
      url: docs("no-javascript-urls"),
    },
  },
  create: function (context) {
    return {
      JSXAttribute: function (node) {
        if (!isAnchor(node.parent.name.name)) return;
        if (!isHref(node.name.name)) return;

        if (isJavaScriptURL(node.value.value)) {
          return context.report(node, message);
        }
      },
    };
  },
};
