import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { PatientsModule } from './patients/patients.module';
@Module({
  imports: [PatientsModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
