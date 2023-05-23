import { Rules } from "./rules";
import { Rule } from "./rules/rule";
import EnLang from './lang/en'
import { format } from "util";

class Validator {

    static readonly VALIDATOR_ARRAY_DELIMITER: string = '*';

    static readonly VALIDATOR_RULE_DELIMITER: string = '.';

    errors: object = {};

    static validate(rules: object, data: object): Validator {
        const validator = new Validator;

        rules = validator.transformRules(rules);
        
        for (const field in rules)
            validator.validate(field.split(Validator.VALIDATOR_RULE_DELIMITER), <Array<{ rule: Rule, arguments: any[] }>>rules[field], data);    

        return validator;
    }

    isError(): boolean {
        return Object.keys(this.errors).length > 0;
    }

    private validate(path: string[], rules: Array<{ rule: Rule, arguments: any[] }>, data: any, fullPathHistory = []) {
        const current = path.shift();

        const isArrayDelimiter = current === Validator.VALIDATOR_ARRAY_DELIMITER;

        if (isArrayDelimiter && data !== undefined) {
            for (let i = 0, length = data.length; i < length; ++i) 
                this.validate([...path], rules, data[i], [...fullPathHistory, i]);
            return;
        }

        fullPathHistory.push(current);

        if (isArrayDelimiter) {
            fullPathHistory = fullPathHistory.concat(path);
            path = [];
        } else {
            data = (!!current) ? data[current] : data
        }

        (path.length > 0) 
            ? this.validate([...path], rules, data, fullPathHistory) 
            : this.execRules(fullPathHistory.join('.'), data, rules);  
    }

    private transformRules(rules: object): object {
        for (const field in rules) {
            rules[field] = Rules.decode(
                (typeof rules[field] === 'string') ? rules[field].split('|') : rules[field]
            );
        }
        return rules;
    }

    private execRules(key: string, value: any, rules: Array<{ rule: Rule, arguments: any[] }>) {
        rules.forEach((rule: { rule: Rule, arguments: any[] }) => {
            this.execRule(key, value, rule);
        });
    }

    private execRule(key: string, value: any, rule: { rule: Rule, arguments: any[] }) {
        if (!rule.rule.rule(value)) {
            if (!this.errors[key]) this.errors[key] = [];

            const ruleName = rule.rule.name;

            this.errors[key].push({
                rule: ruleName,
                args: rule.arguments,
                message: format((EnLang[ruleName] ?? '').replace(':attribute', key), ...rule.arguments)
            });
        }
    }

}

export { Rule, Validator };