import { Rule } from "./rule";
export declare class Rules {
    static readonly RULE_DELIMITER: string;
    static readonly RULE_ARGUMENT_DELIMITER: string;
    static readonly RULES: object;
    static decode(rules: Array<String | Rule>): Array<{
        rule: Rule;
        arguments: any[];
    }>;
    private static throwIfRuleNotExists;
}
