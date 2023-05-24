import { Rule } from "./rule";
export declare class IsString extends Rule {
    readonly name: string;
    constructor();
    rule(value: any): boolean;
}
