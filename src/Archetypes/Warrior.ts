import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  private _energyType: EnergyType;
  private static _countInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior.countInstancesWarrior();
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  private static countInstancesWarrior() {
    this._countInstances += 1;
  }

  static createdArchetypeInstances() {
    return this._countInstances;
  }
}