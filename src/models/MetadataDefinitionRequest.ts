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
/**
 * 
 * @export
 * @interface MetadataDefinitionRequest
 */
export interface MetadataDefinitionRequest {
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    id?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    atType: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    aliasIds?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    declaredName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    declaredShortName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    differencingType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    directedFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    directedUsage?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    documentation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    elementId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    endFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    feature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    featureMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    importedMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    inheritedFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    inheritedMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    input?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    intersectingType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    isAbstract?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    isConjugated?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    isImpliedIncluded?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    isIndividual?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    isLibraryElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    isSufficient?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    isVariation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    lifeClass?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    member?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    membership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    multiplicity?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    name?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    output?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    ownedAction?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    ownedAllocation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    ownedAnalysisCase?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    ownedAnnotation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    ownedAttribute?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    ownedCalculation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    ownedCase?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    ownedConcern?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    ownedConjugator?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    ownedConnection?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    ownedConstraint?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    ownedDifferencing?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    ownedDisjoining?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    ownedElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    ownedEndFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    ownedEnumeration?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    ownedFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    ownedFeatureMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    ownedFlow?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    ownedImport?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    ownedInterface?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    ownedIntersecting?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    ownedItem?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    ownedMember?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    ownedMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    ownedMetadata?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    ownedOccurrence?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    ownedPart?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    ownedPort?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    ownedReference?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    ownedRelationship?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    ownedRendering?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    ownedRequirement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    ownedSpecialization?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    ownedState?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    ownedSubclassification?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    ownedTransition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    ownedUnioning?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    ownedUsage?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    ownedUseCase?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    ownedVerificationCase?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    ownedView?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    ownedViewpoint?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    owner?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    owningMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    owningNamespace?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    owningRelationship?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    qualifiedName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    shortName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    textualRepresentation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    unioningType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    usage?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    variant?: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataDefinitionRequest
     */
    variantMembership?: any | null;
}

/**
 * Check if a given object implements the MetadataDefinitionRequest interface.
 */
export function instanceOfMetadataDefinitionRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function MetadataDefinitionRequestFromJSON(json: any): MetadataDefinitionRequest {
    return MetadataDefinitionRequestFromJSONTyped(json, false);
}

export function MetadataDefinitionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetadataDefinitionRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, '@id') ? undefined : json['@id'],
        'atType': json['@type'],
        'aliasIds': !exists(json, 'aliasIds') ? undefined : json['aliasIds'],
        'declaredName': !exists(json, 'declaredName') ? undefined : json['declaredName'],
        'declaredShortName': !exists(json, 'declaredShortName') ? undefined : json['declaredShortName'],
        'differencingType': !exists(json, 'differencingType') ? undefined : json['differencingType'],
        'directedFeature': !exists(json, 'directedFeature') ? undefined : json['directedFeature'],
        'directedUsage': !exists(json, 'directedUsage') ? undefined : json['directedUsage'],
        'documentation': !exists(json, 'documentation') ? undefined : json['documentation'],
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
        'endFeature': !exists(json, 'endFeature') ? undefined : json['endFeature'],
        'feature': !exists(json, 'feature') ? undefined : json['feature'],
        'featureMembership': !exists(json, 'featureMembership') ? undefined : json['featureMembership'],
        'importedMembership': !exists(json, 'importedMembership') ? undefined : json['importedMembership'],
        'inheritedFeature': !exists(json, 'inheritedFeature') ? undefined : json['inheritedFeature'],
        'inheritedMembership': !exists(json, 'inheritedMembership') ? undefined : json['inheritedMembership'],
        'input': !exists(json, 'input') ? undefined : json['input'],
        'intersectingType': !exists(json, 'intersectingType') ? undefined : json['intersectingType'],
        'isAbstract': !exists(json, 'isAbstract') ? undefined : json['isAbstract'],
        'isConjugated': !exists(json, 'isConjugated') ? undefined : json['isConjugated'],
        'isImpliedIncluded': !exists(json, 'isImpliedIncluded') ? undefined : json['isImpliedIncluded'],
        'isIndividual': !exists(json, 'isIndividual') ? undefined : json['isIndividual'],
        'isLibraryElement': !exists(json, 'isLibraryElement') ? undefined : json['isLibraryElement'],
        'isSufficient': !exists(json, 'isSufficient') ? undefined : json['isSufficient'],
        'isVariation': !exists(json, 'isVariation') ? undefined : json['isVariation'],
        'lifeClass': !exists(json, 'lifeClass') ? undefined : json['lifeClass'],
        'member': !exists(json, 'member') ? undefined : json['member'],
        'membership': !exists(json, 'membership') ? undefined : json['membership'],
        'multiplicity': !exists(json, 'multiplicity') ? undefined : json['multiplicity'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'output': !exists(json, 'output') ? undefined : json['output'],
        'ownedAction': !exists(json, 'ownedAction') ? undefined : json['ownedAction'],
        'ownedAllocation': !exists(json, 'ownedAllocation') ? undefined : json['ownedAllocation'],
        'ownedAnalysisCase': !exists(json, 'ownedAnalysisCase') ? undefined : json['ownedAnalysisCase'],
        'ownedAnnotation': !exists(json, 'ownedAnnotation') ? undefined : json['ownedAnnotation'],
        'ownedAttribute': !exists(json, 'ownedAttribute') ? undefined : json['ownedAttribute'],
        'ownedCalculation': !exists(json, 'ownedCalculation') ? undefined : json['ownedCalculation'],
        'ownedCase': !exists(json, 'ownedCase') ? undefined : json['ownedCase'],
        'ownedConcern': !exists(json, 'ownedConcern') ? undefined : json['ownedConcern'],
        'ownedConjugator': !exists(json, 'ownedConjugator') ? undefined : json['ownedConjugator'],
        'ownedConnection': !exists(json, 'ownedConnection') ? undefined : json['ownedConnection'],
        'ownedConstraint': !exists(json, 'ownedConstraint') ? undefined : json['ownedConstraint'],
        'ownedDifferencing': !exists(json, 'ownedDifferencing') ? undefined : json['ownedDifferencing'],
        'ownedDisjoining': !exists(json, 'ownedDisjoining') ? undefined : json['ownedDisjoining'],
        'ownedElement': !exists(json, 'ownedElement') ? undefined : json['ownedElement'],
        'ownedEndFeature': !exists(json, 'ownedEndFeature') ? undefined : json['ownedEndFeature'],
        'ownedEnumeration': !exists(json, 'ownedEnumeration') ? undefined : json['ownedEnumeration'],
        'ownedFeature': !exists(json, 'ownedFeature') ? undefined : json['ownedFeature'],
        'ownedFeatureMembership': !exists(json, 'ownedFeatureMembership') ? undefined : json['ownedFeatureMembership'],
        'ownedFlow': !exists(json, 'ownedFlow') ? undefined : json['ownedFlow'],
        'ownedImport': !exists(json, 'ownedImport') ? undefined : json['ownedImport'],
        'ownedInterface': !exists(json, 'ownedInterface') ? undefined : json['ownedInterface'],
        'ownedIntersecting': !exists(json, 'ownedIntersecting') ? undefined : json['ownedIntersecting'],
        'ownedItem': !exists(json, 'ownedItem') ? undefined : json['ownedItem'],
        'ownedMember': !exists(json, 'ownedMember') ? undefined : json['ownedMember'],
        'ownedMembership': !exists(json, 'ownedMembership') ? undefined : json['ownedMembership'],
        'ownedMetadata': !exists(json, 'ownedMetadata') ? undefined : json['ownedMetadata'],
        'ownedOccurrence': !exists(json, 'ownedOccurrence') ? undefined : json['ownedOccurrence'],
        'ownedPart': !exists(json, 'ownedPart') ? undefined : json['ownedPart'],
        'ownedPort': !exists(json, 'ownedPort') ? undefined : json['ownedPort'],
        'ownedReference': !exists(json, 'ownedReference') ? undefined : json['ownedReference'],
        'ownedRelationship': !exists(json, 'ownedRelationship') ? undefined : json['ownedRelationship'],
        'ownedRendering': !exists(json, 'ownedRendering') ? undefined : json['ownedRendering'],
        'ownedRequirement': !exists(json, 'ownedRequirement') ? undefined : json['ownedRequirement'],
        'ownedSpecialization': !exists(json, 'ownedSpecialization') ? undefined : json['ownedSpecialization'],
        'ownedState': !exists(json, 'ownedState') ? undefined : json['ownedState'],
        'ownedSubclassification': !exists(json, 'ownedSubclassification') ? undefined : json['ownedSubclassification'],
        'ownedTransition': !exists(json, 'ownedTransition') ? undefined : json['ownedTransition'],
        'ownedUnioning': !exists(json, 'ownedUnioning') ? undefined : json['ownedUnioning'],
        'ownedUsage': !exists(json, 'ownedUsage') ? undefined : json['ownedUsage'],
        'ownedUseCase': !exists(json, 'ownedUseCase') ? undefined : json['ownedUseCase'],
        'ownedVerificationCase': !exists(json, 'ownedVerificationCase') ? undefined : json['ownedVerificationCase'],
        'ownedView': !exists(json, 'ownedView') ? undefined : json['ownedView'],
        'ownedViewpoint': !exists(json, 'ownedViewpoint') ? undefined : json['ownedViewpoint'],
        'owner': !exists(json, 'owner') ? undefined : json['owner'],
        'owningMembership': !exists(json, 'owningMembership') ? undefined : json['owningMembership'],
        'owningNamespace': !exists(json, 'owningNamespace') ? undefined : json['owningNamespace'],
        'owningRelationship': !exists(json, 'owningRelationship') ? undefined : json['owningRelationship'],
        'qualifiedName': !exists(json, 'qualifiedName') ? undefined : json['qualifiedName'],
        'shortName': !exists(json, 'shortName') ? undefined : json['shortName'],
        'textualRepresentation': !exists(json, 'textualRepresentation') ? undefined : json['textualRepresentation'],
        'unioningType': !exists(json, 'unioningType') ? undefined : json['unioningType'],
        'usage': !exists(json, 'usage') ? undefined : json['usage'],
        'variant': !exists(json, 'variant') ? undefined : json['variant'],
        'variantMembership': !exists(json, 'variantMembership') ? undefined : json['variantMembership'],
    };
}

export function MetadataDefinitionRequestToJSON(value?: MetadataDefinitionRequest | null): any {
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
        'differencingType': value.differencingType,
        'directedFeature': value.directedFeature,
        'directedUsage': value.directedUsage,
        'documentation': value.documentation,
        'elementId': value.elementId,
        'endFeature': value.endFeature,
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
        'qualifiedName': value.qualifiedName,
        'shortName': value.shortName,
        'textualRepresentation': value.textualRepresentation,
        'unioningType': value.unioningType,
        'usage': value.usage,
        'variant': value.variant,
        'variantMembership': value.variantMembership,
    };
}
