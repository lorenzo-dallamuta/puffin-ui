import { Box, Text } from '@radix-ui/themes';
import { StyledCard } from './card.styled';
import type { ComponentProps } from 'react';

interface CardProps extends ComponentProps<typeof StyledCard> {
  userName: string,
  summary: string,
  maxWidth?: string
}

export const Card = ({ maxWidth="350px", summary, userName, ...props }: CardProps) => (
  <Box maxWidth={maxWidth}>
	<StyledCard asChild {...props}>
		<a href="#">
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
