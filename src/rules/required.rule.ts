import { Rule } from "./rule";

export class IsRequired extends Rule {

    readonly name: string = 'required';

    constructor() {
        super();
    }

    rule(value: any): boolean {
        return value !== undefined;
    }

}