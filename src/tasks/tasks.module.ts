import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Task, TasksSchema} from './entities/task.entity';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Task.name , schema: TasksSchema}])],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
