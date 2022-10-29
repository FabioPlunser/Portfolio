/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: null,
          },
        },
      },
    },
  },
  typography: (theme) => ({
    default: {
      css: {
        pre: {
          color: theme("colors.grey.1000"),
          backgroundColor: theme("colors.grey.100"),
        },
        "pre code::before": {
          "padding-left": "unset",
        },
        "pre code::after": {
          "padding-right": "unset",
        },
        code: {
          backgroundColor: theme("colors.grey.100"),
          color: "#DD1144",
          fontWeight: "400",
          "border-radius": "0.25rem",
        },
        "code::before": {
          content: '""',
          "padding-left": "0.25rem",
        },
        "code::after": {
          content: '""',
          "padding-right": "0.25rem",
        },
      },
    },
  }),
  plugins: [require("@tailwindcss/typography"), require("daisyui"), require('tailwindcss-textshadow')],
};
