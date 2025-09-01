import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { Box } from '../../atoms/layout/Box';
import { layoutArgTypes } from './sharedLayoutControls';

const meta = {
  title: 'Layout/Box',
  component: Box,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    as: { control: 'radio', options: ['div', 'span', undefined], if: { arg: 'asChild', truthy: false }, table: {defaultValue: {summary: 'div'}} },
    asChild: { control: 'boolean', type: 'boolean', if: { arg: 'as', truthy: false }, table: {defaultValue: {summary: 'false'}} },
    display: { control: 'inline-radio', options: ['none', 'inline', 'inline-block', 'block', 'contents'], table: { defaultValue: { summary: 'block' } } },
    ...layoutArgTypes
  },
  render: ({ children, ...props }) => (<div style={{backgroundColor: '#ffffc0'}}><Box {...props}>{children ?? 'Box'}</Box></div>),
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
