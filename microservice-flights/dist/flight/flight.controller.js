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
exports.FlightController = void 0;
const common_1 = require("@nestjs/common");
const flight_service_1 = require("./flight.service");
const flight_dto_1 = require("./dto/flight.dto");
const microservices_1 = require("@nestjs/microservices");
const constants_1 = require("../common/constants");
let FlightController = class FlightController {
    constructor(flightService) {
        this.flightService = flightService;
    }
    create(flightDTO) {
        return this.flightService.create(flightDTO);
    }
    findAll() {
        return this.flightService.findAll();
    }
    findOne(id) {
        return this.flightService.findOne(id);
    }
    update(payload) {
        return this.flightService.update(payload.id, payload.flightDTO);
    }
    delete(id) {
        return this.flightService.delete(id);
    }
    addPassenger(payload) {
        return this.flightService.addPassenger(payload.flightId, payload.passengerId);
    }
};
exports.FlightController = FlightController;
__decorate([
    (0, microservices_1.MessagePattern)(constants_1.FlightMSG.CREATE),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [flight_dto_1.FlightDTO]),
    __metadata("design:returntype", void 0)
], FlightController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)(constants_1.FlightMSG.FIND_ALL),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FlightController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)(constants_1.FlightMSG.FIND_ONE),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FlightController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.MessagePattern)(constants_1.FlightMSG.UPDATE),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FlightController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)(constants_1.FlightMSG.DELETE),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FlightController.prototype, "delete", null);
__decorate([
    (0, microservices_1.MessagePattern)(constants_1.FlightMSG.ADD_PASSENGER),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FlightController.prototype, "addPassenger", null);
exports.FlightController = FlightController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [flight_service_1.FlightService])
], FlightController);
//# sourceMappingURL=flight.controller.js.map