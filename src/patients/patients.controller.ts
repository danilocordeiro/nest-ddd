import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreatePatientCommand } from './commands/create-patient/create-patient.command';
import { UpdateAllergiesCommand } from './commands/update-allergies/update-allergies.command';
import { CreatePatientResquest } from './dto/request/create-patient-request.dto';
import { UpdatePatientAllergiesRequest } from './dto/request/update-patient-allergies-request.dto';

@Controller('patients')
export class PatientsController {
  constructor(private readonly commandBus: CommandBus) {}

  @Get(':id')
  async getPatient(@Param('id') patientId: string): Promise<void> {}

  @Get()
  async getPatients(): Promise<void> {}

  @Post()
  async createPatient(
    @Body() createPatientResquest: CreatePatientResquest,
  ): Promise<void> {
    await this.commandBus.execute<CreatePatientCommand, void>(
      new CreatePatientCommand(createPatientResquest),
    );
  }

  @Patch(':id/allergies')
  async updatePatientAllergies(
    @Param('id') patientId: string,
    @Body() updatePatientAllergiesRequest: UpdatePatientAllergiesRequest,
  ): Promise<void> {
    await this.commandBus.execute<UpdateAllergiesCommand, void>(
      new UpdateAllergiesCommand(
        patientId,
        updatePatientAllergiesRequest.allergies,
      ),
    );
  }
}
