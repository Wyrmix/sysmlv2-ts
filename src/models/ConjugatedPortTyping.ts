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
 * @interface ConjugatedPortTyping
 */
export interface ConjugatedPortTyping {
    /**
     * 
     * @type {any}
     * @memberof ConjugatedPortTyping
     */
    id: any | null;
    /**
     * 
     * @type {any}
     * @memberof ConjugatedPortTyping
     */
    atType: any | null;
    /**
     * 
     * @type {any}
     * @memberof ConjugatedPortTyping
     */
    aliasIds: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof ConjugatedPortTyping
     */
    conjugatedPortDefinition: Identified;
    /**
     * 
     * @type {any}
     * @memberof ConjugatedPortTyping
     */
    declaredName: any | null;
    /**
     * 
     * @type {any}
     * @memberof ConjugatedPortTyping
     */
    declaredShortName: any | null;
    /**
     * 
     * @type {any}
     * @memberof ConjugatedPortTyping
     */
    documentation: any | null;
    /**
     * 
     * @type {any}
     * @memberof ConjugatedPortTyping
     */
    elementId: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof ConjugatedPortTyping
     */
    general: Identified;
    /**
     * 
     * @type {any}
     * @memberof ConjugatedPortTyping
     */
    isImplied: any | null;
    /**
     * 
     * @type {any}
     * @memberof ConjugatedPortTyping
     */
    isImpliedIncluded: any | null;
    /**
     * 
     * @type {any}
     * @memberof ConjugatedPortTyping
     */
    isLibraryElement: any | null;
    /**
     * 
     * @type {any}
     * @memberof ConjugatedPortTyping
     */
    name: any | null;
    /**
     * 
     * @type {any}
     * @memberof ConjugatedPortTyping
     */
    ownedAnnotation: any | null;
    /**
     * 
     * @type {any}
     * @memberof ConjugatedPortTyping
     */
    ownedElement: any | null;
    /**
     * 
     * @type {any}
     * @memberof ConjugatedPortTyping
     */
    ownedRelatedElement: any | null;
    /**
     * 
     * @type {any}
     * @memberof ConjugatedPortTyping
     */
    ownedRelationship: any | null;
    /**
     * 
     * @type {any}
     * @memberof ConjugatedPortTyping
     */
    owner: any | null;
    /**
     * 
     * @type {any}
     * @memberof ConjugatedPortTyping
     */
    owningFeature: any | null;
    /**
     * 
     * @type {any}
     * @memberof ConjugatedPortTyping
     */
    owningMembership: any | null;
    /**
     * 
     * @type {any}
     * @memberof ConjugatedPortTyping
     */
    owningNamespace: any | null;
    /**
     * 
     * @type {any}
     * @memberof ConjugatedPortTyping
     */
    owningRelatedElement: any | null;
    /**
     * 
     * @type {any}
     * @memberof ConjugatedPortTyping
     */
    owningRelationship: any | null;
    /**
     * 
     * @type {any}
     * @memberof ConjugatedPortTyping
     */
    owningType: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof ConjugatedPortTyping
     */
    portDefinition: Identified;
    /**
     * 
     * @type {any}
     * @memberof ConjugatedPortTyping
     */
    qualifiedName: any | null;
    /**
     * 
     * @type {any}
     * @memberof ConjugatedPortTyping
     */
    relatedElement: any | null;
    /**
     * 
     * @type {any}
     * @memberof ConjugatedPortTyping
     */
    shortName: any | null;
    /**
     * 
     * @type {any}
     * @memberof ConjugatedPortTyping
     */
    source: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof ConjugatedPortTyping
     */
    specific: Identified;
    /**
     * 
     * @type {any}
     * @memberof ConjugatedPortTyping
     */
    target: any | null;
    /**
     * 
     * @type {any}
     * @memberof ConjugatedPortTyping
     */
    textualRepresentation: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof ConjugatedPortTyping
     */
    type: Identified;
    /**
     * 
     * @type {Identified}
     * @memberof ConjugatedPortTyping
     */
    typedFeature: Identified;
}

/**
 * Check if a given object implements the ConjugatedPortTyping interface.
 */
export function instanceOfConjugatedPortTyping(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "aliasIds" in value;
    isInstance = isInstance && "conjugatedPortDefinition" in value;
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
    isInstance = isInstance && "portDefinition" in value;
    isInstance = isInstance && "qualifiedName" in value;
    isInstance = isInstance && "relatedElement" in value;
    isInstance = isInstance && "shortName" in value;
    isInstance = isInstance && "source" in value;
    isInstance = isInstance && "specific" in value;
    isInstance = isInstance && "target" in value;
    isInstance = isInstance && "textualRepresentation" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "typedFeature" in value;

    return isInstance;
}

export function ConjugatedPortTypingFromJSON(json: any): ConjugatedPortTyping {
    return ConjugatedPortTypingFromJSONTyped(json, false);
}

export function ConjugatedPortTypingFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConjugatedPortTyping {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['@id'],
        'atType': json['@type'],
        'aliasIds': json['aliasIds'],
        'conjugatedPortDefinition': IdentifiedFromJSON(json['conjugatedPortDefinition']),
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
        'owningFeature': json['owningFeature'],
        'owningMembership': json['owningMembership'],
        'owningNamespace': json['owningNamespace'],
        'owningRelatedElement': json['owningRelatedElement'],
        'owningRelationship': json['owningRelationship'],
        'owningType': json['owningType'],
        'portDefinition': IdentifiedFromJSON(json['portDefinition']),
        'qualifiedName': json['qualifiedName'],
        'relatedElement': json['relatedElement'],
        'shortName': json['shortName'],
        'source': json['source'],
        'specific': IdentifiedFromJSON(json['specific']),
        'target': json['target'],
        'textualRepresentation': json['textualRepresentation'],
        'type': IdentifiedFromJSON(json['type']),
        'typedFeature': IdentifiedFromJSON(json['typedFeature']),
    };
}

export function ConjugatedPortTypingToJSON(value?: ConjugatedPortTyping | null): any {
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
        'conjugatedPortDefinition': IdentifiedToJSON(value.conjugatedPortDefinition),
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
        'owningFeature': value.owningFeature,
        'owningMembership': value.owningMembership,
        'owningNamespace': value.owningNamespace,
        'owningRelatedElement': value.owningRelatedElement,
        'owningRelationship': value.owningRelationship,
        'owningType': value.owningType,
        'portDefinition': IdentifiedToJSON(value.portDefinition),
        'qualifiedName': value.qualifiedName,
        'relatedElement': value.relatedElement,
        'shortName': value.shortName,
        'source': value.source,
        'specific': IdentifiedToJSON(value.specific),
        'target': value.target,
        'textualRepresentation': value.textualRepresentation,
        'type': IdentifiedToJSON(value.type),
        'typedFeature': IdentifiedToJSON(value.typedFeature),
    };
}
