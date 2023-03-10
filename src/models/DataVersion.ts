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
import type { DataIdentity } from './DataIdentity';
import {
    DataIdentityFromJSON,
    DataIdentityFromJSONTyped,
    DataIdentityToJSON,
} from './DataIdentity';

/**
 * 
 * @export
 * @interface DataVersion
 */
export interface DataVersion {
    /**
     * 
     * @type {any}
     * @memberof DataVersion
     */
    id: any | null;
    /**
     * 
     * @type {any}
     * @memberof DataVersion
     */
    atType: any | null;
    /**
     * 
     * @type {DataIdentity}
     * @memberof DataVersion
     */
    identity: DataIdentity;
    /**
     * 
     * @type {any}
     * @memberof DataVersion
     */
    payload: any | null;
}

/**
 * Check if a given object implements the DataVersion interface.
 */
export function instanceOfDataVersion(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "identity" in value;
    isInstance = isInstance && "payload" in value;

    return isInstance;
}

export function DataVersionFromJSON(json: any): DataVersion {
    return DataVersionFromJSONTyped(json, false);
}

export function DataVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): DataVersion {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['@id'],
        'atType': json['@type'],
        'identity': DataIdentityFromJSON(json['identity']),
        'payload': json['payload'],
    };
}

export function DataVersionToJSON(value?: DataVersion | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '@id': value.id,
        '@type': value.atType,
        'identity': DataIdentityToJSON(value.identity),
        'payload': value.payload,
    };
}

