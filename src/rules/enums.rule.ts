import { Rule } from "./rule";

export class Enums extends Rule {

    readonly name: string = 'enums';

    enums: any[];

    constructor(...enums) {
        super();
        this.enums = enums;
    }

    rule(value: any): boolean {
        return this.enums.includes(value.toString());
    }

}