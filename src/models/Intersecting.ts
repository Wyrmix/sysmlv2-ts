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
 * @interface Intersecting
 */
export interface Intersecting {
    /**
     * 
     * @type {any}
     * @memberof Intersecting
     */
    id: any | null;
    /**
     * 
     * @type {any}
     * @memberof Intersecting
     */
    atType: any | null;
    /**
     * 
     * @type {any}
     * @memberof Intersecting
     */
    aliasIds: any | null;
    /**
     * 
     * @type {any}
     * @memberof Intersecting
     */
    declaredName: any | null;
    /**
     * 
     * @type {any}
     * @memberof Intersecting
     */
    declaredShortName: any | null;
    /**
     * 
     * @type {any}
     * @memberof Intersecting
     */
    documentation: any | null;
    /**
     * 
     * @type {any}
     * @memberof Intersecting
     */
    elementId: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof Intersecting
     */
    intersectingType: Identified;
    /**
     * 
     * @type {any}
     * @memberof Intersecting
     */
    isImplied: any | null;
    /**
     * 
     * @type {any}
     * @memberof Intersecting
     */
    isImpliedIncluded: any | null;
    /**
     * 
     * @type {any}
     * @memberof Intersecting
     */
    isLibraryElement: any | null;
    /**
     * 
     * @type {any}
     * @memberof Intersecting
     */
    name: any | null;
    /**
     * 
     * @type {any}
     * @memberof Intersecting
     */
    ownedAnnotation: any | null;
    /**
     * 
     * @type {any}
     * @memberof Intersecting
     */
    ownedElement: any | null;
    /**
     * 
     * @type {any}
     * @memberof Intersecting
     */
    ownedRelatedElement: any | null;
    /**
     * 
     * @type {any}
     * @memberof Intersecting
     */
    ownedRelationship: any | null;
    /**
     * 
     * @type {any}
     * @memberof Intersecting
     */
    owner: any | null;
    /**
     * 
     * @type {any}
     * @memberof Intersecting
     */
    owningMembership: any | null;
    /**
     * 
     * @type {any}
     * @memberof Intersecting
     */
    owningNamespace: any | null;
    /**
     * 
     * @type {any}
     * @memberof Intersecting
     */
    owningRelatedElement: any | null;
    /**
     * 
     * @type {any}
     * @memberof Intersecting
     */
    owningRelationship: any | null;
    /**
     * 
     * @type {any}
     * @memberof Intersecting
     */
    qualifiedName: any | null;
    /**
     * 
     * @type {any}
     * @memberof Intersecting
     */
    relatedElement: any | null;
    /**
     * 
     * @type {any}
     * @memberof Intersecting
     */
    shortName: any | null;
    /**
     * 
     * @type {any}
     * @memberof Intersecting
     */
    source: any | null;
    /**
     * 
     * @type {any}
     * @memberof Intersecting
     */
    target: any | null;
    /**
     * 
     * @type {any}
     * @memberof Intersecting
     */
    textualRepresentation: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof Intersecting
     */
    typeIntersected: Identified;
}

/**
 * Check if a given object implements the Intersecting interface.
 */
export function instanceOfIntersecting(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "aliasIds" in value;
    isInstance = isInstance && "declaredName" in value;
    isInstance = isInstance && "declaredShortName" in value;
    isInstance = isInstance && "documentation" in value;
    isInstance = isInstance && "elementId" in value;
    isInstance = isInstance && "intersectingType" in value;
    isInstance = isInstance && "isImplied" in value;
    isInstance = isInstance && "isImpliedIncluded" in value;
    isInstance = isInstance && "isLibraryElement" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "ownedAnnotation" in value;
    isInstance = isInstance && "ownedElement" in value;
    isInstance = isInstance && "ownedRelatedElement" in value;
    isInstance = isInstance && "ownedRelationship" in value;
    isInstance = isInstance && "owner" in value;
    isInstance = isInstance && "owningMembership" in value;
    isInstance = isInstance && "owningNamespace" in value;
    isInstance = isInstance && "owningRelatedElement" in value;
    isInstance = isInstance && "owningRelationship" in value;
    isInstance = isInstance && "qualifiedName" in value;
    isInstance = isInstance && "relatedElement" in value;
    isInstance = isInstance && "shortName" in value;
    isInstance = isInstance && "source" in value;
    isInstance = isInstance && "target" in value;
    isInstance = isInstance && "textualRepresentation" in value;
    isInstance = isInstance && "typeIntersected" in value;

    return isInstance;
}

export function IntersectingFromJSON(json: any): Intersecting {
    return IntersectingFromJSONTyped(json, false);
}

export function IntersectingFromJSONTyped(json: any, ignoreDiscriminator: boolean): Intersecting {
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
        'intersectingType': IdentifiedFromJSON(json['intersectingType']),
        'isImplied': json['isImplied'],
        'isImpliedIncluded': json['isImpliedIncluded'],
        'isLibraryElement': json['isLibraryElement'],
        'name': json['name'],
        'ownedAnnotation': json['ownedAnnotation'],
        'ownedElement': json['ownedElement'],
        'ownedRelatedElement': json['ownedRelatedElement'],
        'ownedRelationship': json['ownedRelationship'],
        'owner': json['owner'],
        'owningMembership': json['owningMembership'],
        'owningNamespace': json['owningNamespace'],
        'owningRelatedElement': json['owningRelatedElement'],
        'owningRelationship': json['owningRelationship'],
        'qualifiedName': json['qualifiedName'],
        'relatedElement': json['relatedElement'],
        'shortName': json['shortName'],
        'source': json['source'],
        'target': json['target'],
        'textualRepresentation': json['textualRepresentation'],
        'typeIntersected': IdentifiedFromJSON(json['typeIntersected']),
    };
}

export function IntersectingToJSON(value?: Intersecting | null): any {
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
        'intersectingType': IdentifiedToJSON(value.intersectingType),
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
        'typeIntersected': IdentifiedToJSON(value.typeIntersected),
    };
}
