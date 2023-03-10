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
 * @interface SuccessionFlowConnectionUsageRequest
 */
export interface SuccessionFlowConnectionUsageRequest {
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    id?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    atType: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    actionDefinition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    aliasIds?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    association?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    behavior?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    chainingFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    connectionDefinition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    connectorEnd?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    declaredName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    declaredShortName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    definition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    differencingType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    directedFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    directedUsage?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    direction?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    documentation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    effectStep?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    elementId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    endFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    endOwningType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    feature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    featureMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    featuringType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    flowConnectionDefinition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    guardExpression?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    importedMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    individualDefinition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    inheritedFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    inheritedMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    input?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    interaction?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    intersectingType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    isAbstract?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    isComposite?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    isConjugated?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    isDerived?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    isDirected?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    isEnd?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    isImplied?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    isImpliedIncluded?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    isIndividual?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    isLibraryElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    isOrdered?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    isPortion?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    isReadOnly?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    isReference?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    isSufficient?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    isUnique?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    isVariation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    itemDefinition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    itemFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    itemFlowEnd?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    itemType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    member?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    membership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    multiplicity?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    name?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    nestedAction?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    nestedAllocation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    nestedAnalysisCase?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    nestedAttribute?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    nestedCalculation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    nestedCase?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    nestedConcern?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    nestedConnection?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    nestedConstraint?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    nestedEnumeration?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    nestedFlow?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    nestedInterface?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    nestedItem?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    nestedMetadata?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    nestedOccurrence?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    nestedPart?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    nestedPort?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    nestedReference?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    nestedRendering?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    nestedRequirement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    nestedState?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    nestedTransition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    nestedUsage?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    nestedUseCase?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    nestedVerificationCase?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    nestedView?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    nestedViewpoint?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    occurrenceDefinition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    output?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    ownedAnnotation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    ownedConjugator?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    ownedDifferencing?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    ownedDisjoining?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    ownedElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    ownedEndFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    ownedFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    ownedFeatureChaining?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    ownedFeatureInverting?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    ownedFeatureMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    ownedImport?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    ownedIntersecting?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    ownedMember?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    ownedMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    ownedRedefinition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    ownedReferenceSubsetting?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    ownedRelatedElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    ownedRelationship?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    ownedSpecialization?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    ownedSubsetting?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    ownedTypeFeaturing?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    ownedTyping?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    ownedUnioning?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    owner?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    owningDefinition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    owningFeatureMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    owningMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    owningNamespace?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    owningRelatedElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    owningRelationship?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    owningType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    owningUsage?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    parameter?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    partDefinition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    portionKind?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    portioningFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    qualifiedName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    relatedElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    relatedFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    shortName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    source?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    sourceFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    sourceOutputFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    target?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    targetFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    targetInputFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    textualRepresentation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    transitionStep?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    triggerStep?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    type?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    unioningType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    usage?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    variant?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionFlowConnectionUsageRequest
     */
    variantMembership?: any | null;
}

/**
 * Check if a given object implements the SuccessionFlowConnectionUsageRequest interface.
 */
export function instanceOfSuccessionFlowConnectionUsageRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function SuccessionFlowConnectionUsageRequestFromJSON(json: any): SuccessionFlowConnectionUsageRequest {
    return SuccessionFlowConnectionUsageRequestFromJSONTyped(json, false);
}

export function SuccessionFlowConnectionUsageRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SuccessionFlowConnectionUsageRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, '@id') ? undefined : json['@id'],
        'atType': json['@type'],
        'actionDefinition': !exists(json, 'actionDefinition') ? undefined : json['actionDefinition'],
        'aliasIds': !exists(json, 'aliasIds') ? undefined : json['aliasIds'],
        'association': !exists(json, 'association') ? undefined : json['association'],
        'behavior': !exists(json, 'behavior') ? undefined : json['behavior'],
        'chainingFeature': !exists(json, 'chainingFeature') ? undefined : json['chainingFeature'],
        'connectionDefinition': !exists(json, 'connectionDefinition') ? undefined : json['connectionDefinition'],
        'connectorEnd': !exists(json, 'connectorEnd') ? undefined : json['connectorEnd'],
        'declaredName': !exists(json, 'declaredName') ? undefined : json['declaredName'],
        'declaredShortName': !exists(json, 'declaredShortName') ? undefined : json['declaredShortName'],
        'definition': !exists(json, 'definition') ? undefined : json['definition'],
        'differencingType': !exists(json, 'differencingType') ? undefined : json['differencingType'],
        'directedFeature': !exists(json, 'directedFeature') ? undefined : json['directedFeature'],
        'directedUsage': !exists(json, 'directedUsage') ? undefined : json['directedUsage'],
        'direction': !exists(json, 'direction') ? undefined : json['direction'],
        'documentation': !exists(json, 'documentation') ? undefined : json['documentation'],
        'effectStep': !exists(json, 'effectStep') ? undefined : json['effectStep'],
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
        'endFeature': !exists(json, 'endFeature') ? undefined : json['endFeature'],
        'endOwningType': !exists(json, 'endOwningType') ? undefined : json['endOwningType'],
        'feature': !exists(json, 'feature') ? undefined : json['feature'],
        'featureMembership': !exists(json, 'featureMembership') ? undefined : json['featureMembership'],
        'featuringType': !exists(json, 'featuringType') ? undefined : json['featuringType'],
        'flowConnectionDefinition': !exists(json, 'flowConnectionDefinition') ? undefined : json['flowConnectionDefinition'],
        'guardExpression': !exists(json, 'guardExpression') ? undefined : json['guardExpression'],
        'importedMembership': !exists(json, 'importedMembership') ? undefined : json['importedMembership'],
        'individualDefinition': !exists(json, 'individualDefinition') ? undefined : json['individualDefinition'],
        'inheritedFeature': !exists(json, 'inheritedFeature') ? undefined : json['inheritedFeature'],
        'inheritedMembership': !exists(json, 'inheritedMembership') ? undefined : json['inheritedMembership'],
        'input': !exists(json, 'input') ? undefined : json['input'],
        'interaction': !exists(json, 'interaction') ? undefined : json['interaction'],
        'intersectingType': !exists(json, 'intersectingType') ? undefined : json['intersectingType'],
        'isAbstract': !exists(json, 'isAbstract') ? undefined : json['isAbstract'],
        'isComposite': !exists(json, 'isComposite') ? undefined : json['isComposite'],
        'isConjugated': !exists(json, 'isConjugated') ? undefined : json['isConjugated'],
        'isDerived': !exists(json, 'isDerived') ? undefined : json['isDerived'],
        'isDirected': !exists(json, 'isDirected') ? undefined : json['isDirected'],
        'isEnd': !exists(json, 'isEnd') ? undefined : json['isEnd'],
        'isImplied': !exists(json, 'isImplied') ? undefined : json['isImplied'],
        'isImpliedIncluded': !exists(json, 'isImpliedIncluded') ? undefined : json['isImpliedIncluded'],
        'isIndividual': !exists(json, 'isIndividual') ? undefined : json['isIndividual'],
        'isLibraryElement': !exists(json, 'isLibraryElement') ? undefined : json['isLibraryElement'],
        'isOrdered': !exists(json, 'isOrdered') ? undefined : json['isOrdered'],
        'isPortion': !exists(json, 'isPortion') ? undefined : json['isPortion'],
        'isReadOnly': !exists(json, 'isReadOnly') ? undefined : json['isReadOnly'],
        'isReference': !exists(json, 'isReference') ? undefined : json['isReference'],
        'isSufficient': !exists(json, 'isSufficient') ? undefined : json['isSufficient'],
        'isUnique': !exists(json, 'isUnique') ? undefined : json['isUnique'],
        'isVariation': !exists(json, 'isVariation') ? undefined : json['isVariation'],
        'itemDefinition': !exists(json, 'itemDefinition') ? undefined : json['itemDefinition'],
        'itemFeature': !exists(json, 'itemFeature') ? undefined : json['itemFeature'],
        'itemFlowEnd': !exists(json, 'itemFlowEnd') ? undefined : json['itemFlowEnd'],
        'itemType': !exists(json, 'itemType') ? undefined : json['itemType'],
        'member': !exists(json, 'member') ? undefined : json['member'],
        'membership': !exists(json, 'membership') ? undefined : json['membership'],
        'multiplicity': !exists(json, 'multiplicity') ? undefined : json['multiplicity'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'nestedAction': !exists(json, 'nestedAction') ? undefined : json['nestedAction'],
        'nestedAllocation': !exists(json, 'nestedAllocation') ? undefined : json['nestedAllocation'],
        'nestedAnalysisCase': !exists(json, 'nestedAnalysisCase') ? undefined : json['nestedAnalysisCase'],
        'nestedAttribute': !exists(json, 'nestedAttribute') ? undefined : json['nestedAttribute'],
        'nestedCalculation': !exists(json, 'nestedCalculation') ? undefined : json['nestedCalculation'],
        'nestedCase': !exists(json, 'nestedCase') ? undefined : json['nestedCase'],
        'nestedConcern': !exists(json, 'nestedConcern') ? undefined : json['nestedConcern'],
        'nestedConnection': !exists(json, 'nestedConnection') ? undefined : json['nestedConnection'],
        'nestedConstraint': !exists(json, 'nestedConstraint') ? undefined : json['nestedConstraint'],
        'nestedEnumeration': !exists(json, 'nestedEnumeration') ? undefined : json['nestedEnumeration'],
        'nestedFlow': !exists(json, 'nestedFlow') ? undefined : json['nestedFlow'],
        'nestedInterface': !exists(json, 'nestedInterface') ? undefined : json['nestedInterface'],
        'nestedItem': !exists(json, 'nestedItem') ? undefined : json['nestedItem'],
        'nestedMetadata': !exists(json, 'nestedMetadata') ? undefined : json['nestedMetadata'],
        'nestedOccurrence': !exists(json, 'nestedOccurrence') ? undefined : json['nestedOccurrence'],
        'nestedPart': !exists(json, 'nestedPart') ? undefined : json['nestedPart'],
        'nestedPort': !exists(json, 'nestedPort') ? undefined : json['nestedPort'],
        'nestedReference': !exists(json, 'nestedReference') ? undefined : json['nestedReference'],
        'nestedRendering': !exists(json, 'nestedRendering') ? undefined : json['nestedRendering'],
        'nestedRequirement': !exists(json, 'nestedRequirement') ? undefined : json['nestedRequirement'],
        'nestedState': !exists(json, 'nestedState') ? undefined : json['nestedState'],
        'nestedTransition': !exists(json, 'nestedTransition') ? undefined : json['nestedTransition'],
        'nestedUsage': !exists(json, 'nestedUsage') ? undefined : json['nestedUsage'],
        'nestedUseCase': !exists(json, 'nestedUseCase') ? undefined : json['nestedUseCase'],
        'nestedVerificationCase': !exists(json, 'nestedVerificationCase') ? undefined : json['nestedVerificationCase'],
        'nestedView': !exists(json, 'nestedView') ? undefined : json['nestedView'],
        'nestedViewpoint': !exists(json, 'nestedViewpoint') ? undefined : json['nestedViewpoint'],
        'occurrenceDefinition': !exists(json, 'occurrenceDefinition') ? undefined : json['occurrenceDefinition'],
        'output': !exists(json, 'output') ? undefined : json['output'],
        'ownedAnnotation': !exists(json, 'ownedAnnotation') ? undefined : json['ownedAnnotation'],
        'ownedConjugator': !exists(json, 'ownedConjugator') ? undefined : json['ownedConjugator'],
        'ownedDifferencing': !exists(json, 'ownedDifferencing') ? undefined : json['ownedDifferencing'],
        'ownedDisjoining': !exists(json, 'ownedDisjoining') ? undefined : json['ownedDisjoining'],
        'ownedElement': !exists(json, 'ownedElement') ? undefined : json['ownedElement'],
        'ownedEndFeature': !exists(json, 'ownedEndFeature') ? undefined : json['ownedEndFeature'],
        'ownedFeature': !exists(json, 'ownedFeature') ? undefined : json['ownedFeature'],
        'ownedFeatureChaining': !exists(json, 'ownedFeatureChaining') ? undefined : json['ownedFeatureChaining'],
        'ownedFeatureInverting': !exists(json, 'ownedFeatureInverting') ? undefined : json['ownedFeatureInverting'],
        'ownedFeatureMembership': !exists(json, 'ownedFeatureMembership') ? undefined : json['ownedFeatureMembership'],
        'ownedImport': !exists(json, 'ownedImport') ? undefined : json['ownedImport'],
        'ownedIntersecting': !exists(json, 'ownedIntersecting') ? undefined : json['ownedIntersecting'],
        'ownedMember': !exists(json, 'ownedMember') ? undefined : json['ownedMember'],
        'ownedMembership': !exists(json, 'ownedMembership') ? undefined : json['ownedMembership'],
        'ownedRedefinition': !exists(json, 'ownedRedefinition') ? undefined : json['ownedRedefinition'],
        'ownedReferenceSubsetting': !exists(json, 'ownedReferenceSubsetting') ? undefined : json['ownedReferenceSubsetting'],
        'ownedRelatedElement': !exists(json, 'ownedRelatedElement') ? undefined : json['ownedRelatedElement'],
        'ownedRelationship': !exists(json, 'ownedRelationship') ? undefined : json['ownedRelationship'],
        'ownedSpecialization': !exists(json, 'ownedSpecialization') ? undefined : json['ownedSpecialization'],
        'ownedSubsetting': !exists(json, 'ownedSubsetting') ? undefined : json['ownedSubsetting'],
        'ownedTypeFeaturing': !exists(json, 'ownedTypeFeaturing') ? undefined : json['ownedTypeFeaturing'],
        'ownedTyping': !exists(json, 'ownedTyping') ? undefined : json['ownedTyping'],
        'ownedUnioning': !exists(json, 'ownedUnioning') ? undefined : json['ownedUnioning'],
        'owner': !exists(json, 'owner') ? undefined : json['owner'],
        'owningDefinition': !exists(json, 'owningDefinition') ? undefined : json['owningDefinition'],
        'owningFeatureMembership': !exists(json, 'owningFeatureMembership') ? undefined : json['owningFeatureMembership'],
        'owningMembership': !exists(json, 'owningMembership') ? undefined : json['owningMembership'],
        'owningNamespace': !exists(json, 'owningNamespace') ? undefined : json['owningNamespace'],
        'owningRelatedElement': !exists(json, 'owningRelatedElement') ? undefined : json['owningRelatedElement'],
        'owningRelationship': !exists(json, 'owningRelationship') ? undefined : json['owningRelationship'],
        'owningType': !exists(json, 'owningType') ? undefined : json['owningType'],
        'owningUsage': !exists(json, 'owningUsage') ? undefined : json['owningUsage'],
        'parameter': !exists(json, 'parameter') ? undefined : json['parameter'],
        'partDefinition': !exists(json, 'partDefinition') ? undefined : json['partDefinition'],
        'portionKind': !exists(json, 'portionKind') ? undefined : json['portionKind'],
        'portioningFeature': !exists(json, 'portioningFeature') ? undefined : json['portioningFeature'],
        'qualifiedName': !exists(json, 'qualifiedName') ? undefined : json['qualifiedName'],
        'relatedElement': !exists(json, 'relatedElement') ? undefined : json['relatedElement'],
        'relatedFeature': !exists(json, 'relatedFeature') ? undefined : json['relatedFeature'],
        'shortName': !exists(json, 'shortName') ? undefined : json['shortName'],
        'source': !exists(json, 'source') ? undefined : json['source'],
        'sourceFeature': !exists(json, 'sourceFeature') ? undefined : json['sourceFeature'],
        'sourceOutputFeature': !exists(json, 'sourceOutputFeature') ? undefined : json['sourceOutputFeature'],
        'target': !exists(json, 'target') ? undefined : json['target'],
        'targetFeature': !exists(json, 'targetFeature') ? undefined : json['targetFeature'],
        'targetInputFeature': !exists(json, 'targetInputFeature') ? undefined : json['targetInputFeature'],
        'textualRepresentation': !exists(json, 'textualRepresentation') ? undefined : json['textualRepresentation'],
        'transitionStep': !exists(json, 'transitionStep') ? undefined : json['transitionStep'],
        'triggerStep': !exists(json, 'triggerStep') ? undefined : json['triggerStep'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'unioningType': !exists(json, 'unioningType') ? undefined : json['unioningType'],
        'usage': !exists(json, 'usage') ? undefined : json['usage'],
        'variant': !exists(json, 'variant') ? undefined : json['variant'],
        'variantMembership': !exists(json, 'variantMembership') ? undefined : json['variantMembership'],
    };
}

export function SuccessionFlowConnectionUsageRequestToJSON(value?: SuccessionFlowConnectionUsageRequest | null): any {
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

