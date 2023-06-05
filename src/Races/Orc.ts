import Race from './Race';

class Orc extends Race {
  private static _races = 0;
  private _maxLifePoints: number;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc._races += 1;
  }

  static createdRacesInstances(): number {
    return this._races;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Orc;