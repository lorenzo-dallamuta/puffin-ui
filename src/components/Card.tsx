import { Box, Text } from '@radix-ui/themes';
import { StyledCard } from './card.styled';

export const Card = () => (
  <Box maxWidth="350px">
	<StyledCard asChild>
		<a href="#">
			<Text as="div" size="2" weight="bold">
				name and surname
			</Text>
			<Text as="div" color="gray" size="2">
				brief intro
			</Text>
		</a>
	</StyledCard>
</Box>

);
