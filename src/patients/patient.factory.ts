import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongodb';
import { EntityFactory } from 'src/database/entity.factory';
import { Patient } from './Patient';

@Injectable()
export class PatientFactory implements EntityFactory<Patient> {
  create(name: string, age: number, allergies: string[]): Patient {
    return new Patient(new ObjectId().toHexString(), name, age, allergies);
  }
}
