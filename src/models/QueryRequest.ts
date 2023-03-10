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
 * @interface QueryRequest
 */
export interface QueryRequest {
    /**
     * 
     * @type {any}
     * @memberof QueryRequest
     */
     atType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof QueryRequest
     */
    select?: any | null;
    /**
     * 
     * @type {any}
     * @memberof QueryRequest
     */
    where?: any | null;
}

/**
 * Check if a given object implements the QueryRequest interface.
 */
export function instanceOfQueryRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function QueryRequestFromJSON(json: any): QueryRequest {
    return QueryRequestFromJSONTyped(json, false);
}

export function QueryRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): QueryRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'atType': !exists(json, '@type') ? undefined : json['@type'],
        'select': !exists(json, 'select') ? undefined : json['select'],
        'where': !exists(json, 'where') ? undefined : json['where'],
    };
}

export function QueryRequestToJSON(value?: QueryRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '@type': value.atType,
        'select': value.select,
        'where': value.where,
    };
}

