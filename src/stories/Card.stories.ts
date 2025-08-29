import type { Meta, StoryObj } from '@storybook/react-vite';
import { faker } from '@faker-js/faker';

import { Card } from '../components/Card';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Component/Card',
  component: Card,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    summary: { control: 'text', type: 'string' },
    userName: { control: 'text', type: 'string' },
    maxWidth: { control: 'text', type: 'string',  },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    userName: faker.person.fullName(),
    // summary: 'Pocket-sized joy curator with perpetual hamster hype. (AI said so.)'
    summary: faker.person.bio()
  },
};

export const Small: Story = {
  args: {
    userName: faker.person.fullName(),
    summary: faker.person.bio(),
    maxWidth: "270px"
  },
};

export const Medium: Story = {
  args: {
    userName: faker.person.fullName(),
    summary: faker.person.bio(),
    maxWidth: "320px"
  },
};

export const Large: Story = {
  args: {
    userName: faker.person.fullName(),
    summary: faker.person.bio(),
    maxWidth: "420px"
  },
};