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
 * @interface DisjoiningRequest
 */
export interface DisjoiningRequest {
    /**
     * 
     * @type {any}
     * @memberof DisjoiningRequest
     */
    id?: any | null;
    /**
     * 
     * @type {any}
     * @memberof DisjoiningRequest
     */
    atType: any | null;
    /**
     * 
     * @type {any}
     * @memberof DisjoiningRequest
     */
    aliasIds?: any | null;
    /**
     * 
     * @type {any}
     * @memberof DisjoiningRequest
     */
    declaredName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof DisjoiningRequest
     */
    declaredShortName?: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof DisjoiningRequest
     */
    disjoiningType?: Identified;
    /**
     * 
     * @type {any}
     * @memberof DisjoiningRequest
     */
    documentation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof DisjoiningRequest
     */
    elementId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof DisjoiningRequest
     */
    isImplied?: any | null;
    /**
     * 
     * @type {any}
     * @memberof DisjoiningRequest
     */
    isImpliedIncluded?: any | null;
    /**
     * 
     * @type {any}
     * @memberof DisjoiningRequest
     */
    isLibraryElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof DisjoiningRequest
     */
    name?: any | null;
    /**
     * 
     * @type {any}
     * @memberof DisjoiningRequest
     */
    ownedAnnotation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof DisjoiningRequest
     */
    ownedElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof DisjoiningRequest
     */
    ownedRelatedElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof DisjoiningRequest
     */
    ownedRelationship?: any | null;
    /**
     * 
     * @type {any}
     * @memberof DisjoiningRequest
     */
    owner?: any | null;
    /**
     * 
     * @type {any}
     * @memberof DisjoiningRequest
     */
    owningMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof DisjoiningRequest
     */
    owningNamespace?: any | null;
    /**
     * 
     * @type {any}
     * @memberof DisjoiningRequest
     */
    owningRelatedElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof DisjoiningRequest
     */
    owningRelationship?: any | null;
    /**
     * 
     * @type {any}
     * @memberof DisjoiningRequest
     */
    owningType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof DisjoiningRequest
     */
    qualifiedName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof DisjoiningRequest
     */
    relatedElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof DisjoiningRequest
     */
    shortName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof DisjoiningRequest
     */
    source?: any | null;
    /**
     * 
     * @type {any}
     * @memberof DisjoiningRequest
     */
    target?: any | null;
    /**
     * 
     * @type {any}
     * @memberof DisjoiningRequest
     */
    textualRepresentation?: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof DisjoiningRequest
     */
    typeDisjoined?: Identified;
}

/**
 * Check if a given object implements the DisjoiningRequest interface.
 */
export function instanceOfDisjoiningRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function DisjoiningRequestFromJSON(json: any): DisjoiningRequest {
    return DisjoiningRequestFromJSONTyped(json, false);
}

export function DisjoiningRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): DisjoiningRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, '@id') ? undefined : json['@id'],
        'atType': json['@type'],
        'aliasIds': !exists(json, 'aliasIds') ? undefined : json['aliasIds'],
        'declaredName': !exists(json, 'declaredName') ? undefined : json['declaredName'],
        'declaredShortName': !exists(json, 'declaredShortName') ? undefined : json['declaredShortName'],
        'disjoiningType': !exists(json, 'disjoiningType') ? undefined : IdentifiedFromJSON(json['disjoiningType']),
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
        'owningType': !exists(json, 'owningType') ? undefined : json['owningType'],
        'qualifiedName': !exists(json, 'qualifiedName') ? undefined : json['qualifiedName'],
        'relatedElement': !exists(json, 'relatedElement') ? undefined : json['relatedElement'],
        'shortName': !exists(json, 'shortName') ? undefined : json['shortName'],
        'source': !exists(json, 'source') ? undefined : json['source'],
        'target': !exists(json, 'target') ? undefined : json['target'],
        'textualRepresentation': !exists(json, 'textualRepresentation') ? undefined : json['textualRepresentation'],
        'typeDisjoined': !exists(json, 'typeDisjoined') ? undefined : IdentifiedFromJSON(json['typeDisjoined']),
    };
}

export function DisjoiningRequestToJSON(value?: DisjoiningRequest | null): any {
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
        'disjoiningType': IdentifiedToJSON(value.disjoiningType),
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
        'owningType': value.owningType,
        'qualifiedName': value.qualifiedName,
        'relatedElement': value.relatedElement,
        'shortName': value.shortName,
        'source': value.source,
        'target': value.target,
        'textualRepresentation': value.textualRepresentation,
        'typeDisjoined': IdentifiedToJSON(value.typeDisjoined),
    };
}
