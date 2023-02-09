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
 * @interface RequirementConstraintKind
 */
export interface RequirementConstraintKind {
}

/**
 * Check if a given object implements the RequirementConstraintKind interface.
 */
export function instanceOfRequirementConstraintKind(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RequirementConstraintKindFromJSON(json: any): RequirementConstraintKind {
    return RequirementConstraintKindFromJSONTyped(json, false);
}

export function RequirementConstraintKindFromJSONTyped(json: any, ignoreDiscriminator: boolean): RequirementConstraintKind {
    return json;
}

export function RequirementConstraintKindToJSON(value?: RequirementConstraintKind | null): any {
    return value;
}
