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
 * @interface SubjectMembershipRequest
 */
export interface SubjectMembershipRequest {
    /**
     * 
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    id?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    atType: any | null;
    /**
     * 
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    aliasIds?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    declaredName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    declaredShortName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    documentation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    elementId?: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof SubjectMembershipRequest
     */
    feature?: Identified;
    /**
     * 
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    isImplied?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    isImpliedIncluded?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    isLibraryElement?: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof SubjectMembershipRequest
     */
    memberElement?: Identified;
    /**
     * 
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    memberElementId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    memberName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    memberShortName?: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof SubjectMembershipRequest
     */
    membershipOwningNamespace?: Identified;
    /**
     * 
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    name?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    ownedAnnotation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    ownedElement?: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof SubjectMembershipRequest
     */
    ownedMemberElement?: Identified;
    /**
     * 
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    ownedMemberElementId?: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof SubjectMembershipRequest
     */
    ownedMemberFeature?: Identified;
    /**
     * 
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    ownedMemberName?: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof SubjectMembershipRequest
     */
    ownedMemberParameter?: Identified;
    /**
     * 
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    ownedMemberShortName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    ownedRelatedElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    ownedRelationship?: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof SubjectMembershipRequest
     */
    ownedSubjectParameter?: Identified;
    /**
     * 
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    owner?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    owningMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    owningNamespace?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    owningRelatedElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    owningRelationship?: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof SubjectMembershipRequest
     */
    owningType?: Identified;
    /**
     * 
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    qualifiedName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    relatedElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    shortName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    source?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    target?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    textualRepresentation?: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof SubjectMembershipRequest
     */
    type?: Identified;
    /**
     * 
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    visibility?: any | null;
}

/**
 * Check if a given object implements the SubjectMembershipRequest interface.
 */
export function instanceOfSubjectMembershipRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function SubjectMembershipRequestFromJSON(json: any): SubjectMembershipRequest {
    return SubjectMembershipRequestFromJSONTyped(json, false);
}

export function SubjectMembershipRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubjectMembershipRequest {
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
        'feature': !exists(json, 'feature') ? undefined : IdentifiedFromJSON(json['feature']),
        'isImplied': !exists(json, 'isImplied') ? undefined : json['isImplied'],
        'isImpliedIncluded': !exists(json, 'isImpliedIncluded') ? undefined : json['isImpliedIncluded'],
        'isLibraryElement': !exists(json, 'isLibraryElement') ? undefined : json['isLibraryElement'],
        'memberElement': !exists(json, 'memberElement') ? undefined : IdentifiedFromJSON(json['memberElement']),
        'memberElementId': !exists(json, 'memberElementId') ? undefined : json['memberElementId'],
        'memberName': !exists(json, 'memberName') ? undefined : json['memberName'],
        'memberShortName': !exists(json, 'memberShortName') ? undefined : json['memberShortName'],
        'membershipOwningNamespace': !exists(json, 'membershipOwningNamespace') ? undefined : IdentifiedFromJSON(json['membershipOwningNamespace']),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'ownedAnnotation': !exists(json, 'ownedAnnotation') ? undefined : json['ownedAnnotation'],
        'ownedElement': !exists(json, 'ownedElement') ? undefined : json['ownedElement'],
        'ownedMemberElement': !exists(json, 'ownedMemberElement') ? undefined : IdentifiedFromJSON(json['ownedMemberElement']),
        'ownedMemberElementId': !exists(json, 'ownedMemberElementId') ? undefined : json['ownedMemberElementId'],
        'ownedMemberFeature': !exists(json, 'ownedMemberFeature') ? undefined : IdentifiedFromJSON(json['ownedMemberFeature']),
        'ownedMemberName': !exists(json, 'ownedMemberName') ? undefined : json['ownedMemberName'],
        'ownedMemberParameter': !exists(json, 'ownedMemberParameter') ? undefined : IdentifiedFromJSON(json['ownedMemberParameter']),
        'ownedMemberShortName': !exists(json, 'ownedMemberShortName') ? undefined : json['ownedMemberShortName'],
        'ownedRelatedElement': !exists(json, 'ownedRelatedElement') ? undefined : json['ownedRelatedElement'],
        'ownedRelationship': !exists(json, 'ownedRelationship') ? undefined : json['ownedRelationship'],
        'ownedSubjectParameter': !exists(json, 'ownedSubjectParameter') ? undefined : IdentifiedFromJSON(json['ownedSubjectParameter']),
        'owner': !exists(json, 'owner') ? undefined : json['owner'],
        'owningMembership': !exists(json, 'owningMembership') ? undefined : json['owningMembership'],
        'owningNamespace': !exists(json, 'owningNamespace') ? undefined : json['owningNamespace'],
        'owningRelatedElement': !exists(json, 'owningRelatedElement') ? undefined : json['owningRelatedElement'],
        'owningRelationship': !exists(json, 'owningRelationship') ? undefined : json['owningRelationship'],
        'owningType': !exists(json, 'owningType') ? undefined : IdentifiedFromJSON(json['owningType']),
        'qualifiedName': !exists(json, 'qualifiedName') ? undefined : json['qualifiedName'],
        'relatedElement': !exists(json, 'relatedElement') ? undefined : json['relatedElement'],
        'shortName': !exists(json, 'shortName') ? undefined : json['shortName'],
        'source': !exists(json, 'source') ? undefined : json['source'],
        'target': !exists(json, 'target') ? undefined : json['target'],
        'textualRepresentation': !exists(json, 'textualRepresentation') ? undefined : json['textualRepresentation'],
        'type': !exists(json, 'type') ? undefined : IdentifiedFromJSON(json['type']),
        'visibility': !exists(json, 'visibility') ? undefined : json['visibility'],
    };
}

export function SubjectMembershipRequestToJSON(value?: SubjectMembershipRequest | null): any {
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
        'ownedSubjectParameter': IdentifiedToJSON(value.ownedSubjectParameter),
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
