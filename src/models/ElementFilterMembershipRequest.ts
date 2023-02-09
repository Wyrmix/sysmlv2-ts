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
 * @interface ElementFilterMembershipRequest
 */
export interface ElementFilterMembershipRequest {
    /**
     * 
     * @type {any}
     * @memberof ElementFilterMembershipRequest
     */
    id?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ElementFilterMembershipRequest
     */
    atType: any | null;
    /**
     * 
     * @type {any}
     * @memberof ElementFilterMembershipRequest
     */
    aliasIds?: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof ElementFilterMembershipRequest
     */
    condition?: Identified;
    /**
     * 
     * @type {any}
     * @memberof ElementFilterMembershipRequest
     */
    declaredName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ElementFilterMembershipRequest
     */
    declaredShortName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ElementFilterMembershipRequest
     */
    documentation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ElementFilterMembershipRequest
     */
    elementId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ElementFilterMembershipRequest
     */
    isImplied?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ElementFilterMembershipRequest
     */
    isImpliedIncluded?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ElementFilterMembershipRequest
     */
    isLibraryElement?: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof ElementFilterMembershipRequest
     */
    memberElement?: Identified;
    /**
     * 
     * @type {any}
     * @memberof ElementFilterMembershipRequest
     */
    memberElementId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ElementFilterMembershipRequest
     */
    memberName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ElementFilterMembershipRequest
     */
    memberShortName?: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof ElementFilterMembershipRequest
     */
    membershipOwningNamespace?: Identified;
    /**
     * 
     * @type {any}
     * @memberof ElementFilterMembershipRequest
     */
    name?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ElementFilterMembershipRequest
     */
    ownedAnnotation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ElementFilterMembershipRequest
     */
    ownedElement?: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof ElementFilterMembershipRequest
     */
    ownedMemberElement?: Identified;
    /**
     * 
     * @type {any}
     * @memberof ElementFilterMembershipRequest
     */
    ownedMemberElementId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ElementFilterMembershipRequest
     */
    ownedMemberName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ElementFilterMembershipRequest
     */
    ownedMemberShortName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ElementFilterMembershipRequest
     */
    ownedRelatedElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ElementFilterMembershipRequest
     */
    ownedRelationship?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ElementFilterMembershipRequest
     */
    owner?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ElementFilterMembershipRequest
     */
    owningMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ElementFilterMembershipRequest
     */
    owningNamespace?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ElementFilterMembershipRequest
     */
    owningRelatedElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ElementFilterMembershipRequest
     */
    owningRelationship?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ElementFilterMembershipRequest
     */
    qualifiedName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ElementFilterMembershipRequest
     */
    relatedElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ElementFilterMembershipRequest
     */
    shortName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ElementFilterMembershipRequest
     */
    source?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ElementFilterMembershipRequest
     */
    target?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ElementFilterMembershipRequest
     */
    textualRepresentation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ElementFilterMembershipRequest
     */
    visibility?: any | null;
}

/**
 * Check if a given object implements the ElementFilterMembershipRequest interface.
 */
export function instanceOfElementFilterMembershipRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function ElementFilterMembershipRequestFromJSON(json: any): ElementFilterMembershipRequest {
    return ElementFilterMembershipRequestFromJSONTyped(json, false);
}

export function ElementFilterMembershipRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ElementFilterMembershipRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, '@id') ? undefined : json['@id'],
        'atType': json['@type'],
        'aliasIds': !exists(json, 'aliasIds') ? undefined : json['aliasIds'],
        'condition': !exists(json, 'condition') ? undefined : IdentifiedFromJSON(json['condition']),
        'declaredName': !exists(json, 'declaredName') ? undefined : json['declaredName'],
        'declaredShortName': !exists(json, 'declaredShortName') ? undefined : json['declaredShortName'],
        'documentation': !exists(json, 'documentation') ? undefined : json['documentation'],
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
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
        'ownedMemberName': !exists(json, 'ownedMemberName') ? undefined : json['ownedMemberName'],
        'ownedMemberShortName': !exists(json, 'ownedMemberShortName') ? undefined : json['ownedMemberShortName'],
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
        'visibility': !exists(json, 'visibility') ? undefined : json['visibility'],
    };
}

export function ElementFilterMembershipRequestToJSON(value?: ElementFilterMembershipRequest | null): any {
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
        'condition': IdentifiedToJSON(value.condition),
        'declaredName': value.declaredName,
        'declaredShortName': value.declaredShortName,
        'documentation': value.documentation,
        'elementId': value.elementId,
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
        'ownedMemberName': value.ownedMemberName,
        'ownedMemberShortName': value.ownedMemberShortName,
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
        'visibility': value.visibility,
    };
}

