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
 * @interface Query
 */
export interface Query {
    /**
     * 
     * @type {any}
     * @memberof Query
     */
    id: any | null;
    /**
     * 
     * @type {any}
     * @memberof Query
     */
    atType: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof Query
     */
    owningProject: Identified;
    /**
     * 
     * @type {any}
     * @memberof Query
     */
    select: any | null;
    /**
     * 
     * @type {any}
     * @memberof Query
     */
    where: any | null;
}

/**
 * Check if a given object implements the Query interface.
 */
export function instanceOfQuery(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "owningProject" in value;
    isInstance = isInstance && "select" in value;
    isInstance = isInstance && "where" in value;

    return isInstance;
}

export function QueryFromJSON(json: any): Query {
    return QueryFromJSONTyped(json, false);
}

export function QueryFromJSONTyped(json: any, ignoreDiscriminator: boolean): Query {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['@id'],
        'atType': json['@type'],
        'owningProject': IdentifiedFromJSON(json['owningProject']),
        'select': json['select'],
        'where': json['where'],
    };
}

export function QueryToJSON(value?: Query | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '@id': value.id,
        '@type': value.atType,
        'owningProject': IdentifiedToJSON(value.owningProject),
        'select': value.select,
        'where': value.where,
    };
}
