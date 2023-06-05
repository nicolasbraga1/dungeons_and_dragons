import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private static _classes = 0;
  private _energy: EnergyType;
  constructor(name: string) {
    super(name);
    this._energy = 'stamina';
    Warrior._classes += 1;
  }

  static createdArchetypeInstances(): number {
    return this._classes;
  }

  get energyType(): EnergyType {
    return this._energy;
  }
}

export default Warrior;