import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { ForbiddenException } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const apiKey = `Bearer ${process.env.API_KEY}`;
    const recievedApiKey = request.headers.authorization;
    if (!recievedApiKey || recievedApiKey !== apiKey) {
      throw new ForbiddenException('Нет доступа');
    }
    return true;
  }
}
