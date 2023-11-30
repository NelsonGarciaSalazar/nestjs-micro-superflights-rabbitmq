"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightMSG = exports.PassengerMSG = exports.UserMSG = exports.RabbitMQ = void 0;
var RabbitMQ;
(function (RabbitMQ) {
    RabbitMQ["UserQueue"] = "users";
    RabbitMQ["PassengerQueue"] = "passenger";
    RabbitMQ["FlightQueue"] = "flight";
})(RabbitMQ || (exports.RabbitMQ = RabbitMQ = {}));
var UserMSG;
(function (UserMSG) {
    UserMSG["CREATE"] = "CREATE_USER";
    UserMSG["FIND_ALL"] = "FIND_USERS";
    UserMSG["FIND_ONE"] = "FIND_ONE";
    UserMSG["UPDATE"] = "UPDATE_USER";
    UserMSG["DELETE"] = "DELETE_USER";
    UserMSG["VALID_USER"] = "VALID_USER";
})(UserMSG || (exports.UserMSG = UserMSG = {}));
var PassengerMSG;
(function (PassengerMSG) {
    PassengerMSG["CREATE"] = "CREATE_PASSENGER";
    PassengerMSG["FIND_ALL"] = "FIND_PASSENGERS";
    PassengerMSG["FIND_ONE"] = "FIND_ONE";
    PassengerMSG["UPDATE"] = "UPDATE_PASSENGER";
    PassengerMSG["DELETE"] = "DELETE_PASSENGER";
    PassengerMSG["VALID_PASSENGER"] = "VALID_PASSENGER";
})(PassengerMSG || (exports.PassengerMSG = PassengerMSG = {}));
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