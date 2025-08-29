import { faker } from "@faker-js/faker";
import type { CardProps } from "../components/Card";

const cardMock = (): CardProps => ({
  userName: faker.person.fullName(),
  summary: faker.person.bio(),
  avatar: faker.image.avatar()
});

export const cardsMock = (number = 9) => Array.from({ length: number }, () => cardMock());