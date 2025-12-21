import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType, Logger } from '@nestjs/common';
import { setupSwagger } from './shared/utils/swagger.config';
import helmet from 'helmet';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule);

  // Security
  app.use(helmet());

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // URL Prefix: http://localhost:3000/api/v1/...
  app.setGlobalPrefix('api');
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });

  // Validasi DTO (Wajib 'whitelist: true' biar data sampah hilang)
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Setup Swagger
  if (process.env.NODE_ENV !== 'production') {
    setupSwagger(app);
  }

  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);

  // Log Link
  logger.log(`🚀 Application is running on: http://localhost:${PORT}/api/v1`);
  logger.log(`📄 Swagger Docs available at: http://localhost:${PORT}/docs`);
}

bootstrap();
