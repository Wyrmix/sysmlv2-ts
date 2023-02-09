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
 * @interface FlowConnectionDefinitionRequest
 */
export interface FlowConnectionDefinitionRequest {
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    id?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    atType: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    action?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    aliasIds?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    associationEnd?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    connectionEnd?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    declaredName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    declaredShortName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    differencingType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    directedFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    directedUsage?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    documentation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    elementId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    endFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    feature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    featureMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    importedMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    inheritedFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    inheritedMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    input?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    intersectingType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    isAbstract?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    isConjugated?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    isImplied?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    isImpliedIncluded?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    isIndividual?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    isLibraryElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    isSufficient?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    isVariation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    lifeClass?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    member?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    membership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    multiplicity?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    name?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    output?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    ownedAction?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    ownedAllocation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    ownedAnalysisCase?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    ownedAnnotation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    ownedAttribute?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    ownedCalculation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    ownedCase?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    ownedConcern?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    ownedConjugator?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    ownedConnection?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    ownedConstraint?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    ownedDifferencing?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    ownedDisjoining?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    ownedElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    ownedEndFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    ownedEnumeration?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    ownedFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    ownedFeatureMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    ownedFlow?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    ownedImport?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    ownedInterface?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    ownedIntersecting?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    ownedItem?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    ownedMember?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    ownedMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    ownedMetadata?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    ownedOccurrence?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    ownedPart?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    ownedPort?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    ownedReference?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    ownedRelatedElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    ownedRelationship?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    ownedRendering?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    ownedRequirement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    ownedSpecialization?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    ownedState?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    ownedSubclassification?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    ownedTransition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    ownedUnioning?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    ownedUsage?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    ownedUseCase?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    ownedVerificationCase?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    ownedView?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    ownedViewpoint?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    owner?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    owningMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    owningNamespace?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    owningRelatedElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    owningRelationship?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    parameter?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    qualifiedName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    relatedElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    relatedType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    shortName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    source?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    sourceType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    step?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    target?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    targetType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    textualRepresentation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    unioningType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    usage?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    variant?: any | null;
    /**
     * 
     * @type {any}
     * @memberof FlowConnectionDefinitionRequest
     */
    variantMembership?: any | null;
}

/**
 * Check if a given object implements the FlowConnectionDefinitionRequest interface.
 */
export function instanceOfFlowConnectionDefinitionRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function FlowConnectionDefinitionRequestFromJSON(json: any): FlowConnectionDefinitionRequest {
    return FlowConnectionDefinitionRequestFromJSONTyped(json, false);
}

export function FlowConnectionDefinitionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlowConnectionDefinitionRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, '@id') ? undefined : json['@id'],
        'atType': json['@type'],
        'action': !exists(json, 'action') ? undefined : json['action'],
        'aliasIds': !exists(json, 'aliasIds') ? undefined : json['aliasIds'],
        'associationEnd': !exists(json, 'associationEnd') ? undefined : json['associationEnd'],
        'connectionEnd': !exists(json, 'connectionEnd') ? undefined : json['connectionEnd'],
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
        'isImplied': !exists(json, 'isImplied') ? undefined : json['isImplied'],
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
        'ownedRelatedElement': !exists(json, 'ownedRelatedElement') ? undefined : json['ownedRelatedElement'],
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
        'owningRelatedElement': !exists(json, 'owningRelatedElement') ? undefined : json['owningRelatedElement'],
        'owningRelationship': !exists(json, 'owningRelationship') ? undefined : json['owningRelationship'],
        'parameter': !exists(json, 'parameter') ? undefined : json['parameter'],
        'qualifiedName': !exists(json, 'qualifiedName') ? undefined : json['qualifiedName'],
        'relatedElement': !exists(json, 'relatedElement') ? undefined : json['relatedElement'],
        'relatedType': !exists(json, 'relatedType') ? undefined : json['relatedType'],
        'shortName': !exists(json, 'shortName') ? undefined : json['shortName'],
        'source': !exists(json, 'source') ? undefined : json['source'],
        'sourceType': !exists(json, 'sourceType') ? undefined : json['sourceType'],
        'step': !exists(json, 'step') ? undefined : json['step'],
        'target': !exists(json, 'target') ? undefined : json['target'],
        'targetType': !exists(json, 'targetType') ? undefined : json['targetType'],
        'textualRepresentation': !exists(json, 'textualRepresentation') ? undefined : json['textualRepresentation'],
        'unioningType': !exists(json, 'unioningType') ? undefined : json['unioningType'],
        'usage': !exists(json, 'usage') ? undefined : json['usage'],
        'variant': !exists(json, 'variant') ? undefined : json['variant'],
        'variantMembership': !exists(json, 'variantMembership') ? undefined : json['variantMembership'],
    };
}

export function FlowConnectionDefinitionRequestToJSON(value?: FlowConnectionDefinitionRequest | null): any {
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
        'aliasIds': value.aliasIds,
        'associationEnd': value.associationEnd,
        'connectionEnd': value.connectionEnd,
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
        'isImplied': value.isImplied,
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
        'ownedRelatedElement': value.ownedRelatedElement,
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
        'owningRelatedElement': value.owningRelatedElement,
        'owningRelationship': value.owningRelationship,
        'parameter': value.parameter,
        'qualifiedName': value.qualifiedName,
        'relatedElement': value.relatedElement,
        'relatedType': value.relatedType,
        'shortName': value.shortName,
        'source': value.source,
        'sourceType': value.sourceType,
        'step': value.step,
        'target': value.target,
        'targetType': value.targetType,
        'textualRepresentation': value.textualRepresentation,
        'unioningType': value.unioningType,
        'usage': value.usage,
        'variant': value.variant,
        'variantMembership': value.variantMembership,
    };
}
