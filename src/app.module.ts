import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { LoginModule } from './login/login.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [ MongooseModule.forRoot('mongodb://localhost:4040/Test1'), UsersModule, LoginModule, TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
