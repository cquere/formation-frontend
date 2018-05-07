"use strict";
var Sejour = /** @class */ (function () {
    function Sejour(_nom, _prix) {
        this._nom = _nom;
        this._prix = _prix;
    }
    Object.defineProperty(Sejour.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        set: function (newNom) {
            this._nom = newNom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sejour.prototype, "prix", {
        get: function () {
            return this._prix;
        },
        set: function (newPrix) {
            this._prix = newPrix;
        },
        enumerable: true,
        configurable: true
    });
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService() {
        this.sejours = [];
        this.sejours = [
            new Sejour("Premier", 1065),
            new Sejour("Deuxieme", 710),
            new Sejour("Troisieme", 1780),
            new Sejour("Dernier", 3410)
        ];
    }
    SejourService.prototype.rechercheSejour = function (nom) {
        return this.sejours.filter(function (elem) { return elem.nom == nom; }).pop();
    };
    return SejourService;
}());
var sejourServ = new SejourService();
console.log(sejourServ.rechercheSejour("Deuxieme"));
