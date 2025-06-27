import gluestackPlugin from '@gluestack-ui/nativewind-utils/tailwind-plugin';

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: ["app/**/*.{tsx,jsx,ts,js}", "components/**/*.{tsx,jsx,ts,js}"],
  presets: [require('nativewind/preset')],
  safelist: [
    {
      pattern:
        /(bg|border|text|stroke|fill)-(primary|secondary|tertiary|error|success|warning|info|typography|outline|background|indicator)-(0|50|100|200|300|400|500|600|700|800|900|950|white|gray|black|error|warning|muted|success|info|light|dark|primary)/,
    },
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary)/<alpha-value>)',
        tx: 'rgb(var(--color-tx)/<alpha-value>)',
        'tx-2': 'rgb(var(--color-tx-2)/<alpha-value>)',
        'tx-on-primary': 'rgb(var(--color-tx-on-primary)/<alpha-value>)',
        'tx-on-void': 'rgb(var(--color-tx-on-void)/<alpha-value>)',
        'tx-2-on-void': 'rgb(var(--color-tx-2-on-void)/<alpha-value>)',
        bg: 'rgb(var(--color-bg)/<alpha-value>)',
        'bg-2': 'rgb(var(--color-bg-2)/<alpha-value>)',
        void: 'rgb(var(--color-void)/<alpha-value>)',
        ui: 'rgb(var(--color-ui)/<alpha-value>)',
        'ui-2': 'rgb(var(--color-ui-2)/<alpha-value>)',
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Space Grotesk', 'sans-serif'],
        mono: undefined,
        roboto: ['Roboto', 'sans-serif'],
      },
      fontWeight: {
        extrablack: '950',
      },
      fontSize: {
        sm: ['16px', '24px'],
        base: ['20px', '28px'],
        md: ['20px', '28px'],
        lg: ['24px', '32px'],
        code: ['54px', '64px'],
      },
      boxShadow: {
        'hard-1': '-2px 2px 8px 0px rgba(38, 38, 38, 0.20)',
        'hard-2': '0px 3px 10px 0px rgba(38, 38, 38, 0.20)',
        'hard-3': '2px 2px 8px 0px rgba(38, 38, 38, 0.20)',
        'hard-4': '0px -3px 10px 0px rgba(38, 38, 38, 0.20)',
        'hard-5': '0px 2px 10px 0px rgba(38, 38, 38, 0.10)',
        'soft-1': '0px 0px 10px rgba(38, 38, 38, 0.1)',
        'soft-2': '0px 0px 20px rgba(38, 38, 38, 0.2)',
        'soft-3': '0px 0px 30px rgba(38, 38, 38, 0.1)',
        'soft-4': '0px 0px 40px rgba(38, 38, 38, 0.1)',
      },
      height: {
        ios: '852px',
      },
      width: {
        ios: '393px',
      },
      borderRadius: {
        ios: '65px',
      },
    },
  },
  plugins: [gluestackPlugin],
};
