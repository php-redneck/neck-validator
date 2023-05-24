"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enums = void 0;
var rule_1 = require("./rule");
var Enums = /** @class */ (function (_super) {
    __extends(Enums, _super);
    function Enums() {
        var enums = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            enums[_i] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this.name = 'enums';
        _this.enums = enums;
        return _this;
    }
    Enums.prototype.rule = function (value) {
        return this.enums.includes(value === null || value === void 0 ? void 0 : value.toString());
    };
    return Enums;
}(rule_1.Rule));
exports.Enums = Enums;
