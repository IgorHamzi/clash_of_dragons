import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

class PVE extends Battle {
  private _monsters: SimpleFighter[];

  constructor(player: Fighter, monsters: SimpleFighter[]) {
    super(player);
    this._monsters = monsters;
  }

  fight(): number {
    this._monsters.forEach((element) => {
      element.attack(this.player);
      this.player.attack(element);
    });

    return super.fight();
  }
}

export default PVE;