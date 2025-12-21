import { NestMiddleware, Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { NextFunction, Request, Response } from 'express';

export interface UserContext {
  reqId: string;
  userId: string;
  clientId: string;
  roleId: string;
}

@Injectable()
export class RequestMiddleware implements NestMiddleware {
  use(request: Request, response: Response, next: NextFunction) {
    const requestId =
      (request.header('x-request-id') as string) || randomUUID();
    request.headers['x-request-id'] = requestId;

    request['userContext'] = {
      reqId: requestId,
      userId: (request.header('x-user-id') as string) || '',
      clientId: (request.header('x-client-id') as string) || '',
      roleId: (request.header('x-role-id') as string) || '',
    };

    next();
  }
}
