"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortConjugationToJSON = exports.PortConjugationFromJSONTyped = exports.PortConjugationFromJSON = exports.instanceOfPortConjugation = void 0;
const Identified_1 = require("./Identified");
/**
 * Check if a given object implements the PortConjugation interface.
 */
function instanceOfPortConjugation(value) {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "aliasIds" in value;
    isInstance = isInstance && "conjugatedPortDefinition" in value;
    isInstance = isInstance && "conjugatedType" in value;
    isInstance = isInstance && "declaredName" in value;
    isInstance = isInstance && "declaredShortName" in value;
    isInstance = isInstance && "documentation" in value;
    isInstance = isInstance && "elementId" in value;
    isInstance = isInstance && "isImplied" in value;
    isInstance = isInstance && "isImpliedIncluded" in value;
    isInstance = isInstance && "isLibraryElement" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "originalPortDefinition" in value;
    isInstance = isInstance && "originalType" in value;
    isInstance = isInstance && "ownedAnnotation" in value;
    isInstance = isInstance && "ownedElement" in value;
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
    return isInstance;
}
exports.instanceOfPortConjugation = instanceOfPortConjugation;
function PortConjugationFromJSON(json) {
    return PortConjugationFromJSONTyped(json, false);
}
exports.PortConjugationFromJSON = PortConjugationFromJSON;
function PortConjugationFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['@id'],
        'atType': json['@type'],
        'aliasIds': json['aliasIds'],
        'conjugatedPortDefinition': (0, Identified_1.IdentifiedFromJSON)(json['conjugatedPortDefinition']),
        'conjugatedType': (0, Identified_1.IdentifiedFromJSON)(json['conjugatedType']),
        'declaredName': json['declaredName'],
        'declaredShortName': json['declaredShortName'],
        'documentation': json['documentation'],
        'elementId': json['elementId'],
        'isImplied': json['isImplied'],
        'isImpliedIncluded': json['isImpliedIncluded'],
        'isLibraryElement': json['isLibraryElement'],
        'name': json['name'],
        'originalPortDefinition': (0, Identified_1.IdentifiedFromJSON)(json['originalPortDefinition']),
        'originalType': (0, Identified_1.IdentifiedFromJSON)(json['originalType']),
        'ownedAnnotation': json['ownedAnnotation'],
        'ownedElement': json['ownedElement'],
        'ownedRelatedElement': json['ownedRelatedElement'],
        'ownedRelationship': json['ownedRelationship'],
        'owner': json['owner'],
        'owningMembership': json['owningMembership'],
        'owningNamespace': json['owningNamespace'],
        'owningRelatedElement': json['owningRelatedElement'],
        'owningRelationship': json['owningRelationship'],
        'owningType': json['owningType'],
        'qualifiedName': json['qualifiedName'],
        'relatedElement': json['relatedElement'],
        'shortName': json['shortName'],
        'source': json['source'],
        'target': json['target'],
        'textualRepresentation': json['textualRepresentation'],
    };
}
exports.PortConjugationFromJSONTyped = PortConjugationFromJSONTyped;
function PortConjugationToJSON(value) {
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
        'conjugatedPortDefinition': (0, Identified_1.IdentifiedToJSON)(value.conjugatedPortDefinition),
        'conjugatedType': (0, Identified_1.IdentifiedToJSON)(value.conjugatedType),
        'declaredName': value.declaredName,
        'declaredShortName': value.declaredShortName,
        'documentation': value.documentation,
        'elementId': value.elementId,
        'isImplied': value.isImplied,
        'isImpliedIncluded': value.isImpliedIncluded,
        'isLibraryElement': value.isLibraryElement,
        'name': value.name,
        'originalPortDefinition': (0, Identified_1.IdentifiedToJSON)(value.originalPortDefinition),
        'originalType': (0, Identified_1.IdentifiedToJSON)(value.originalType),
        'ownedAnnotation': value.ownedAnnotation,
        'ownedElement': value.ownedElement,
        'ownedRelatedElement': value.ownedRelatedElement,
        'ownedRelationship': value.ownedRelationship,
        'owner': value.owner,
        'owningMembership': value.owningMembership,
        'owningNamespace': value.owningNamespace,
        'owningRelatedElement': value.owningRelatedElement,
        'owningRelationship': value.owningRelationship,
        'owningType': value.owningType,
        'qualifiedName': value.qualifiedName,
        'relatedElement': value.relatedElement,
        'shortName': value.shortName,
        'source': value.source,
        'target': value.target,
        'textualRepresentation': value.textualRepresentation,
    };
}
exports.PortConjugationToJSON = PortConjugationToJSON;
