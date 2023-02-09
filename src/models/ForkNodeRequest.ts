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
 * @interface ForkNodeRequest
 */
export interface ForkNodeRequest {
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    id?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    atType: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    actionDefinition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    aliasIds?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    behavior?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    chainingFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    declaredName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    declaredShortName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    definition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    differencingType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    directedFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    directedUsage?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    direction?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    documentation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    elementId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    endFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    endOwningType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    feature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    featureMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    featuringType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    importedMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    individualDefinition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    inheritedFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    inheritedMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    input?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    intersectingType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    isAbstract?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    isComposite?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    isConjugated?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    isDerived?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    isEnd?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    isImpliedIncluded?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    isIndividual?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    isLibraryElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    isOrdered?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    isPortion?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    isReadOnly?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    isReference?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    isSufficient?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    isUnique?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    isVariation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    member?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    membership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    multiplicity?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    name?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    nestedAction?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    nestedAllocation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    nestedAnalysisCase?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    nestedAttribute?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    nestedCalculation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    nestedCase?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    nestedConcern?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    nestedConnection?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    nestedConstraint?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    nestedEnumeration?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    nestedFlow?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    nestedInterface?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    nestedItem?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    nestedMetadata?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    nestedOccurrence?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    nestedPart?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    nestedPort?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    nestedReference?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    nestedRendering?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    nestedRequirement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    nestedState?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    nestedTransition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    nestedUsage?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    nestedUseCase?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    nestedVerificationCase?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    nestedView?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    nestedViewpoint?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    occurrenceDefinition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    output?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    ownedAnnotation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    ownedConjugator?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    ownedDifferencing?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    ownedDisjoining?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    ownedElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    ownedEndFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    ownedFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    ownedFeatureChaining?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    ownedFeatureInverting?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    ownedFeatureMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    ownedImport?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    ownedIntersecting?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    ownedMember?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    ownedMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    ownedRedefinition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    ownedReferenceSubsetting?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    ownedRelationship?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    ownedSpecialization?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    ownedSubsetting?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    ownedTypeFeaturing?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    ownedTyping?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    ownedUnioning?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    owner?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    owningDefinition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    owningFeatureMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    owningMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    owningNamespace?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    owningRelationship?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    owningType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    owningUsage?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    parameter?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    portionKind?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    portioningFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    qualifiedName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    shortName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    textualRepresentation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    type?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    unioningType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    usage?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    variant?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ForkNodeRequest
     */
    variantMembership?: any | null;
}

/**
 * Check if a given object implements the ForkNodeRequest interface.
 */
export function instanceOfForkNodeRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function ForkNodeRequestFromJSON(json: any): ForkNodeRequest {
    return ForkNodeRequestFromJSONTyped(json, false);
}

export function ForkNodeRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ForkNodeRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, '@id') ? undefined : json['@id'],
        'atType': json['@type'],
        'actionDefinition': !exists(json, 'actionDefinition') ? undefined : json['actionDefinition'],
        'aliasIds': !exists(json, 'aliasIds') ? undefined : json['aliasIds'],
        'behavior': !exists(json, 'behavior') ? undefined : json['behavior'],
        'chainingFeature': !exists(json, 'chainingFeature') ? undefined : json['chainingFeature'],
        'declaredName': !exists(json, 'declaredName') ? undefined : json['declaredName'],
        'declaredShortName': !exists(json, 'declaredShortName') ? undefined : json['declaredShortName'],
        'definition': !exists(json, 'definition') ? undefined : json['definition'],
        'differencingType': !exists(json, 'differencingType') ? undefined : json['differencingType'],
        'directedFeature': !exists(json, 'directedFeature') ? undefined : json['directedFeature'],
        'directedUsage': !exists(json, 'directedUsage') ? undefined : json['directedUsage'],
        'direction': !exists(json, 'direction') ? undefined : json['direction'],
        'documentation': !exists(json, 'documentation') ? undefined : json['documentation'],
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
        'endFeature': !exists(json, 'endFeature') ? undefined : json['endFeature'],
        'endOwningType': !exists(json, 'endOwningType') ? undefined : json['endOwningType'],
        'feature': !exists(json, 'feature') ? undefined : json['feature'],
        'featureMembership': !exists(json, 'featureMembership') ? undefined : json['featureMembership'],
        'featuringType': !exists(json, 'featuringType') ? undefined : json['featuringType'],
        'importedMembership': !exists(json, 'importedMembership') ? undefined : json['importedMembership'],
        'individualDefinition': !exists(json, 'individualDefinition') ? undefined : json['individualDefinition'],
        'inheritedFeature': !exists(json, 'inheritedFeature') ? undefined : json['inheritedFeature'],
        'inheritedMembership': !exists(json, 'inheritedMembership') ? undefined : json['inheritedMembership'],
        'input': !exists(json, 'input') ? undefined : json['input'],
        'intersectingType': !exists(json, 'intersectingType') ? undefined : json['intersectingType'],
        'isAbstract': !exists(json, 'isAbstract') ? undefined : json['isAbstract'],
        'isComposite': !exists(json, 'isComposite') ? undefined : json['isComposite'],
        'isConjugated': !exists(json, 'isConjugated') ? undefined : json['isConjugated'],
        'isDerived': !exists(json, 'isDerived') ? undefined : json['isDerived'],
        'isEnd': !exists(json, 'isEnd') ? undefined : json['isEnd'],
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
        'owningRelationship': !exists(json, 'owningRelationship') ? undefined : json['owningRelationship'],
        'owningType': !exists(json, 'owningType') ? undefined : json['owningType'],
        'owningUsage': !exists(json, 'owningUsage') ? undefined : json['owningUsage'],
        'parameter': !exists(json, 'parameter') ? undefined : json['parameter'],
        'portionKind': !exists(json, 'portionKind') ? undefined : json['portionKind'],
        'portioningFeature': !exists(json, 'portioningFeature') ? undefined : json['portioningFeature'],
        'qualifiedName': !exists(json, 'qualifiedName') ? undefined : json['qualifiedName'],
        'shortName': !exists(json, 'shortName') ? undefined : json['shortName'],
        'textualRepresentation': !exists(json, 'textualRepresentation') ? undefined : json['textualRepresentation'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'unioningType': !exists(json, 'unioningType') ? undefined : json['unioningType'],
        'usage': !exists(json, 'usage') ? undefined : json['usage'],
        'variant': !exists(json, 'variant') ? undefined : json['variant'],
        'variantMembership': !exists(json, 'variantMembership') ? undefined : json['variantMembership'],
    };
}

export function ForkNodeRequestToJSON(value?: ForkNodeRequest | null): any {
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
        'behavior': value.behavior,
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
        'parameter': value.parameter,
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

