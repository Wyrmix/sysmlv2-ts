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
 * @interface ReturnParameterMembership
 */
export interface ReturnParameterMembership {
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembership
     */
    id: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembership
     */
    atType: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembership
     */
    aliasIds: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembership
     */
    declaredName: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembership
     */
    declaredShortName: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembership
     */
    documentation: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembership
     */
    elementId: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof ReturnParameterMembership
     */
    feature: Identified;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembership
     */
    isImplied: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembership
     */
    isImpliedIncluded: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembership
     */
    isLibraryElement: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof ReturnParameterMembership
     */
    memberElement: Identified;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembership
     */
    memberElementId: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembership
     */
    memberName: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembership
     */
    memberShortName: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof ReturnParameterMembership
     */
    membershipOwningNamespace: Identified;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembership
     */
    name: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembership
     */
    ownedAnnotation: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembership
     */
    ownedElement: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof ReturnParameterMembership
     */
    ownedMemberElement: Identified;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembership
     */
    ownedMemberElementId: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof ReturnParameterMembership
     */
    ownedMemberFeature: Identified;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembership
     */
    ownedMemberName: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof ReturnParameterMembership
     */
    ownedMemberParameter: Identified;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembership
     */
    ownedMemberShortName: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembership
     */
    ownedRelatedElement: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembership
     */
    ownedRelationship: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembership
     */
    owner: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembership
     */
    owningMembership: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembership
     */
    owningNamespace: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembership
     */
    owningRelatedElement: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembership
     */
    owningRelationship: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof ReturnParameterMembership
     */
    owningType: Identified;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembership
     */
    qualifiedName: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembership
     */
    relatedElement: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembership
     */
    shortName: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembership
     */
    source: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembership
     */
    target: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembership
     */
    textualRepresentation: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof ReturnParameterMembership
     */
    type: Identified;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembership
     */
    visibility: any | null;
}

/**
 * Check if a given object implements the ReturnParameterMembership interface.
 */
export function instanceOfReturnParameterMembership(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "aliasIds" in value;
    isInstance = isInstance && "declaredName" in value;
    isInstance = isInstance && "declaredShortName" in value;
    isInstance = isInstance && "documentation" in value;
    isInstance = isInstance && "elementId" in value;
    isInstance = isInstance && "feature" in value;
    isInstance = isInstance && "isImplied" in value;
    isInstance = isInstance && "isImpliedIncluded" in value;
    isInstance = isInstance && "isLibraryElement" in value;
    isInstance = isInstance && "memberElement" in value;
    isInstance = isInstance && "memberElementId" in value;
    isInstance = isInstance && "memberName" in value;
    isInstance = isInstance && "memberShortName" in value;
    isInstance = isInstance && "membershipOwningNamespace" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "ownedAnnotation" in value;
    isInstance = isInstance && "ownedElement" in value;
    isInstance = isInstance && "ownedMemberElement" in value;
    isInstance = isInstance && "ownedMemberElementId" in value;
    isInstance = isInstance && "ownedMemberFeature" in value;
    isInstance = isInstance && "ownedMemberName" in value;
    isInstance = isInstance && "ownedMemberParameter" in value;
    isInstance = isInstance && "ownedMemberShortName" in value;
    isInstance = isInstance && "ownedRelatedElement" in value;
    isInstance = isInstance && "ownedRelationship" in value;
    isInstance = isInstance && "owner" in value;
    isInstance = isInstance && "owningMembership" in value;
    isInstance = isInstance && "owningNamespace" in value;
    isInstance = isInstance && "owningRelatedElement" in value;
    isInstance = isInstance && "owningRelationship" in value;
    isInstance = isInstance && "owningType" in value;
    isInstance = isInstance && "qualifiedName" in value;
    isInstance = isInstance && "relatedElement" in value;
    isInstance = isInstance && "shortName" in value;
    isInstance = isInstance && "source" in value;
    isInstance = isInstance && "target" in value;
    isInstance = isInstance && "textualRepresentation" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "visibility" in value;

    return isInstance;
}

export function ReturnParameterMembershipFromJSON(json: any): ReturnParameterMembership {
    return ReturnParameterMembershipFromJSONTyped(json, false);
}

export function ReturnParameterMembershipFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReturnParameterMembership {
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
        'feature': IdentifiedFromJSON(json['feature']),
        'isImplied': json['isImplied'],
        'isImpliedIncluded': json['isImpliedIncluded'],
        'isLibraryElement': json['isLibraryElement'],
        'memberElement': IdentifiedFromJSON(json['memberElement']),
        'memberElementId': json['memberElementId'],
        'memberName': json['memberName'],
        'memberShortName': json['memberShortName'],
        'membershipOwningNamespace': IdentifiedFromJSON(json['membershipOwningNamespace']),
        'name': json['name'],
        'ownedAnnotation': json['ownedAnnotation'],
        'ownedElement': json['ownedElement'],
        'ownedMemberElement': IdentifiedFromJSON(json['ownedMemberElement']),
        'ownedMemberElementId': json['ownedMemberElementId'],
        'ownedMemberFeature': IdentifiedFromJSON(json['ownedMemberFeature']),
        'ownedMemberName': json['ownedMemberName'],
        'ownedMemberParameter': IdentifiedFromJSON(json['ownedMemberParameter']),
        'ownedMemberShortName': json['ownedMemberShortName'],
        'ownedRelatedElement': json['ownedRelatedElement'],
        'ownedRelationship': json['ownedRelationship'],
        'owner': json['owner'],
        'owningMembership': json['owningMembership'],
        'owningNamespace': json['owningNamespace'],
        'owningRelatedElement': json['owningRelatedElement'],
        'owningRelationship': json['owningRelationship'],
        'owningType': IdentifiedFromJSON(json['owningType']),
        'qualifiedName': json['qualifiedName'],
        'relatedElement': json['relatedElement'],
        'shortName': json['shortName'],
        'source': json['source'],
        'target': json['target'],
        'textualRepresentation': json['textualRepresentation'],
        'type': IdentifiedFromJSON(json['type']),
        'visibility': json['visibility'],
    };
}

export function ReturnParameterMembershipToJSON(value?: ReturnParameterMembership | null): any {
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
        'feature': IdentifiedToJSON(value.feature),
        'isImplied': value.isImplied,
        'isImpliedIncluded': value.isImpliedIncluded,
        'isLibraryElement': value.isLibraryElement,
        'memberElement': IdentifiedToJSON(value.memberElement),
        'memberElementId': value.memberElementId,
        'memberName': value.memberName,
        'memberShortName': value.memberShortName,
        'membershipOwningNamespace': IdentifiedToJSON(value.membershipOwningNamespace),
        'name': value.name,
        'ownedAnnotation': value.ownedAnnotation,
        'ownedElement': value.ownedElement,
        'ownedMemberElement': IdentifiedToJSON(value.ownedMemberElement),
        'ownedMemberElementId': value.ownedMemberElementId,
        'ownedMemberFeature': IdentifiedToJSON(value.ownedMemberFeature),
        'ownedMemberName': value.ownedMemberName,
        'ownedMemberParameter': IdentifiedToJSON(value.ownedMemberParameter),
        'ownedMemberShortName': value.ownedMemberShortName,
        'ownedRelatedElement': value.ownedRelatedElement,
        'ownedRelationship': value.ownedRelationship,
        'owner': value.owner,
        'owningMembership': value.owningMembership,
        'owningNamespace': value.owningNamespace,
        'owningRelatedElement': value.owningRelatedElement,
        'owningRelationship': value.owningRelationship,
        'owningType': IdentifiedToJSON(value.owningType),
        'qualifiedName': value.qualifiedName,
        'relatedElement': value.relatedElement,
        'shortName': value.shortName,
        'source': value.source,
        'target': value.target,
        'textualRepresentation': value.textualRepresentation,
        'type': IdentifiedToJSON(value.type),
        'visibility': value.visibility,
    };
}

