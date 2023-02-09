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
 * @interface ExternalRelationshipRequest
 */
export interface ExternalRelationshipRequest {
    /**
     * 
     * @type {any}
     * @memberof ExternalRelationshipRequest
     */
    id?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ExternalRelationshipRequest
     */
    atType: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof ExternalRelationshipRequest
     */
    elementEnd?: Identified;
    /**
     * 
     * @type {Identified}
     * @memberof ExternalRelationshipRequest
     */
    externalDataEnd?: Identified;
    /**
     * 
     * @type {any}
     * @memberof ExternalRelationshipRequest
     */
    language?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ExternalRelationshipRequest
     */
    specification?: any | null;
}

/**
 * Check if a given object implements the ExternalRelationshipRequest interface.
 */
export function instanceOfExternalRelationshipRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function ExternalRelationshipRequestFromJSON(json: any): ExternalRelationshipRequest {
    return ExternalRelationshipRequestFromJSONTyped(json, false);
}

export function ExternalRelationshipRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExternalRelationshipRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, '@id') ? undefined : json['@id'],
        'atType': json['@type'],
        'elementEnd': !exists(json, 'elementEnd') ? undefined : IdentifiedFromJSON(json['elementEnd']),
        'externalDataEnd': !exists(json, 'externalDataEnd') ? undefined : IdentifiedFromJSON(json['externalDataEnd']),
        'language': !exists(json, 'language') ? undefined : json['language'],
        'specification': !exists(json, 'specification') ? undefined : json['specification'],
    };
}

export function ExternalRelationshipRequestToJSON(value?: ExternalRelationshipRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '@id': value.id,
        '@type': value.atType,
        'elementEnd': IdentifiedToJSON(value.elementEnd),
        'externalDataEnd': IdentifiedToJSON(value.externalDataEnd),
        'language': value.language,
        'specification': value.specification,
    };
}

