import { Controller } from '@nestjs/common';
import { PassengerDTO } from './dto/passenger.dto';
import { PassengerService } from './passenger.service';
import { PassengerMSG } from '../common/constants';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class PassengerController {
  constructor(private readonly passengerService: PassengerService) {}

  @MessagePattern(PassengerMSG.CREATE)
  create(@Payload() passengerDTO: PassengerDTO) {
    return this.passengerService.create(passengerDTO);
  }

  @MessagePattern(PassengerMSG.FIND_ALL)
  findAll() {
    return this.passengerService.findAll();
  }

  @MessagePattern(PassengerMSG.FIND_ONE)
  findById(@Payload() id: string) {
    return this.passengerService.findById(id);
  }

  @MessagePattern(PassengerMSG.UPDATE)
  update(@Payload() payload) {
    return this.passengerService.update(payload.id, payload.passengerDTO);
  }

  @MessagePattern(PassengerMSG.DELETE)
  delete(@Payload() id: string) {
    return this.passengerService.delete(id);
  }
}
