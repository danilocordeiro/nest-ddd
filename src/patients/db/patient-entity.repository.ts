import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseEntityRepository } from 'src/database/base-entity.repository';
import { Patient } from '../Patient';
import { PatientSchemaFactory } from './patient-schema.factory';
import { PatientSchema } from './patient.schema';

@Injectable()
export class PatientEntityRepository extends BaseEntityRepository<
  PatientSchema,
  Patient
> {
  constructor(
    @InjectModel(PatientSchema.name)
    patientModel: Model<PatientSchema>,
    patientSchemaFactory: PatientSchemaFactory,
  ) {
    super(patientModel, patientSchemaFactory);
  }
}
