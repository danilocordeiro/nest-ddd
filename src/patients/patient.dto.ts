import { ObjectId } from 'mongoose';

export class PatientDto {
  readonly _id: ObjectId;
  readonly name: string;
  readonly age: number;
  readonly allergies: string[];
  readonly isAllergicToPeantus: boolean;
}
