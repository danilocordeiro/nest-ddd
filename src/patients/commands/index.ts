import { CreatePatientHandler } from './create-patient/create-patient.handler';
import { UpdateAllergiesHandler } from './update-allergies/update-allergies.handler';

export const PatientCommandHandlers = [
  CreatePatientHandler,
  UpdateAllergiesHandler,
];
