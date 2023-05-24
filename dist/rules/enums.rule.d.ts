import { Rule } from "./rule";
export declare class Enums extends Rule {
    readonly name: string;
    enums: any[];
    constructor(...enums: any[]);
    rule(value: any): boolean;
}
