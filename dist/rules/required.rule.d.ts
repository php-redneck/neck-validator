import { Rule } from "./rule";
export declare class IsRequired extends Rule {
    readonly name: string;
    arg1: number;
    constructor(arg1: number);
    rule(value: any): boolean;
}
