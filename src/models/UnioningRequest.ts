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
 * @interface UnioningRequest
 */
export interface UnioningRequest {
    /**
     * 
     * @type {any}
     * @memberof UnioningRequest
     */
    id?: any | null;
    /**
     * 
     * @type {any}
     * @memberof UnioningRequest
     */
    atType: any | null;
    /**
     * 
     * @type {any}
     * @memberof UnioningRequest
     */
    aliasIds?: any | null;
    /**
     * 
     * @type {any}
     * @memberof UnioningRequest
     */
    declaredName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof UnioningRequest
     */
    declaredShortName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof UnioningRequest
     */
    documentation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof UnioningRequest
     */
    elementId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof UnioningRequest
     */
    isImplied?: any | null;
    /**
     * 
     * @type {any}
     * @memberof UnioningRequest
     */
    isImpliedIncluded?: any | null;
    /**
     * 
     * @type {any}
     * @memberof UnioningRequest
     */
    isLibraryElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof UnioningRequest
     */
    name?: any | null;
    /**
     * 
     * @type {any}
     * @memberof UnioningRequest
     */
    ownedAnnotation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof UnioningRequest
     */
    ownedElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof UnioningRequest
     */
    ownedRelatedElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof UnioningRequest
     */
    ownedRelationship?: any | null;
    /**
     * 
     * @type {any}
     * @memberof UnioningRequest
     */
    owner?: any | null;
    /**
     * 
     * @type {any}
     * @memberof UnioningRequest
     */
    owningMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof UnioningRequest
     */
    owningNamespace?: any | null;
    /**
     * 
     * @type {any}
     * @memberof UnioningRequest
     */
    owningRelatedElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof UnioningRequest
     */
    owningRelationship?: any | null;
    /**
     * 
     * @type {any}
     * @memberof UnioningRequest
     */
    qualifiedName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof UnioningRequest
     */
    relatedElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof UnioningRequest
     */
    shortName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof UnioningRequest
     */
    source?: any | null;
    /**
     * 
     * @type {any}
     * @memberof UnioningRequest
     */
    target?: any | null;
    /**
     * 
     * @type {any}
     * @memberof UnioningRequest
     */
    textualRepresentation?: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof UnioningRequest
     */
    typeUnioned?: Identified;
    /**
     * 
     * @type {Identified}
     * @memberof UnioningRequest
     */
    unioningType?: Identified;
}

/**
 * Check if a given object implements the UnioningRequest interface.
 */
export function instanceOfUnioningRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function UnioningRequestFromJSON(json: any): UnioningRequest {
    return UnioningRequestFromJSONTyped(json, false);
}

export function UnioningRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UnioningRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, '@id') ? undefined : json['@id'],
        'atType': json['@type'],
        'aliasIds': !exists(json, 'aliasIds') ? undefined : json['aliasIds'],
        'declaredName': !exists(json, 'declaredName') ? undefined : json['declaredName'],
        'declaredShortName': !exists(json, 'declaredShortName') ? undefined : json['declaredShortName'],
        'documentation': !exists(json, 'documentation') ? undefined : json['documentation'],
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
        'isImplied': !exists(json, 'isImplied') ? undefined : json['isImplied'],
        'isImpliedIncluded': !exists(json, 'isImpliedIncluded') ? undefined : json['isImpliedIncluded'],
        'isLibraryElement': !exists(json, 'isLibraryElement') ? undefined : json['isLibraryElement'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'ownedAnnotation': !exists(json, 'ownedAnnotation') ? undefined : json['ownedAnnotation'],
        'ownedElement': !exists(json, 'ownedElement') ? undefined : json['ownedElement'],
        'ownedRelatedElement': !exists(json, 'ownedRelatedElement') ? undefined : json['ownedRelatedElement'],
        'ownedRelationship': !exists(json, 'ownedRelationship') ? undefined : json['ownedRelationship'],
        'owner': !exists(json, 'owner') ? undefined : json['owner'],
        'owningMembership': !exists(json, 'owningMembership') ? undefined : json['owningMembership'],
        'owningNamespace': !exists(json, 'owningNamespace') ? undefined : json['owningNamespace'],
        'owningRelatedElement': !exists(json, 'owningRelatedElement') ? undefined : json['owningRelatedElement'],
        'owningRelationship': !exists(json, 'owningRelationship') ? undefined : json['owningRelationship'],
        'qualifiedName': !exists(json, 'qualifiedName') ? undefined : json['qualifiedName'],
        'relatedElement': !exists(json, 'relatedElement') ? undefined : json['relatedElement'],
        'shortName': !exists(json, 'shortName') ? undefined : json['shortName'],
        'source': !exists(json, 'source') ? undefined : json['source'],
        'target': !exists(json, 'target') ? undefined : json['target'],
        'textualRepresentation': !exists(json, 'textualRepresentation') ? undefined : json['textualRepresentation'],
        'typeUnioned': !exists(json, 'typeUnioned') ? undefined : IdentifiedFromJSON(json['typeUnioned']),
        'unioningType': !exists(json, 'unioningType') ? undefined : IdentifiedFromJSON(json['unioningType']),
    };
}

export function UnioningRequestToJSON(value?: UnioningRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '@id': value.id,
        '@type': value.atType,
        'aliasIds': value.aliasIds,
        'declaredName': value.declaredName,
        'declaredShortName': value.declaredShortName,
        'documentation': value.documentation,
        'elementId': value.elementId,
        'isImplied': value.isImplied,
        'isImpliedIncluded': value.isImpliedIncluded,
        'isLibraryElement': value.isLibraryElement,
        'name': value.name,
        'ownedAnnotation': value.ownedAnnotation,
        'ownedElement': value.ownedElement,
        'ownedRelatedElement': value.ownedRelatedElement,
        'ownedRelationship': value.ownedRelationship,
        'owner': value.owner,
        'owningMembership': value.owningMembership,
        'owningNamespace': value.owningNamespace,
        'owningRelatedElement': value.owningRelatedElement,
        'owningRelationship': value.owningRelationship,
        'qualifiedName': value.qualifiedName,
        'relatedElement': value.relatedElement,
        'shortName': value.shortName,
        'source': value.source,
        'target': value.target,
        'textualRepresentation': value.textualRepresentation,
        'typeUnioned': IdentifiedToJSON(value.typeUnioned),
        'unioningType': IdentifiedToJSON(value.unioningType),
    };
}

