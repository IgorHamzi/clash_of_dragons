import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints: number;
  private static countInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.countInstancesOrc();
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  private static countInstancesOrc() {
    this.countInstances += 1;
  }

  static createdRacesInstances(): number {
    return this.countInstances;
  }
}