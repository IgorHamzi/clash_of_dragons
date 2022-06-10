import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  private static countInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.countInstancesHalfling();
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  private static countInstancesHalfling() {
    this.countInstances += 1;
  }

  static createdRacesInstances(): number {
    return this.countInstances;
  }
}