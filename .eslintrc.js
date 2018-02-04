module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    rules: {
        "react/jsx-filename-extension": 0,
        "react/prop-types": 0,
        "jsx-a11y/anchor-is-valid": 0,
        "jsx-a11y/href-no-hash": 0,
        "react/prefer-stateless-function": 0,
        "no-use-before-define": 0
    },
    globals: {
        "document": 1
    },
    parser: "babel-eslint",
    env: {
        browser: 1,
    },
};