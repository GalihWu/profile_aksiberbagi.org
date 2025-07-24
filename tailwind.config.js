/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'tosca-primary': '#19B697',
        'tosca-200': '#75D3C1',
        'tosca-100': '#DDF5F3',
        'cyan-primary': '#15BBDA',
        'cyan-200': '#73D6E9',
        'gray-primary': '#4C4C4C',
        'orange-primary': '#fd6938',
      },
    },
  },
  // corePlugins: {
  //   preflight: false, // Disables Tailwind CSS resets if unnecessary
  // },
  plugins: [],
};
export default config;
