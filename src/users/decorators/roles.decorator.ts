import { SetMetadata } from "@nestjs/common";

export const Roles = (...roles: string[]) => SetMetadata('roles',roles);
//para controlar controladores sirven los metadatos. uso en guards y controladores
//