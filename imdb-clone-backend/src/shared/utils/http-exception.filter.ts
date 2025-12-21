import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Response } from 'express';
import { responseMessage } from './response.constant';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const exceptionResponse: any = exception.getResponse();

    let errorConstant = responseMessage.INTERNAL_SERVER_ERROR;

    switch (status) {
      case HttpStatus.BAD_REQUEST:
        errorConstant = responseMessage.BAD_REQUEST;
        break;
      case HttpStatus.UNAUTHORIZED:
        errorConstant = responseMessage.UNAUTHORIZED_AUTH;
        break;
      case HttpStatus.FORBIDDEN:
        errorConstant = responseMessage.UNAUTHORIZED_ROLES;
        break;
      case HttpStatus.NOT_FOUND:
        errorConstant = responseMessage.NOT_FOUND;
        break;
      case HttpStatus.CONFLICT:
        errorConstant = responseMessage.FOUND;
        break;
    }

    const customMessage =
      typeof exceptionResponse === 'object' && exceptionResponse.message
        ? exceptionResponse.message
        : exceptionResponse;

    const finalResponse = {
      // Format: statusCode-caseCode (Contoh: 400-01)
      code: `${errorConstant.httpStatus}-${errorConstant.caseCode}`,
      message: customMessage || errorConstant.message,
      timestamp: new Date().toISOString(), // Opsional: bagus untuk debug
    };

    // Log error ke terminal biar kita tau ada error
    if (status >= 500) {
      this.logger.error(
        `Http Status: ${status} Error Message: ${JSON.stringify(finalResponse)}`,
      );
    } else {
      this.logger.warn(
        `Http Status: ${status} Error Message: ${JSON.stringify(finalResponse)}`,
      );
    }

    response.status(status).json(finalResponse);
  }
}
