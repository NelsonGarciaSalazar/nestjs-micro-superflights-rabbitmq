"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const process = require("process");
const http_exceptoin_filters_1 = require("./common/filters/http-exceptoin.filters");
const timeout_interceptor_1 = require("./common/interceptor/timeout.interceptor");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalFilters(new http_exceptoin_filters_1.AllExceptionFilter());
    app.useGlobalInterceptors(new timeout_interceptor_1.TimeoutInterceptor());
    const options = new swagger_1.DocumentBuilder()
        .setTitle('SuperFlight API')
        .setDescription('Scheduled Flights App')
        .setVersion('2.0.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('/api/docs', app, document, {
        swaggerOptions: {
            filter: true,
        },
    });
    await app.listen(process.env.PORT || 3000);
    console.log('Microservice Api-Gateway listening');
}
bootstrap();
//# sourceMappingURL=main.js.map