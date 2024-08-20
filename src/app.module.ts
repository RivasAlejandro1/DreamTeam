import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ModuleModule } from './modules/module/module.module';
import { UserModule } from './modules/user/user/user.module';

@Module({
  imports: [UserModule, ModuleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
