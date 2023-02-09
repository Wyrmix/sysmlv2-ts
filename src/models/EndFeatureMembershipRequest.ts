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
 * @interface EndFeatureMembershipRequest
 */
export interface EndFeatureMembershipRequest {
    /**
     * 
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    id?: any | null;
    /**
     * 
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    atType: any | null;
    /**
     * 
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    aliasIds?: any | null;
    /**
     * 
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    declaredName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    declaredShortName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    documentation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    elementId?: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof EndFeatureMembershipRequest
     */
    feature?: Identified;
    /**
     * 
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    isImplied?: any | null;
    /**
     * 
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    isImpliedIncluded?: any | null;
    /**
     * 
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    isLibraryElement?: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof EndFeatureMembershipRequest
     */
    memberElement?: Identified;
    /**
     * 
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    memberElementId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    memberName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    memberShortName?: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof EndFeatureMembershipRequest
     */
    membershipOwningNamespace?: Identified;
    /**
     * 
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    name?: any | null;
    /**
     * 
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    ownedAnnotation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    ownedElement?: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof EndFeatureMembershipRequest
     */
    ownedMemberElement?: Identified;
    /**
     * 
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    ownedMemberElementId?: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof EndFeatureMembershipRequest
     */
    ownedMemberFeature?: Identified;
    /**
     * 
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    ownedMemberName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    ownedMemberShortName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    ownedRelatedElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    ownedRelationship?: any | null;
    /**
     * 
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    owner?: any | null;
    /**
     * 
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    owningMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    owningNamespace?: any | null;
    /**
     * 
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    owningRelatedElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    owningRelationship?: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof EndFeatureMembershipRequest
     */
    owningType?: Identified;
    /**
     * 
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    qualifiedName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    relatedElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    shortName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    source?: any | null;
    /**
     * 
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    target?: any | null;
    /**
     * 
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    textualRepresentation?: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof EndFeatureMembershipRequest
     */
    type?: Identified;
    /**
     * 
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    visibility?: any | null;
}

/**
 * Check if a given object implements the EndFeatureMembershipRequest interface.
 */
export function instanceOfEndFeatureMembershipRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function EndFeatureMembershipRequestFromJSON(json: any): EndFeatureMembershipRequest {
    return EndFeatureMembershipRequestFromJSONTyped(json, false);
}

export function EndFeatureMembershipRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): EndFeatureMembershipRequest {
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
        'ownedMemberShortName': !exists(json, 'ownedMemberShortName') ? undefined : json['ownedMemberShortName'],
        'ownedRelatedElement': !exists(json, 'ownedRelatedElement') ? undefined : json['ownedRelatedElement'],
        'ownedRelationship': !exists(json, 'ownedRelationship') ? undefined : json['ownedRelationship'],
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

export function EndFeatureMembershipRequestToJSON(value?: EndFeatureMembershipRequest | null): any {
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
