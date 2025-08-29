import type { ComponentProps } from 'react';
import { Card, type CardProps } from './Card';
import { Grid as BaseGrid } from '@radix-ui/themes';

type GridProps = ComponentProps<typeof BaseGrid> & {
	cards: CardProps[]
}

export const Grid = ({ cards, ...props }: GridProps) => (
	<BaseGrid columns={{ md: "3", sm: "2" }} gap="8px" height="auto" width="auto" {...props}>
		{cards.map((card) => <Card {...card}/>)}
	</BaseGrid>
);
