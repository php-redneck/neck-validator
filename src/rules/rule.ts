import { IRule } from "../interfaces";

export class Rule implements IRule {
    
    readonly name: string = 'base.rule';

    rule(value: any): boolean {
        return true;
    }

}