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
exports.VerificationCaseDefinitionToJSON = exports.VerificationCaseDefinitionFromJSONTyped = exports.VerificationCaseDefinitionFromJSON = exports.instanceOfVerificationCaseDefinition = void 0;
const Identified_1 = require("./Identified");
/**
 * Check if a given object implements the VerificationCaseDefinition interface.
 */
function instanceOfVerificationCaseDefinition(value) {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "action" in value;
    isInstance = isInstance && "actorParameter" in value;
    isInstance = isInstance && "aliasIds" in value;
    isInstance = isInstance && "calculation" in value;
    isInstance = isInstance && "declaredName" in value;
    isInstance = isInstance && "declaredShortName" in value;
    isInstance = isInstance && "differencingType" in value;
    isInstance = isInstance && "directedFeature" in value;
    isInstance = isInstance && "directedUsage" in value;
    isInstance = isInstance && "documentation" in value;
    isInstance = isInstance && "elementId" in value;
    isInstance = isInstance && "endFeature" in value;
    isInstance = isInstance && "expression" in value;
    isInstance = isInstance && "feature" in value;
    isInstance = isInstance && "featureMembership" in value;
    isInstance = isInstance && "importedMembership" in value;
    isInstance = isInstance && "inheritedFeature" in value;
    isInstance = isInstance && "inheritedMembership" in value;
    isInstance = isInstance && "input" in value;
    isInstance = isInstance && "intersectingType" in value;
    isInstance = isInstance && "isAbstract" in value;
    isInstance = isInstance && "isConjugated" in value;
    isInstance = isInstance && "isImpliedIncluded" in value;
    isInstance = isInstance && "isIndividual" in value;
    isInstance = isInstance && "isLibraryElement" in value;
    isInstance = isInstance && "isModelLevelEvaluable" in value;
    isInstance = isInstance && "isSufficient" in value;
    isInstance = isInstance && "isVariation" in value;
    isInstance = isInstance && "lifeClass" in value;
    isInstance = isInstance && "member" in value;
    isInstance = isInstance && "membership" in value;
    isInstance = isInstance && "multiplicity" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "objectiveRequirement" in value;
    isInstance = isInstance && "output" in value;
    isInstance = isInstance && "ownedAction" in value;
    isInstance = isInstance && "ownedAllocation" in value;
    isInstance = isInstance && "ownedAnalysisCase" in value;
    isInstance = isInstance && "ownedAnnotation" in value;
    isInstance = isInstance && "ownedAttribute" in value;
    isInstance = isInstance && "ownedCalculation" in value;
    isInstance = isInstance && "ownedCase" in value;
    isInstance = isInstance && "ownedConcern" in value;
    isInstance = isInstance && "ownedConjugator" in value;
    isInstance = isInstance && "ownedConnection" in value;
    isInstance = isInstance && "ownedConstraint" in value;
    isInstance = isInstance && "ownedDifferencing" in value;
    isInstance = isInstance && "ownedDisjoining" in value;
    isInstance = isInstance && "ownedElement" in value;
    isInstance = isInstance && "ownedEndFeature" in value;
    isInstance = isInstance && "ownedEnumeration" in value;
    isInstance = isInstance && "ownedFeature" in value;
    isInstance = isInstance && "ownedFeatureMembership" in value;
    isInstance = isInstance && "ownedFlow" in value;
    isInstance = isInstance && "ownedImport" in value;
    isInstance = isInstance && "ownedInterface" in value;
    isInstance = isInstance && "ownedIntersecting" in value;
    isInstance = isInstance && "ownedItem" in value;
    isInstance = isInstance && "ownedMember" in value;
    isInstance = isInstance && "ownedMembership" in value;
    isInstance = isInstance && "ownedMetadata" in value;
    isInstance = isInstance && "ownedOccurrence" in value;
    isInstance = isInstance && "ownedPart" in value;
    isInstance = isInstance && "ownedPort" in value;
    isInstance = isInstance && "ownedReference" in value;
    isInstance = isInstance && "ownedRelationship" in value;
    isInstance = isInstance && "ownedRendering" in value;
    isInstance = isInstance && "ownedRequirement" in value;
    isInstance = isInstance && "ownedSpecialization" in value;
    isInstance = isInstance && "ownedState" in value;
    isInstance = isInstance && "ownedSubclassification" in value;
    isInstance = isInstance && "ownedTransition" in value;
    isInstance = isInstance && "ownedUnioning" in value;
    isInstance = isInstance && "ownedUsage" in value;
    isInstance = isInstance && "ownedUseCase" in value;
    isInstance = isInstance && "ownedVerificationCase" in value;
    isInstance = isInstance && "ownedView" in value;
    isInstance = isInstance && "ownedViewpoint" in value;
    isInstance = isInstance && "owner" in value;
    isInstance = isInstance && "owningMembership" in value;
    isInstance = isInstance && "owningNamespace" in value;
    isInstance = isInstance && "owningRelationship" in value;
    isInstance = isInstance && "parameter" in value;
    isInstance = isInstance && "qualifiedName" in value;
    isInstance = isInstance && "result" in value;
    isInstance = isInstance && "shortName" in value;
    isInstance = isInstance && "step" in value;
    isInstance = isInstance && "subjectParameter" in value;
    isInstance = isInstance && "textualRepresentation" in value;
    isInstance = isInstance && "unioningType" in value;
    isInstance = isInstance && "usage" in value;
    isInstance = isInstance && "variant" in value;
    isInstance = isInstance && "variantMembership" in value;
    isInstance = isInstance && "verifiedRequirement" in value;
    return isInstance;
}
exports.instanceOfVerificationCaseDefinition = instanceOfVerificationCaseDefinition;
function VerificationCaseDefinitionFromJSON(json) {
    return VerificationCaseDefinitionFromJSONTyped(json, false);
}
exports.VerificationCaseDefinitionFromJSON = VerificationCaseDefinitionFromJSON;
function VerificationCaseDefinitionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['@id'],
        'atType': json['@type'],
        'action': json['action'],
        'actorParameter': json['actorParameter'],
        'aliasIds': json['aliasIds'],
        'calculation': json['calculation'],
        'declaredName': json['declaredName'],
        'declaredShortName': json['declaredShortName'],
        'differencingType': json['differencingType'],
        'directedFeature': json['directedFeature'],
        'directedUsage': json['directedUsage'],
        'documentation': json['documentation'],
        'elementId': json['elementId'],
        'endFeature': json['endFeature'],
        'expression': json['expression'],
        'feature': json['feature'],
        'featureMembership': json['featureMembership'],
        'importedMembership': json['importedMembership'],
        'inheritedFeature': json['inheritedFeature'],
        'inheritedMembership': json['inheritedMembership'],
        'input': json['input'],
        'intersectingType': json['intersectingType'],
        'isAbstract': json['isAbstract'],
        'isConjugated': json['isConjugated'],
        'isImpliedIncluded': json['isImpliedIncluded'],
        'isIndividual': json['isIndividual'],
        'isLibraryElement': json['isLibraryElement'],
        'isModelLevelEvaluable': json['isModelLevelEvaluable'],
        'isSufficient': json['isSufficient'],
        'isVariation': json['isVariation'],
        'lifeClass': json['lifeClass'],
        'member': json['member'],
        'membership': json['membership'],
        'multiplicity': json['multiplicity'],
        'name': json['name'],
        'objectiveRequirement': json['objectiveRequirement'],
        'output': json['output'],
        'ownedAction': json['ownedAction'],
        'ownedAllocation': json['ownedAllocation'],
        'ownedAnalysisCase': json['ownedAnalysisCase'],
        'ownedAnnotation': json['ownedAnnotation'],
        'ownedAttribute': json['ownedAttribute'],
        'ownedCalculation': json['ownedCalculation'],
        'ownedCase': json['ownedCase'],
        'ownedConcern': json['ownedConcern'],
        'ownedConjugator': json['ownedConjugator'],
        'ownedConnection': json['ownedConnection'],
        'ownedConstraint': json['ownedConstraint'],
        'ownedDifferencing': json['ownedDifferencing'],
        'ownedDisjoining': json['ownedDisjoining'],
        'ownedElement': json['ownedElement'],
        'ownedEndFeature': json['ownedEndFeature'],
        'ownedEnumeration': json['ownedEnumeration'],
        'ownedFeature': json['ownedFeature'],
        'ownedFeatureMembership': json['ownedFeatureMembership'],
        'ownedFlow': json['ownedFlow'],
        'ownedImport': json['ownedImport'],
        'ownedInterface': json['ownedInterface'],
        'ownedIntersecting': json['ownedIntersecting'],
        'ownedItem': json['ownedItem'],
        'ownedMember': json['ownedMember'],
        'ownedMembership': json['ownedMembership'],
        'ownedMetadata': json['ownedMetadata'],
        'ownedOccurrence': json['ownedOccurrence'],
        'ownedPart': json['ownedPart'],
        'ownedPort': json['ownedPort'],
        'ownedReference': json['ownedReference'],
        'ownedRelationship': json['ownedRelationship'],
        'ownedRendering': json['ownedRendering'],
        'ownedRequirement': json['ownedRequirement'],
        'ownedSpecialization': json['ownedSpecialization'],
        'ownedState': json['ownedState'],
        'ownedSubclassification': json['ownedSubclassification'],
        'ownedTransition': json['ownedTransition'],
        'ownedUnioning': json['ownedUnioning'],
        'ownedUsage': json['ownedUsage'],
        'ownedUseCase': json['ownedUseCase'],
        'ownedVerificationCase': json['ownedVerificationCase'],
        'ownedView': json['ownedView'],
        'ownedViewpoint': json['ownedViewpoint'],
        'owner': json['owner'],
        'owningMembership': json['owningMembership'],
        'owningNamespace': json['owningNamespace'],
        'owningRelationship': json['owningRelationship'],
        'parameter': json['parameter'],
        'qualifiedName': json['qualifiedName'],
        'result': (0, Identified_1.IdentifiedFromJSON)(json['result']),
        'shortName': json['shortName'],
        'step': json['step'],
        'subjectParameter': (0, Identified_1.IdentifiedFromJSON)(json['subjectParameter']),
        'textualRepresentation': json['textualRepresentation'],
        'unioningType': json['unioningType'],
        'usage': json['usage'],
        'variant': json['variant'],
        'variantMembership': json['variantMembership'],
        'verifiedRequirement': json['verifiedRequirement'],
    };
}
exports.VerificationCaseDefinitionFromJSONTyped = VerificationCaseDefinitionFromJSONTyped;
function VerificationCaseDefinitionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        '@id': value.id,
        '@type': value.atType,
        'action': value.action,
        'actorParameter': value.actorParameter,
        'aliasIds': value.aliasIds,
        'calculation': value.calculation,
        'declaredName': value.declaredName,
        'declaredShortName': value.declaredShortName,
        'differencingType': value.differencingType,
        'directedFeature': value.directedFeature,
        'directedUsage': value.directedUsage,
        'documentation': value.documentation,
        'elementId': value.elementId,
        'endFeature': value.endFeature,
        'expression': value.expression,
        'feature': value.feature,
        'featureMembership': value.featureMembership,
        'importedMembership': value.importedMembership,
        'inheritedFeature': value.inheritedFeature,
        'inheritedMembership': value.inheritedMembership,
        'input': value.input,
        'intersectingType': value.intersectingType,
        'isAbstract': value.isAbstract,
        'isConjugated': value.isConjugated,
        'isImpliedIncluded': value.isImpliedIncluded,
        'isIndividual': value.isIndividual,
        'isLibraryElement': value.isLibraryElement,
        'isModelLevelEvaluable': value.isModelLevelEvaluable,
        'isSufficient': value.isSufficient,
        'isVariation': value.isVariation,
        'lifeClass': value.lifeClass,
        'member': value.member,
        'membership': value.membership,
        'multiplicity': value.multiplicity,
        'name': value.name,
        'objectiveRequirement': value.objectiveRequirement,
        'output': value.output,
        'ownedAction': value.ownedAction,
        'ownedAllocation': value.ownedAllocation,
        'ownedAnalysisCase': value.ownedAnalysisCase,
        'ownedAnnotation': value.ownedAnnotation,
        'ownedAttribute': value.ownedAttribute,
        'ownedCalculation': value.ownedCalculation,
        'ownedCase': value.ownedCase,
        'ownedConcern': value.ownedConcern,
        'ownedConjugator': value.ownedConjugator,
        'ownedConnection': value.ownedConnection,
        'ownedConstraint': value.ownedConstraint,
        'ownedDifferencing': value.ownedDifferencing,
        'ownedDisjoining': value.ownedDisjoining,
        'ownedElement': value.ownedElement,
        'ownedEndFeature': value.ownedEndFeature,
        'ownedEnumeration': value.ownedEnumeration,
        'ownedFeature': value.ownedFeature,
        'ownedFeatureMembership': value.ownedFeatureMembership,
        'ownedFlow': value.ownedFlow,
        'ownedImport': value.ownedImport,
        'ownedInterface': value.ownedInterface,
        'ownedIntersecting': value.ownedIntersecting,
        'ownedItem': value.ownedItem,
        'ownedMember': value.ownedMember,
        'ownedMembership': value.ownedMembership,
        'ownedMetadata': value.ownedMetadata,
        'ownedOccurrence': value.ownedOccurrence,
        'ownedPart': value.ownedPart,
        'ownedPort': value.ownedPort,
        'ownedReference': value.ownedReference,
        'ownedRelationship': value.ownedRelationship,
        'ownedRendering': value.ownedRendering,
        'ownedRequirement': value.ownedRequirement,
        'ownedSpecialization': value.ownedSpecialization,
        'ownedState': value.ownedState,
        'ownedSubclassification': value.ownedSubclassification,
        'ownedTransition': value.ownedTransition,
        'ownedUnioning': value.ownedUnioning,
        'ownedUsage': value.ownedUsage,
        'ownedUseCase': value.ownedUseCase,
        'ownedVerificationCase': value.ownedVerificationCase,
        'ownedView': value.ownedView,
        'ownedViewpoint': value.ownedViewpoint,
        'owner': value.owner,
        'owningMembership': value.owningMembership,
        'owningNamespace': value.owningNamespace,
        'owningRelationship': value.owningRelationship,
        'parameter': value.parameter,
        'qualifiedName': value.qualifiedName,
        'result': (0, Identified_1.IdentifiedToJSON)(value.result),
        'shortName': value.shortName,
        'step': value.step,
        'subjectParameter': (0, Identified_1.IdentifiedToJSON)(value.subjectParameter),
        'textualRepresentation': value.textualRepresentation,
        'unioningType': value.unioningType,
        'usage': value.usage,
        'variant': value.variant,
        'variantMembership': value.variantMembership,
        'verifiedRequirement': value.verifiedRequirement,
    };
}
exports.VerificationCaseDefinitionToJSON = VerificationCaseDefinitionToJSON;
