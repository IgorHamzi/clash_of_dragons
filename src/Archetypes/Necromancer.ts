import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static _countInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer.countInstancesNecromancer();
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  private static countInstancesNecromancer() {
    this._countInstances += 1;
  }

  static createdArchetypeInstances() {
    return this._countInstances;
  }
}