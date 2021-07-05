import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://nkgoudar:yVILwPm57sSXPR9T@cluster0.ovnui.mongodb.net/todo?retryWrites=true&w=majority'), TaskModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
