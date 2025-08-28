export const USER_TYPE = {
  ADMIN: "ADMIN",
  EDITOR: "EDITOR",
  END_USER: "END_USER"
} as const satisfies Record<string, string>;

export type UserType = (typeof USER_TYPE)[keyof typeof USER_TYPE]