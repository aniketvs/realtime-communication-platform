// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { IoAdapter } from '@nestjs/platform-socket.io';
import { INestApplication } from '@nestjs/common';
import { ServerOptions } from 'socket.io';

async function bootstrap() {
  const app: INestApplication = await NestFactory.create(AppModule);

  app.enableCors({ origin: '*' });

  // Properly inject the Socket.IO adapter with /chat/socket.io path
  class CustomIoAdapter extends IoAdapter {
    createIOServer(port: number, options?: ServerOptions): any {
      const customOptions: ServerOptions = {
        ...options,
        path: '/chat/socket.io', // 🔥 CRITICAL LINE
      };
      return super.createIOServer(port, customOptions);
    }
  }

  app.useWebSocketAdapter(new CustomIoAdapter(app));

  await app.listen(3000); // ✅ No need to pass path here, already handled above
}
bootstrap();
