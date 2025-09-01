import { StyledGrid, type StyledGridProps } from "./Grid.styled";

type GridProps = StyledGridProps & {};

export function Grid(props: GridProps) {
  return <StyledGrid {...props} />
}