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
 * @interface GetDatatypes200Response
 */
export interface GetDatatypes200Response {
    [key: string]: any | any;
    /**
     * 
     * @type {any}
     * @memberof GetDatatypes200Response
     */
    $schema: any | null;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof GetDatatypes200Response
     */
    $defs: { [key: string]: any; } | null;
}

/**
 * Check if a given object implements the GetDatatypes200Response interface.
 */
export function instanceOfGetDatatypes200Response(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "$schema" in value;
    isInstance = isInstance && "$defs" in value;

    return isInstance;
}

export function GetDatatypes200ResponseFromJSON(json: any): GetDatatypes200Response {
    return GetDatatypes200ResponseFromJSONTyped(json, false);
}

export function GetDatatypes200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetDatatypes200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
            ...json,
        '$schema': json['$schema'],
        '$defs': json['$defs'],
    };
}

export function GetDatatypes200ResponseToJSON(value?: GetDatatypes200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
            ...value,
        '$schema': value.$schema,
        '$defs': value.$defs,
    };
}

