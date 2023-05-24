import { Rule } from "./rule";
export declare class IsNumber extends Rule {
    readonly name: string;
    constructor();
    rule(value: any): boolean;
}
