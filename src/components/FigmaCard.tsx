import { Box, Separator, Text } from '@radix-ui/themes';
import type { ComponentProps } from 'react';
import { StyledAvatar, StyledFigmaCard, StyledSummary } from './FigmaCard.styled';

export interface FigmaCardProps extends ComponentProps<typeof StyledFigmaCard> {
  userName: string,
  summary: string,
  avatar: string,
  maxWidth?: string
}

export const FigmaCard = ({ maxWidth, summary, userName, avatar, ...props }: FigmaCardProps) => (
  <Box maxWidth={maxWidth}>
  <StyledFigmaCard asChild {...props}>
    <a href="#">
      <StyledAvatar src={avatar} data-chromatic="ignore"/>
      <Separator my="12" size="1" />
      <Text as="div" size="2" weight="bold" data-chromatic="ignore">
        {userName}
      </Text>
      <StyledSummary as="div" color="gray" size="2" data-chromatic="ignore">
        {summary}
      </StyledSummary>
    </a>
  </StyledFigmaCard>
</Box>

);
