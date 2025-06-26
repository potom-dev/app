import { isWeb } from '@gluestack-ui/nativewind-utils/IsWeb';
import { tva } from '@gluestack-ui/nativewind-utils/tva';

const baseStyle = isWeb
  ? 'font-body tracking-sm my-0 bg-transparent border-0 box-border display-inline list-none margin-0 padding-0 position-relative text-start no-underline whitespace-pre-wrap word-wrap-break-word'
  : '';

export const textStyle = tva({
  base: `text-tx font-body ${baseStyle}`,
  variants: {
    isTruncated: {
      true: 'web:truncate',
    },
    bold: {
      true: 'font-bold',
    },
    underline: {
      true: 'underline',
    },
    strikeThrough: {
      true: 'line-through',
    },
    size: {
      'xs': 'text-xs',
      'sm': 'text-sm',
      'md': 'text-base',
      'code': 'text-code',
    },
    sub: {
      true: 'text-xs',
    },
    italic: {
      true: 'italic',
    },
  },
});
