import SimpleFighter from './SimpleFighter';

export default class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints() {
    return this._lifePoints;
  }

  get strength() {
    return this._strength;
  }

  receiveDamage(attackPoints: number) {
    const damage = attackPoints - this.lifePoints;
    if (damage > 0) {
      this._lifePoints -= damage;
    }

    if (this.lifePoints <= 0) {
      this._lifePoints = -1;
    }

    return this._lifePoints;
  }

  attack(enemy: SimpleFighter) {
    return enemy.receiveDamage(this._strength);
  }
}