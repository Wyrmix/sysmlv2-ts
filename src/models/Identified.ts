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
 * @interface Identified
 */
export interface Identified {
    /**
     * 
     * @type {any}
     * @memberof Identified
     */
    id: any | null;
}

/**
 * Check if a given object implements the Identified interface.
 */
export function instanceOfIdentified(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function IdentifiedFromJSON(json: any): Identified {
    return IdentifiedFromJSONTyped(json, false);
}

export function IdentifiedFromJSONTyped(json: any, ignoreDiscriminator: boolean): Identified {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['@id'],
    };
}

export function IdentifiedToJSON(value?: Identified | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '@id': value.id,
    };
}

