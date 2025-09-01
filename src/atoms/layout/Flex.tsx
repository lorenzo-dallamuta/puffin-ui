import { StyledFlex, type StyledFlexProps } from "./Flex.styled";

type FlexProps = StyledFlexProps & {};

export function Flex(props: FlexProps) {
  return <StyledFlex {...props} />
}