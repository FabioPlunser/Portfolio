const daisyui = require("daisyui");
const typography = require("@tailwindcss/typography");
const forms = require("@tailwindcss/forms");

/** @type {import('tailwindcss').Config}*/
const config = {
    content: ["./src/**/*.{html,js,svelte,ts}"],

    theme: {
        extend: {
            typography: (theme) => ({
                "custom": {
                    css: {
                        color: theme("colors.white"),
                        a: {
                            color: theme("colors.gray.700"),
                        },
                        h1: {
                            color: theme("colors.white"),
                        },
                        h2: {
                            color: theme("colors.white"),
                        },
                        h3: {
                            color: theme("colors.white"),
                        },
                        h4: {
                            color: theme("colors.white"),
                        },
                        h5: {
                            color: theme("colors.white"),
                        },
                        ul: {
                            color: theme("colors.white"),
                            li: {
                                color: theme("colors.white"),
                            }
                        },
                    }
                }
            }),
        },

    },

    plugins: [forms, typography, daisyui],

    daisyui: {
        themes: ["light", "dark", "night"],
    },
};

module.exports = config;
