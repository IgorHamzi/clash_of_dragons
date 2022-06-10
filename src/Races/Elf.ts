import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  private static countInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.countInstancesElf();
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  private static countInstancesElf() {
    this.countInstances += 1;
  }

  static createdRacesInstances(): number {
    return this.countInstances;
  }
}