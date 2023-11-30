import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from 'process';
import { AllExceptionFilter } from './common/filters/http-exceptoin.filters';
import { TimeoutInterceptor } from './common/interceptor/timeout.interceptor';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AllExceptionFilter());
  app.useGlobalInterceptors(new TimeoutInterceptor());

  const options = new DocumentBuilder()
    .setTitle('SuperFlight API')
    .setDescription('Scheduled Flights App')
    .setVersion('2.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('/api/docs', app, document, {
    swaggerOptions: {
      filter: true,
    },
  });

  await app.listen(process.env.PORT || 3000);
  console.log('Microservice Api-Gateway listening');
}
bootstrap();
