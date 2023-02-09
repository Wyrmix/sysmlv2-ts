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
 * @interface RequirementVerificationMembership
 */
export interface RequirementVerificationMembership {
    /**
     * 
     * @type {any}
     * @memberof RequirementVerificationMembership
     */
    id: any | null;
    /**
     * 
     * @type {any}
     * @memberof RequirementVerificationMembership
     */
    atType: any | null;
    /**
     * 
     * @type {any}
     * @memberof RequirementVerificationMembership
     */
    aliasIds: any | null;
    /**
     * 
     * @type {any}
     * @memberof RequirementVerificationMembership
     */
    declaredName: any | null;
    /**
     * 
     * @type {any}
     * @memberof RequirementVerificationMembership
     */
    declaredShortName: any | null;
    /**
     * 
     * @type {any}
     * @memberof RequirementVerificationMembership
     */
    documentation: any | null;
    /**
     * 
     * @type {any}
     * @memberof RequirementVerificationMembership
     */
    elementId: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof RequirementVerificationMembership
     */
    feature: Identified;
    /**
     * 
     * @type {any}
     * @memberof RequirementVerificationMembership
     */
    isImplied: any | null;
    /**
     * 
     * @type {any}
     * @memberof RequirementVerificationMembership
     */
    isImpliedIncluded: any | null;
    /**
     * 
     * @type {any}
     * @memberof RequirementVerificationMembership
     */
    isLibraryElement: any | null;
    /**
     * 
     * @type {any}
     * @memberof RequirementVerificationMembership
     */
    kind: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof RequirementVerificationMembership
     */
    memberElement: Identified;
    /**
     * 
     * @type {any}
     * @memberof RequirementVerificationMembership
     */
    memberElementId: any | null;
    /**
     * 
     * @type {any}
     * @memberof RequirementVerificationMembership
     */
    memberName: any | null;
    /**
     * 
     * @type {any}
     * @memberof RequirementVerificationMembership
     */
    memberShortName: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof RequirementVerificationMembership
     */
    membershipOwningNamespace: Identified;
    /**
     * 
     * @type {any}
     * @memberof RequirementVerificationMembership
     */
    name: any | null;
    /**
     * 
     * @type {any}
     * @memberof RequirementVerificationMembership
     */
    ownedAnnotation: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof RequirementVerificationMembership
     */
    ownedConstraint: Identified;
    /**
     * 
     * @type {any}
     * @memberof RequirementVerificationMembership
     */
    ownedElement: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof RequirementVerificationMembership
     */
    ownedMemberElement: Identified;
    /**
     * 
     * @type {any}
     * @memberof RequirementVerificationMembership
     */
    ownedMemberElementId: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof RequirementVerificationMembership
     */
    ownedMemberFeature: Identified;
    /**
     * 
     * @type {any}
     * @memberof RequirementVerificationMembership
     */
    ownedMemberName: any | null;
    /**
     * 
     * @type {any}
     * @memberof RequirementVerificationMembership
     */
    ownedMemberShortName: any | null;
    /**
     * 
     * @type {any}
     * @memberof RequirementVerificationMembership
     */
    ownedRelatedElement: any | null;
    /**
     * 
     * @type {any}
     * @memberof RequirementVerificationMembership
     */
    ownedRelationship: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof RequirementVerificationMembership
     */
    ownedRequirement: Identified;
    /**
     * 
     * @type {any}
     * @memberof RequirementVerificationMembership
     */
    owner: any | null;
    /**
     * 
     * @type {any}
     * @memberof RequirementVerificationMembership
     */
    owningMembership: any | null;
    /**
     * 
     * @type {any}
     * @memberof RequirementVerificationMembership
     */
    owningNamespace: any | null;
    /**
     * 
     * @type {any}
     * @memberof RequirementVerificationMembership
     */
    owningRelatedElement: any | null;
    /**
     * 
     * @type {any}
     * @memberof RequirementVerificationMembership
     */
    owningRelationship: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof RequirementVerificationMembership
     */
    owningType: Identified;
    /**
     * 
     * @type {any}
     * @memberof RequirementVerificationMembership
     */
    qualifiedName: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof RequirementVerificationMembership
     */
    referencedConstraint: Identified;
    /**
     * 
     * @type {any}
     * @memberof RequirementVerificationMembership
     */
    relatedElement: any | null;
    /**
     * 
     * @type {any}
     * @memberof RequirementVerificationMembership
     */
    shortName: any | null;
    /**
     * 
     * @type {any}
     * @memberof RequirementVerificationMembership
     */
    source: any | null;
    /**
     * 
     * @type {any}
     * @memberof RequirementVerificationMembership
     */
    target: any | null;
    /**
     * 
     * @type {any}
     * @memberof RequirementVerificationMembership
     */
    textualRepresentation: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof RequirementVerificationMembership
     */
    type: Identified;
    /**
     * 
     * @type {Identified}
     * @memberof RequirementVerificationMembership
     */
    verifiedRequirement: Identified;
    /**
     * 
     * @type {any}
     * @memberof RequirementVerificationMembership
     */
    visibility: any | null;
}

/**
 * Check if a given object implements the RequirementVerificationMembership interface.
 */
export function instanceOfRequirementVerificationMembership(value: object): boolean {
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
    isInstance = isInstance && "kind" in value;
    isInstance = isInstance && "memberElement" in value;
    isInstance = isInstance && "memberElementId" in value;
    isInstance = isInstance && "memberName" in value;
    isInstance = isInstance && "memberShortName" in value;
    isInstance = isInstance && "membershipOwningNamespace" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "ownedAnnotation" in value;
    isInstance = isInstance && "ownedConstraint" in value;
    isInstance = isInstance && "ownedElement" in value;
    isInstance = isInstance && "ownedMemberElement" in value;
    isInstance = isInstance && "ownedMemberElementId" in value;
    isInstance = isInstance && "ownedMemberFeature" in value;
    isInstance = isInstance && "ownedMemberName" in value;
    isInstance = isInstance && "ownedMemberShortName" in value;
    isInstance = isInstance && "ownedRelatedElement" in value;
    isInstance = isInstance && "ownedRelationship" in value;
    isInstance = isInstance && "ownedRequirement" in value;
    isInstance = isInstance && "owner" in value;
    isInstance = isInstance && "owningMembership" in value;
    isInstance = isInstance && "owningNamespace" in value;
    isInstance = isInstance && "owningRelatedElement" in value;
    isInstance = isInstance && "owningRelationship" in value;
    isInstance = isInstance && "owningType" in value;
    isInstance = isInstance && "qualifiedName" in value;
    isInstance = isInstance && "referencedConstraint" in value;
    isInstance = isInstance && "relatedElement" in value;
    isInstance = isInstance && "shortName" in value;
    isInstance = isInstance && "source" in value;
    isInstance = isInstance && "target" in value;
    isInstance = isInstance && "textualRepresentation" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "verifiedRequirement" in value;
    isInstance = isInstance && "visibility" in value;

    return isInstance;
}

export function RequirementVerificationMembershipFromJSON(json: any): RequirementVerificationMembership {
    return RequirementVerificationMembershipFromJSONTyped(json, false);
}

export function RequirementVerificationMembershipFromJSONTyped(json: any, ignoreDiscriminator: boolean): RequirementVerificationMembership {
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
        'kind': json['kind'],
        'memberElement': IdentifiedFromJSON(json['memberElement']),
        'memberElementId': json['memberElementId'],
        'memberName': json['memberName'],
        'memberShortName': json['memberShortName'],
        'membershipOwningNamespace': IdentifiedFromJSON(json['membershipOwningNamespace']),
        'name': json['name'],
        'ownedAnnotation': json['ownedAnnotation'],
        'ownedConstraint': IdentifiedFromJSON(json['ownedConstraint']),
        'ownedElement': json['ownedElement'],
        'ownedMemberElement': IdentifiedFromJSON(json['ownedMemberElement']),
        'ownedMemberElementId': json['ownedMemberElementId'],
        'ownedMemberFeature': IdentifiedFromJSON(json['ownedMemberFeature']),
        'ownedMemberName': json['ownedMemberName'],
        'ownedMemberShortName': json['ownedMemberShortName'],
        'ownedRelatedElement': json['ownedRelatedElement'],
        'ownedRelationship': json['ownedRelationship'],
        'ownedRequirement': IdentifiedFromJSON(json['ownedRequirement']),
        'owner': json['owner'],
        'owningMembership': json['owningMembership'],
        'owningNamespace': json['owningNamespace'],
        'owningRelatedElement': json['owningRelatedElement'],
        'owningRelationship': json['owningRelationship'],
        'owningType': IdentifiedFromJSON(json['owningType']),
        'qualifiedName': json['qualifiedName'],
        'referencedConstraint': IdentifiedFromJSON(json['referencedConstraint']),
        'relatedElement': json['relatedElement'],
        'shortName': json['shortName'],
        'source': json['source'],
        'target': json['target'],
        'textualRepresentation': json['textualRepresentation'],
        'type': IdentifiedFromJSON(json['type']),
        'verifiedRequirement': IdentifiedFromJSON(json['verifiedRequirement']),
        'visibility': json['visibility'],
    };
}

export function RequirementVerificationMembershipToJSON(value?: RequirementVerificationMembership | null): any {
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
        'kind': value.kind,
        'memberElement': IdentifiedToJSON(value.memberElement),
        'memberElementId': value.memberElementId,
        'memberName': value.memberName,
        'memberShortName': value.memberShortName,
        'membershipOwningNamespace': IdentifiedToJSON(value.membershipOwningNamespace),
        'name': value.name,
        'ownedAnnotation': value.ownedAnnotation,
        'ownedConstraint': IdentifiedToJSON(value.ownedConstraint),
        'ownedElement': value.ownedElement,
        'ownedMemberElement': IdentifiedToJSON(value.ownedMemberElement),
        'ownedMemberElementId': value.ownedMemberElementId,
        'ownedMemberFeature': IdentifiedToJSON(value.ownedMemberFeature),
        'ownedMemberName': value.ownedMemberName,
        'ownedMemberShortName': value.ownedMemberShortName,
        'ownedRelatedElement': value.ownedRelatedElement,
        'ownedRelationship': value.ownedRelationship,
        'ownedRequirement': IdentifiedToJSON(value.ownedRequirement),
        'owner': value.owner,
        'owningMembership': value.owningMembership,
        'owningNamespace': value.owningNamespace,
        'owningRelatedElement': value.owningRelatedElement,
        'owningRelationship': value.owningRelationship,
        'owningType': IdentifiedToJSON(value.owningType),
        'qualifiedName': value.qualifiedName,
        'referencedConstraint': IdentifiedToJSON(value.referencedConstraint),
        'relatedElement': value.relatedElement,
        'shortName': value.shortName,
        'source': value.source,
        'target': value.target,
        'textualRepresentation': value.textualRepresentation,
        'type': IdentifiedToJSON(value.type),
        'verifiedRequirement': IdentifiedToJSON(value.verifiedRequirement),
        'visibility': value.visibility,
    };
}
