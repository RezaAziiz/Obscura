import { HttpException } from '@nestjs/common';

export class ErrorException extends HttpException {
  constructor({ httpStatus, caseCode, message }, additionalMessage = '') {
    super(
      {
        responseCode: httpStatus + caseCode,
        responseDesc: `${message} ${additionalMessage}`,
      },
      httpStatus,
    );
  }
}
