import { FlightDTO } from './dto/flight.dto';
import { IFlight } from '../common/interfaces/flight.interface';
import { InjectModel } from '@nestjs/mongoose';
import { FLIGHT } from '../common/models/models';
import { Model } from 'mongoose';
import { HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class FlightService {
  constructor(
    @InjectModel(FLIGHT.name) private readonly model: Model<IFlight>,
  ) {}

  async create(flightDTO: FlightDTO): Promise<IFlight> {
    const newFlight = new this.model(flightDTO);
    return await newFlight.save();
  }

  async findAll(): Promise<IFlight[]> {
    return this.model.find().populate('passengers');
  }

  async findOne(id: string): Promise<IFlight> {
    return this.model.findById(id).populate('passengers');
  }

  async update(id: string, flightDTO: FlightDTO): Promise<IFlight> {
    return this.model.findByIdAndUpdate(id, flightDTO, { new: true });
  }

  async delete(id: string): Promise<{ msg: string; status: HttpStatus }> {
    await this.model.findByIdAndDelete(id);
    return { status: HttpStatus.OK, msg: 'Deleted' };
  }

  async addPassenger(flightId: string, passengerId: string): Promise<IFlight> {
    return this.model
      .findByIdAndUpdate(
        flightId,
        { $addToSet: { passengers: passengerId } },
        { new: true },
      )
      .populate('passengers');
  }
}
