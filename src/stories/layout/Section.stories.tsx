import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { Section } from '../../atoms/layout/Section';

const meta = {
  title: 'Layout/Section',
  component: Section,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    asChild: { control: 'boolean', type: 'boolean', if: { arg: 'as', truthy: false }, table: { defaultValue: { summary: 'false'}} },
    size: { control: 'inline-radio', options: ['1', '2', '3', '4'], table: { defaultValue: { summary: '3' } } },
    display: { control: 'inline-radio', options: ['none', 'initial'], table: { defaultValue: { summary: 'initial' } } },
  },
  render: ({ children, ...props }) => (<div style={{backgroundColor: '#ffffc0'}}><Section {...props}>{children ?? 'Section'}</Section></div>),
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
