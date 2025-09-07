import { StyledLink, type StyledLinkProps } from "./Link.styled";

type LinkProps = StyledLinkProps & {};

export function Link(props: LinkProps) {
  return <StyledLink {...props} />
}