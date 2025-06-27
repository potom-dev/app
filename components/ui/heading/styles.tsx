import { isWeb } from '@gluestack-ui/nativewind-utils/IsWeb';
import { tva } from '@gluestack-ui/nativewind-utils/tva';
const baseStyle = isWeb
  ? 'font-heading tracking-sm bg-transparent border-0 box-border display-inline list-none margin-0 padding-0 position-relative text-start no-underline whitespace-pre-wrap word-wrap-break-word'
  : '';

export const headingStyle = tva({
  base: `text-tx font-bold font-heading text-lg my-0 ${baseStyle}`,
  variants: {
    truncate: {
      true: 'truncate',
    },
  },
});
