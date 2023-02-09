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
 * @interface FeatureChainingRequest
 */
export interface FeatureChainingRequest {
    /**
     * 
     * @type {any}
     * @memberof FeatureChainingRequest
     */
    id?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FeatureChainingRequest
     */
    atType: any | null;
    /**
     * 
     * @type {any}
     * @memberof FeatureChainingRequest
     */
    aliasIds?: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof FeatureChainingRequest
     */
    chainingFeature?: Identified;
    /**
     * 
     * @type {any}
     * @memberof FeatureChainingRequest
     */
    declaredName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FeatureChainingRequest
     */
    declaredShortName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FeatureChainingRequest
     */
    documentation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FeatureChainingRequest
     */
    elementId?: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof FeatureChainingRequest
     */
    featureChained?: Identified;
    /**
     * 
     * @type {any}
     * @memberof FeatureChainingRequest
     */
    isImplied?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FeatureChainingRequest
     */
    isImpliedIncluded?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FeatureChainingRequest
     */
    isLibraryElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FeatureChainingRequest
     */
    name?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FeatureChainingRequest
     */
    ownedAnnotation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FeatureChainingRequest
     */
    ownedElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FeatureChainingRequest
     */
    ownedRelatedElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FeatureChainingRequest
     */
    ownedRelationship?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FeatureChainingRequest
     */
    owner?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FeatureChainingRequest
     */
    owningMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FeatureChainingRequest
     */
    owningNamespace?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FeatureChainingRequest
     */
    owningRelatedElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FeatureChainingRequest
     */
    owningRelationship?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FeatureChainingRequest
     */
    qualifiedName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FeatureChainingRequest
     */
    relatedElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FeatureChainingRequest
     */
    shortName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FeatureChainingRequest
     */
    source?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FeatureChainingRequest
     */
    target?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FeatureChainingRequest
     */
    textualRepresentation?: any | null;
}

/**
 * Check if a given object implements the FeatureChainingRequest interface.
 */
export function instanceOfFeatureChainingRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function FeatureChainingRequestFromJSON(json: any): FeatureChainingRequest {
    return FeatureChainingRequestFromJSONTyped(json, false);
}

export function FeatureChainingRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): FeatureChainingRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, '@id') ? undefined : json['@id'],
        'atType': json['@type'],
        'aliasIds': !exists(json, 'aliasIds') ? undefined : json['aliasIds'],
        'chainingFeature': !exists(json, 'chainingFeature') ? undefined : IdentifiedFromJSON(json['chainingFeature']),
        'declaredName': !exists(json, 'declaredName') ? undefined : json['declaredName'],
        'declaredShortName': !exists(json, 'declaredShortName') ? undefined : json['declaredShortName'],
        'documentation': !exists(json, 'documentation') ? undefined : json['documentation'],
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
        'featureChained': !exists(json, 'featureChained') ? undefined : IdentifiedFromJSON(json['featureChained']),
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
    };
}

export function FeatureChainingRequestToJSON(value?: FeatureChainingRequest | null): any {
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
        'chainingFeature': IdentifiedToJSON(value.chainingFeature),
        'declaredName': value.declaredName,
        'declaredShortName': value.declaredShortName,
        'documentation': value.documentation,
        'elementId': value.elementId,
        'featureChained': IdentifiedToJSON(value.featureChained),
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
    };
}

