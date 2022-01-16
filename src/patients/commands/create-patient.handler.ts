import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { PatientFactory } from '../patient.factory';
import { CreatePatientCommand } from './create-patient.command';

@CommandHandler(CreatePatientCommand)
export class CreatePatientHandler
  implements ICommandHandler<CreatePatientCommand>
{
  constructor(
    private readonly patientFactory: PatientFactory,
    private readonly eventPublisher: EventPublisher,
  ) {}

  async execute({ createPatientRequest }: CreatePatientCommand): Promise<void> {
    const { name, age, allergies } = createPatientRequest;
    const patient = this.eventPublisher.mergeObjectContext(
      await this.patientFactory.create(name, age, allergies),
    );
    patient.commit();
  }
}
