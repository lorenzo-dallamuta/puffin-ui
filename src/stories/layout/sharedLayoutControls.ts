import type { InputType } from "storybook/internal/csf";

export const layoutArgTypes: Record<string, InputType> = {
  p: {
    type: 'string',
    description: 'suggested values are: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9',
    table: { defaultValue: { summary: '0' } }
  },
  px: {
    type: 'string',
    description: 'suggested values are: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9',
    table: { defaultValue: { summary: '0' } }
  },
  py: {
    type: 'string',
    description: 'suggested values are: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9',
    table: { defaultValue: { summary: '0' } }
  },
  pt: {
    type: 'string',
    description: 'suggested values are: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9',
    table: { defaultValue: { summary: '0' } }
  },
  pr: {
    type: 'string',
    description: 'suggested values are: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9',
    table: { defaultValue: { summary: '0' } }
  },
  pb: {
    type: 'string',
    description: 'suggested values are: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9',
    table: { defaultValue: { summary: '0' } }
  },
  pl: {
    type: 'string',
    description: 'suggested values are: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9',
    table: { defaultValue: { summary: '0' } }
  },
  width: {
    type: 'string',
    table: { defaultValue: { summary: 'auto' } }
  },
  minWidth: {
    type: 'string',
    table: { defaultValue: { summary: 'auto' } }
  },
  maxWidth: {
    type: 'string',
    table: { defaultValue: { summary: 'auto' } }
  },
  height: {
    type: 'string',
    table: { defaultValue: { summary: 'auto' } }
  },
  minHeight: {
    type: 'string',
    table: { defaultValue: { summary: 'auto' } }
  },
  maxHeight: {
    type: 'string',
    table: { defaultValue: { summary: 'auto' } }
  },
  position: {
    control: 'inline-radio',
    options: ['static', 'relative', 'absolute', 'fixed', 'sticky'],
    table: { defaultValue: { summary: 'static' } }
  },
  inset: {
    type: 'string',
    description: 'suggested values are: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, -1, -2, -3, -4, -5, -6, -7, -8, -9',
    table: { defaultValue: { summary: '0' } }
  },
  top: {
    type: 'string',
    description: 'suggested values are: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, -1, -2, -3, -4, -5, -6, -7, -8, -9',
    table: { defaultValue: { summary: '0' } }
  },
  right: {
    type: 'string',
    description: 'suggested values are: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, -1, -2, -3, -4, -5, -6, -7, -8, -9',
    table: { defaultValue: { summary: '0' } }
  },
  bottom: {
    type: 'string',
    description: 'suggested values are: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, -1, -2, -3, -4, -5, -6, -7, -8, -9',
    table: { defaultValue: { summary: '0' } }
  },
  left: {
    type: 'string',
    description: 'suggested values are: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, -1, -2, -3, -4, -5, -6, -7, -8, -9',
    table: { defaultValue: { summary: '0' } }
  },
  overflow: {
    control: 'inline-radio',
    options: ['visible', 'hidden', 'clip', 'scroll', 'auto'],
    table: { defaultValue: { summary: 'visible' } }
  },
  overflowX: {
    control: 'inline-radio',
    options: ['visible', 'hidden', 'clip', 'scroll', 'auto'],
    table: { defaultValue: { summary: 'visible' } }
  },
  overflowY: {
    control: 'inline-radio',
    options: ['visible', 'hidden', 'clip', 'scroll', 'auto'],
    table: { defaultValue: { summary: 'visible' } }
  },
  flexBasis: {
    type: 'string',
    table: { defaultValue: { summary: 'auto' } }
  },
  flexShrink: {
    type: 'string',
    description: 'suggested values are: 0, 1',
    table: { defaultValue: { summary: '1' } }
  },
  flexGrow: {
    type: 'string',
    description: 'suggested values are: 0, 1',
    table: { defaultValue: { summary: '0' } }
  },
  gridArea: {
    type: 'string',
    table: { defaultValue: { summary: 'auto' } }
  },
  gridColumn: {
    type: 'string',
    table: { defaultValue: { summary: 'auto' } }
  },
  gridColumnStart: {
    type: 'string',
    table: { defaultValue: { summary: 'auto' } }
  },
  gridColumnEnd: {
    type: 'string',
    table: { defaultValue: { summary: 'auto' } }
  },
  gridRow: {
    type: 'string',
    table: { defaultValue: { summary: 'auto' } }
  },
  gridRowStart: {
    type: 'string',
    table: { defaultValue: { summary: 'auto' } }
  },
  gridRowEnd: {
    type: 'string',
    table: { defaultValue: { summary: 'auto' } }
  },
};