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
 * @interface ExternalData
 */
export interface ExternalData {
    /**
     * 
     * @type {any}
     * @memberof ExternalData
     */
    id: any | null;
    /**
     * 
     * @type {any}
     * @memberof ExternalData
     */
    atType: any | null;
    /**
     * 
     * @type {any}
     * @memberof ExternalData
     */
    resourceIdentifier: any | null;
}

/**
 * Check if a given object implements the ExternalData interface.
 */
export function instanceOfExternalData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "resourceIdentifier" in value;

    return isInstance;
}

export function ExternalDataFromJSON(json: any): ExternalData {
    return ExternalDataFromJSONTyped(json, false);
}

export function ExternalDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExternalData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['@id'],
        'atType': json['@type'],
        'resourceIdentifier': json['resourceIdentifier'],
    };
}

export function ExternalDataToJSON(value?: ExternalData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '@id': value.id,
        '@type': value.atType,
        'resourceIdentifier': value.resourceIdentifier,
    };
}

