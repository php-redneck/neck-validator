import { Rule } from "./rules/rule";
declare class Validator {
    static readonly VALIDATOR_ARRAY_DELIMITER: string;
    static readonly VALIDATOR_RULE_DELIMITER: string;
    errors: object;
    static validate(rules: object, data: object): Validator;
    isError(): boolean;
    private validate;
    private transformRules;
    private execRules;
    private execRule;
}
export { Rule, Validator };
