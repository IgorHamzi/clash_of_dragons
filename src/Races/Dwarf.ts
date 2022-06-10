import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  private static countInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.countInstancesDwarf();
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  private static countInstancesDwarf() {
    this.countInstances += 1;
  }

  static createdRacesInstances(): number {
    return this.countInstances;
  }
}