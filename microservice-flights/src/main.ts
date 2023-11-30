import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from 'process';
import { Transport } from '@nestjs/microservices';
import { RabbitMQ } from './common/constants';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [process.env.AMQP_URL],
      queue: RabbitMQ.FlightQueue,
      queueOptions: {
        durable: false,
      },
    },
  });

  await app.listen();
  console.log('Microservice Flights listening');
}
bootstrap();
