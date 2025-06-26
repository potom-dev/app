'use client';
import { vars } from 'nativewind';

export const config = {
  light: vars({
    '--color-primary': '255 84 2',

    '--color-tx': '0 0 0',
    '--color-tx-2': '111 110 105',
    '--color-tx-on-primary': '255 255 255',

    '--color-tx-on-void': '255 255 255',
    '--color-tx-2-on-void': '183 181 172',

    '--color-bg-rgb': 'rgb(255 255 255)',
    '--color-bg': '255 255 255',
    '--color-bg-2': '238 238 238',

    '--color-void': '0 0 0',

    '--color-ui': '230 228 217',
    '--color-ui-2': '218 216 206',
  }),
  dark: vars({
    '--color-primary': '255 84 2',

    '--color-tx': '206 205 195',
    '--color-tx-2': '135 133 128',
    '--color-tx-on-primary': '255 255 255',

    '--color-tx-on-void': '255 255 255',
    '--color-tx-2-on-void': '183 181 172',

    '--color-bg-rgb': 'rgb(28 27 26)',
    '--color-bg': '28 27 26',
    '--color-bg-2': '40 39 38',

    '--color-void': '0 0 0',

    '--color-ui': '52 51 49',
    '--color-ui-2': '64 62 60',
  }),
};
