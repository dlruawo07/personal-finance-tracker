import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
export declare class MatchConstraint implements ValidatorConstraintInterface {
    validate(value: any, args: ValidationArguments): Promise<boolean> | boolean;
    defaultMessage(args: ValidationArguments): string;
}
export declare function Match(property: string, validationOptions?: ValidationOptions): (object: object, propertyName: string) => void;
