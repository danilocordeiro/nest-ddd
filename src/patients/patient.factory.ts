import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongodb';
import { EntityFactory } from 'src/database/entity.factory';
import { PatientEntityRepository } from './db/patient-entity.repository';
import { PatientCreatedEvent } from './events/patient-created.event';
import { Patient } from './Patient';

@Injectable()
export class PatientFactory implements EntityFactory<Patient> {
  constructor(
    private readonly patientEntityRepository: PatientEntityRepository,
  ) {}

  async create(
    name: string,
    age: number,
    allergies: string[],
  ): Promise<Patient> {
    const patient = new Patient(
      new ObjectId().toHexString(),
      name,
      age,
      allergies,
    );
    await this.patientEntityRepository.create(patient);
    patient.apply(new PatientCreatedEvent(patient.getId()));
    return patient;
  }
}
