import { Rule } from "./rule";

export class IsRequired extends Rule {

    readonly name: string = 'required';

    arg1: number;

    constructor(arg1: number) {
        super();
        this.arg1 = arg1;
    }

    rule(value: any): boolean {
        return value !== undefined;
    }

}