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
exports.SuccessionFlowConnectionUsageRequestToJSON = exports.SuccessionFlowConnectionUsageRequestFromJSONTyped = exports.SuccessionFlowConnectionUsageRequestFromJSON = exports.instanceOfSuccessionFlowConnectionUsageRequest = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the SuccessionFlowConnectionUsageRequest interface.
 */
function instanceOfSuccessionFlowConnectionUsageRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
exports.instanceOfSuccessionFlowConnectionUsageRequest = instanceOfSuccessionFlowConnectionUsageRequest;
function SuccessionFlowConnectionUsageRequestFromJSON(json) {
    return SuccessionFlowConnectionUsageRequestFromJSONTyped(json, false);
}
exports.SuccessionFlowConnectionUsageRequestFromJSON = SuccessionFlowConnectionUsageRequestFromJSON;
function SuccessionFlowConnectionUsageRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !(0, runtime_1.exists)(json, '@id') ? undefined : json['@id'],
        'atType': json['@type'],
        'actionDefinition': !(0, runtime_1.exists)(json, 'actionDefinition') ? undefined : json['actionDefinition'],
        'aliasIds': !(0, runtime_1.exists)(json, 'aliasIds') ? undefined : json['aliasIds'],
        'association': !(0, runtime_1.exists)(json, 'association') ? undefined : json['association'],
        'behavior': !(0, runtime_1.exists)(json, 'behavior') ? undefined : json['behavior'],
        'chainingFeature': !(0, runtime_1.exists)(json, 'chainingFeature') ? undefined : json['chainingFeature'],
        'connectionDefinition': !(0, runtime_1.exists)(json, 'connectionDefinition') ? undefined : json['connectionDefinition'],
        'connectorEnd': !(0, runtime_1.exists)(json, 'connectorEnd') ? undefined : json['connectorEnd'],
        'declaredName': !(0, runtime_1.exists)(json, 'declaredName') ? undefined : json['declaredName'],
        'declaredShortName': !(0, runtime_1.exists)(json, 'declaredShortName') ? undefined : json['declaredShortName'],
        'definition': !(0, runtime_1.exists)(json, 'definition') ? undefined : json['definition'],
        'differencingType': !(0, runtime_1.exists)(json, 'differencingType') ? undefined : json['differencingType'],
        'directedFeature': !(0, runtime_1.exists)(json, 'directedFeature') ? undefined : json['directedFeature'],
        'directedUsage': !(0, runtime_1.exists)(json, 'directedUsage') ? undefined : json['directedUsage'],
        'direction': !(0, runtime_1.exists)(json, 'direction') ? undefined : json['direction'],
        'documentation': !(0, runtime_1.exists)(json, 'documentation') ? undefined : json['documentation'],
        'effectStep': !(0, runtime_1.exists)(json, 'effectStep') ? undefined : json['effectStep'],
        'elementId': !(0, runtime_1.exists)(json, 'elementId') ? undefined : json['elementId'],
        'endFeature': !(0, runtime_1.exists)(json, 'endFeature') ? undefined : json['endFeature'],
        'endOwningType': !(0, runtime_1.exists)(json, 'endOwningType') ? undefined : json['endOwningType'],
        'feature': !(0, runtime_1.exists)(json, 'feature') ? undefined : json['feature'],
        'featureMembership': !(0, runtime_1.exists)(json, 'featureMembership') ? undefined : json['featureMembership'],
        'featuringType': !(0, runtime_1.exists)(json, 'featuringType') ? undefined : json['featuringType'],
        'flowConnectionDefinition': !(0, runtime_1.exists)(json, 'flowConnectionDefinition') ? undefined : json['flowConnectionDefinition'],
        'guardExpression': !(0, runtime_1.exists)(json, 'guardExpression') ? undefined : json['guardExpression'],
        'importedMembership': !(0, runtime_1.exists)(json, 'importedMembership') ? undefined : json['importedMembership'],
        'individualDefinition': !(0, runtime_1.exists)(json, 'individualDefinition') ? undefined : json['individualDefinition'],
        'inheritedFeature': !(0, runtime_1.exists)(json, 'inheritedFeature') ? undefined : json['inheritedFeature'],
        'inheritedMembership': !(0, runtime_1.exists)(json, 'inheritedMembership') ? undefined : json['inheritedMembership'],
        'input': !(0, runtime_1.exists)(json, 'input') ? undefined : json['input'],
        'interaction': !(0, runtime_1.exists)(json, 'interaction') ? undefined : json['interaction'],
        'intersectingType': !(0, runtime_1.exists)(json, 'intersectingType') ? undefined : json['intersectingType'],
        'isAbstract': !(0, runtime_1.exists)(json, 'isAbstract') ? undefined : json['isAbstract'],
        'isComposite': !(0, runtime_1.exists)(json, 'isComposite') ? undefined : json['isComposite'],
        'isConjugated': !(0, runtime_1.exists)(json, 'isConjugated') ? undefined : json['isConjugated'],
        'isDerived': !(0, runtime_1.exists)(json, 'isDerived') ? undefined : json['isDerived'],
        'isDirected': !(0, runtime_1.exists)(json, 'isDirected') ? undefined : json['isDirected'],
        'isEnd': !(0, runtime_1.exists)(json, 'isEnd') ? undefined : json['isEnd'],
        'isImplied': !(0, runtime_1.exists)(json, 'isImplied') ? undefined : json['isImplied'],
        'isImpliedIncluded': !(0, runtime_1.exists)(json, 'isImpliedIncluded') ? undefined : json['isImpliedIncluded'],
        'isIndividual': !(0, runtime_1.exists)(json, 'isIndividual') ? undefined : json['isIndividual'],
        'isLibraryElement': !(0, runtime_1.exists)(json, 'isLibraryElement') ? undefined : json['isLibraryElement'],
        'isOrdered': !(0, runtime_1.exists)(json, 'isOrdered') ? undefined : json['isOrdered'],
        'isPortion': !(0, runtime_1.exists)(json, 'isPortion') ? undefined : json['isPortion'],
        'isReadOnly': !(0, runtime_1.exists)(json, 'isReadOnly') ? undefined : json['isReadOnly'],
        'isReference': !(0, runtime_1.exists)(json, 'isReference') ? undefined : json['isReference'],
        'isSufficient': !(0, runtime_1.exists)(json, 'isSufficient') ? undefined : json['isSufficient'],
        'isUnique': !(0, runtime_1.exists)(json, 'isUnique') ? undefined : json['isUnique'],
        'isVariation': !(0, runtime_1.exists)(json, 'isVariation') ? undefined : json['isVariation'],
        'itemDefinition': !(0, runtime_1.exists)(json, 'itemDefinition') ? undefined : json['itemDefinition'],
        'itemFeature': !(0, runtime_1.exists)(json, 'itemFeature') ? undefined : json['itemFeature'],
        'itemFlowEnd': !(0, runtime_1.exists)(json, 'itemFlowEnd') ? undefined : json['itemFlowEnd'],
        'itemType': !(0, runtime_1.exists)(json, 'itemType') ? undefined : json['itemType'],
        'member': !(0, runtime_1.exists)(json, 'member') ? undefined : json['member'],
        'membership': !(0, runtime_1.exists)(json, 'membership') ? undefined : json['membership'],
        'multiplicity': !(0, runtime_1.exists)(json, 'multiplicity') ? undefined : json['multiplicity'],
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'nestedAction': !(0, runtime_1.exists)(json, 'nestedAction') ? undefined : json['nestedAction'],
        'nestedAllocation': !(0, runtime_1.exists)(json, 'nestedAllocation') ? undefined : json['nestedAllocation'],
        'nestedAnalysisCase': !(0, runtime_1.exists)(json, 'nestedAnalysisCase') ? undefined : json['nestedAnalysisCase'],
        'nestedAttribute': !(0, runtime_1.exists)(json, 'nestedAttribute') ? undefined : json['nestedAttribute'],
        'nestedCalculation': !(0, runtime_1.exists)(json, 'nestedCalculation') ? undefined : json['nestedCalculation'],
        'nestedCase': !(0, runtime_1.exists)(json, 'nestedCase') ? undefined : json['nestedCase'],
        'nestedConcern': !(0, runtime_1.exists)(json, 'nestedConcern') ? undefined : json['nestedConcern'],
        'nestedConnection': !(0, runtime_1.exists)(json, 'nestedConnection') ? undefined : json['nestedConnection'],
        'nestedConstraint': !(0, runtime_1.exists)(json, 'nestedConstraint') ? undefined : json['nestedConstraint'],
        'nestedEnumeration': !(0, runtime_1.exists)(json, 'nestedEnumeration') ? undefined : json['nestedEnumeration'],
        'nestedFlow': !(0, runtime_1.exists)(json, 'nestedFlow') ? undefined : json['nestedFlow'],
        'nestedInterface': !(0, runtime_1.exists)(json, 'nestedInterface') ? undefined : json['nestedInterface'],
        'nestedItem': !(0, runtime_1.exists)(json, 'nestedItem') ? undefined : json['nestedItem'],
        'nestedMetadata': !(0, runtime_1.exists)(json, 'nestedMetadata') ? undefined : json['nestedMetadata'],
        'nestedOccurrence': !(0, runtime_1.exists)(json, 'nestedOccurrence') ? undefined : json['nestedOccurrence'],
        'nestedPart': !(0, runtime_1.exists)(json, 'nestedPart') ? undefined : json['nestedPart'],
        'nestedPort': !(0, runtime_1.exists)(json, 'nestedPort') ? undefined : json['nestedPort'],
        'nestedReference': !(0, runtime_1.exists)(json, 'nestedReference') ? undefined : json['nestedReference'],
        'nestedRendering': !(0, runtime_1.exists)(json, 'nestedRendering') ? undefined : json['nestedRendering'],
        'nestedRequirement': !(0, runtime_1.exists)(json, 'nestedRequirement') ? undefined : json['nestedRequirement'],
        'nestedState': !(0, runtime_1.exists)(json, 'nestedState') ? undefined : json['nestedState'],
        'nestedTransition': !(0, runtime_1.exists)(json, 'nestedTransition') ? undefined : json['nestedTransition'],
        'nestedUsage': !(0, runtime_1.exists)(json, 'nestedUsage') ? undefined : json['nestedUsage'],
        'nestedUseCase': !(0, runtime_1.exists)(json, 'nestedUseCase') ? undefined : json['nestedUseCase'],
        'nestedVerificationCase': !(0, runtime_1.exists)(json, 'nestedVerificationCase') ? undefined : json['nestedVerificationCase'],
        'nestedView': !(0, runtime_1.exists)(json, 'nestedView') ? undefined : json['nestedView'],
        'nestedViewpoint': !(0, runtime_1.exists)(json, 'nestedViewpoint') ? undefined : json['nestedViewpoint'],
        'occurrenceDefinition': !(0, runtime_1.exists)(json, 'occurrenceDefinition') ? undefined : json['occurrenceDefinition'],
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
        'ownedRelatedElement': !(0, runtime_1.exists)(json, 'ownedRelatedElement') ? undefined : json['ownedRelatedElement'],
        'ownedRelationship': !(0, runtime_1.exists)(json, 'ownedRelationship') ? undefined : json['ownedRelationship'],
        'ownedSpecialization': !(0, runtime_1.exists)(json, 'ownedSpecialization') ? undefined : json['ownedSpecialization'],
        'ownedSubsetting': !(0, runtime_1.exists)(json, 'ownedSubsetting') ? undefined : json['ownedSubsetting'],
        'ownedTypeFeaturing': !(0, runtime_1.exists)(json, 'ownedTypeFeaturing') ? undefined : json['ownedTypeFeaturing'],
        'ownedTyping': !(0, runtime_1.exists)(json, 'ownedTyping') ? undefined : json['ownedTyping'],
        'ownedUnioning': !(0, runtime_1.exists)(json, 'ownedUnioning') ? undefined : json['ownedUnioning'],
        'owner': !(0, runtime_1.exists)(json, 'owner') ? undefined : json['owner'],
        'owningDefinition': !(0, runtime_1.exists)(json, 'owningDefinition') ? undefined : json['owningDefinition'],
        'owningFeatureMembership': !(0, runtime_1.exists)(json, 'owningFeatureMembership') ? undefined : json['owningFeatureMembership'],
        'owningMembership': !(0, runtime_1.exists)(json, 'owningMembership') ? undefined : json['owningMembership'],
        'owningNamespace': !(0, runtime_1.exists)(json, 'owningNamespace') ? undefined : json['owningNamespace'],
        'owningRelatedElement': !(0, runtime_1.exists)(json, 'owningRelatedElement') ? undefined : json['owningRelatedElement'],
        'owningRelationship': !(0, runtime_1.exists)(json, 'owningRelationship') ? undefined : json['owningRelationship'],
        'owningType': !(0, runtime_1.exists)(json, 'owningType') ? undefined : json['owningType'],
        'owningUsage': !(0, runtime_1.exists)(json, 'owningUsage') ? undefined : json['owningUsage'],
        'parameter': !(0, runtime_1.exists)(json, 'parameter') ? undefined : json['parameter'],
        'partDefinition': !(0, runtime_1.exists)(json, 'partDefinition') ? undefined : json['partDefinition'],
        'portionKind': !(0, runtime_1.exists)(json, 'portionKind') ? undefined : json['portionKind'],
        'portioningFeature': !(0, runtime_1.exists)(json, 'portioningFeature') ? undefined : json['portioningFeature'],
        'qualifiedName': !(0, runtime_1.exists)(json, 'qualifiedName') ? undefined : json['qualifiedName'],
        'relatedElement': !(0, runtime_1.exists)(json, 'relatedElement') ? undefined : json['relatedElement'],
        'relatedFeature': !(0, runtime_1.exists)(json, 'relatedFeature') ? undefined : json['relatedFeature'],
        'shortName': !(0, runtime_1.exists)(json, 'shortName') ? undefined : json['shortName'],
        'source': !(0, runtime_1.exists)(json, 'source') ? undefined : json['source'],
        'sourceFeature': !(0, runtime_1.exists)(json, 'sourceFeature') ? undefined : json['sourceFeature'],
        'sourceOutputFeature': !(0, runtime_1.exists)(json, 'sourceOutputFeature') ? undefined : json['sourceOutputFeature'],
        'target': !(0, runtime_1.exists)(json, 'target') ? undefined : json['target'],
        'targetFeature': !(0, runtime_1.exists)(json, 'targetFeature') ? undefined : json['targetFeature'],
        'targetInputFeature': !(0, runtime_1.exists)(json, 'targetInputFeature') ? undefined : json['targetInputFeature'],
        'textualRepresentation': !(0, runtime_1.exists)(json, 'textualRepresentation') ? undefined : json['textualRepresentation'],
        'transitionStep': !(0, runtime_1.exists)(json, 'transitionStep') ? undefined : json['transitionStep'],
        'triggerStep': !(0, runtime_1.exists)(json, 'triggerStep') ? undefined : json['triggerStep'],
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : json['type'],
        'unioningType': !(0, runtime_1.exists)(json, 'unioningType') ? undefined : json['unioningType'],
        'usage': !(0, runtime_1.exists)(json, 'usage') ? undefined : json['usage'],
        'variant': !(0, runtime_1.exists)(json, 'variant') ? undefined : json['variant'],
        'variantMembership': !(0, runtime_1.exists)(json, 'variantMembership') ? undefined : json['variantMembership'],
    };
}
exports.SuccessionFlowConnectionUsageRequestFromJSONTyped = SuccessionFlowConnectionUsageRequestFromJSONTyped;
function SuccessionFlowConnectionUsageRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        '@id': value.id,
        '@type': value.atType,
        'actionDefinition': value.actionDefinition,
        'aliasIds': value.aliasIds,
        'association': value.association,
        'behavior': value.behavior,
        'chainingFeature': value.chainingFeature,
        'connectionDefinition': value.connectionDefinition,
        'connectorEnd': value.connectorEnd,
        'declaredName': value.declaredName,
        'declaredShortName': value.declaredShortName,
        'definition': value.definition,
        'differencingType': value.differencingType,
        'directedFeature': value.directedFeature,
        'directedUsage': value.directedUsage,
        'direction': value.direction,
        'documentation': value.documentation,
        'effectStep': value.effectStep,
        'elementId': value.elementId,
        'endFeature': value.endFeature,
        'endOwningType': value.endOwningType,
        'feature': value.feature,
        'featureMembership': value.featureMembership,
        'featuringType': value.featuringType,
        'flowConnectionDefinition': value.flowConnectionDefinition,
        'guardExpression': value.guardExpression,
        'importedMembership': value.importedMembership,
        'individualDefinition': value.individualDefinition,
        'inheritedFeature': value.inheritedFeature,
        'inheritedMembership': value.inheritedMembership,
        'input': value.input,
        'interaction': value.interaction,
        'intersectingType': value.intersectingType,
        'isAbstract': value.isAbstract,
        'isComposite': value.isComposite,
        'isConjugated': value.isConjugated,
        'isDerived': value.isDerived,
        'isDirected': value.isDirected,
        'isEnd': value.isEnd,
        'isImplied': value.isImplied,
        'isImpliedIncluded': value.isImpliedIncluded,
        'isIndividual': value.isIndividual,
        'isLibraryElement': value.isLibraryElement,
        'isOrdered': value.isOrdered,
        'isPortion': value.isPortion,
        'isReadOnly': value.isReadOnly,
        'isReference': value.isReference,
        'isSufficient': value.isSufficient,
        'isUnique': value.isUnique,
        'isVariation': value.isVariation,
        'itemDefinition': value.itemDefinition,
        'itemFeature': value.itemFeature,
        'itemFlowEnd': value.itemFlowEnd,
        'itemType': value.itemType,
        'member': value.member,
        'membership': value.membership,
        'multiplicity': value.multiplicity,
        'name': value.name,
        'nestedAction': value.nestedAction,
        'nestedAllocation': value.nestedAllocation,
        'nestedAnalysisCase': value.nestedAnalysisCase,
        'nestedAttribute': value.nestedAttribute,
        'nestedCalculation': value.nestedCalculation,
        'nestedCase': value.nestedCase,
        'nestedConcern': value.nestedConcern,
        'nestedConnection': value.nestedConnection,
        'nestedConstraint': value.nestedConstraint,
        'nestedEnumeration': value.nestedEnumeration,
        'nestedFlow': value.nestedFlow,
        'nestedInterface': value.nestedInterface,
        'nestedItem': value.nestedItem,
        'nestedMetadata': value.nestedMetadata,
        'nestedOccurrence': value.nestedOccurrence,
        'nestedPart': value.nestedPart,
        'nestedPort': value.nestedPort,
        'nestedReference': value.nestedReference,
        'nestedRendering': value.nestedRendering,
        'nestedRequirement': value.nestedRequirement,
        'nestedState': value.nestedState,
        'nestedTransition': value.nestedTransition,
        'nestedUsage': value.nestedUsage,
        'nestedUseCase': value.nestedUseCase,
        'nestedVerificationCase': value.nestedVerificationCase,
        'nestedView': value.nestedView,
        'nestedViewpoint': value.nestedViewpoint,
        'occurrenceDefinition': value.occurrenceDefinition,
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
        'ownedRelatedElement': value.ownedRelatedElement,
        'ownedRelationship': value.ownedRelationship,
        'ownedSpecialization': value.ownedSpecialization,
        'ownedSubsetting': value.ownedSubsetting,
        'ownedTypeFeaturing': value.ownedTypeFeaturing,
        'ownedTyping': value.ownedTyping,
        'ownedUnioning': value.ownedUnioning,
        'owner': value.owner,
        'owningDefinition': value.owningDefinition,
        'owningFeatureMembership': value.owningFeatureMembership,
        'owningMembership': value.owningMembership,
        'owningNamespace': value.owningNamespace,
        'owningRelatedElement': value.owningRelatedElement,
        'owningRelationship': value.owningRelationship,
        'owningType': value.owningType,
        'owningUsage': value.owningUsage,
        'parameter': value.parameter,
        'partDefinition': value.partDefinition,
        'portionKind': value.portionKind,
        'portioningFeature': value.portioningFeature,
        'qualifiedName': value.qualifiedName,
        'relatedElement': value.relatedElement,
        'relatedFeature': value.relatedFeature,
        'shortName': value.shortName,
        'source': value.source,
        'sourceFeature': value.sourceFeature,
        'sourceOutputFeature': value.sourceOutputFeature,
        'target': value.target,
        'targetFeature': value.targetFeature,
        'targetInputFeature': value.targetInputFeature,
        'textualRepresentation': value.textualRepresentation,
        'transitionStep': value.transitionStep,
        'triggerStep': value.triggerStep,
        'type': value.type,
        'unioningType': value.unioningType,
        'usage': value.usage,
        'variant': value.variant,
        'variantMembership': value.variantMembership,
    };
}
exports.SuccessionFlowConnectionUsageRequestToJSON = SuccessionFlowConnectionUsageRequestToJSON;
