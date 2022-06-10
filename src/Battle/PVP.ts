import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  private _firstPlayer: Fighter;
  private _secondPlayer: Fighter;

  constructor(firstPlayer: Fighter, secondPlayer: Fighter) {
    super(firstPlayer);
    this._firstPlayer = firstPlayer;
    this._secondPlayer = secondPlayer;
  }

  fight(): number {
    this._firstPlayer.attack(this._secondPlayer);
    this._secondPlayer.attack(this._firstPlayer);
    return super.fight();
  }
}

export default PVP;