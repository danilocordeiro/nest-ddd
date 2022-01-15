import { Prop, Schema } from '@nestjs/mongoose';
import { IdentifiableEntitySchema } from 'src/database/identifiable-entity.schema';

@Schema({ versionKey: false, collection: 'patients' })
export class PatientSchema extends IdentifiableEntitySchema {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  allergies: string[];
}
