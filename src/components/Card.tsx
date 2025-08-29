import { Box, Text } from '@radix-ui/themes';
import type { ComponentProps } from 'react';
import { StyledAvatar, StyledCard } from './card.styled';

export interface CardProps extends ComponentProps<typeof StyledCard> {
  userName: string,
  summary: string,
  avatar: string,
  maxWidth?: string
}

export const Card = ({ maxWidth, summary, userName, avatar, ...props }: CardProps) => (
  <Box maxWidth={maxWidth}>
	<StyledCard asChild {...props}>
		<a href="#">
			<StyledAvatar src={avatar}/>
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
