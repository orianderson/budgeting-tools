import { Module, MiddlewareConsumer } from '@nestjs/common';

import { DatabaseModule } from '@infra/adapters/database';
import { ControllersModule } from '@infra/adapters/controllers';
// import { LoggerModule } from '@infra/config';

// import { SetHeadersMiddleware } from '@infra/adapters';

@Module({
  imports: [DatabaseModule, ControllersModule],
})
export class AppModule {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(SetHeadersMiddleware).forRoutes('');
  // }
}
