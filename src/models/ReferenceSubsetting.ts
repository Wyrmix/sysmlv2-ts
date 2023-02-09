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
 * @interface ReferenceSubsetting
 */
export interface ReferenceSubsetting {
    /**
     * 
     * @type {any}
     * @memberof ReferenceSubsetting
     */
    id: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReferenceSubsetting
     */
    atType: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReferenceSubsetting
     */
    aliasIds: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReferenceSubsetting
     */
    declaredName: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReferenceSubsetting
     */
    declaredShortName: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReferenceSubsetting
     */
    documentation: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReferenceSubsetting
     */
    elementId: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof ReferenceSubsetting
     */
    general: Identified;
    /**
     * 
     * @type {any}
     * @memberof ReferenceSubsetting
     */
    isImplied: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReferenceSubsetting
     */
    isImpliedIncluded: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReferenceSubsetting
     */
    isLibraryElement: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReferenceSubsetting
     */
    name: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReferenceSubsetting
     */
    ownedAnnotation: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReferenceSubsetting
     */
    ownedElement: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReferenceSubsetting
     */
    ownedRelatedElement: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReferenceSubsetting
     */
    ownedRelationship: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReferenceSubsetting
     */
    owner: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof ReferenceSubsetting
     */
    owningFeature: Identified;
    /**
     * 
     * @type {any}
     * @memberof ReferenceSubsetting
     */
    owningMembership: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReferenceSubsetting
     */
    owningNamespace: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReferenceSubsetting
     */
    owningRelatedElement: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReferenceSubsetting
     */
    owningRelationship: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReferenceSubsetting
     */
    owningType: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReferenceSubsetting
     */
    qualifiedName: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof ReferenceSubsetting
     */
    referencedFeature: Identified;
    /**
     * 
     * @type {Identified}
     * @memberof ReferenceSubsetting
     */
    referencingFeature: Identified;
    /**
     * 
     * @type {any}
     * @memberof ReferenceSubsetting
     */
    relatedElement: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReferenceSubsetting
     */
    shortName: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReferenceSubsetting
     */
    source: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof ReferenceSubsetting
     */
    specific: Identified;
    /**
     * 
     * @type {Identified}
     * @memberof ReferenceSubsetting
     */
    subsettedFeature: Identified;
    /**
     * 
     * @type {Identified}
     * @memberof ReferenceSubsetting
     */
    subsettingFeature: Identified;
    /**
     * 
     * @type {any}
     * @memberof ReferenceSubsetting
     */
    target: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReferenceSubsetting
     */
    textualRepresentation: any | null;
}

/**
 * Check if a given object implements the ReferenceSubsetting interface.
 */
export function instanceOfReferenceSubsetting(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "aliasIds" in value;
    isInstance = isInstance && "declaredName" in value;
    isInstance = isInstance && "declaredShortName" in value;
    isInstance = isInstance && "documentation" in value;
    isInstance = isInstance && "elementId" in value;
    isInstance = isInstance && "general" in value;
    isInstance = isInstance && "isImplied" in value;
    isInstance = isInstance && "isImpliedIncluded" in value;
    isInstance = isInstance && "isLibraryElement" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "ownedAnnotation" in value;
    isInstance = isInstance && "ownedElement" in value;
    isInstance = isInstance && "ownedRelatedElement" in value;
    isInstance = isInstance && "ownedRelationship" in value;
    isInstance = isInstance && "owner" in value;
    isInstance = isInstance && "owningFeature" in value;
    isInstance = isInstance && "owningMembership" in value;
    isInstance = isInstance && "owningNamespace" in value;
    isInstance = isInstance && "owningRelatedElement" in value;
    isInstance = isInstance && "owningRelationship" in value;
    isInstance = isInstance && "owningType" in value;
    isInstance = isInstance && "qualifiedName" in value;
    isInstance = isInstance && "referencedFeature" in value;
    isInstance = isInstance && "referencingFeature" in value;
    isInstance = isInstance && "relatedElement" in value;
    isInstance = isInstance && "shortName" in value;
    isInstance = isInstance && "source" in value;
    isInstance = isInstance && "specific" in value;
    isInstance = isInstance && "subsettedFeature" in value;
    isInstance = isInstance && "subsettingFeature" in value;
    isInstance = isInstance && "target" in value;
    isInstance = isInstance && "textualRepresentation" in value;

    return isInstance;
}

export function ReferenceSubsettingFromJSON(json: any): ReferenceSubsetting {
    return ReferenceSubsettingFromJSONTyped(json, false);
}

export function ReferenceSubsettingFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferenceSubsetting {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['@id'],
        'atType': json['@type'],
        'aliasIds': json['aliasIds'],
        'declaredName': json['declaredName'],
        'declaredShortName': json['declaredShortName'],
        'documentation': json['documentation'],
        'elementId': json['elementId'],
        'general': IdentifiedFromJSON(json['general']),
        'isImplied': json['isImplied'],
        'isImpliedIncluded': json['isImpliedIncluded'],
        'isLibraryElement': json['isLibraryElement'],
        'name': json['name'],
        'ownedAnnotation': json['ownedAnnotation'],
        'ownedElement': json['ownedElement'],
        'ownedRelatedElement': json['ownedRelatedElement'],
        'ownedRelationship': json['ownedRelationship'],
        'owner': json['owner'],
        'owningFeature': IdentifiedFromJSON(json['owningFeature']),
        'owningMembership': json['owningMembership'],
        'owningNamespace': json['owningNamespace'],
        'owningRelatedElement': json['owningRelatedElement'],
        'owningRelationship': json['owningRelationship'],
        'owningType': json['owningType'],
        'qualifiedName': json['qualifiedName'],
        'referencedFeature': IdentifiedFromJSON(json['referencedFeature']),
        'referencingFeature': IdentifiedFromJSON(json['referencingFeature']),
        'relatedElement': json['relatedElement'],
        'shortName': json['shortName'],
        'source': json['source'],
        'specific': IdentifiedFromJSON(json['specific']),
        'subsettedFeature': IdentifiedFromJSON(json['subsettedFeature']),
        'subsettingFeature': IdentifiedFromJSON(json['subsettingFeature']),
        'target': json['target'],
        'textualRepresentation': json['textualRepresentation'],
    };
}

export function ReferenceSubsettingToJSON(value?: ReferenceSubsetting | null): any {
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
        'general': IdentifiedToJSON(value.general),
        'isImplied': value.isImplied,
        'isImpliedIncluded': value.isImpliedIncluded,
        'isLibraryElement': value.isLibraryElement,
        'name': value.name,
        'ownedAnnotation': value.ownedAnnotation,
        'ownedElement': value.ownedElement,
        'ownedRelatedElement': value.ownedRelatedElement,
        'ownedRelationship': value.ownedRelationship,
        'owner': value.owner,
        'owningFeature': IdentifiedToJSON(value.owningFeature),
        'owningMembership': value.owningMembership,
        'owningNamespace': value.owningNamespace,
        'owningRelatedElement': value.owningRelatedElement,
        'owningRelationship': value.owningRelationship,
        'owningType': value.owningType,
        'qualifiedName': value.qualifiedName,
        'referencedFeature': IdentifiedToJSON(value.referencedFeature),
        'referencingFeature': IdentifiedToJSON(value.referencingFeature),
        'relatedElement': value.relatedElement,
        'shortName': value.shortName,
        'source': value.source,
        'specific': IdentifiedToJSON(value.specific),
        'subsettedFeature': IdentifiedToJSON(value.subsettedFeature),
        'subsettingFeature': IdentifiedToJSON(value.subsettingFeature),
        'target': value.target,
        'textualRepresentation': value.textualRepresentation,
    };
}
