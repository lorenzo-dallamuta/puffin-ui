import { StyledText, type StyledTextProps } from "./Text.styled";

type TextProps = StyledTextProps & {};

export function Text(props: TextProps) {
  return <StyledText {...props} />
}