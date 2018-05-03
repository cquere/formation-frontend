var villes = ["nantes", "paris", "saint-nazaire", "angers", "le mans"];

villes.forEach(function(elem) {
  console.log(elem);
});

console.log(
  "lettreADansToutesLesVilles ==",
  villes.every(elem => elem.includes("a"))
);

console.log(
  "auMoinsUneVilleAvecUnTiret ==",
  villes.some(elem => elem.includes("-"))
);

var villesSansTiretSansEspace = villes.filter(
  elem => (elem.includes("-") || elem.includes(" ") ? false : true)
);

console.log("villesSansTiretSansEspace==", villesSansTiretSansEspace);

var villesMajusculeSeTerminantParS = villes.filter(elem => elem.endsWith('s')).map(elem =>  elem.toUpperCase());
 

console.log("villesMajusculeSeTerminantParS ==", villesMajusculeSeTerminantParS);
