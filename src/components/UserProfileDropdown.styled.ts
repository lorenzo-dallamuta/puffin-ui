import { Avatar, DropdownMenu } from "radix-ui";
import styled from "styled-components";

export const StyledDropdownContent = styled(DropdownMenu.Content)`
  border: 1px solid #b2aeaeff;
  border-radius: 8px;
  margin-top:4px;
  padding: 4px 20px 8px 12px;
  transform: translateX(8px);
`;

export const StyledDropdownItem = styled(DropdownMenu.Item)`
  color: #8c8686ff;
  letter-spacing: 2px;
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
`;

export const StyledAvatarImage = styled(Avatar.Image)`
  height: 30px;
  width: 30px;
  outline: 2px solid #aa99b1ff;
  outline-offset: 2px;
  border-radius: 15px;
`;