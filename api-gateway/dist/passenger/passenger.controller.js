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
exports.PassengerController = void 0;
const common_1 = require("@nestjs/common");
const client_proxy_1 = require("../common/proxy/client-proxy");
const passenger_dto_1 = require("./dto/passenger.dto");
const rxjs_1 = require("rxjs");
const constants_1 = require("../common/constants");
const swagger_1 = require("@nestjs/swagger");
let PassengerController = class PassengerController {
    constructor(clientProxy) {
        this.clientProxy = clientProxy;
        this._clientProxyPassenger = this.clientProxy.clientProxyPassenger();
    }
    create(passengerDTO) {
        return this._clientProxyPassenger.send(constants_1.PassengerMSG.CREATE, passengerDTO);
    }
    findAll() {
        return this._clientProxyPassenger.send(constants_1.PassengerMSG.FIND_ALL, '');
    }
    findOne(id) {
        return this._clientProxyPassenger.send(constants_1.PassengerMSG.FIND_ONE, id);
    }
    Update(id, passengerDTO) {
        return this._clientProxyPassenger.send(constants_1.PassengerMSG.UPDATE, {
            id,
            passengerDTO,
        });
    }
    delete(id) {
        return this._clientProxyPassenger.send(constants_1.PassengerMSG.DELETE, id);
    }
};
exports.PassengerController = PassengerController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [passenger_dto_1.PassengerDTO]),
    __metadata("design:returntype", rxjs_1.Observable)
], PassengerController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", rxjs_1.Observable)
], PassengerController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", rxjs_1.Observable)
], PassengerController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, passenger_dto_1.PassengerDTO]),
    __metadata("design:returntype", rxjs_1.Observable)
], PassengerController.prototype, "Update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", rxjs_1.Observable)
], PassengerController.prototype, "delete", null);
exports.PassengerController = PassengerController = __decorate([
    (0, swagger_1.ApiTags)('passengers'),
    (0, common_1.Controller)('api/v2/passenger'),
    __metadata("design:paramtypes", [client_proxy_1.ClientProxySuperFlights])
], PassengerController);
//# sourceMappingURL=passenger.controller.js.map