import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreatePatientResquest } from './dto/request/create-patient-request.dto';
import { UpdatePatientAllergiesRequest } from './dto/request/update-patient-allergies-request.dto';

@Controller('patients')
export class PatientsController {
  constructor() {}

  @Get(':id')
  async getPatient(@Param('id') patientId: string): Promise<void> {}

  @Get()
  async getPatients(): Promise<void> {}

  @Post(':id')
  async createPatient(
    @Body() createPatientResquest: CreatePatientResquest,
  ): Promise<void> {}

  @Patch(':id')
  async updatePatientAllergies(
    @Param('id') patientId: string,
    @Body() updatePatientAllergiesRequest: UpdatePatientAllergiesRequest,
  ): Promise<void> {}
}
