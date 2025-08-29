import { DropdownMenu, Separator } from "radix-ui";
import { Button } from "@radix-ui/themes";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { StyledDropdownContent, StyledDropdownItem } from "./UserProfileDropdown.styled";
import type { ComponentProps } from "react";

type UserProfileDropdownProps = ComponentProps<typeof DropdownMenu.Root> & {}

export const UserProfileDropdown = (props: UserProfileDropdownProps) => {
  return (
    <DropdownMenu.Root {...props}>
      <DropdownMenu.Trigger asChild>
        <Button>
          <HamburgerMenuIcon />
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