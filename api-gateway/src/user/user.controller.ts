import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ClientProxySuperFlights } from '../common/proxy/client-proxy';
import { UserDTO } from './dto/user.dto';
import { Observable } from 'rxjs';
import { IUser } from '../common/interfaces/user.interface';
import { UserMSG } from '../common/constants';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('api/v2/user')
export class UserController {
  constructor(private readonly clientProxy: ClientProxySuperFlights) {}

  private _clientProxyUser = this.clientProxy.clientProxyUsers();

  @Post()
  create(@Body() userDTO: UserDTO): Observable<IUser> {
    return this._clientProxyUser.send(UserMSG.CREATE, userDTO);
  }

  @Get()
  findAll(): Observable<IUser> {
    return this._clientProxyUser.send(UserMSG.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<IUser> {
    return this._clientProxyUser.send(UserMSG.FIND_ONE, id);
  }

  @Put(':id')
  Update(@Param('id') id: string, @Body() userDTO: UserDTO): Observable<IUser> {
    return this._clientProxyUser.send(UserMSG.UPDATE, { id, userDTO });
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<any> {
    return this._clientProxyUser.send(UserMSG.DELETE, id);
  }
}
