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
 * @interface TextualRepresentation
 */
export interface TextualRepresentation {
    /**
     * 
     * @type {any}
     * @memberof TextualRepresentation
     */
    id: any | null;
    /**
     * 
     * @type {any}
     * @memberof TextualRepresentation
     */
    atType: any | null;
    /**
     * 
     * @type {any}
     * @memberof TextualRepresentation
     */
    aliasIds: any | null;
    /**
     * 
     * @type {any}
     * @memberof TextualRepresentation
     */
    annotatedElement: any | null;
    /**
     * 
     * @type {any}
     * @memberof TextualRepresentation
     */
    annotation: any | null;
    /**
     * 
     * @type {any}
     * @memberof TextualRepresentation
     */
    body: any | null;
    /**
     * 
     * @type {any}
     * @memberof TextualRepresentation
     */
    declaredName: any | null;
    /**
     * 
     * @type {any}
     * @memberof TextualRepresentation
     */
    declaredShortName: any | null;
    /**
     * 
     * @type {any}
     * @memberof TextualRepresentation
     */
    documentation: any | null;
    /**
     * 
     * @type {any}
     * @memberof TextualRepresentation
     */
    elementId: any | null;
    /**
     * 
     * @type {any}
     * @memberof TextualRepresentation
     */
    isImpliedIncluded: any | null;
    /**
     * 
     * @type {any}
     * @memberof TextualRepresentation
     */
    isLibraryElement: any | null;
    /**
     * 
     * @type {any}
     * @memberof TextualRepresentation
     */
    language: any | null;
    /**
     * 
     * @type {any}
     * @memberof TextualRepresentation
     */
    name: any | null;
    /**
     * 
     * @type {any}
     * @memberof TextualRepresentation
     */
    ownedAnnotation: any | null;
    /**
     * 
     * @type {any}
     * @memberof TextualRepresentation
     */
    ownedElement: any | null;
    /**
     * 
     * @type {any}
     * @memberof TextualRepresentation
     */
    ownedRelationship: any | null;
    /**
     * 
     * @type {any}
     * @memberof TextualRepresentation
     */
    owner: any | null;
    /**
     * 
     * @type {any}
     * @memberof TextualRepresentation
     */
    owningMembership: any | null;
    /**
     * 
     * @type {any}
     * @memberof TextualRepresentation
     */
    owningNamespace: any | null;
    /**
     * 
     * @type {any}
     * @memberof TextualRepresentation
     */
    owningRelationship: any | null;
    /**
     * 
     * @type {any}
     * @memberof TextualRepresentation
     */
    qualifiedName: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof TextualRepresentation
     */
    representedElement: Identified;
    /**
     * 
     * @type {any}
     * @memberof TextualRepresentation
     */
    shortName: any | null;
    /**
     * 
     * @type {any}
     * @memberof TextualRepresentation
     */
    textualRepresentation: any | null;
}

/**
 * Check if a given object implements the TextualRepresentation interface.
 */
export function instanceOfTextualRepresentation(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "aliasIds" in value;
    isInstance = isInstance && "annotatedElement" in value;
    isInstance = isInstance && "annotation" in value;
    isInstance = isInstance && "body" in value;
    isInstance = isInstance && "declaredName" in value;
    isInstance = isInstance && "declaredShortName" in value;
    isInstance = isInstance && "documentation" in value;
    isInstance = isInstance && "elementId" in value;
    isInstance = isInstance && "isImpliedIncluded" in value;
    isInstance = isInstance && "isLibraryElement" in value;
    isInstance = isInstance && "language" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "ownedAnnotation" in value;
    isInstance = isInstance && "ownedElement" in value;
    isInstance = isInstance && "ownedRelationship" in value;
    isInstance = isInstance && "owner" in value;
    isInstance = isInstance && "owningMembership" in value;
    isInstance = isInstance && "owningNamespace" in value;
    isInstance = isInstance && "owningRelationship" in value;
    isInstance = isInstance && "qualifiedName" in value;
    isInstance = isInstance && "representedElement" in value;
    isInstance = isInstance && "shortName" in value;
    isInstance = isInstance && "textualRepresentation" in value;

    return isInstance;
}

export function TextualRepresentationFromJSON(json: any): TextualRepresentation {
    return TextualRepresentationFromJSONTyped(json, false);
}

export function TextualRepresentationFromJSONTyped(json: any, ignoreDiscriminator: boolean): TextualRepresentation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['@id'],
        'atType': json['@type'],
        'aliasIds': json['aliasIds'],
        'annotatedElement': json['annotatedElement'],
        'annotation': json['annotation'],
        'body': json['body'],
        'declaredName': json['declaredName'],
        'declaredShortName': json['declaredShortName'],
        'documentation': json['documentation'],
        'elementId': json['elementId'],
        'isImpliedIncluded': json['isImpliedIncluded'],
        'isLibraryElement': json['isLibraryElement'],
        'language': json['language'],
        'name': json['name'],
        'ownedAnnotation': json['ownedAnnotation'],
        'ownedElement': json['ownedElement'],
        'ownedRelationship': json['ownedRelationship'],
        'owner': json['owner'],
        'owningMembership': json['owningMembership'],
        'owningNamespace': json['owningNamespace'],
        'owningRelationship': json['owningRelationship'],
        'qualifiedName': json['qualifiedName'],
        'representedElement': IdentifiedFromJSON(json['representedElement']),
        'shortName': json['shortName'],
        'textualRepresentation': json['textualRepresentation'],
    };
}

export function TextualRepresentationToJSON(value?: TextualRepresentation | null): any {
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
        'elementId': value.elementId,
        'isImpliedIncluded': value.isImpliedIncluded,
        'isLibraryElement': value.isLibraryElement,
        'language': value.language,
        'name': value.name,
        'ownedAnnotation': value.ownedAnnotation,
        'ownedElement': value.ownedElement,
        'ownedRelationship': value.ownedRelationship,
        'owner': value.owner,
        'owningMembership': value.owningMembership,
        'owningNamespace': value.owningNamespace,
        'owningRelationship': value.owningRelationship,
        'qualifiedName': value.qualifiedName,
        'representedElement': IdentifiedToJSON(value.representedElement),
        'shortName': value.shortName,
        'textualRepresentation': value.textualRepresentation,
    };
}

