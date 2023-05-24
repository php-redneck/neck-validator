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
exports.IsArray = void 0;
var rule_1 = require("./rule");
var IsArray = /** @class */ (function (_super) {
    __extends(IsArray, _super);
    function IsArray() {
        var _this = _super.call(this) || this;
        _this.name = 'array';
        return _this;
    }
    IsArray.prototype.rule = function (value) {
        return typeof value === 'object';
    };
    return IsArray;
}(rule_1.Rule));
exports.IsArray = IsArray;
