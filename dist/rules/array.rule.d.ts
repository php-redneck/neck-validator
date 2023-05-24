import { Rule } from "./rule";
export declare class IsArray extends Rule {
    readonly name: string;
    constructor();
    rule(value: any): boolean;
}
