import { StyledContainer, type StyledContainerProps } from "./Container.styled";

type ContainerProps = StyledContainerProps & {};

export function Container(props: ContainerProps) {
  return <StyledContainer {...props} />
}