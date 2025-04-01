import {
    IsEmail,
    IsNotEmpty,
    IsString,
    MinLength,
    IsOptional,
    IsNumber,
  } from 'class-validator';
  
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

    @IsOptional()
    @IsString()
    role?:string

    

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