import { StyledBox, type StyledBoxProps } from "./Box.styled";

type BoxProps = StyledBoxProps & {};

export function Box(props: BoxProps) {
  return <StyledBox {...props} />
}