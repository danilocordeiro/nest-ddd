import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PatientDto } from '../patient.dto';
import { PatientSchema } from './patient.schema';

@Injectable()
export class PatientDtoRepository {
  constructor(
    @InjectModel(PatientSchema.name)
    private readonly patientModel: Model<PatientSchema>,
  ) {}

  async findAll(): Promise<PatientDto[]> {
    const patients = await this.patientModel.find({}, {}, { lean: true });
    return patients.map((patient) => {
      const allergiesLower = patient.allergies.map((allergy) =>
        allergy.toLocaleLowerCase(),
      );
      const isAllergicToPeantus = allergiesLower.includes('peanuts');
      return {
        ...patient,
        isAllergicToPeantus,
      };
    });
  }
}
