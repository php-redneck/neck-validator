import { Rule } from "./rule";
export declare class IsRequired extends Rule {
    readonly name: string;
    constructor();
    rule(value: any): boolean;
}
