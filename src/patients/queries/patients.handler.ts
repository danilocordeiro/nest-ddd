import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PatientDtoRepository } from '../db/patient-dto.repository';
import { PatientDto } from '../patient.dto';
import { PatientsQuery } from './patients.query';

@QueryHandler(PatientsQuery)
export class PatientsHandler implements IQueryHandler<PatientsQuery> {
  constructor(private readonly petientDtoRepository: PatientDtoRepository) {}

  async execute(): Promise<PatientDto[]> {
    return this.petientDtoRepository.findAll();
  }
}
