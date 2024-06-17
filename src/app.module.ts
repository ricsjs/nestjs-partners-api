import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { EventsModule } from './events/events.module';
import { PrismaModule } from './prisma/prisma.module';
import { SpotsModule } from './spots/spots.module';

@Module({
  imports: [EventsModule, PrismaModule, SpotsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
