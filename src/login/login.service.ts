import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class LoginService {
  constructor(private readonly UsersService: UsersService){}
  
  async checkUser(LoginDto: LoginDto): Promise<boolean> {
    const { password } = await this.UsersService.findUserName(LoginDto.name)
    return await bcrypt.compare(LoginDto.password, password);
  }

}
