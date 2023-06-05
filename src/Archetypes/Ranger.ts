import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private static _classes = 0;
  private _energy: EnergyType;
  constructor(name: string) {
    super(name);
    this._energy = 'stamina';
    Ranger._classes += 1;
  }

  static createdArchetypeInstances(): number {
    return this._classes;
  }

  get energyType(): EnergyType {
    return this._energy;
  }
}

export default Ranger;