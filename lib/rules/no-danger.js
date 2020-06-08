/**
 * @fileoverview Rule to detect usage of dangerouslySetInnerHTML.
 * @author Ron Perris
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    type: "suggestion",

    docs: {
      description: "detect usage of dangerouslySetInnerHTML prop",
      category: "Security",
      recommended: true,
      url: "https://github.com/snyk-labs/eslint-plugin-react-security",
    },
    schema: [], // no options
  },
  create: function (context) {
    return {
      JSXAttribute: function (node) {
        const prop = node.name.name;

        if (prop === "dangerouslySetInnerHTML") {
          context.report(node, "dangerous prop usage detected");
        }
      },
    };
  },
};
