import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { PatientFactory } from '../patient.factory';
import { CreatePatientCommand } from './create-patient.command';

@CommandHandler(CreatePatientCommand)
export class CreatePatientHandler
  implements ICommandHandler<CreatePatientCommand>
{
  constructor(private readonly patientFactory: PatientFactory) {}

  async execute({ createPatientRequest }: CreatePatientCommand): Promise<void> {
    const { name, age, allergies } = createPatientRequest;
    this.patientFactory.create(name, age, allergies);
  }
}
