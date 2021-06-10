"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CatsController = void 0;
var common_1 = require("@nestjs/common");
var x = 0;
var CatsController = /** @class */ (function () {
    function CatsController() {
    }
    CatsController.prototype.create = function () {
        return ++x;
    };
    CatsController.prototype["delete"] = function () {
        return x;
    };
    CatsController.prototype.findAll = function () {
        return x;
    };
    __decorate([
        common_1.Post()
    ], CatsController.prototype, "create");
    __decorate([
        common_1.Delete()
    ], CatsController.prototype, "delete");
    __decorate([
        common_1.Get()
    ], CatsController.prototype, "findAll");
    CatsController = __decorate([
        common_1.Controller('cats')
    ], CatsController);
    return CatsController;
}());
exports.CatsController = CatsController;
