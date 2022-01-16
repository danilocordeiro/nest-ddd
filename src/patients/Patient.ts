import { BadRequestException } from '@nestjs/common';
import { AggregateRoot } from '@nestjs/cqrs';

export class Patient extends AggregateRoot {
  constructor(
    private readonly _id: string,
    private readonly name: string,
    private readonly age: number,
    private allergies: string[],
  ) {
    super();
  }

  getId() {
    return this._id;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  getAllergies() {
    return [...this.allergies];
  }

  updateAllergies(allergies: string[]): void {
    const allergiesLower = allergies.map((allergy) =>
      allergy.toLocaleLowerCase(),
    );
    if (allergiesLower.includes('chocolate')) {
      throw new BadRequestException('Allergy may not be chocolate');
    }

    this.allergies = allergies;
  }
}
