import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const hostname = process.env.HOSTNAME || 'localhost';
  const url = `http://${hostname}:3000`;

  if (os.hostname() === 'localhost') {
    // Set the URL to localhost for testing on the local machine.
    url = 'http://localhost:3000';
  } else {
    // Set the URL to the IP address of the server
    // here for testing on the server.
    url = 'http://64.225.0.116:3000';
  }
  await app.listen(3000, url, () => {
    console.log(`Application is running on: ${url}`);
  });
}

bootstrap();*/
