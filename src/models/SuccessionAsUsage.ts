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
 * @interface SuccessionAsUsage
 */
export interface SuccessionAsUsage {
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    id: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    atType: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    aliasIds: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    association: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    chainingFeature: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    connectorEnd: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    declaredName: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    declaredShortName: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    definition: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    differencingType: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    directedFeature: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    directedUsage: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    direction: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    documentation: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    effectStep: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    elementId: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    endFeature: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    endOwningType: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    feature: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    featureMembership: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    featuringType: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    guardExpression: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    importedMembership: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    inheritedFeature: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    inheritedMembership: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    input: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    intersectingType: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    isAbstract: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    isComposite: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    isConjugated: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    isDerived: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    isDirected: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    isEnd: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    isImplied: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    isImpliedIncluded: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    isLibraryElement: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    isOrdered: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    isPortion: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    isReadOnly: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    isReference: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    isSufficient: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    isUnique: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    isVariation: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    member: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    membership: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    multiplicity: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    name: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    nestedAction: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    nestedAllocation: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    nestedAnalysisCase: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    nestedAttribute: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    nestedCalculation: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    nestedCase: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    nestedConcern: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    nestedConnection: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    nestedConstraint: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    nestedEnumeration: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    nestedFlow: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    nestedInterface: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    nestedItem: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    nestedMetadata: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    nestedOccurrence: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    nestedPart: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    nestedPort: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    nestedReference: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    nestedRendering: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    nestedRequirement: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    nestedState: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    nestedTransition: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    nestedUsage: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    nestedUseCase: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    nestedVerificationCase: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    nestedView: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    nestedViewpoint: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    output: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    ownedAnnotation: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    ownedConjugator: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    ownedDifferencing: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    ownedDisjoining: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    ownedElement: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    ownedEndFeature: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    ownedFeature: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    ownedFeatureChaining: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    ownedFeatureInverting: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    ownedFeatureMembership: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    ownedImport: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    ownedIntersecting: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    ownedMember: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    ownedMembership: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    ownedRedefinition: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    ownedReferenceSubsetting: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    ownedRelatedElement: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    ownedRelationship: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    ownedSpecialization: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    ownedSubsetting: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    ownedTypeFeaturing: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    ownedTyping: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    ownedUnioning: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    owner: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    owningDefinition: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    owningFeatureMembership: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    owningMembership: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    owningNamespace: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    owningRelatedElement: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    owningRelationship: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    owningType: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    owningUsage: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    qualifiedName: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    relatedElement: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    relatedFeature: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    shortName: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    source: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    sourceFeature: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    target: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    targetFeature: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    textualRepresentation: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    transitionStep: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    triggerStep: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
     type: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    unioningType: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    usage: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    variant: any | null;
    /**
     * 
     * @type {any}
     * @memberof SuccessionAsUsage
     */
    variantMembership: any | null;
}

/**
 * Check if a given object implements the SuccessionAsUsage interface.
 */
export function instanceOfSuccessionAsUsage(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "aliasIds" in value;
    isInstance = isInstance && "association" in value;
    isInstance = isInstance && "chainingFeature" in value;
    isInstance = isInstance && "connectorEnd" in value;
    isInstance = isInstance && "declaredName" in value;
    isInstance = isInstance && "declaredShortName" in value;
    isInstance = isInstance && "definition" in value;
    isInstance = isInstance && "differencingType" in value;
    isInstance = isInstance && "directedFeature" in value;
    isInstance = isInstance && "directedUsage" in value;
    isInstance = isInstance && "direction" in value;
    isInstance = isInstance && "documentation" in value;
    isInstance = isInstance && "effectStep" in value;
    isInstance = isInstance && "elementId" in value;
    isInstance = isInstance && "endFeature" in value;
    isInstance = isInstance && "endOwningType" in value;
    isInstance = isInstance && "feature" in value;
    isInstance = isInstance && "featureMembership" in value;
    isInstance = isInstance && "featuringType" in value;
    isInstance = isInstance && "guardExpression" in value;
    isInstance = isInstance && "importedMembership" in value;
    isInstance = isInstance && "inheritedFeature" in value;
    isInstance = isInstance && "inheritedMembership" in value;
    isInstance = isInstance && "input" in value;
    isInstance = isInstance && "intersectingType" in value;
    isInstance = isInstance && "isAbstract" in value;
    isInstance = isInstance && "isComposite" in value;
    isInstance = isInstance && "isConjugated" in value;
    isInstance = isInstance && "isDerived" in value;
    isInstance = isInstance && "isDirected" in value;
    isInstance = isInstance && "isEnd" in value;
    isInstance = isInstance && "isImplied" in value;
    isInstance = isInstance && "isImpliedIncluded" in value;
    isInstance = isInstance && "isLibraryElement" in value;
    isInstance = isInstance && "isOrdered" in value;
    isInstance = isInstance && "isPortion" in value;
    isInstance = isInstance && "isReadOnly" in value;
    isInstance = isInstance && "isReference" in value;
    isInstance = isInstance && "isSufficient" in value;
    isInstance = isInstance && "isUnique" in value;
    isInstance = isInstance && "isVariation" in value;
    isInstance = isInstance && "member" in value;
    isInstance = isInstance && "membership" in value;
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
    isInstance = isInstance && "ownedRelatedElement" in value;
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
    isInstance = isInstance && "owningRelatedElement" in value;
    isInstance = isInstance && "owningRelationship" in value;
    isInstance = isInstance && "owningType" in value;
    isInstance = isInstance && "owningUsage" in value;
    isInstance = isInstance && "qualifiedName" in value;
    isInstance = isInstance && "relatedElement" in value;
    isInstance = isInstance && "relatedFeature" in value;
    isInstance = isInstance && "shortName" in value;
    isInstance = isInstance && "source" in value;
    isInstance = isInstance && "sourceFeature" in value;
    isInstance = isInstance && "target" in value;
    isInstance = isInstance && "targetFeature" in value;
    isInstance = isInstance && "textualRepresentation" in value;
    isInstance = isInstance && "transitionStep" in value;
    isInstance = isInstance && "triggerStep" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "unioningType" in value;
    isInstance = isInstance && "usage" in value;
    isInstance = isInstance && "variant" in value;
    isInstance = isInstance && "variantMembership" in value;

    return isInstance;
}

export function SuccessionAsUsageFromJSON(json: any): SuccessionAsUsage {
    return SuccessionAsUsageFromJSONTyped(json, false);
}

export function SuccessionAsUsageFromJSONTyped(json: any, ignoreDiscriminator: boolean): SuccessionAsUsage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['@id'],
        'atType': json['@type'],
        'aliasIds': json['aliasIds'],
        'association': json['association'],
        'chainingFeature': json['chainingFeature'],
        'connectorEnd': json['connectorEnd'],
        'declaredName': json['declaredName'],
        'declaredShortName': json['declaredShortName'],
        'definition': json['definition'],
        'differencingType': json['differencingType'],
        'directedFeature': json['directedFeature'],
        'directedUsage': json['directedUsage'],
        'direction': json['direction'],
        'documentation': json['documentation'],
        'effectStep': json['effectStep'],
        'elementId': json['elementId'],
        'endFeature': json['endFeature'],
        'endOwningType': json['endOwningType'],
        'feature': json['feature'],
        'featureMembership': json['featureMembership'],
        'featuringType': json['featuringType'],
        'guardExpression': json['guardExpression'],
        'importedMembership': json['importedMembership'],
        'inheritedFeature': json['inheritedFeature'],
        'inheritedMembership': json['inheritedMembership'],
        'input': json['input'],
        'intersectingType': json['intersectingType'],
        'isAbstract': json['isAbstract'],
        'isComposite': json['isComposite'],
        'isConjugated': json['isConjugated'],
        'isDerived': json['isDerived'],
        'isDirected': json['isDirected'],
        'isEnd': json['isEnd'],
        'isImplied': json['isImplied'],
        'isImpliedIncluded': json['isImpliedIncluded'],
        'isLibraryElement': json['isLibraryElement'],
        'isOrdered': json['isOrdered'],
        'isPortion': json['isPortion'],
        'isReadOnly': json['isReadOnly'],
        'isReference': json['isReference'],
        'isSufficient': json['isSufficient'],
        'isUnique': json['isUnique'],
        'isVariation': json['isVariation'],
        'member': json['member'],
        'membership': json['membership'],
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
        'ownedRelatedElement': json['ownedRelatedElement'],
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
        'owningRelatedElement': json['owningRelatedElement'],
        'owningRelationship': json['owningRelationship'],
        'owningType': json['owningType'],
        'owningUsage': json['owningUsage'],
        'qualifiedName': json['qualifiedName'],
        'relatedElement': json['relatedElement'],
        'relatedFeature': json['relatedFeature'],
        'shortName': json['shortName'],
        'source': json['source'],
        'sourceFeature': json['sourceFeature'],
        'target': json['target'],
        'targetFeature': json['targetFeature'],
        'textualRepresentation': json['textualRepresentation'],
        'transitionStep': json['transitionStep'],
        'triggerStep': json['triggerStep'],
        'type': json['type'],
        'unioningType': json['unioningType'],
        'usage': json['usage'],
        'variant': json['variant'],
        'variantMembership': json['variantMembership'],
    };
}

export function SuccessionAsUsageToJSON(value?: SuccessionAsUsage | null): any {
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
        'association': value.association,
        'chainingFeature': value.chainingFeature,
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
        'guardExpression': value.guardExpression,
        'importedMembership': value.importedMembership,
        'inheritedFeature': value.inheritedFeature,
        'inheritedMembership': value.inheritedMembership,
        'input': value.input,
        'intersectingType': value.intersectingType,
        'isAbstract': value.isAbstract,
        'isComposite': value.isComposite,
        'isConjugated': value.isConjugated,
        'isDerived': value.isDerived,
        'isDirected': value.isDirected,
        'isEnd': value.isEnd,
        'isImplied': value.isImplied,
        'isImpliedIncluded': value.isImpliedIncluded,
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
        'qualifiedName': value.qualifiedName,
        'relatedElement': value.relatedElement,
        'relatedFeature': value.relatedFeature,
        'shortName': value.shortName,
        'source': value.source,
        'sourceFeature': value.sourceFeature,
        'target': value.target,
        'targetFeature': value.targetFeature,
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
