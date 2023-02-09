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
 * @interface ViewDefinitionRequest
 */
export interface ViewDefinitionRequest {
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    id?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    atType: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    aliasIds?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    declaredName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    declaredShortName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    differencingType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    directedFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    directedUsage?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    documentation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    elementId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    endFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    feature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    featureMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    importedMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    inheritedFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    inheritedMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    input?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    intersectingType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    isAbstract?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    isConjugated?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    isImpliedIncluded?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    isIndividual?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    isLibraryElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    isSufficient?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    isVariation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    lifeClass?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    member?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    membership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    multiplicity?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    name?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    output?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    ownedAction?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    ownedAllocation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    ownedAnalysisCase?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    ownedAnnotation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    ownedAttribute?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    ownedCalculation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    ownedCase?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    ownedConcern?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    ownedConjugator?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    ownedConnection?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    ownedConstraint?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    ownedDifferencing?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    ownedDisjoining?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    ownedElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    ownedEndFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    ownedEnumeration?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    ownedFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    ownedFeatureMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    ownedFlow?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    ownedImport?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    ownedInterface?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    ownedIntersecting?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    ownedItem?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    ownedMember?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    ownedMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    ownedMetadata?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    ownedOccurrence?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    ownedPart?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    ownedPort?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    ownedReference?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    ownedRelationship?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    ownedRendering?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    ownedRequirement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    ownedSpecialization?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    ownedState?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    ownedSubclassification?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    ownedTransition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    ownedUnioning?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    ownedUsage?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    ownedUseCase?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    ownedVerificationCase?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    ownedView?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    ownedViewpoint?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    owner?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    owningMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    owningNamespace?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    owningRelationship?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    qualifiedName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    satisfiedViewpoint?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    shortName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    textualRepresentation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    unioningType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    usage?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    variant?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    variantMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    view?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    viewCondition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewDefinitionRequest
     */
    viewRendering?: any | null;
}

/**
 * Check if a given object implements the ViewDefinitionRequest interface.
 */
export function instanceOfViewDefinitionRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function ViewDefinitionRequestFromJSON(json: any): ViewDefinitionRequest {
    return ViewDefinitionRequestFromJSONTyped(json, false);
}

export function ViewDefinitionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ViewDefinitionRequest {
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
        'satisfiedViewpoint': !exists(json, 'satisfiedViewpoint') ? undefined : json['satisfiedViewpoint'],
        'shortName': !exists(json, 'shortName') ? undefined : json['shortName'],
        'textualRepresentation': !exists(json, 'textualRepresentation') ? undefined : json['textualRepresentation'],
        'unioningType': !exists(json, 'unioningType') ? undefined : json['unioningType'],
        'usage': !exists(json, 'usage') ? undefined : json['usage'],
        'variant': !exists(json, 'variant') ? undefined : json['variant'],
        'variantMembership': !exists(json, 'variantMembership') ? undefined : json['variantMembership'],
        'view': !exists(json, 'view') ? undefined : json['view'],
        'viewCondition': !exists(json, 'viewCondition') ? undefined : json['viewCondition'],
        'viewRendering': !exists(json, 'viewRendering') ? undefined : json['viewRendering'],
    };
}

export function ViewDefinitionRequestToJSON(value?: ViewDefinitionRequest | null): any {
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
        'satisfiedViewpoint': value.satisfiedViewpoint,
        'shortName': value.shortName,
        'textualRepresentation': value.textualRepresentation,
        'unioningType': value.unioningType,
        'usage': value.usage,
        'variant': value.variant,
        'variantMembership': value.variantMembership,
        'view': value.view,
        'viewCondition': value.viewCondition,
        'viewRendering': value.viewRendering,
    };
}

