export declare enum RabbitMQ {
    UserQueue = "users",
    PassengerQueue = "passenger",
    FlightQueue = "flight"
}
export declare enum UserMSG {
    CREATE = "CREATE_USER",
    FIND_ALL = "FIND_USERS",
    FIND_ONE = "FIND_ONE",
    UPDATE = "UPDATE_USER",
    DELETE = "DELETE_USER",
    VALID_USER = "VALID_USER"
}
export declare enum PassengerMSG {
    CREATE = "CREATE_PASSENGER",
    FIND_ALL = "FIND_PASSENGERS",
    FIND_ONE = "FIND_ONE",
    UPDATE = "UPDATE_PASSENGER",
    DELETE = "DELETE_PASSENGER",
    VALID_PASSENGER = "VALID_PASSENGER"
}
export declare enum FlightMSG {
    CREATE = "CREATE_FLIGHT",
    FIND_ALL = "FIND_FLIGHTS",
    FIND_ONE = "FIND_ONE",
    UPDATE = "UPDATE_FLIGHT",
    DELETE = "DELETE_FLIGHT",
    VALID_FLIGHT = "VALID_FLIGHT",
    ADD_PASSENGER = "ADD_PASSENGER"
}
