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
 * @interface JoinNodeRequest
 */
export interface JoinNodeRequest {
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    id?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    atType: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    actionDefinition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    aliasIds?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    behavior?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    chainingFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    declaredName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    declaredShortName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    definition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    differencingType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    directedFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    directedUsage?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    direction?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    documentation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    elementId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    endFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    endOwningType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    feature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    featureMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    featuringType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    importedMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    individualDefinition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    inheritedFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    inheritedMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    input?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    intersectingType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    isAbstract?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    isComposite?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    isConjugated?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    isDerived?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    isEnd?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    isImpliedIncluded?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    isIndividual?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    isLibraryElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    isOrdered?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    isPortion?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    isReadOnly?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    isReference?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    isSufficient?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    isUnique?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    isVariation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    member?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    membership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    multiplicity?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    name?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    nestedAction?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    nestedAllocation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    nestedAnalysisCase?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    nestedAttribute?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    nestedCalculation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    nestedCase?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    nestedConcern?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    nestedConnection?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    nestedConstraint?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    nestedEnumeration?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    nestedFlow?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    nestedInterface?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    nestedItem?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    nestedMetadata?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    nestedOccurrence?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    nestedPart?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    nestedPort?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    nestedReference?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    nestedRendering?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    nestedRequirement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    nestedState?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    nestedTransition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    nestedUsage?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    nestedUseCase?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    nestedVerificationCase?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    nestedView?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    nestedViewpoint?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    occurrenceDefinition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    output?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    ownedAnnotation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    ownedConjugator?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    ownedDifferencing?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    ownedDisjoining?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    ownedElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    ownedEndFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    ownedFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    ownedFeatureChaining?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    ownedFeatureInverting?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    ownedFeatureMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    ownedImport?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    ownedIntersecting?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    ownedMember?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    ownedMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    ownedRedefinition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    ownedReferenceSubsetting?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    ownedRelationship?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    ownedSpecialization?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    ownedSubsetting?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    ownedTypeFeaturing?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    ownedTyping?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    ownedUnioning?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    owner?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    owningDefinition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    owningFeatureMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    owningMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    owningNamespace?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    owningRelationship?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    owningType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    owningUsage?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    parameter?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    portionKind?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    portioningFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    qualifiedName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    shortName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    textualRepresentation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    type?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    unioningType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    usage?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    variant?: any | null;
    /**
     * 
     * @type {any}
     * @memberof JoinNodeRequest
     */
    variantMembership?: any | null;
}

/**
 * Check if a given object implements the JoinNodeRequest interface.
 */
export function instanceOfJoinNodeRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function JoinNodeRequestFromJSON(json: any): JoinNodeRequest {
    return JoinNodeRequestFromJSONTyped(json, false);
}

export function JoinNodeRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): JoinNodeRequest {
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

export function JoinNodeRequestToJSON(value?: JoinNodeRequest | null): any {
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

