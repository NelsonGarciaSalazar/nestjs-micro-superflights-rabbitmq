"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassengerMSG = exports.RabbitMQ = void 0;
var RabbitMQ;
(function (RabbitMQ) {
    RabbitMQ["PassengerQueue"] = "passenger";
})(RabbitMQ || (exports.RabbitMQ = RabbitMQ = {}));
var PassengerMSG;
(function (PassengerMSG) {
    PassengerMSG["CREATE"] = "CREATE_PASSENGER";
    PassengerMSG["FIND_ALL"] = "FIND_PASSENGERS";
    PassengerMSG["FIND_ONE"] = "FIND_ONE";
    PassengerMSG["UPDATE"] = "UPDATE_PASSENGER";
    PassengerMSG["DELETE"] = "DELETE_PASSENGER";
    PassengerMSG["VALID_PASSENGER"] = "VALID_PASSENGER";
})(PassengerMSG || (exports.PassengerMSG = PassengerMSG = {}));
//# sourceMappingURL=constants.js.map