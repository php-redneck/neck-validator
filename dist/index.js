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
exports.Validator = exports.Rule = void 0;
var rules_1 = require("./rules");
var rule_1 = require("./rules/rule");
Object.defineProperty(exports, "Rule", { enumerable: true, get: function () { return rule_1.Rule; } });
var en_1 = require("./lang/en");
var util_1 = require("util");
var Validator = /** @class */ (function () {
    function Validator() {
        this.errors = {};
    }
    Validator.validate = function (rules, data) {
        var validator = new Validator;
        rules = validator.transformRules(rules);
        for (var field in rules)
            validator.validate(field.split(Validator.VALIDATOR_RULE_DELIMITER), rules[field], data);
        return validator;
    };
    Validator.prototype.isError = function () {
        return Object.keys(this.errors).length > 0;
    };
    Validator.prototype.validate = function (path, rules, data, fullPathHistory) {
        if (fullPathHistory === void 0) { fullPathHistory = []; }
        var current = path.shift();
        var isArrayDelimiter = current === Validator.VALIDATOR_ARRAY_DELIMITER;
        if (isArrayDelimiter && data !== undefined) {
            for (var i = 0, length_1 = data.length; i < length_1; ++i)
                this.validate(__spreadArray([], path, true), rules, data[i], __spreadArray(__spreadArray([], fullPathHistory, true), [i], false));
            return;
        }
        fullPathHistory.push(current);
        if (isArrayDelimiter) {
            fullPathHistory = fullPathHistory.concat(path);
            path = [];
        }
        else {
            data = (!!current) ? data[current] : data;
        }
        (path.length > 0)
            ? this.validate(__spreadArray([], path, true), rules, data, fullPathHistory)
            : this.execRules(fullPathHistory.join('.'), data, rules);
    };
    Validator.prototype.transformRules = function (rules) {
        for (var field in rules) {
            rules[field] = rules_1.Rules.decode((typeof rules[field] === 'string') ? rules[field].split('|') : rules[field]);
        }
        return rules;
    };
    Validator.prototype.execRules = function (key, value, rules) {
        var _this = this;
        rules.forEach(function (rule) {
            _this.execRule(key, value, rule);
        });
    };
    Validator.prototype.execRule = function (key, value, rule) {
        var _a;
        if (!rule.rule.rule(value)) {
            if (!this.errors[key])
                this.errors[key] = [];
            var ruleName = rule.rule.name;
            this.errors[key].push({
                rule: ruleName,
                args: rule.arguments,
                message: util_1.format.apply(void 0, __spreadArray([((_a = en_1.default[ruleName]) !== null && _a !== void 0 ? _a : '').replace(':attribute', key)], rule.arguments, false))
            });
        }
    };
    Validator.VALIDATOR_ARRAY_DELIMITER = '*';
    Validator.VALIDATOR_RULE_DELIMITER = '.';
    return Validator;
}());
exports.Validator = Validator;
