class Sejour {
  constructor(private _nom: string, private _prix: number) {}

  get nom(): string {
    return this._nom;
  }

  set nom(newNom: string) {
    this._nom = newNom;
  }
  get prix(): number {
    return this._prix;
  }

  set prix(newPrix: number) {
    this._prix = newPrix;
  }
}

class SejourService {
  private sejours: Array<Sejour> = [];

  constructor() {
    this.sejours = [
      new Sejour("Premier", 1065),
      new Sejour("Deuxieme", 710),
      new Sejour("Troisieme", 1780),
      new Sejour("Dernier", 3410)
    ];
  }

  rechercheSejour(nom: string): Sejour {
    return <Sejour>this.sejours.filter(elem => elem.nom == nom).pop();
  }
}

let sejourServ = new SejourService();

console.log(sejourServ.rechercheSejour("Deuxieme"))