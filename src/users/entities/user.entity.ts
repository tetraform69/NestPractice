import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    
    @Prop()
    name: string;
    
    @Prop()
    lastname: string;
    
    @Prop()
    password: string;
    
    @Prop()
    birdthdate: string;
    
    @Prop()
    weight: number;

}

export const UserSchema = SchemaFactory.createForClass(User);
