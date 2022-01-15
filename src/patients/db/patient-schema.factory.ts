import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongodb';
import { EntitySchemaFactory } from 'src/database/entity-schema.factory';
import { Patient } from '../Patient';
import { PatientSchema } from './patient.schema';

@Injectable()
export class PatientSchemaFactory
  implements EntitySchemaFactory<PatientSchema, Patient>
{
  create(entity: Patient): PatientSchema {
    return {
      _id: new ObjectId(entity.getId()),
      name: entity.getName(),
      age: entity.getAge(),
      allergies: entity.getAllergies(),
    };
  }
  createFromSchema(entitySchema: PatientSchema): Patient {
    return new Patient(
      entitySchema._id.toHexString(),
      entitySchema.name,
      entitySchema.age,
      entitySchema.allergies,
    );
  }
}
