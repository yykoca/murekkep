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
    },
    fontFamily: {
      'body': ['"Open Sans"'],
      'display': ['Oswald'],
      'amita': ['Amita'],
      'bree': ['"Bree serif"'],
      'kings': ['"Kings"'],
      'sans': ['Exo\\ 2'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'ubuntu': ['"Ubuntu"'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'lightyellow': '#f8ecc6',
      'graycolor': '#f6f6f4',
      'darkblue': '#1f1b16'
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
