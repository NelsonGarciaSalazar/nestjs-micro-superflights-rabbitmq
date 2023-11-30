import { ConfigService } from '@nestjs/config';
import { ClientProxy } from '@nestjs/microservices';
export declare class ClientProxySuperFlights {
    private readonly config;
    constructor(config: ConfigService);
    clientProxyUsers(): ClientProxy;
    clientProxyPassenger(): ClientProxy;
    clientProxyFlight(): ClientProxy;
}
