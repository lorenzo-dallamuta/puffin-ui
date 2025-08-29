import { Box, Text } from '@radix-ui/themes';
import { faker } from '@faker-js/faker';
import type { ComponentProps } from 'react';
import { StyledAvatar, StyledCard } from './card.styled';

interface CardProps extends ComponentProps<typeof StyledCard> {
  userName: string,
  summary: string,
  maxWidth?: string
}

export const Card = ({ maxWidth="350px", summary, userName, ...props }: CardProps) => (
  <Box maxWidth={maxWidth}>
	<StyledCard asChild {...props}>
		<a href="#">
			<StyledAvatar src={faker.image.avatar()}/>
			<Text as="div" size="2" weight="bold">
				{userName}
			</Text>
			<Text as="div" color="gray" size="2">
				{summary}
			</Text>
		</a>
	</StyledCard>
</Box>

);
