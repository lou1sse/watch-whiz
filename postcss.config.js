/* eslint-disable no-param-reassign */
import tailwindcss from "tailwindcss"
import autoprefixer from "autoprefixer"

export default {
  plugins: [
    tailwindcss,
    autoprefixer,
    {
      postcssPlugin: "postcss-modules-values-replace",
      Once(root, { result }) {
        if (result.opts.from.endsWith(".scss")) {
          root.walkRules((rule) => {
            rule.selector = rule.selector.replace(/-(\w)/g, (_, letter) =>
              letter.toUpperCase()
            )
          })
        }
      }
    }
  ]
}
