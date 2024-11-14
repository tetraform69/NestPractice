import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class LoginService {
  constructor(
    private readonly UsersService: UsersService,
    private jwtService: JwtService
  ){}
  
  async checkUser(LoginDto: LoginDto): Promise<{ accessToken: string}> {
    const user = await this.UsersService.findUserName(LoginDto.name)
    const isPasswordValid = await bcrypt.compare(LoginDto.password, user.password);
    if(!isPasswordValid){
      throw new UnauthorizedException();
    }
    const payload = { password: user.password, username: user.name}
    return {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }

}
