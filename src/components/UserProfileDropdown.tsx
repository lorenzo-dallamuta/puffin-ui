import { Avatar, DropdownMenu, Separator } from "radix-ui";
import { Button } from "@radix-ui/themes";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { StyledAvatarImage, StyledDropdownContent, StyledDropdownItem } from "./UserProfileDropdown.styled";
import type { ComponentProps } from "react";
import useInitials from "../hooks/useInitials";

type UserProfileDropdownProps = ComponentProps<typeof DropdownMenu.Root> & {
  avatar: string,
  userFullName: string
}

export const UserProfileDropdown = ({ avatar, userFullName, ...props }: UserProfileDropdownProps) => {
  const initials = useInitials(userFullName);

  return (
    <DropdownMenu.Root {...props}>
      <DropdownMenu.Trigger asChild>
        <Button>
          <Avatar.Root>
            <StyledAvatarImage
              src={avatar}
              alt={initials}
              data-chromatic="ignore"
            />
            <Avatar.Fallback delayMs={600}>
              <HamburgerMenuIcon />
            </Avatar.Fallback>
          </Avatar.Root>
        </Button>
      </DropdownMenu.Trigger>
      <StyledDropdownContent align="end">
        <DropdownMenu.Group>
          <StyledDropdownItem>Profile</StyledDropdownItem>
          <StyledDropdownItem>Settings</StyledDropdownItem>
          <StyledDropdownItem>About</StyledDropdownItem>
        </DropdownMenu.Group>
        <Separator.Root
          decorative
          orientation="horizontal"
          style={{ margin: "8px 0" }}
        />
        <StyledDropdownItem color="red">Log out</StyledDropdownItem>
      </StyledDropdownContent>
    </DropdownMenu.Root>
  );
};