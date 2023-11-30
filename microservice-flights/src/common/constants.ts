export enum RabbitMQ {
  FlightQueue = 'flight',
}

export enum FlightMSG {
  CREATE = 'CREATE_FLIGHT',
  FIND_ALL = 'FIND_FLIGHTS',
  FIND_ONE = 'FIND_ONE',
  UPDATE = 'UPDATE_FLIGHT',
  DELETE = 'DELETE_FLIGHT',
  VALID_FLIGHT = 'VALID_FLIGHT',
  ADD_PASSENGER = 'ADD_PASSENGER',
}
