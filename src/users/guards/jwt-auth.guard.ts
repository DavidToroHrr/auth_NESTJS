import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';
import { IS_PUBLIC_KEY } from '../decorators/public.decorator';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
    constructor (private reflector: Reflector){
        super();
    }


    canActivate(context: ExecutionContext){
        //estamos creando un decorator que se llama isPublic
        const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY,[
            context.getHandler(),
            context.getClass(),
        ]);
        
        if (isPublic){
            return true;
        }

        return super.canActivate(context);
    }
}