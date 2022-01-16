import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PatientCreatedEvent } from './patient-created.event';

@EventsHandler(PatientCreatedEvent)
export class PatientCreatedHandler
  implements IEventHandler<PatientCreatedEvent>
{
  async handle({ patientId }: PatientCreatedEvent): Promise<void> {
    console.log('Patient created: ', patientId);
  }
}
