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
 * @interface ReturnParameterMembershipRequest
 */
export interface ReturnParameterMembershipRequest {
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    id?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    atType: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    aliasIds?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    declaredName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    declaredShortName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    documentation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    elementId?: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof ReturnParameterMembershipRequest
     */
    feature?: Identified;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    isImplied?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    isImpliedIncluded?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    isLibraryElement?: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof ReturnParameterMembershipRequest
     */
    memberElement?: Identified;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    memberElementId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    memberName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    memberShortName?: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof ReturnParameterMembershipRequest
     */
    membershipOwningNamespace?: Identified;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    name?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    ownedAnnotation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    ownedElement?: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof ReturnParameterMembershipRequest
     */
    ownedMemberElement?: Identified;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    ownedMemberElementId?: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof ReturnParameterMembershipRequest
     */
    ownedMemberFeature?: Identified;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    ownedMemberName?: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof ReturnParameterMembershipRequest
     */
    ownedMemberParameter?: Identified;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    ownedMemberShortName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    ownedRelatedElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    ownedRelationship?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    owner?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    owningMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    owningNamespace?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    owningRelatedElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    owningRelationship?: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof ReturnParameterMembershipRequest
     */
    owningType?: Identified;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    qualifiedName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    relatedElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    shortName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    source?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    target?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    textualRepresentation?: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof ReturnParameterMembershipRequest
     */
    type?: Identified;
    /**
     * 
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    visibility?: any | null;
}

/**
 * Check if a given object implements the ReturnParameterMembershipRequest interface.
 */
export function instanceOfReturnParameterMembershipRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function ReturnParameterMembershipRequestFromJSON(json: any): ReturnParameterMembershipRequest {
    return ReturnParameterMembershipRequestFromJSONTyped(json, false);
}

export function ReturnParameterMembershipRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReturnParameterMembershipRequest {
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

export function ReturnParameterMembershipRequestToJSON(value?: ReturnParameterMembershipRequest | null): any {
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

