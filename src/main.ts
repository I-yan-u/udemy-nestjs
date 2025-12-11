import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('NestJs Masterclass')
    .setDescription(
      'API documentation for the NestJs Masterclass, use API as http:localhost:3000/api/docs',
    )
    .setTermsOfService('http://localhost:3000/terms')
    .setLicense('MIT License', 'https://opensource.org/license/mit/')
    .addServer('http://localhost:3000', 'Development server')
    .setVersion('1.0')
    .build();
  // Instantiate document
  const document = SwaggerModule.createDocument(app, config);
  // Setup Swagger module
  SwaggerModule.setup('api/docs', app, document);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
