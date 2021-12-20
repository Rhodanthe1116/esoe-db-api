// import { writeFileSync } from 'fs';
// import * as path from 'path';

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('ESOE DB')
    .setDescription('The ESOE DB Api description')
    .setVersion('1.0')
    .addTag('ESOE')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  // const outputPath = path.resolve(process.cwd(), 'swagger.json');
  // writeFileSync(outputPath, JSON.stringify(document), { encoding: 'utf8' });

  await app.listen(3000);
}
bootstrap();
