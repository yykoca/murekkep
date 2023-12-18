/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        laptop: "url('/assets/laptop.jpg')",
        flower: "url('/assets/flower.jpg')",
        desk: "url('/assets/desk.jpg')",
        profile: "url('/assets/profile.jpg')",
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
