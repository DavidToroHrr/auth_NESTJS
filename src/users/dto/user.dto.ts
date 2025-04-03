import {
    IsEmail,
    IsNotEmpty,
    IsString,
    MinLength,
    IsOptional,
    IsEnum,
  } from 'class-validator';
import { User } from '../schema/user.schema';
  
  export enum UserRole{
    USER = 'user',
    EDITOR= 'editor',
    ADMIN= 'admin'//la clave la llamamos a nivel de programación 
                  //y el valor es como se almacena en mi sistema

  }
  export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    name: string;
  
    @IsNotEmpty()
    @IsEmail()
    email: string;
  
    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    password: string;

    @IsNotEmpty()
    @IsEmail()
    phone: string;

    @IsOptional()//es opcional...
    @IsEnum(UserRole, {message: 'Role must be one of: user, editor, admin'})
    role?: UserRole = UserRole.EDITOR; //si sí le da prioridad al ingresado
                                       //si no se toma el false de ternario

    

  }
  
  export class UpdateUserDto {
    @IsOptional()
    @IsString()
    name?: string;
  
    @IsOptional()
    @IsEmail()
    email?: string;
  
    @IsOptional()
    @IsString()
    @MinLength(6)
    password?: string;

    @IsNotEmpty()
    @IsEmail()
    phone?: string;

    @IsOptional()//es opcional...
    @IsEnum(UserRole, {message: 'Role must be one of: user, editor, admin'})
    role?: UserRole; //que tome el nuevo valor que se trata de almacenar

  }
  
  export class LoginDto {
    @IsNotEmpty()
    @IsEmail()
    email: string;
  
    @IsNotEmpty()
    @IsString()
    password: string;
  }
  
  export class RefreshTokenDto {
    @IsNotEmpty()
    @IsString()
    refreshToken: string;
  }
  
  export class ChangePasswordDto {
    @IsNotEmpty()
    @IsString()
    currentPassword: string;
  
    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    newPassword: string;
  }
  
  export class VerifyEmailDto {
    @IsNotEmpty()
    @IsEmail()
    email: string;
  
    @IsNotEmpty()
    @IsString()
    code: string;
  }


  export class VerifySMSDto{
    @IsNotEmpty()
    @IsString()
    code: string;

    @IsNotEmpty()
    @IsString()
    phone:string

  }

  export class ResendSMSDto{
    
  }