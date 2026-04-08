import { Catch, ExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { AppError } from './app.errors';

@Catch(AppError)
export class AppErrorFilter implements ExceptionFilter {
  catch(exception: AppError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    response.status(exception.statusCode || 500).json({
      success: false,
      message: exception.message,
    });
  }
}