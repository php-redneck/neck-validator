"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rules = void 0;
var array_rule_1 = require("./array.rule");
var enums_rule_1 = require("./enums.rule");
var number_rule_1 = require("./number.rule");
var required_rule_1 = require("./required.rule");
var rule_1 = require("./rule");
var string_rule_1 = require("./string.rule");
var Rules = exports.Rules = /** @class */ (function () {
    function Rules() {
    }
    Rules.decode = function (rules) {
        var _this = this;
        return rules.map(function (rule) {
            var _a;
            var _b, _c;
            var isRuleInstance = ((_b = rule === null || rule === void 0 ? void 0 : rule.constructor) === null || _b === void 0 ? void 0 : _b.prototype) instanceof rule_1.Rule;
            var ruleArguments = [];
            if (!isRuleInstance) {
                var split = rule.toString().split(Rules.RULE_DELIMITER);
                _this.throwIfRuleNotExists(split[0].toString());
                ruleArguments = ((_c = split[1]) !== null && _c !== void 0 ? _c : '').split(Rules.RULE_ARGUMENT_DELIMITER);
                rule = new ((_a = Rules.RULES[split[0]]).bind.apply(_a, __spreadArray([void 0], ruleArguments, false)))();
            }
            return {
                rule: rule,
                arguments: ruleArguments
            };
        });
    };
    Rules.throwIfRuleNotExists = function (rule) {
        if (!Rules.RULES[rule]) {
            throw new Error('undefined rule');
        }
    };
    Rules.RULE_DELIMITER = ':';
    Rules.RULE_ARGUMENT_DELIMITER = ',';
    Rules.RULES = {
        required: required_rule_1.IsRequired,
        enums: enums_rule_1.Enums,
        array: array_rule_1.IsArray,
        string: string_rule_1.IsString,
        number: number_rule_1.IsNumber
    };
    return Rules;
}());
