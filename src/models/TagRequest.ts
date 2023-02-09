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
import type { Identified } from './Identified';
import {
    IdentifiedFromJSON,
    IdentifiedFromJSONTyped,
    IdentifiedToJSON,
} from './Identified';

/**
 * 
 * @export
 * @interface TagRequest
 */
export interface TagRequest {
    /**
     * 
     * @type {any}
     * @memberof TagRequest
     */
     atType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof TagRequest
     */
    name: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof TagRequest
     */
    taggedCommit: Identified;
}

/**
 * Check if a given object implements the TagRequest interface.
 */
export function instanceOfTagRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "taggedCommit" in value;

    return isInstance;
}

export function TagRequestFromJSON(json: any): TagRequest {
    return TagRequestFromJSONTyped(json, false);
}

export function TagRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TagRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'atType': !exists(json, '@type') ? undefined : json['@type'],
        'name': json['name'],
        'taggedCommit': IdentifiedFromJSON(json['taggedCommit']),
    };
}

export function TagRequestToJSON(value?: TagRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '@type': value.atType,
        'name': value.name,
        'taggedCommit': IdentifiedToJSON(value.taggedCommit),
    };
}

