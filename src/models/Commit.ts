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
 * @interface Commit
 */
export interface Commit {
    /**
     * 
     * @type {any}
     * @memberof Commit
     */
    id: any | null;
    /**
     * 
     * @type {any}
     * @memberof Commit
     */
    atType: any | null;
    /**
     * 
     * @type {any}
     * @memberof Commit
     */
    created: any | null;
    /**
     * 
     * @type {any}
     * @memberof Commit
     */
    description: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof Commit
     */
    owningProject: Identified;
    /**
     * 
     * @type {any}
     * @memberof Commit
     */
    previousCommit: any | null;
}

/**
 * Check if a given object implements the Commit interface.
 */
export function instanceOfCommit(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "created" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "owningProject" in value;
    isInstance = isInstance && "previousCommit" in value;

    return isInstance;
}

export function CommitFromJSON(json: any): Commit {
    return CommitFromJSONTyped(json, false);
}

export function CommitFromJSONTyped(json: any, ignoreDiscriminator: boolean): Commit {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['@id'],
        'atType': json['@type'],
        'created': json['created'],
        'description': json['description'],
        'owningProject': IdentifiedFromJSON(json['owningProject']),
        'previousCommit': json['previousCommit'],
    };
}

export function CommitToJSON(value?: Commit | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '@id': value.id,
        '@type': value.atType,
        'created': value.created,
        'description': value.description,
        'owningProject': IdentifiedToJSON(value.owningProject),
        'previousCommit': value.previousCommit,
    };
}

