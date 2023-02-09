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
 * @interface FramedConcernMembershipRequest
 */
export interface FramedConcernMembershipRequest {
    /**
     * 
     * @type {any}
     * @memberof FramedConcernMembershipRequest
     */
    id?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FramedConcernMembershipRequest
     */
    atType: any | null;
    /**
     * 
     * @type {any}
     * @memberof FramedConcernMembershipRequest
     */
    aliasIds?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FramedConcernMembershipRequest
     */
    declaredName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FramedConcernMembershipRequest
     */
    declaredShortName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FramedConcernMembershipRequest
     */
    documentation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FramedConcernMembershipRequest
     */
    elementId?: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof FramedConcernMembershipRequest
     */
    feature?: Identified;
    /**
     * 
     * @type {any}
     * @memberof FramedConcernMembershipRequest
     */
    isImplied?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FramedConcernMembershipRequest
     */
    isImpliedIncluded?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FramedConcernMembershipRequest
     */
    isLibraryElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FramedConcernMembershipRequest
     */
    kind?: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof FramedConcernMembershipRequest
     */
    memberElement?: Identified;
    /**
     * 
     * @type {any}
     * @memberof FramedConcernMembershipRequest
     */
    memberElementId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FramedConcernMembershipRequest
     */
    memberName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FramedConcernMembershipRequest
     */
    memberShortName?: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof FramedConcernMembershipRequest
     */
    membershipOwningNamespace?: Identified;
    /**
     * 
     * @type {any}
     * @memberof FramedConcernMembershipRequest
     */
    name?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FramedConcernMembershipRequest
     */
    ownedAnnotation?: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof FramedConcernMembershipRequest
     */
    ownedConcern?: Identified;
    /**
     * 
     * @type {Identified}
     * @memberof FramedConcernMembershipRequest
     */
    ownedConstraint?: Identified;
    /**
     * 
     * @type {any}
     * @memberof FramedConcernMembershipRequest
     */
    ownedElement?: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof FramedConcernMembershipRequest
     */
    ownedMemberElement?: Identified;
    /**
     * 
     * @type {any}
     * @memberof FramedConcernMembershipRequest
     */
    ownedMemberElementId?: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof FramedConcernMembershipRequest
     */
    ownedMemberFeature?: Identified;
    /**
     * 
     * @type {any}
     * @memberof FramedConcernMembershipRequest
     */
    ownedMemberName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FramedConcernMembershipRequest
     */
    ownedMemberShortName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FramedConcernMembershipRequest
     */
    ownedRelatedElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FramedConcernMembershipRequest
     */
    ownedRelationship?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FramedConcernMembershipRequest
     */
    owner?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FramedConcernMembershipRequest
     */
    owningMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FramedConcernMembershipRequest
     */
    owningNamespace?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FramedConcernMembershipRequest
     */
    owningRelatedElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FramedConcernMembershipRequest
     */
    owningRelationship?: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof FramedConcernMembershipRequest
     */
    owningType?: Identified;
    /**
     * 
     * @type {any}
     * @memberof FramedConcernMembershipRequest
     */
    qualifiedName?: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof FramedConcernMembershipRequest
     */
    referencedConcern?: Identified;
    /**
     * 
     * @type {Identified}
     * @memberof FramedConcernMembershipRequest
     */
    referencedConstraint?: Identified;
    /**
     * 
     * @type {any}
     * @memberof FramedConcernMembershipRequest
     */
    relatedElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FramedConcernMembershipRequest
     */
    shortName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FramedConcernMembershipRequest
     */
    source?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FramedConcernMembershipRequest
     */
    target?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FramedConcernMembershipRequest
     */
    textualRepresentation?: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof FramedConcernMembershipRequest
     */
    type?: Identified;
    /**
     * 
     * @type {any}
     * @memberof FramedConcernMembershipRequest
     */
    visibility?: any | null;
}

/**
 * Check if a given object implements the FramedConcernMembershipRequest interface.
 */
export function instanceOfFramedConcernMembershipRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function FramedConcernMembershipRequestFromJSON(json: any): FramedConcernMembershipRequest {
    return FramedConcernMembershipRequestFromJSONTyped(json, false);
}

export function FramedConcernMembershipRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): FramedConcernMembershipRequest {
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
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'memberElement': !exists(json, 'memberElement') ? undefined : IdentifiedFromJSON(json['memberElement']),
        'memberElementId': !exists(json, 'memberElementId') ? undefined : json['memberElementId'],
        'memberName': !exists(json, 'memberName') ? undefined : json['memberName'],
        'memberShortName': !exists(json, 'memberShortName') ? undefined : json['memberShortName'],
        'membershipOwningNamespace': !exists(json, 'membershipOwningNamespace') ? undefined : IdentifiedFromJSON(json['membershipOwningNamespace']),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'ownedAnnotation': !exists(json, 'ownedAnnotation') ? undefined : json['ownedAnnotation'],
        'ownedConcern': !exists(json, 'ownedConcern') ? undefined : IdentifiedFromJSON(json['ownedConcern']),
        'ownedConstraint': !exists(json, 'ownedConstraint') ? undefined : IdentifiedFromJSON(json['ownedConstraint']),
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
        'referencedConcern': !exists(json, 'referencedConcern') ? undefined : IdentifiedFromJSON(json['referencedConcern']),
        'referencedConstraint': !exists(json, 'referencedConstraint') ? undefined : IdentifiedFromJSON(json['referencedConstraint']),
        'relatedElement': !exists(json, 'relatedElement') ? undefined : json['relatedElement'],
        'shortName': !exists(json, 'shortName') ? undefined : json['shortName'],
        'source': !exists(json, 'source') ? undefined : json['source'],
        'target': !exists(json, 'target') ? undefined : json['target'],
        'textualRepresentation': !exists(json, 'textualRepresentation') ? undefined : json['textualRepresentation'],
        'type': !exists(json, 'type') ? undefined : IdentifiedFromJSON(json['type']),
        'visibility': !exists(json, 'visibility') ? undefined : json['visibility'],
    };
}

export function FramedConcernMembershipRequestToJSON(value?: FramedConcernMembershipRequest | null): any {
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
        'ownedConcern': IdentifiedToJSON(value.ownedConcern),
        'ownedConstraint': IdentifiedToJSON(value.ownedConstraint),
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
        'referencedConcern': IdentifiedToJSON(value.referencedConcern),
        'referencedConstraint': IdentifiedToJSON(value.referencedConstraint),
        'relatedElement': value.relatedElement,
        'shortName': value.shortName,
        'source': value.source,
        'target': value.target,
        'textualRepresentation': value.textualRepresentation,
        'type': IdentifiedToJSON(value.type),
        'visibility': value.visibility,
    };
}

