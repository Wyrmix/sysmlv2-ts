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
exports.TextualRepresentationRequestToJSON = exports.TextualRepresentationRequestFromJSONTyped = exports.TextualRepresentationRequestFromJSON = exports.instanceOfTextualRepresentationRequest = void 0;
const runtime_1 = require("../runtime");
const Identified_1 = require("./Identified");
/**
 * Check if a given object implements the TextualRepresentationRequest interface.
 */
function instanceOfTextualRepresentationRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
exports.instanceOfTextualRepresentationRequest = instanceOfTextualRepresentationRequest;
function TextualRepresentationRequestFromJSON(json) {
    return TextualRepresentationRequestFromJSONTyped(json, false);
}
exports.TextualRepresentationRequestFromJSON = TextualRepresentationRequestFromJSON;
function TextualRepresentationRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !(0, runtime_1.exists)(json, '@id') ? undefined : json['@id'],
        'atType': json['@type'],
        'aliasIds': !(0, runtime_1.exists)(json, 'aliasIds') ? undefined : json['aliasIds'],
        'annotatedElement': !(0, runtime_1.exists)(json, 'annotatedElement') ? undefined : json['annotatedElement'],
        'annotation': !(0, runtime_1.exists)(json, 'annotation') ? undefined : json['annotation'],
        'body': !(0, runtime_1.exists)(json, 'body') ? undefined : json['body'],
        'declaredName': !(0, runtime_1.exists)(json, 'declaredName') ? undefined : json['declaredName'],
        'declaredShortName': !(0, runtime_1.exists)(json, 'declaredShortName') ? undefined : json['declaredShortName'],
        'documentation': !(0, runtime_1.exists)(json, 'documentation') ? undefined : json['documentation'],
        'elementId': !(0, runtime_1.exists)(json, 'elementId') ? undefined : json['elementId'],
        'isImpliedIncluded': !(0, runtime_1.exists)(json, 'isImpliedIncluded') ? undefined : json['isImpliedIncluded'],
        'isLibraryElement': !(0, runtime_1.exists)(json, 'isLibraryElement') ? undefined : json['isLibraryElement'],
        'language': !(0, runtime_1.exists)(json, 'language') ? undefined : json['language'],
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'ownedAnnotation': !(0, runtime_1.exists)(json, 'ownedAnnotation') ? undefined : json['ownedAnnotation'],
        'ownedElement': !(0, runtime_1.exists)(json, 'ownedElement') ? undefined : json['ownedElement'],
        'ownedRelationship': !(0, runtime_1.exists)(json, 'ownedRelationship') ? undefined : json['ownedRelationship'],
        'owner': !(0, runtime_1.exists)(json, 'owner') ? undefined : json['owner'],
        'owningMembership': !(0, runtime_1.exists)(json, 'owningMembership') ? undefined : json['owningMembership'],
        'owningNamespace': !(0, runtime_1.exists)(json, 'owningNamespace') ? undefined : json['owningNamespace'],
        'owningRelationship': !(0, runtime_1.exists)(json, 'owningRelationship') ? undefined : json['owningRelationship'],
        'qualifiedName': !(0, runtime_1.exists)(json, 'qualifiedName') ? undefined : json['qualifiedName'],
        'representedElement': !(0, runtime_1.exists)(json, 'representedElement') ? undefined : (0, Identified_1.IdentifiedFromJSON)(json['representedElement']),
        'shortName': !(0, runtime_1.exists)(json, 'shortName') ? undefined : json['shortName'],
        'textualRepresentation': !(0, runtime_1.exists)(json, 'textualRepresentation') ? undefined : json['textualRepresentation'],
    };
}
exports.TextualRepresentationRequestFromJSONTyped = TextualRepresentationRequestFromJSONTyped;
function TextualRepresentationRequestToJSON(value) {
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
        'representedElement': (0, Identified_1.IdentifiedToJSON)(value.representedElement),
        'shortName': value.shortName,
        'textualRepresentation': value.textualRepresentation,
    };
}
exports.TextualRepresentationRequestToJSON = TextualRepresentationRequestToJSON;
