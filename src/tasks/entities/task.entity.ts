import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TasksDocument = HydratedDocument<Task>;

@Schema()
export class Task {

    @Prop()
    userId: string

    @Prop()
    title: string

    @Prop()
    description: string

    @Prop()
    iscompleted: boolean 
}

export const TasksSchema = SchemaFactory.createForClass(Task);
