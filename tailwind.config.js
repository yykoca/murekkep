/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        laptop: "url('/assets/laptop-4840790_1280.jpg')",
        flower: "url('/assets/flower-4210320_1920.jpg')",
        desk: "url('/assets/desk-1869579_1920.jpg')",
        profile: "url('/assets/profile.jpg')",
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
