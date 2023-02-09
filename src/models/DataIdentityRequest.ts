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
 * @interface DataIdentityRequest
 */
export interface DataIdentityRequest {
    /**
     * 
     * @type {any}
     * @memberof DataIdentityRequest
     */
    id: any | null;
    /**
     * 
     * @type {any}
     * @memberof DataIdentityRequest
     */
     atType?: any | null;
}

/**
 * Check if a given object implements the DataIdentityRequest interface.
 */
export function instanceOfDataIdentityRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function DataIdentityRequestFromJSON(json: any): DataIdentityRequest {
    return DataIdentityRequestFromJSONTyped(json, false);
}

export function DataIdentityRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): DataIdentityRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['@id'],
        'atType': !exists(json, '@type') ? undefined : json['@type'],
    };
}

export function DataIdentityRequestToJSON(value?: DataIdentityRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '@id': value.id,
        '@type': value.atType,
    };
}
