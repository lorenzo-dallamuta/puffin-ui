import { StyledSection, type StyledSectionProps } from "./Section.styled";

type SectionProps = StyledSectionProps & {};

export function Section(props: SectionProps) {
  return <StyledSection {...props} />
}