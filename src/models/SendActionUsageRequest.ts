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
import type { Identified } from './Identified';
import {
    IdentifiedFromJSON,
    IdentifiedFromJSONTyped,
    IdentifiedToJSON,
} from './Identified';

/**
 * 
 * @export
 * @interface SendActionUsageRequest
 */
export interface SendActionUsageRequest {
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    id?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    atType: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    actionDefinition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    aliasIds?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    behavior?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    chainingFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    declaredName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    declaredShortName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    definition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    differencingType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    directedFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    directedUsage?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    direction?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    documentation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    elementId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    endFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    endOwningType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    feature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    featureMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    featuringType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    importedMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    individualDefinition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    inheritedFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    inheritedMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    input?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    intersectingType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    isAbstract?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    isComposite?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    isConjugated?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    isDerived?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    isEnd?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    isImpliedIncluded?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    isIndividual?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    isLibraryElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    isOrdered?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    isPortion?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    isReadOnly?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    isReference?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    isSufficient?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    isUnique?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    isVariation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    member?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    membership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    multiplicity?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    name?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    nestedAction?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    nestedAllocation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    nestedAnalysisCase?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    nestedAttribute?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    nestedCalculation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    nestedCase?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    nestedConcern?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    nestedConnection?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    nestedConstraint?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    nestedEnumeration?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    nestedFlow?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    nestedInterface?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    nestedItem?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    nestedMetadata?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    nestedOccurrence?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    nestedPart?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    nestedPort?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    nestedReference?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    nestedRendering?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    nestedRequirement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    nestedState?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    nestedTransition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    nestedUsage?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    nestedUseCase?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    nestedVerificationCase?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    nestedView?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    nestedViewpoint?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    occurrenceDefinition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    output?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    ownedAnnotation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    ownedConjugator?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    ownedDifferencing?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    ownedDisjoining?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    ownedElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    ownedEndFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    ownedFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    ownedFeatureChaining?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    ownedFeatureInverting?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    ownedFeatureMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    ownedImport?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    ownedIntersecting?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    ownedMember?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    ownedMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    ownedRedefinition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    ownedReferenceSubsetting?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    ownedRelationship?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    ownedSpecialization?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    ownedSubsetting?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    ownedTypeFeaturing?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    ownedTyping?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    ownedUnioning?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    owner?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    owningDefinition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    owningFeatureMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    owningMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    owningNamespace?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    owningRelationship?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    owningType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    owningUsage?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    parameter?: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof SendActionUsageRequest
     */
    payloadArgument?: Identified;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    portionKind?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    portioningFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    qualifiedName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    receiverArgument?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    senderArgument?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    shortName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    textualRepresentation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    type?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    unioningType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    usage?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    variant?: any | null;
    /**
     * 
     * @type {any}
     * @memberof SendActionUsageRequest
     */
    variantMembership?: any | null;
}

/**
 * Check if a given object implements the SendActionUsageRequest interface.
 */
export function instanceOfSendActionUsageRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function SendActionUsageRequestFromJSON(json: any): SendActionUsageRequest {
    return SendActionUsageRequestFromJSONTyped(json, false);
}

export function SendActionUsageRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SendActionUsageRequest {
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
        'payloadArgument': !exists(json, 'payloadArgument') ? undefined : IdentifiedFromJSON(json['payloadArgument']),
        'portionKind': !exists(json, 'portionKind') ? undefined : json['portionKind'],
        'portioningFeature': !exists(json, 'portioningFeature') ? undefined : json['portioningFeature'],
        'qualifiedName': !exists(json, 'qualifiedName') ? undefined : json['qualifiedName'],
        'receiverArgument': !exists(json, 'receiverArgument') ? undefined : json['receiverArgument'],
        'senderArgument': !exists(json, 'senderArgument') ? undefined : json['senderArgument'],
        'shortName': !exists(json, 'shortName') ? undefined : json['shortName'],
        'textualRepresentation': !exists(json, 'textualRepresentation') ? undefined : json['textualRepresentation'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'unioningType': !exists(json, 'unioningType') ? undefined : json['unioningType'],
        'usage': !exists(json, 'usage') ? undefined : json['usage'],
        'variant': !exists(json, 'variant') ? undefined : json['variant'],
        'variantMembership': !exists(json, 'variantMembership') ? undefined : json['variantMembership'],
    };
}

export function SendActionUsageRequestToJSON(value?: SendActionUsageRequest | null): any {
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
        'payloadArgument': IdentifiedToJSON(value.payloadArgument),
        'portionKind': value.portionKind,
        'portioningFeature': value.portioningFeature,
        'qualifiedName': value.qualifiedName,
        'receiverArgument': value.receiverArgument,
        'senderArgument': value.senderArgument,
        'shortName': value.shortName,
        'textualRepresentation': value.textualRepresentation,
        'type': value.type,
        'unioningType': value.unioningType,
        'usage': value.usage,
        'variant': value.variant,
        'variantMembership': value.variantMembership,
    };
}

