export class UpdateAllergiesCommand {
  constructor(
    public readonly patientId: string,
    public readonly allergies: string[],
  ) {}
}
