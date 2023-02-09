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
exports.MetadataUsageToJSON = exports.MetadataUsageFromJSONTyped = exports.MetadataUsageFromJSON = exports.instanceOfMetadataUsage = void 0;
/**
 * Check if a given object implements the MetadataUsage interface.
 */
function instanceOfMetadataUsage(value) {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "aliasIds" in value;
    isInstance = isInstance && "annotatedElement" in value;
    isInstance = isInstance && "annotation" in value;
    isInstance = isInstance && "chainingFeature" in value;
    isInstance = isInstance && "declaredName" in value;
    isInstance = isInstance && "declaredShortName" in value;
    isInstance = isInstance && "definition" in value;
    isInstance = isInstance && "differencingType" in value;
    isInstance = isInstance && "directedFeature" in value;
    isInstance = isInstance && "directedUsage" in value;
    isInstance = isInstance && "direction" in value;
    isInstance = isInstance && "documentation" in value;
    isInstance = isInstance && "elementId" in value;
    isInstance = isInstance && "endFeature" in value;
    isInstance = isInstance && "endOwningType" in value;
    isInstance = isInstance && "feature" in value;
    isInstance = isInstance && "featureMembership" in value;
    isInstance = isInstance && "featuringType" in value;
    isInstance = isInstance && "importedMembership" in value;
    isInstance = isInstance && "individualDefinition" in value;
    isInstance = isInstance && "inheritedFeature" in value;
    isInstance = isInstance && "inheritedMembership" in value;
    isInstance = isInstance && "input" in value;
    isInstance = isInstance && "intersectingType" in value;
    isInstance = isInstance && "isAbstract" in value;
    isInstance = isInstance && "isComposite" in value;
    isInstance = isInstance && "isConjugated" in value;
    isInstance = isInstance && "isDerived" in value;
    isInstance = isInstance && "isEnd" in value;
    isInstance = isInstance && "isImpliedIncluded" in value;
    isInstance = isInstance && "isIndividual" in value;
    isInstance = isInstance && "isLibraryElement" in value;
    isInstance = isInstance && "isOrdered" in value;
    isInstance = isInstance && "isPortion" in value;
    isInstance = isInstance && "isReadOnly" in value;
    isInstance = isInstance && "isReference" in value;
    isInstance = isInstance && "isSufficient" in value;
    isInstance = isInstance && "isUnique" in value;
    isInstance = isInstance && "isVariation" in value;
    isInstance = isInstance && "itemDefinition" in value;
    isInstance = isInstance && "member" in value;
    isInstance = isInstance && "membership" in value;
    isInstance = isInstance && "metaclass" in value;
    isInstance = isInstance && "metadataDefinition" in value;
    isInstance = isInstance && "multiplicity" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "nestedAction" in value;
    isInstance = isInstance && "nestedAllocation" in value;
    isInstance = isInstance && "nestedAnalysisCase" in value;
    isInstance = isInstance && "nestedAttribute" in value;
    isInstance = isInstance && "nestedCalculation" in value;
    isInstance = isInstance && "nestedCase" in value;
    isInstance = isInstance && "nestedConcern" in value;
    isInstance = isInstance && "nestedConnection" in value;
    isInstance = isInstance && "nestedConstraint" in value;
    isInstance = isInstance && "nestedEnumeration" in value;
    isInstance = isInstance && "nestedFlow" in value;
    isInstance = isInstance && "nestedInterface" in value;
    isInstance = isInstance && "nestedItem" in value;
    isInstance = isInstance && "nestedMetadata" in value;
    isInstance = isInstance && "nestedOccurrence" in value;
    isInstance = isInstance && "nestedPart" in value;
    isInstance = isInstance && "nestedPort" in value;
    isInstance = isInstance && "nestedReference" in value;
    isInstance = isInstance && "nestedRendering" in value;
    isInstance = isInstance && "nestedRequirement" in value;
    isInstance = isInstance && "nestedState" in value;
    isInstance = isInstance && "nestedTransition" in value;
    isInstance = isInstance && "nestedUsage" in value;
    isInstance = isInstance && "nestedUseCase" in value;
    isInstance = isInstance && "nestedVerificationCase" in value;
    isInstance = isInstance && "nestedView" in value;
    isInstance = isInstance && "nestedViewpoint" in value;
    isInstance = isInstance && "occurrenceDefinition" in value;
    isInstance = isInstance && "output" in value;
    isInstance = isInstance && "ownedAnnotation" in value;
    isInstance = isInstance && "ownedConjugator" in value;
    isInstance = isInstance && "ownedDifferencing" in value;
    isInstance = isInstance && "ownedDisjoining" in value;
    isInstance = isInstance && "ownedElement" in value;
    isInstance = isInstance && "ownedEndFeature" in value;
    isInstance = isInstance && "ownedFeature" in value;
    isInstance = isInstance && "ownedFeatureChaining" in value;
    isInstance = isInstance && "ownedFeatureInverting" in value;
    isInstance = isInstance && "ownedFeatureMembership" in value;
    isInstance = isInstance && "ownedImport" in value;
    isInstance = isInstance && "ownedIntersecting" in value;
    isInstance = isInstance && "ownedMember" in value;
    isInstance = isInstance && "ownedMembership" in value;
    isInstance = isInstance && "ownedRedefinition" in value;
    isInstance = isInstance && "ownedReferenceSubsetting" in value;
    isInstance = isInstance && "ownedRelationship" in value;
    isInstance = isInstance && "ownedSpecialization" in value;
    isInstance = isInstance && "ownedSubsetting" in value;
    isInstance = isInstance && "ownedTypeFeaturing" in value;
    isInstance = isInstance && "ownedTyping" in value;
    isInstance = isInstance && "ownedUnioning" in value;
    isInstance = isInstance && "owner" in value;
    isInstance = isInstance && "owningDefinition" in value;
    isInstance = isInstance && "owningFeatureMembership" in value;
    isInstance = isInstance && "owningMembership" in value;
    isInstance = isInstance && "owningNamespace" in value;
    isInstance = isInstance && "owningRelationship" in value;
    isInstance = isInstance && "owningType" in value;
    isInstance = isInstance && "owningUsage" in value;
    isInstance = isInstance && "portionKind" in value;
    isInstance = isInstance && "portioningFeature" in value;
    isInstance = isInstance && "qualifiedName" in value;
    isInstance = isInstance && "shortName" in value;
    isInstance = isInstance && "textualRepresentation" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "unioningType" in value;
    isInstance = isInstance && "usage" in value;
    isInstance = isInstance && "variant" in value;
    isInstance = isInstance && "variantMembership" in value;
    return isInstance;
}
exports.instanceOfMetadataUsage = instanceOfMetadataUsage;
function MetadataUsageFromJSON(json) {
    return MetadataUsageFromJSONTyped(json, false);
}
exports.MetadataUsageFromJSON = MetadataUsageFromJSON;
function MetadataUsageFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['@id'],
        'atType': json['@type'],
        'aliasIds': json['aliasIds'],
        'annotatedElement': json['annotatedElement'],
        'annotation': json['annotation'],
        'chainingFeature': json['chainingFeature'],
        'declaredName': json['declaredName'],
        'declaredShortName': json['declaredShortName'],
        'definition': json['definition'],
        'differencingType': json['differencingType'],
        'directedFeature': json['directedFeature'],
        'directedUsage': json['directedUsage'],
        'direction': json['direction'],
        'documentation': json['documentation'],
        'elementId': json['elementId'],
        'endFeature': json['endFeature'],
        'endOwningType': json['endOwningType'],
        'feature': json['feature'],
        'featureMembership': json['featureMembership'],
        'featuringType': json['featuringType'],
        'importedMembership': json['importedMembership'],
        'individualDefinition': json['individualDefinition'],
        'inheritedFeature': json['inheritedFeature'],
        'inheritedMembership': json['inheritedMembership'],
        'input': json['input'],
        'intersectingType': json['intersectingType'],
        'isAbstract': json['isAbstract'],
        'isComposite': json['isComposite'],
        'isConjugated': json['isConjugated'],
        'isDerived': json['isDerived'],
        'isEnd': json['isEnd'],
        'isImpliedIncluded': json['isImpliedIncluded'],
        'isIndividual': json['isIndividual'],
        'isLibraryElement': json['isLibraryElement'],
        'isOrdered': json['isOrdered'],
        'isPortion': json['isPortion'],
        'isReadOnly': json['isReadOnly'],
        'isReference': json['isReference'],
        'isSufficient': json['isSufficient'],
        'isUnique': json['isUnique'],
        'isVariation': json['isVariation'],
        'itemDefinition': json['itemDefinition'],
        'member': json['member'],
        'membership': json['membership'],
        'metaclass': json['metaclass'],
        'metadataDefinition': json['metadataDefinition'],
        'multiplicity': json['multiplicity'],
        'name': json['name'],
        'nestedAction': json['nestedAction'],
        'nestedAllocation': json['nestedAllocation'],
        'nestedAnalysisCase': json['nestedAnalysisCase'],
        'nestedAttribute': json['nestedAttribute'],
        'nestedCalculation': json['nestedCalculation'],
        'nestedCase': json['nestedCase'],
        'nestedConcern': json['nestedConcern'],
        'nestedConnection': json['nestedConnection'],
        'nestedConstraint': json['nestedConstraint'],
        'nestedEnumeration': json['nestedEnumeration'],
        'nestedFlow': json['nestedFlow'],
        'nestedInterface': json['nestedInterface'],
        'nestedItem': json['nestedItem'],
        'nestedMetadata': json['nestedMetadata'],
        'nestedOccurrence': json['nestedOccurrence'],
        'nestedPart': json['nestedPart'],
        'nestedPort': json['nestedPort'],
        'nestedReference': json['nestedReference'],
        'nestedRendering': json['nestedRendering'],
        'nestedRequirement': json['nestedRequirement'],
        'nestedState': json['nestedState'],
        'nestedTransition': json['nestedTransition'],
        'nestedUsage': json['nestedUsage'],
        'nestedUseCase': json['nestedUseCase'],
        'nestedVerificationCase': json['nestedVerificationCase'],
        'nestedView': json['nestedView'],
        'nestedViewpoint': json['nestedViewpoint'],
        'occurrenceDefinition': json['occurrenceDefinition'],
        'output': json['output'],
        'ownedAnnotation': json['ownedAnnotation'],
        'ownedConjugator': json['ownedConjugator'],
        'ownedDifferencing': json['ownedDifferencing'],
        'ownedDisjoining': json['ownedDisjoining'],
        'ownedElement': json['ownedElement'],
        'ownedEndFeature': json['ownedEndFeature'],
        'ownedFeature': json['ownedFeature'],
        'ownedFeatureChaining': json['ownedFeatureChaining'],
        'ownedFeatureInverting': json['ownedFeatureInverting'],
        'ownedFeatureMembership': json['ownedFeatureMembership'],
        'ownedImport': json['ownedImport'],
        'ownedIntersecting': json['ownedIntersecting'],
        'ownedMember': json['ownedMember'],
        'ownedMembership': json['ownedMembership'],
        'ownedRedefinition': json['ownedRedefinition'],
        'ownedReferenceSubsetting': json['ownedReferenceSubsetting'],
        'ownedRelationship': json['ownedRelationship'],
        'ownedSpecialization': json['ownedSpecialization'],
        'ownedSubsetting': json['ownedSubsetting'],
        'ownedTypeFeaturing': json['ownedTypeFeaturing'],
        'ownedTyping': json['ownedTyping'],
        'ownedUnioning': json['ownedUnioning'],
        'owner': json['owner'],
        'owningDefinition': json['owningDefinition'],
        'owningFeatureMembership': json['owningFeatureMembership'],
        'owningMembership': json['owningMembership'],
        'owningNamespace': json['owningNamespace'],
        'owningRelationship': json['owningRelationship'],
        'owningType': json['owningType'],
        'owningUsage': json['owningUsage'],
        'portionKind': json['portionKind'],
        'portioningFeature': json['portioningFeature'],
        'qualifiedName': json['qualifiedName'],
        'shortName': json['shortName'],
        'textualRepresentation': json['textualRepresentation'],
        'type': json['type'],
        'unioningType': json['unioningType'],
        'usage': json['usage'],
        'variant': json['variant'],
        'variantMembership': json['variantMembership'],
    };
}
exports.MetadataUsageFromJSONTyped = MetadataUsageFromJSONTyped;
function MetadataUsageToJSON(value) {
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
        'chainingFeature': value.chainingFeature,
        'declaredName': value.declaredName,
        'declaredShortName': value.declaredShortName,
        'definition': value.definition,
        'differencingType': value.differencingType,
        'directedFeature': value.directedFeature,
        'directedUsage': value.directedUsage,
        'direction': value.direction,
        'documentation': value.documentation,
        'elementId': value.elementId,
        'endFeature': value.endFeature,
        'endOwningType': value.endOwningType,
        'feature': value.feature,
        'featureMembership': value.featureMembership,
        'featuringType': value.featuringType,
        'importedMembership': value.importedMembership,
        'individualDefinition': value.individualDefinition,
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
        'member': value.member,
        'membership': value.membership,
        'metaclass': value.metaclass,
        'metadataDefinition': value.metadataDefinition,
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
        'owningRelationship': value.owningRelationship,
        'owningType': value.owningType,
        'owningUsage': value.owningUsage,
        'portionKind': value.portionKind,
        'portioningFeature': value.portioningFeature,
        'qualifiedName': value.qualifiedName,
        'shortName': value.shortName,
        'textualRepresentation': value.textualRepresentation,
        'type': value.type,
        'unioningType': value.unioningType,
        'usage': value.usage,
        'variant': value.variant,
        'variantMembership': value.variantMembership,
    };
}
exports.MetadataUsageToJSON = MetadataUsageToJSON;
