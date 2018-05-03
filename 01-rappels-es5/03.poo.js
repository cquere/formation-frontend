function Personne(prenom, nom, pseudo) {
  this.nom = nom;
  this.prenom = prenom;
  this.pseudo = pseudo;
  this.getNomComplet = function() {
    return "Nom : ".concat(
      this.nom,
      ", Prenom : ",
      this.prenom,
      ", Pseudo : ",
      this.pseudo
    );
  };
}

var jules = new Personne("Jules", "LEMAIRE", "jules77");
var paul = new Personne("Paul", "LEMAIRE", "paul44");

var afficherPersonne = function(personne) {
  console.log(
    "nom prenom pseudo :",
    personne.nom,
    personne.prenom,
    personne.pseudo
  );
  console.log("nomcomplet :", personne.getNomComplet());
};

//afficherPersonne(jules);
//afficherPersonne(paul);

jules.pseudo = "jules44";

//console.log(jules.getNomComplet());

//console.log(jules.age);

Personne.prototype.age = "NON RENSEIGNE";
//console.log(jules.age);
jules.age = 30;
//console.log(jules.age);

Personne.prototype.getInitiales = function() {
  return this.prenom.charAt(0).concat(this.nom.charAt(0));
};
//console.log(jules.getInitiales())

var robert = {
  prenom: "robert",
  nom: "LEPREFET",
  pseudo: "robert77",
  getNomComplet: function() {
    return "Nom : ".concat(
      this.nom,
      ", Prenom : ",
      this.prenom,
      ", Pseudo : ",
      this.pseudo
    );
  }
};

//afficherPersonne(robert);

function Client(prenom, nom, pseudo, numeroClient) {
  Personne.call(this, prenom, nom, pseudo);
  this.numeroClient = numeroClient;
  this.getInfos = function() {
    return {
      numeroClient: this.numeroClient,
      nom: this.nom,
      prenom: this.prenom
    };
  };
}

var steve = new Client("Steve", "LUCAS","steve44", "A01");

afficherPersonne(steve);

console.log(steve.numeroClient);
console.log(steve.getInfos());