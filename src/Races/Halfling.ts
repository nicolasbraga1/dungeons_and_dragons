import Race from './Race';

class Halfling extends Race {
  private static _races = 0;
  private _maxLifePoints: number;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling._races += 1;
  }

  static createdRacesInstances(): number {
    return this._races;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Halfling;