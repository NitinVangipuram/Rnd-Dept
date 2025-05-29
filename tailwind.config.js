// tailwind.config.js
module.exports = {
    content: [
      "./node_modules/flowbite/**/*.js", // Add this line
      "./src/**/*.{html,js,jsx,ts,tsx}", // Your project paths
    ],
    theme: {
      extend: {},
    },
    plugins: [
      require('flowbite/plugin'),
    ],
  }
  