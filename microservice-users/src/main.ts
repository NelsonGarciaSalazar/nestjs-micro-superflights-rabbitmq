import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import * as process from 'process';
import { RabbitMQ } from './common/constants';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [process.env.AMQP_URL],
      queue: RabbitMQ.UserQueue,
      queueOptions: {
        durable: false,
      },
    },
  });

  await app.listen();
  console.log('Microservice Users is listening');
}
bootstrap();
