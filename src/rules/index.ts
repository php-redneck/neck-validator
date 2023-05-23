import { IsArray } from "./array.rule";
import { Enums } from "./enums.rule";
import { IsRequired } from "./required.rule";
import { Rule } from "./rule";

export class Rules {

    static readonly RULE_DELIMITER: string = ':';

    static readonly RULE_ARGUMENT_DELIMITER: string = ',';

    static readonly RULES: object = {
        required: IsRequired,
        enums: Enums,
        array: IsArray
    };

    static decode(rules: Array<String|Rule>): Array<{
        rule: Rule,
        arguments: any[]
    }> {
        return rules.map((rule): {
            rule: Rule,
            arguments: any[]
        } => {
            const isRuleInstance = rule?.constructor?.prototype instanceof Rule;

            let ruleArguments: any[] = [];

            if (!isRuleInstance) {
                const split = rule.toString().split(Rules.RULE_DELIMITER);

                this.throwIfRuleNotExists(split[0].toString());

                ruleArguments = (split[1] ?? '').split(Rules.RULE_ARGUMENT_DELIMITER);

                rule = new Rules.RULES[split[0]](...ruleArguments);
            }

            return {
                rule: <Rule>rule,
                arguments: ruleArguments
            };
        })
    }

    private static throwIfRuleNotExists(rule: string) {
        if (!Rules.RULES[rule]) {
            throw new Error('undefined rule');
        }
    }
}