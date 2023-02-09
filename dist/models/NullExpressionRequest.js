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
exports.NullExpressionRequestToJSON = exports.NullExpressionRequestFromJSONTyped = exports.NullExpressionRequestFromJSON = exports.instanceOfNullExpressionRequest = void 0;
const runtime_1 = require("../runtime");
const Identified_1 = require("./Identified");
/**
 * Check if a given object implements the NullExpressionRequest interface.
 */
function instanceOfNullExpressionRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
exports.instanceOfNullExpressionRequest = instanceOfNullExpressionRequest;
function NullExpressionRequestFromJSON(json) {
    return NullExpressionRequestFromJSONTyped(json, false);
}
exports.NullExpressionRequestFromJSON = NullExpressionRequestFromJSON;
function NullExpressionRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !(0, runtime_1.exists)(json, '@id') ? undefined : json['@id'],
        'atType': json['@type'],
        'aliasIds': !(0, runtime_1.exists)(json, 'aliasIds') ? undefined : json['aliasIds'],
        'behavior': !(0, runtime_1.exists)(json, 'behavior') ? undefined : json['behavior'],
        'chainingFeature': !(0, runtime_1.exists)(json, 'chainingFeature') ? undefined : json['chainingFeature'],
        'declaredName': !(0, runtime_1.exists)(json, 'declaredName') ? undefined : json['declaredName'],
        'declaredShortName': !(0, runtime_1.exists)(json, 'declaredShortName') ? undefined : json['declaredShortName'],
        'differencingType': !(0, runtime_1.exists)(json, 'differencingType') ? undefined : json['differencingType'],
        'directedFeature': !(0, runtime_1.exists)(json, 'directedFeature') ? undefined : json['directedFeature'],
        'direction': !(0, runtime_1.exists)(json, 'direction') ? undefined : json['direction'],
        'documentation': !(0, runtime_1.exists)(json, 'documentation') ? undefined : json['documentation'],
        'elementId': !(0, runtime_1.exists)(json, 'elementId') ? undefined : json['elementId'],
        'endFeature': !(0, runtime_1.exists)(json, 'endFeature') ? undefined : json['endFeature'],
        'endOwningType': !(0, runtime_1.exists)(json, 'endOwningType') ? undefined : json['endOwningType'],
        'feature': !(0, runtime_1.exists)(json, 'feature') ? undefined : json['feature'],
        'featureMembership': !(0, runtime_1.exists)(json, 'featureMembership') ? undefined : json['featureMembership'],
        'featuringType': !(0, runtime_1.exists)(json, 'featuringType') ? undefined : json['featuringType'],
        '_function': !(0, runtime_1.exists)(json, 'function') ? undefined : json['function'],
        'importedMembership': !(0, runtime_1.exists)(json, 'importedMembership') ? undefined : json['importedMembership'],
        'inheritedFeature': !(0, runtime_1.exists)(json, 'inheritedFeature') ? undefined : json['inheritedFeature'],
        'inheritedMembership': !(0, runtime_1.exists)(json, 'inheritedMembership') ? undefined : json['inheritedMembership'],
        'input': !(0, runtime_1.exists)(json, 'input') ? undefined : json['input'],
        'intersectingType': !(0, runtime_1.exists)(json, 'intersectingType') ? undefined : json['intersectingType'],
        'isAbstract': !(0, runtime_1.exists)(json, 'isAbstract') ? undefined : json['isAbstract'],
        'isComposite': !(0, runtime_1.exists)(json, 'isComposite') ? undefined : json['isComposite'],
        'isConjugated': !(0, runtime_1.exists)(json, 'isConjugated') ? undefined : json['isConjugated'],
        'isDerived': !(0, runtime_1.exists)(json, 'isDerived') ? undefined : json['isDerived'],
        'isEnd': !(0, runtime_1.exists)(json, 'isEnd') ? undefined : json['isEnd'],
        'isImpliedIncluded': !(0, runtime_1.exists)(json, 'isImpliedIncluded') ? undefined : json['isImpliedIncluded'],
        'isLibraryElement': !(0, runtime_1.exists)(json, 'isLibraryElement') ? undefined : json['isLibraryElement'],
        'isModelLevelEvaluable': !(0, runtime_1.exists)(json, 'isModelLevelEvaluable') ? undefined : json['isModelLevelEvaluable'],
        'isOrdered': !(0, runtime_1.exists)(json, 'isOrdered') ? undefined : json['isOrdered'],
        'isPortion': !(0, runtime_1.exists)(json, 'isPortion') ? undefined : json['isPortion'],
        'isReadOnly': !(0, runtime_1.exists)(json, 'isReadOnly') ? undefined : json['isReadOnly'],
        'isSufficient': !(0, runtime_1.exists)(json, 'isSufficient') ? undefined : json['isSufficient'],
        'isUnique': !(0, runtime_1.exists)(json, 'isUnique') ? undefined : json['isUnique'],
        'member': !(0, runtime_1.exists)(json, 'member') ? undefined : json['member'],
        'membership': !(0, runtime_1.exists)(json, 'membership') ? undefined : json['membership'],
        'multiplicity': !(0, runtime_1.exists)(json, 'multiplicity') ? undefined : json['multiplicity'],
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'output': !(0, runtime_1.exists)(json, 'output') ? undefined : json['output'],
        'ownedAnnotation': !(0, runtime_1.exists)(json, 'ownedAnnotation') ? undefined : json['ownedAnnotation'],
        'ownedConjugator': !(0, runtime_1.exists)(json, 'ownedConjugator') ? undefined : json['ownedConjugator'],
        'ownedDifferencing': !(0, runtime_1.exists)(json, 'ownedDifferencing') ? undefined : json['ownedDifferencing'],
        'ownedDisjoining': !(0, runtime_1.exists)(json, 'ownedDisjoining') ? undefined : json['ownedDisjoining'],
        'ownedElement': !(0, runtime_1.exists)(json, 'ownedElement') ? undefined : json['ownedElement'],
        'ownedEndFeature': !(0, runtime_1.exists)(json, 'ownedEndFeature') ? undefined : json['ownedEndFeature'],
        'ownedFeature': !(0, runtime_1.exists)(json, 'ownedFeature') ? undefined : json['ownedFeature'],
        'ownedFeatureChaining': !(0, runtime_1.exists)(json, 'ownedFeatureChaining') ? undefined : json['ownedFeatureChaining'],
        'ownedFeatureInverting': !(0, runtime_1.exists)(json, 'ownedFeatureInverting') ? undefined : json['ownedFeatureInverting'],
        'ownedFeatureMembership': !(0, runtime_1.exists)(json, 'ownedFeatureMembership') ? undefined : json['ownedFeatureMembership'],
        'ownedImport': !(0, runtime_1.exists)(json, 'ownedImport') ? undefined : json['ownedImport'],
        'ownedIntersecting': !(0, runtime_1.exists)(json, 'ownedIntersecting') ? undefined : json['ownedIntersecting'],
        'ownedMember': !(0, runtime_1.exists)(json, 'ownedMember') ? undefined : json['ownedMember'],
        'ownedMembership': !(0, runtime_1.exists)(json, 'ownedMembership') ? undefined : json['ownedMembership'],
        'ownedRedefinition': !(0, runtime_1.exists)(json, 'ownedRedefinition') ? undefined : json['ownedRedefinition'],
        'ownedReferenceSubsetting': !(0, runtime_1.exists)(json, 'ownedReferenceSubsetting') ? undefined : json['ownedReferenceSubsetting'],
        'ownedRelationship': !(0, runtime_1.exists)(json, 'ownedRelationship') ? undefined : json['ownedRelationship'],
        'ownedSpecialization': !(0, runtime_1.exists)(json, 'ownedSpecialization') ? undefined : json['ownedSpecialization'],
        'ownedSubsetting': !(0, runtime_1.exists)(json, 'ownedSubsetting') ? undefined : json['ownedSubsetting'],
        'ownedTypeFeaturing': !(0, runtime_1.exists)(json, 'ownedTypeFeaturing') ? undefined : json['ownedTypeFeaturing'],
        'ownedTyping': !(0, runtime_1.exists)(json, 'ownedTyping') ? undefined : json['ownedTyping'],
        'ownedUnioning': !(0, runtime_1.exists)(json, 'ownedUnioning') ? undefined : json['ownedUnioning'],
        'owner': !(0, runtime_1.exists)(json, 'owner') ? undefined : json['owner'],
        'owningFeatureMembership': !(0, runtime_1.exists)(json, 'owningFeatureMembership') ? undefined : json['owningFeatureMembership'],
        'owningMembership': !(0, runtime_1.exists)(json, 'owningMembership') ? undefined : json['owningMembership'],
        'owningNamespace': !(0, runtime_1.exists)(json, 'owningNamespace') ? undefined : json['owningNamespace'],
        'owningRelationship': !(0, runtime_1.exists)(json, 'owningRelationship') ? undefined : json['owningRelationship'],
        'owningType': !(0, runtime_1.exists)(json, 'owningType') ? undefined : json['owningType'],
        'parameter': !(0, runtime_1.exists)(json, 'parameter') ? undefined : json['parameter'],
        'qualifiedName': !(0, runtime_1.exists)(json, 'qualifiedName') ? undefined : json['qualifiedName'],
        'result': !(0, runtime_1.exists)(json, 'result') ? undefined : (0, Identified_1.IdentifiedFromJSON)(json['result']),
        'shortName': !(0, runtime_1.exists)(json, 'shortName') ? undefined : json['shortName'],
        'textualRepresentation': !(0, runtime_1.exists)(json, 'textualRepresentation') ? undefined : json['textualRepresentation'],
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : json['type'],
        'unioningType': !(0, runtime_1.exists)(json, 'unioningType') ? undefined : json['unioningType'],
    };
}
exports.NullExpressionRequestFromJSONTyped = NullExpressionRequestFromJSONTyped;
function NullExpressionRequestToJSON(value) {
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
        'behavior': value.behavior,
        'chainingFeature': value.chainingFeature,
        'declaredName': value.declaredName,
        'declaredShortName': value.declaredShortName,
        'differencingType': value.differencingType,
        'directedFeature': value.directedFeature,
        'direction': value.direction,
        'documentation': value.documentation,
        'elementId': value.elementId,
        'endFeature': value.endFeature,
        'endOwningType': value.endOwningType,
        'feature': value.feature,
        'featureMembership': value.featureMembership,
        'featuringType': value.featuringType,
        'function': value._function,
        'importedMembership': value.importedMembership,
        'inheritedFeature': value.inheritedFeature,
        'inheritedMembership': value.inheritedMembership,
        'input': value.input,
        'intersectingType': value.intersectingType,
        'isAbstract': value.isAbstract,
        'isComposite': value.isComposite,
        'isConjugated': value.isConjugated,
        'isDerived': value.isDerived,
        'isEnd': value.isEnd,
        'isImpliedIncluded': value.isImpliedIncluded,
        'isLibraryElement': value.isLibraryElement,
        'isModelLevelEvaluable': value.isModelLevelEvaluable,
        'isOrdered': value.isOrdered,
        'isPortion': value.isPortion,
        'isReadOnly': value.isReadOnly,
        'isSufficient': value.isSufficient,
        'isUnique': value.isUnique,
        'member': value.member,
        'membership': value.membership,
        'multiplicity': value.multiplicity,
        'name': value.name,
        'output': value.output,
        'ownedAnnotation': value.ownedAnnotation,
        'ownedConjugator': value.ownedConjugator,
        'ownedDifferencing': value.ownedDifferencing,
        'ownedDisjoining': value.ownedDisjoining,
        'ownedElement': value.ownedElement,
        'ownedEndFeature': value.ownedEndFeature,
        'ownedFeature': value.ownedFeature,
        'ownedFeatureChaining': value.ownedFeatureChaining,
        'ownedFeatureInverting': value.ownedFeatureInverting,
        'ownedFeatureMembership': value.ownedFeatureMembership,
        'ownedImport': value.ownedImport,
        'ownedIntersecting': value.ownedIntersecting,
        'ownedMember': value.ownedMember,
        'ownedMembership': value.ownedMembership,
        'ownedRedefinition': value.ownedRedefinition,
        'ownedReferenceSubsetting': value.ownedReferenceSubsetting,
        'ownedRelationship': value.ownedRelationship,
        'ownedSpecialization': value.ownedSpecialization,
        'ownedSubsetting': value.ownedSubsetting,
        'ownedTypeFeaturing': value.ownedTypeFeaturing,
        'ownedTyping': value.ownedTyping,
        'ownedUnioning': value.ownedUnioning,
        'owner': value.owner,
        'owningFeatureMembership': value.owningFeatureMembership,
        'owningMembership': value.owningMembership,
        'owningNamespace': value.owningNamespace,
        'owningRelationship': value.owningRelationship,
        'owningType': value.owningType,
        'parameter': value.parameter,
        'qualifiedName': value.qualifiedName,
        'result': (0, Identified_1.IdentifiedToJSON)(value.result),
        'shortName': value.shortName,
        'textualRepresentation': value.textualRepresentation,
        'type': value.type,
        'unioningType': value.unioningType,
    };
}
exports.NullExpressionRequestToJSON = NullExpressionRequestToJSON;
