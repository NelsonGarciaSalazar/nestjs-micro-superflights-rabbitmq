"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassengerService = void 0;
const common_1 = require("@nestjs/common");
const models_1 = require("../common/models/models");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let PassengerService = class PassengerService {
    constructor(model) {
        this.model = model;
    }
    async create(passengerDTO) {
        const newPassenger = new this.model(passengerDTO);
        return await newPassenger.save();
    }
    async findAll() {
        return await this.model.find();
    }
    async findById(id) {
        return await this.model.findById(id);
    }
    async update(id, passengerDTO) {
        return await this.model.findByIdAndUpdate(id, passengerDTO, { new: true });
    }
    async delete(id) {
        await this.model.findByIdAndDelete(id);
        return {
            status: common_1.HttpStatus.OK,
            msg: 'Delete',
        };
    }
};
exports.PassengerService = PassengerService;
exports.PassengerService = PassengerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(models_1.PASSENGER.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PassengerService);
//# sourceMappingURL=passenger.service.js.map