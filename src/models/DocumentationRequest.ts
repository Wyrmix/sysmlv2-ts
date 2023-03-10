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
 * @interface DocumentationRequest
 */
export interface DocumentationRequest {
    /**
     * 
     * @type {any}
     * @memberof DocumentationRequest
     */
    id?: any | null;
    /**
     * 
     * @type {any}
     * @memberof DocumentationRequest
     */
    atType: any | null;
    /**
     * 
     * @type {any}
     * @memberof DocumentationRequest
     */
    aliasIds?: any | null;
    /**
     * 
     * @type {any}
     * @memberof DocumentationRequest
     */
    annotatedElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof DocumentationRequest
     */
    annotation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof DocumentationRequest
     */
    body?: any | null;
    /**
     * 
     * @type {any}
     * @memberof DocumentationRequest
     */
    declaredName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof DocumentationRequest
     */
    declaredShortName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof DocumentationRequest
     */
    documentation?: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof DocumentationRequest
     */
    documentedElement?: Identified;
    /**
     * 
     * @type {any}
     * @memberof DocumentationRequest
     */
    elementId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof DocumentationRequest
     */
    isImpliedIncluded?: any | null;
    /**
     * 
     * @type {any}
     * @memberof DocumentationRequest
     */
    isLibraryElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof DocumentationRequest
     */
    locale?: any | null;
    /**
     * 
     * @type {any}
     * @memberof DocumentationRequest
     */
    name?: any | null;
    /**
     * 
     * @type {any}
     * @memberof DocumentationRequest
     */
    ownedAnnotation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof DocumentationRequest
     */
    ownedElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof DocumentationRequest
     */
    ownedRelationship?: any | null;
    /**
     * 
     * @type {any}
     * @memberof DocumentationRequest
     */
    owner?: any | null;
    /**
     * 
     * @type {any}
     * @memberof DocumentationRequest
     */
    owningMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof DocumentationRequest
     */
    owningNamespace?: any | null;
    /**
     * 
     * @type {any}
     * @memberof DocumentationRequest
     */
    owningRelationship?: any | null;
    /**
     * 
     * @type {any}
     * @memberof DocumentationRequest
     */
    qualifiedName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof DocumentationRequest
     */
    shortName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof DocumentationRequest
     */
    textualRepresentation?: any | null;
}

/**
 * Check if a given object implements the DocumentationRequest interface.
 */
export function instanceOfDocumentationRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function DocumentationRequestFromJSON(json: any): DocumentationRequest {
    return DocumentationRequestFromJSONTyped(json, false);
}

export function DocumentationRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): DocumentationRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, '@id') ? undefined : json['@id'],
        'atType': json['@type'],
        'aliasIds': !exists(json, 'aliasIds') ? undefined : json['aliasIds'],
        'annotatedElement': !exists(json, 'annotatedElement') ? undefined : json['annotatedElement'],
        'annotation': !exists(json, 'annotation') ? undefined : json['annotation'],
        'body': !exists(json, 'body') ? undefined : json['body'],
        'declaredName': !exists(json, 'declaredName') ? undefined : json['declaredName'],
        'declaredShortName': !exists(json, 'declaredShortName') ? undefined : json['declaredShortName'],
        'documentation': !exists(json, 'documentation') ? undefined : json['documentation'],
        'documentedElement': !exists(json, 'documentedElement') ? undefined : IdentifiedFromJSON(json['documentedElement']),
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
        'isImpliedIncluded': !exists(json, 'isImpliedIncluded') ? undefined : json['isImpliedIncluded'],
        'isLibraryElement': !exists(json, 'isLibraryElement') ? undefined : json['isLibraryElement'],
        'locale': !exists(json, 'locale') ? undefined : json['locale'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'ownedAnnotation': !exists(json, 'ownedAnnotation') ? undefined : json['ownedAnnotation'],
        'ownedElement': !exists(json, 'ownedElement') ? undefined : json['ownedElement'],
        'ownedRelationship': !exists(json, 'ownedRelationship') ? undefined : json['ownedRelationship'],
        'owner': !exists(json, 'owner') ? undefined : json['owner'],
        'owningMembership': !exists(json, 'owningMembership') ? undefined : json['owningMembership'],
        'owningNamespace': !exists(json, 'owningNamespace') ? undefined : json['owningNamespace'],
        'owningRelationship': !exists(json, 'owningRelationship') ? undefined : json['owningRelationship'],
        'qualifiedName': !exists(json, 'qualifiedName') ? undefined : json['qualifiedName'],
        'shortName': !exists(json, 'shortName') ? undefined : json['shortName'],
        'textualRepresentation': !exists(json, 'textualRepresentation') ? undefined : json['textualRepresentation'],
    };
}

export function DocumentationRequestToJSON(value?: DocumentationRequest | null): any {
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
        'annotatedElement': value.annotatedElement,
        'annotation': value.annotation,
        'body': value.body,
        'declaredName': value.declaredName,
        'declaredShortName': value.declaredShortName,
        'documentation': value.documentation,
        'documentedElement': IdentifiedToJSON(value.documentedElement),
        'elementId': value.elementId,
        'isImpliedIncluded': value.isImpliedIncluded,
        'isLibraryElement': value.isLibraryElement,
        'locale': value.locale,
        'name': value.name,
        'ownedAnnotation': value.ownedAnnotation,
        'ownedElement': value.ownedElement,
        'ownedRelationship': value.ownedRelationship,
        'owner': value.owner,
        'owningMembership': value.owningMembership,
        'owningNamespace': value.owningNamespace,
        'owningRelationship': value.owningRelationship,
        'qualifiedName': value.qualifiedName,
        'shortName': value.shortName,
        'textualRepresentation': value.textualRepresentation,
    };
}

