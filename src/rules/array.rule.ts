import { Rule } from "./rule";

export class IsArray extends Rule {

    readonly name: string = 'array';

    constructor() {
        super();
    }

    rule(value: any): boolean {
        return typeof value === 'object';
    }

}