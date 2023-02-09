/* tslint:disable */
/* eslint-disable */
/**
 * Systems Modeling API and Services
 * REST/HTTP platform specific model (PSM) for the Systems Modeling API and Services
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface PrimitiveConstraint
 */
export interface PrimitiveConstraint {
    /**
     * 
     * @type {any}
     * @memberof PrimitiveConstraint
     */
    atType: any | null;
    /**
     * 
     * @type {any}
     * @memberof PrimitiveConstraint
     */
    inverse: any | null;
    /**
     * 
     * @type {any}
     * @memberof PrimitiveConstraint
     */
    operator: PrimitiveConstraintOperatorEnum;
    /**
     * 
     * @type {any}
     * @memberof PrimitiveConstraint
     */
    property: any | null;
    /**
     * 
     * @type {any}
     * @memberof PrimitiveConstraint
     */
    value: any | null;
}


/**
 * @export
 */
export const PrimitiveConstraintOperatorEnum = {
    Equal: '=',
    GreaterThan: '>',
    LessThan: '<'
} as const;
export type PrimitiveConstraintOperatorEnum = typeof PrimitiveConstraintOperatorEnum[keyof typeof PrimitiveConstraintOperatorEnum];


/**
 * Check if a given object implements the PrimitiveConstraint interface.
 */
export function instanceOfPrimitiveConstraint(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "inverse" in value;
    isInstance = isInstance && "operator" in value;
    isInstance = isInstance && "property" in value;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function PrimitiveConstraintFromJSON(json: any): PrimitiveConstraint {
    return PrimitiveConstraintFromJSONTyped(json, false);
}

export function PrimitiveConstraintFromJSONTyped(json: any, ignoreDiscriminator: boolean): PrimitiveConstraint {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'atType': json['@type'],
        'inverse': json['inverse'],
        'operator': json['operator'],
        'property': json['property'],
        'value': json['value'],
    };
}

export function PrimitiveConstraintToJSON(value?: PrimitiveConstraint | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '@type': value.atType,
        'inverse': value.inverse,
        'operator': value.operator,
        'property': value.property,
        'value': value.value,
    };
}

