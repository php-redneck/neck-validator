export interface IRule {
    
    readonly name: string;

    rule(value: any): boolean;

}