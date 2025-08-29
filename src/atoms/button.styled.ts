import styled from 'styled-components';
import { Button } from '@radix-ui/themes';

interface StyledButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
}

export const StyledButton = styled(Button)<StyledButtonProps>`
  display: inline-block;
  cursor: pointer;
  border: 0;
  border-radius: 3em;
  font-weight: 700;
  line-height: 1;
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;

  & + & {
    margin-left: 10px;
  }
  
  ${props => props.variant === 'primary' && `
    background-color: #e1590b;
    color: white;
  `}
  
  ${props => props.variant === 'secondary' && `
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
    background-color: #e1590b13;
    color: #505050;
  `}
  
  ${props => props.size === 'small' && `
    padding: 10px 16px;
    font-size: 12px;
  `}
  
  ${props => props.size === 'medium' && `
    padding: 11px 20px;
    font-size: 14px;
  `}
  
  ${props => props.size === 'large' && `
    padding: 12px 24px;
    font-size: 16px;
  `}
`;

StyledButton.defaultProps = {
  variant: 'primary',
  size: 'medium'
};