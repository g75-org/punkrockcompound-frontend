module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#243c5a',
        secondary: '#9CA3AF',
        accent: '#243c5a',
        danger: '#991B1B',
        warning: '#F59E0B',
      },
    },
    fontFamily: {
      sans: [
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe\\ UI',
        'Roboto',
        'Helvetica\\ Neue',
        'Arial',
        'Noto\\ Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe\\ UI\\ Emoji',
        'Segoe\\ UI\\ Symbol',
        'Noto\\ Color\\ Emoji',
      ],
      serif: [
        'ui-serif',
        'Georgia',
        'Cambria',
        'Times\\ New\\ Roman',
        'Times',
        'serif',
      ],
      mono: [
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation\\ Mono',
        'Courier\\ New',
        'monospace',
      ],
      heading: [],
      accent: [],
      body: [],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
