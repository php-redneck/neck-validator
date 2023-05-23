import { IRule } from "../interfaces";
export declare class Rule implements IRule {
    readonly name: string;
    rule(value: any): boolean;
}
