import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { PatientEntityRepository } from 'src/patients/db/patient-entity.repository';
import { UpdateAllergiesCommand } from './update-allergies.command';

@CommandHandler(UpdateAllergiesCommand)
export class UpdateAllergiesHandler
  implements ICommandHandler<UpdateAllergiesCommand>
{
  constructor(
    private readonly patientEntityRepository: PatientEntityRepository,
    private readonly eventPublisher: EventPublisher,
  ) {}

  async execute({
    patientId,
    allergies,
  }: UpdateAllergiesCommand): Promise<void> {
    const patient = this.eventPublisher.mergeObjectContext(
      await this.patientEntityRepository.findOneById(patientId),
    );
    patient.updateAllergies(allergies);
    await this.patientEntityRepository.findOneAndReplaceById(
      patientId,
      patient,
    );
    patient.commit();
  }
}
