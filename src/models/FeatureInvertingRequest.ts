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
 * @interface FeatureInvertingRequest
 */
export interface FeatureInvertingRequest {
    /**
     * 
     * @type {any}
     * @memberof FeatureInvertingRequest
     */
    id?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FeatureInvertingRequest
     */
    atType: any | null;
    /**
     * 
     * @type {any}
     * @memberof FeatureInvertingRequest
     */
    aliasIds?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FeatureInvertingRequest
     */
    declaredName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FeatureInvertingRequest
     */
    declaredShortName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FeatureInvertingRequest
     */
    documentation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FeatureInvertingRequest
     */
    elementId?: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof FeatureInvertingRequest
     */
    featureInverted?: Identified;
    /**
     * 
     * @type {Identified}
     * @memberof FeatureInvertingRequest
     */
    invertingFeature?: Identified;
    /**
     * 
     * @type {any}
     * @memberof FeatureInvertingRequest
     */
    isImplied?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FeatureInvertingRequest
     */
    isImpliedIncluded?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FeatureInvertingRequest
     */
    isLibraryElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FeatureInvertingRequest
     */
    name?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FeatureInvertingRequest
     */
    ownedAnnotation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FeatureInvertingRequest
     */
    ownedElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FeatureInvertingRequest
     */
    ownedRelatedElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FeatureInvertingRequest
     */
    ownedRelationship?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FeatureInvertingRequest
     */
    owner?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FeatureInvertingRequest
     */
    owningFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FeatureInvertingRequest
     */
    owningMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FeatureInvertingRequest
     */
    owningNamespace?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FeatureInvertingRequest
     */
    owningRelatedElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FeatureInvertingRequest
     */
    owningRelationship?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FeatureInvertingRequest
     */
    qualifiedName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FeatureInvertingRequest
     */
    relatedElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FeatureInvertingRequest
     */
    shortName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FeatureInvertingRequest
     */
    source?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FeatureInvertingRequest
     */
    target?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FeatureInvertingRequest
     */
    textualRepresentation?: any | null;
}

/**
 * Check if a given object implements the FeatureInvertingRequest interface.
 */
export function instanceOfFeatureInvertingRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function FeatureInvertingRequestFromJSON(json: any): FeatureInvertingRequest {
    return FeatureInvertingRequestFromJSONTyped(json, false);
}

export function FeatureInvertingRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): FeatureInvertingRequest {
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
        'featureInverted': !exists(json, 'featureInverted') ? undefined : IdentifiedFromJSON(json['featureInverted']),
        'invertingFeature': !exists(json, 'invertingFeature') ? undefined : IdentifiedFromJSON(json['invertingFeature']),
        'isImplied': !exists(json, 'isImplied') ? undefined : json['isImplied'],
        'isImpliedIncluded': !exists(json, 'isImpliedIncluded') ? undefined : json['isImpliedIncluded'],
        'isLibraryElement': !exists(json, 'isLibraryElement') ? undefined : json['isLibraryElement'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'ownedAnnotation': !exists(json, 'ownedAnnotation') ? undefined : json['ownedAnnotation'],
        'ownedElement': !exists(json, 'ownedElement') ? undefined : json['ownedElement'],
        'ownedRelatedElement': !exists(json, 'ownedRelatedElement') ? undefined : json['ownedRelatedElement'],
        'ownedRelationship': !exists(json, 'ownedRelationship') ? undefined : json['ownedRelationship'],
        'owner': !exists(json, 'owner') ? undefined : json['owner'],
        'owningFeature': !exists(json, 'owningFeature') ? undefined : json['owningFeature'],
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

export function FeatureInvertingRequestToJSON(value?: FeatureInvertingRequest | null): any {
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
        'featureInverted': IdentifiedToJSON(value.featureInverted),
        'invertingFeature': IdentifiedToJSON(value.invertingFeature),
        'isImplied': value.isImplied,
        'isImpliedIncluded': value.isImpliedIncluded,
        'isLibraryElement': value.isLibraryElement,
        'name': value.name,
        'ownedAnnotation': value.ownedAnnotation,
        'ownedElement': value.ownedElement,
        'ownedRelatedElement': value.ownedRelatedElement,
        'ownedRelationship': value.ownedRelationship,
        'owner': value.owner,
        'owningFeature': value.owningFeature,
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
