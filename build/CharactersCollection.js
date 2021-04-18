"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
var CharactersCollection = /** @class */ (function () {
    function CharactersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(CharactersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    CharactersCollection.prototype.compare = function (left, right) {
        return (this.data[left].toLocaleLowerCase() > this.data[right].toLocaleLowerCase());
    };
    CharactersCollection.prototype.swap = function (left, right) {
        var strArr = this.data.split('');
        var temp = strArr[left];
        strArr[left] = strArr[right];
        strArr[right] = temp;
        this.data = strArr.join('');
    };
    return CharactersCollection;
}());
exports.CharactersCollection = CharactersCollection;
