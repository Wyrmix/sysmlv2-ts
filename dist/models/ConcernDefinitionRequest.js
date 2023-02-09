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
exports.ConcernDefinitionRequestToJSON = exports.ConcernDefinitionRequestFromJSONTyped = exports.ConcernDefinitionRequestFromJSON = exports.instanceOfConcernDefinitionRequest = void 0;
const runtime_1 = require("../runtime");
const Identified_1 = require("./Identified");
/**
 * Check if a given object implements the ConcernDefinitionRequest interface.
 */
function instanceOfConcernDefinitionRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
exports.instanceOfConcernDefinitionRequest = instanceOfConcernDefinitionRequest;
function ConcernDefinitionRequestFromJSON(json) {
    return ConcernDefinitionRequestFromJSONTyped(json, false);
}
exports.ConcernDefinitionRequestFromJSON = ConcernDefinitionRequestFromJSON;
function ConcernDefinitionRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !(0, runtime_1.exists)(json, '@id') ? undefined : json['@id'],
        'atType': json['@type'],
        'actorParameter': !(0, runtime_1.exists)(json, 'actorParameter') ? undefined : json['actorParameter'],
        'aliasIds': !(0, runtime_1.exists)(json, 'aliasIds') ? undefined : json['aliasIds'],
        'assumedConstraint': !(0, runtime_1.exists)(json, 'assumedConstraint') ? undefined : json['assumedConstraint'],
        'declaredName': !(0, runtime_1.exists)(json, 'declaredName') ? undefined : json['declaredName'],
        'declaredShortName': !(0, runtime_1.exists)(json, 'declaredShortName') ? undefined : json['declaredShortName'],
        'differencingType': !(0, runtime_1.exists)(json, 'differencingType') ? undefined : json['differencingType'],
        'directedFeature': !(0, runtime_1.exists)(json, 'directedFeature') ? undefined : json['directedFeature'],
        'directedUsage': !(0, runtime_1.exists)(json, 'directedUsage') ? undefined : json['directedUsage'],
        'documentation': !(0, runtime_1.exists)(json, 'documentation') ? undefined : json['documentation'],
        'elementId': !(0, runtime_1.exists)(json, 'elementId') ? undefined : json['elementId'],
        'endFeature': !(0, runtime_1.exists)(json, 'endFeature') ? undefined : json['endFeature'],
        'expression': !(0, runtime_1.exists)(json, 'expression') ? undefined : json['expression'],
        'feature': !(0, runtime_1.exists)(json, 'feature') ? undefined : json['feature'],
        'featureMembership': !(0, runtime_1.exists)(json, 'featureMembership') ? undefined : json['featureMembership'],
        'framedConcern': !(0, runtime_1.exists)(json, 'framedConcern') ? undefined : json['framedConcern'],
        'importedMembership': !(0, runtime_1.exists)(json, 'importedMembership') ? undefined : json['importedMembership'],
        'inheritedFeature': !(0, runtime_1.exists)(json, 'inheritedFeature') ? undefined : json['inheritedFeature'],
        'inheritedMembership': !(0, runtime_1.exists)(json, 'inheritedMembership') ? undefined : json['inheritedMembership'],
        'input': !(0, runtime_1.exists)(json, 'input') ? undefined : json['input'],
        'intersectingType': !(0, runtime_1.exists)(json, 'intersectingType') ? undefined : json['intersectingType'],
        'isAbstract': !(0, runtime_1.exists)(json, 'isAbstract') ? undefined : json['isAbstract'],
        'isConjugated': !(0, runtime_1.exists)(json, 'isConjugated') ? undefined : json['isConjugated'],
        'isImpliedIncluded': !(0, runtime_1.exists)(json, 'isImpliedIncluded') ? undefined : json['isImpliedIncluded'],
        'isIndividual': !(0, runtime_1.exists)(json, 'isIndividual') ? undefined : json['isIndividual'],
        'isLibraryElement': !(0, runtime_1.exists)(json, 'isLibraryElement') ? undefined : json['isLibraryElement'],
        'isModelLevelEvaluable': !(0, runtime_1.exists)(json, 'isModelLevelEvaluable') ? undefined : json['isModelLevelEvaluable'],
        'isSufficient': !(0, runtime_1.exists)(json, 'isSufficient') ? undefined : json['isSufficient'],
        'isVariation': !(0, runtime_1.exists)(json, 'isVariation') ? undefined : json['isVariation'],
        'lifeClass': !(0, runtime_1.exists)(json, 'lifeClass') ? undefined : json['lifeClass'],
        'member': !(0, runtime_1.exists)(json, 'member') ? undefined : json['member'],
        'membership': !(0, runtime_1.exists)(json, 'membership') ? undefined : json['membership'],
        'multiplicity': !(0, runtime_1.exists)(json, 'multiplicity') ? undefined : json['multiplicity'],
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'output': !(0, runtime_1.exists)(json, 'output') ? undefined : json['output'],
        'ownedAction': !(0, runtime_1.exists)(json, 'ownedAction') ? undefined : json['ownedAction'],
        'ownedAllocation': !(0, runtime_1.exists)(json, 'ownedAllocation') ? undefined : json['ownedAllocation'],
        'ownedAnalysisCase': !(0, runtime_1.exists)(json, 'ownedAnalysisCase') ? undefined : json['ownedAnalysisCase'],
        'ownedAnnotation': !(0, runtime_1.exists)(json, 'ownedAnnotation') ? undefined : json['ownedAnnotation'],
        'ownedAttribute': !(0, runtime_1.exists)(json, 'ownedAttribute') ? undefined : json['ownedAttribute'],
        'ownedCalculation': !(0, runtime_1.exists)(json, 'ownedCalculation') ? undefined : json['ownedCalculation'],
        'ownedCase': !(0, runtime_1.exists)(json, 'ownedCase') ? undefined : json['ownedCase'],
        'ownedConcern': !(0, runtime_1.exists)(json, 'ownedConcern') ? undefined : json['ownedConcern'],
        'ownedConjugator': !(0, runtime_1.exists)(json, 'ownedConjugator') ? undefined : json['ownedConjugator'],
        'ownedConnection': !(0, runtime_1.exists)(json, 'ownedConnection') ? undefined : json['ownedConnection'],
        'ownedConstraint': !(0, runtime_1.exists)(json, 'ownedConstraint') ? undefined : json['ownedConstraint'],
        'ownedDifferencing': !(0, runtime_1.exists)(json, 'ownedDifferencing') ? undefined : json['ownedDifferencing'],
        'ownedDisjoining': !(0, runtime_1.exists)(json, 'ownedDisjoining') ? undefined : json['ownedDisjoining'],
        'ownedElement': !(0, runtime_1.exists)(json, 'ownedElement') ? undefined : json['ownedElement'],
        'ownedEndFeature': !(0, runtime_1.exists)(json, 'ownedEndFeature') ? undefined : json['ownedEndFeature'],
        'ownedEnumeration': !(0, runtime_1.exists)(json, 'ownedEnumeration') ? undefined : json['ownedEnumeration'],
        'ownedFeature': !(0, runtime_1.exists)(json, 'ownedFeature') ? undefined : json['ownedFeature'],
        'ownedFeatureMembership': !(0, runtime_1.exists)(json, 'ownedFeatureMembership') ? undefined : json['ownedFeatureMembership'],
        'ownedFlow': !(0, runtime_1.exists)(json, 'ownedFlow') ? undefined : json['ownedFlow'],
        'ownedImport': !(0, runtime_1.exists)(json, 'ownedImport') ? undefined : json['ownedImport'],
        'ownedInterface': !(0, runtime_1.exists)(json, 'ownedInterface') ? undefined : json['ownedInterface'],
        'ownedIntersecting': !(0, runtime_1.exists)(json, 'ownedIntersecting') ? undefined : json['ownedIntersecting'],
        'ownedItem': !(0, runtime_1.exists)(json, 'ownedItem') ? undefined : json['ownedItem'],
        'ownedMember': !(0, runtime_1.exists)(json, 'ownedMember') ? undefined : json['ownedMember'],
        'ownedMembership': !(0, runtime_1.exists)(json, 'ownedMembership') ? undefined : json['ownedMembership'],
        'ownedMetadata': !(0, runtime_1.exists)(json, 'ownedMetadata') ? undefined : json['ownedMetadata'],
        'ownedOccurrence': !(0, runtime_1.exists)(json, 'ownedOccurrence') ? undefined : json['ownedOccurrence'],
        'ownedPart': !(0, runtime_1.exists)(json, 'ownedPart') ? undefined : json['ownedPart'],
        'ownedPort': !(0, runtime_1.exists)(json, 'ownedPort') ? undefined : json['ownedPort'],
        'ownedReference': !(0, runtime_1.exists)(json, 'ownedReference') ? undefined : json['ownedReference'],
        'ownedRelationship': !(0, runtime_1.exists)(json, 'ownedRelationship') ? undefined : json['ownedRelationship'],
        'ownedRendering': !(0, runtime_1.exists)(json, 'ownedRendering') ? undefined : json['ownedRendering'],
        'ownedRequirement': !(0, runtime_1.exists)(json, 'ownedRequirement') ? undefined : json['ownedRequirement'],
        'ownedSpecialization': !(0, runtime_1.exists)(json, 'ownedSpecialization') ? undefined : json['ownedSpecialization'],
        'ownedState': !(0, runtime_1.exists)(json, 'ownedState') ? undefined : json['ownedState'],
        'ownedSubclassification': !(0, runtime_1.exists)(json, 'ownedSubclassification') ? undefined : json['ownedSubclassification'],
        'ownedTransition': !(0, runtime_1.exists)(json, 'ownedTransition') ? undefined : json['ownedTransition'],
        'ownedUnioning': !(0, runtime_1.exists)(json, 'ownedUnioning') ? undefined : json['ownedUnioning'],
        'ownedUsage': !(0, runtime_1.exists)(json, 'ownedUsage') ? undefined : json['ownedUsage'],
        'ownedUseCase': !(0, runtime_1.exists)(json, 'ownedUseCase') ? undefined : json['ownedUseCase'],
        'ownedVerificationCase': !(0, runtime_1.exists)(json, 'ownedVerificationCase') ? undefined : json['ownedVerificationCase'],
        'ownedView': !(0, runtime_1.exists)(json, 'ownedView') ? undefined : json['ownedView'],
        'ownedViewpoint': !(0, runtime_1.exists)(json, 'ownedViewpoint') ? undefined : json['ownedViewpoint'],
        'owner': !(0, runtime_1.exists)(json, 'owner') ? undefined : json['owner'],
        'owningMembership': !(0, runtime_1.exists)(json, 'owningMembership') ? undefined : json['owningMembership'],
        'owningNamespace': !(0, runtime_1.exists)(json, 'owningNamespace') ? undefined : json['owningNamespace'],
        'owningRelationship': !(0, runtime_1.exists)(json, 'owningRelationship') ? undefined : json['owningRelationship'],
        'parameter': !(0, runtime_1.exists)(json, 'parameter') ? undefined : json['parameter'],
        'qualifiedName': !(0, runtime_1.exists)(json, 'qualifiedName') ? undefined : json['qualifiedName'],
        'reqId': !(0, runtime_1.exists)(json, 'reqId') ? undefined : json['reqId'],
        'requiredConstraint': !(0, runtime_1.exists)(json, 'requiredConstraint') ? undefined : json['requiredConstraint'],
        'result': !(0, runtime_1.exists)(json, 'result') ? undefined : (0, Identified_1.IdentifiedFromJSON)(json['result']),
        'shortName': !(0, runtime_1.exists)(json, 'shortName') ? undefined : json['shortName'],
        'stakeholderParameter': !(0, runtime_1.exists)(json, 'stakeholderParameter') ? undefined : json['stakeholderParameter'],
        'step': !(0, runtime_1.exists)(json, 'step') ? undefined : json['step'],
        'subjectParameter': !(0, runtime_1.exists)(json, 'subjectParameter') ? undefined : (0, Identified_1.IdentifiedFromJSON)(json['subjectParameter']),
        'text': !(0, runtime_1.exists)(json, 'text') ? undefined : json['text'],
        'textualRepresentation': !(0, runtime_1.exists)(json, 'textualRepresentation') ? undefined : json['textualRepresentation'],
        'unioningType': !(0, runtime_1.exists)(json, 'unioningType') ? undefined : json['unioningType'],
        'usage': !(0, runtime_1.exists)(json, 'usage') ? undefined : json['usage'],
        'variant': !(0, runtime_1.exists)(json, 'variant') ? undefined : json['variant'],
        'variantMembership': !(0, runtime_1.exists)(json, 'variantMembership') ? undefined : json['variantMembership'],
    };
}
exports.ConcernDefinitionRequestFromJSONTyped = ConcernDefinitionRequestFromJSONTyped;
function ConcernDefinitionRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        '@id': value.id,
        '@type': value.atType,
        'actorParameter': value.actorParameter,
        'aliasIds': value.aliasIds,
        'assumedConstraint': value.assumedConstraint,
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
        'framedConcern': value.framedConcern,
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
        'reqId': value.reqId,
        'requiredConstraint': value.requiredConstraint,
        'result': (0, Identified_1.IdentifiedToJSON)(value.result),
        'shortName': value.shortName,
        'stakeholderParameter': value.stakeholderParameter,
        'step': value.step,
        'subjectParameter': (0, Identified_1.IdentifiedToJSON)(value.subjectParameter),
        'text': value.text,
        'textualRepresentation': value.textualRepresentation,
        'unioningType': value.unioningType,
        'usage': value.usage,
        'variant': value.variant,
        'variantMembership': value.variantMembership,
    };
}
exports.ConcernDefinitionRequestToJSON = ConcernDefinitionRequestToJSON;
