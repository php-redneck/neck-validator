import { Rule } from "./rule";

export class IsNumber extends Rule {

    readonly name: string = 'number';

    constructor() {
        super();
    }

    rule(value: any): boolean {
        return typeof value === 'number';
    }

}