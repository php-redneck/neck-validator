import { Rule } from "./rule";

export class IsString extends Rule {

    readonly name: string = 'string';

    constructor() {
        super();
    }

    rule(value: any): boolean {
        return typeof value === 'string';
    }

}