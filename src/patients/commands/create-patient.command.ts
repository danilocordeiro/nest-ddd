import { CreatePatientResquest } from '../dto/request/create-patient-request.dto';

export class CreatePatientCommand {
  constructor(public readonly createPatientRequest: CreatePatientResquest) {}
}
