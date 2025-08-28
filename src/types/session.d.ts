import type { UserType } from "./enums" 

declare global {
  type User = {
    name: string;
    type: UserType;
  };
}