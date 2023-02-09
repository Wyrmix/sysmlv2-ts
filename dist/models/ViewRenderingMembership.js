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
exports.ViewRenderingMembershipToJSON = exports.ViewRenderingMembershipFromJSONTyped = exports.ViewRenderingMembershipFromJSON = exports.instanceOfViewRenderingMembership = void 0;
const Identified_1 = require("./Identified");
/**
 * Check if a given object implements the ViewRenderingMembership interface.
 */
function instanceOfViewRenderingMembership(value) {
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
    isInstance = isInstance && "memberElement" in value;
    isInstance = isInstance && "memberElementId" in value;
    isInstance = isInstance && "memberName" in value;
    isInstance = isInstance && "memberShortName" in value;
    isInstance = isInstance && "membershipOwningNamespace" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "ownedAnnotation" in value;
    isInstance = isInstance && "ownedElement" in value;
    isInstance = isInstance && "ownedMemberElement" in value;
    isInstance = isInstance && "ownedMemberElementId" in value;
    isInstance = isInstance && "ownedMemberFeature" in value;
    isInstance = isInstance && "ownedMemberName" in value;
    isInstance = isInstance && "ownedMemberShortName" in value;
    isInstance = isInstance && "ownedRelatedElement" in value;
    isInstance = isInstance && "ownedRelationship" in value;
    isInstance = isInstance && "ownedRendering" in value;
    isInstance = isInstance && "owner" in value;
    isInstance = isInstance && "owningMembership" in value;
    isInstance = isInstance && "owningNamespace" in value;
    isInstance = isInstance && "owningRelatedElement" in value;
    isInstance = isInstance && "owningRelationship" in value;
    isInstance = isInstance && "owningType" in value;
    isInstance = isInstance && "qualifiedName" in value;
    isInstance = isInstance && "referencedRendering" in value;
    isInstance = isInstance && "relatedElement" in value;
    isInstance = isInstance && "shortName" in value;
    isInstance = isInstance && "source" in value;
    isInstance = isInstance && "target" in value;
    isInstance = isInstance && "textualRepresentation" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "visibility" in value;
    return isInstance;
}
exports.instanceOfViewRenderingMembership = instanceOfViewRenderingMembership;
function ViewRenderingMembershipFromJSON(json) {
    return ViewRenderingMembershipFromJSONTyped(json, false);
}
exports.ViewRenderingMembershipFromJSON = ViewRenderingMembershipFromJSON;
function ViewRenderingMembershipFromJSONTyped(json, ignoreDiscriminator) {
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
        'feature': (0, Identified_1.IdentifiedFromJSON)(json['feature']),
        'isImplied': json['isImplied'],
        'isImpliedIncluded': json['isImpliedIncluded'],
        'isLibraryElement': json['isLibraryElement'],
        'memberElement': (0, Identified_1.IdentifiedFromJSON)(json['memberElement']),
        'memberElementId': json['memberElementId'],
        'memberName': json['memberName'],
        'memberShortName': json['memberShortName'],
        'membershipOwningNamespace': (0, Identified_1.IdentifiedFromJSON)(json['membershipOwningNamespace']),
        'name': json['name'],
        'ownedAnnotation': json['ownedAnnotation'],
        'ownedElement': json['ownedElement'],
        'ownedMemberElement': (0, Identified_1.IdentifiedFromJSON)(json['ownedMemberElement']),
        'ownedMemberElementId': json['ownedMemberElementId'],
        'ownedMemberFeature': (0, Identified_1.IdentifiedFromJSON)(json['ownedMemberFeature']),
        'ownedMemberName': json['ownedMemberName'],
        'ownedMemberShortName': json['ownedMemberShortName'],
        'ownedRelatedElement': json['ownedRelatedElement'],
        'ownedRelationship': json['ownedRelationship'],
        'ownedRendering': (0, Identified_1.IdentifiedFromJSON)(json['ownedRendering']),
        'owner': json['owner'],
        'owningMembership': json['owningMembership'],
        'owningNamespace': json['owningNamespace'],
        'owningRelatedElement': json['owningRelatedElement'],
        'owningRelationship': json['owningRelationship'],
        'owningType': (0, Identified_1.IdentifiedFromJSON)(json['owningType']),
        'qualifiedName': json['qualifiedName'],
        'referencedRendering': (0, Identified_1.IdentifiedFromJSON)(json['referencedRendering']),
        'relatedElement': json['relatedElement'],
        'shortName': json['shortName'],
        'source': json['source'],
        'target': json['target'],
        'textualRepresentation': json['textualRepresentation'],
        'type': (0, Identified_1.IdentifiedFromJSON)(json['type']),
        'visibility': json['visibility'],
    };
}
exports.ViewRenderingMembershipFromJSONTyped = ViewRenderingMembershipFromJSONTyped;
function ViewRenderingMembershipToJSON(value) {
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
        'feature': (0, Identified_1.IdentifiedToJSON)(value.feature),
        'isImplied': value.isImplied,
        'isImpliedIncluded': value.isImpliedIncluded,
        'isLibraryElement': value.isLibraryElement,
        'memberElement': (0, Identified_1.IdentifiedToJSON)(value.memberElement),
        'memberElementId': value.memberElementId,
        'memberName': value.memberName,
        'memberShortName': value.memberShortName,
        'membershipOwningNamespace': (0, Identified_1.IdentifiedToJSON)(value.membershipOwningNamespace),
        'name': value.name,
        'ownedAnnotation': value.ownedAnnotation,
        'ownedElement': value.ownedElement,
        'ownedMemberElement': (0, Identified_1.IdentifiedToJSON)(value.ownedMemberElement),
        'ownedMemberElementId': value.ownedMemberElementId,
        'ownedMemberFeature': (0, Identified_1.IdentifiedToJSON)(value.ownedMemberFeature),
        'ownedMemberName': value.ownedMemberName,
        'ownedMemberShortName': value.ownedMemberShortName,
        'ownedRelatedElement': value.ownedRelatedElement,
        'ownedRelationship': value.ownedRelationship,
        'ownedRendering': (0, Identified_1.IdentifiedToJSON)(value.ownedRendering),
        'owner': value.owner,
        'owningMembership': value.owningMembership,
        'owningNamespace': value.owningNamespace,
        'owningRelatedElement': value.owningRelatedElement,
        'owningRelationship': value.owningRelationship,
        'owningType': (0, Identified_1.IdentifiedToJSON)(value.owningType),
        'qualifiedName': value.qualifiedName,
        'referencedRendering': (0, Identified_1.IdentifiedToJSON)(value.referencedRendering),
        'relatedElement': value.relatedElement,
        'shortName': value.shortName,
        'source': value.source,
        'target': value.target,
        'textualRepresentation': value.textualRepresentation,
        'type': (0, Identified_1.IdentifiedToJSON)(value.type),
        'visibility': value.visibility,
    };
}
exports.ViewRenderingMembershipToJSON = ViewRenderingMembershipToJSON;
