import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { Flex } from '../../atoms/layout/Flex';
import { layoutArgTypes } from './sharedLayoutControls';

const meta = {
  title: 'Layout/Flex',
  component: Flex,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    as: { control: 'radio', options: ['div', 'span', undefined], if: { arg: 'asChild', truthy: false }, table: {defaultValue: {summary: 'div'}} },
    asChild: { control: 'boolean', type: 'boolean', if: { arg: 'as', truthy: false }, table: {defaultValue: {summary: 'false'}} },
    display: { control: 'inline-radio', options: ['none', 'inline', 'inline-block', 'block', 'contents'], table: { defaultValue: { summary: 'block' } } },
    direction: { control: 'inline-radio', options: ['row', 'column', 'row-reverse', 'column-reverse'], table: { defaultValue: { summary: 'row' } } },
    align: { control: 'inline-radio', options: ['start', 'center', 'end', 'baseline', 'stretch'], table: { defaultValue: { summary: 'row' } } },
    justify: { control: 'inline-radio', options: ['start', 'center', 'end', 'between'], table: { defaultValue: { summary: 'row' } } },
    wrap: { control: 'inline-radio', options: ['nowrap', 'wrap', 'wrap-reverse'], table: { defaultValue: { summary: 'row' } } },
    gap: { type: 'string', description: 'suggested values are: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9', table: { defaultValue: { summary: '0' } } },
    gapX: { type: 'string', description: 'suggested values are: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9', table: { defaultValue: { summary: '0' } } },
    gapY: { type: 'string', description: 'suggested values are: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9', table: { defaultValue: { summary: '0' } } },
    ...layoutArgTypes
  },
  render: ({ children, ...props }) => (<div style={{backgroundColor: '#ffffc0'}}><Flex {...props}>{children ?? 'Flex'}</Flex></div>),
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
