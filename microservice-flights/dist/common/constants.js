"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightMSG = exports.RabbitMQ = void 0;
var RabbitMQ;
(function (RabbitMQ) {
    RabbitMQ["FlightQueue"] = "flight";
})(RabbitMQ || (exports.RabbitMQ = RabbitMQ = {}));
var FlightMSG;
(function (FlightMSG) {
    FlightMSG["CREATE"] = "CREATE_FLIGHT";
    FlightMSG["FIND_ALL"] = "FIND_FLIGHTS";
    FlightMSG["FIND_ONE"] = "FIND_ONE";
    FlightMSG["UPDATE"] = "UPDATE_FLIGHT";
    FlightMSG["DELETE"] = "DELETE_FLIGHT";
    FlightMSG["VALID_FLIGHT"] = "VALID_FLIGHT";
    FlightMSG["ADD_PASSENGER"] = "ADD_PASSENGER";
})(FlightMSG || (exports.FlightMSG = FlightMSG = {}));
//# sourceMappingURL=constants.js.map