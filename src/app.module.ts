import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user.controller';
import { VideoModule } from './video/video.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    VideoModule,
    UsersModule,
    MongooseModule.forRoot('mongodb://localhost:27017/express_video'),
  ],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
