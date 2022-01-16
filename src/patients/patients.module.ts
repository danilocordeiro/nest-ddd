import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule, SchemaFactory } from '@nestjs/mongoose';
import { PatientCommandHandlers } from './commands';
import { PatientEntityRepository } from './db/patient-entity.repository';
import { PatientSchemaFactory } from './db/patient-schema.factory';
import { PatientSchema } from './db/patient.schema';
import { PatientEventHandlers } from './events';
import { PatientFactory } from './patient.factory';
import { PatientsController } from './patients.controller';

@Module({
  imports: [
    CqrsModule,
    MongooseModule.forFeature([
      {
        name: PatientSchema.name,
        schema: SchemaFactory.createForClass(PatientSchema),
      },
    ]),
  ],
  controllers: [PatientsController],
  providers: [
    PatientEntityRepository,
    PatientSchemaFactory,
    PatientFactory,
    ...PatientCommandHandlers,
    ...PatientEventHandlers,
  ],
})
export class PatientsModule {}
