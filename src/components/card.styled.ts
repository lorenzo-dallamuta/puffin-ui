import styled from 'styled-components';
import { Card } from '@radix-ui/themes';

export const StyledCard = styled(Card)`
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  background-color: white;
  overflow: hidden;
  padding: 12px 20px
`;

export const StyledAvatar = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  aspect-ratio: 1 / 1;
  box-sizing: border-box;
`;