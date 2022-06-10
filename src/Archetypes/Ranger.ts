import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Ranger extends Archetype {
  private _energyType: EnergyType;
  private static _countInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger.countInstancesRanger();
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  private static countInstancesRanger() {
    this._countInstances += 1;
  }

  static createdArchetypeInstances() {
    return this._countInstances;
  }
}