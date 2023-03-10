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
 * @interface InterfaceUsage
 */
export interface InterfaceUsage {
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    id: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    atType: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    aliasIds: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    association: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    chainingFeature: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    connectionDefinition: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    connectorEnd: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    declaredName: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    declaredShortName: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    definition: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    differencingType: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    directedFeature: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    directedUsage: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    direction: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    documentation: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    elementId: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    endFeature: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    endOwningType: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    feature: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    featureMembership: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    featuringType: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    importedMembership: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    individualDefinition: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    inheritedFeature: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    inheritedMembership: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    input: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    interfaceDefinition: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    intersectingType: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    isAbstract: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    isComposite: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    isConjugated: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    isDerived: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    isDirected: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    isEnd: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    isImplied: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    isImpliedIncluded: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    isIndividual: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    isLibraryElement: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    isOrdered: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    isPortion: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    isReadOnly: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    isReference: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    isSufficient: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    isUnique: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    isVariation: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    itemDefinition: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    member: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    membership: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    multiplicity: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    name: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    nestedAction: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    nestedAllocation: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    nestedAnalysisCase: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    nestedAttribute: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    nestedCalculation: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    nestedCase: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    nestedConcern: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    nestedConnection: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    nestedConstraint: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    nestedEnumeration: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    nestedFlow: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    nestedInterface: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    nestedItem: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    nestedMetadata: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    nestedOccurrence: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    nestedPart: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    nestedPort: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    nestedReference: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    nestedRendering: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    nestedRequirement: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    nestedState: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    nestedTransition: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    nestedUsage: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    nestedUseCase: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    nestedVerificationCase: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    nestedView: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    nestedViewpoint: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    occurrenceDefinition: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    output: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    ownedAnnotation: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    ownedConjugator: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    ownedDifferencing: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    ownedDisjoining: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    ownedElement: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    ownedEndFeature: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    ownedFeature: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    ownedFeatureChaining: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    ownedFeatureInverting: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    ownedFeatureMembership: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    ownedImport: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    ownedIntersecting: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    ownedMember: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    ownedMembership: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    ownedRedefinition: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    ownedReferenceSubsetting: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    ownedRelatedElement: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    ownedRelationship: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    ownedSpecialization: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    ownedSubsetting: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    ownedTypeFeaturing: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    ownedTyping: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    ownedUnioning: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    owner: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    owningDefinition: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    owningFeatureMembership: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    owningMembership: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    owningNamespace: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    owningRelatedElement: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    owningRelationship: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    owningType: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    owningUsage: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    partDefinition: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    portionKind: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    portioningFeature: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    qualifiedName: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    relatedElement: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    relatedFeature: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    shortName: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    source: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    sourceFeature: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    target: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    targetFeature: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    textualRepresentation: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
     type: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    unioningType: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    usage: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    variant: any | null;
    /**
     * 
     * @type {any}
     * @memberof InterfaceUsage
     */
    variantMembership: any | null;
}

/**
 * Check if a given object implements the InterfaceUsage interface.
 */
export function instanceOfInterfaceUsage(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "aliasIds" in value;
    isInstance = isInstance && "association" in value;
    isInstance = isInstance && "chainingFeature" in value;
    isInstance = isInstance && "connectionDefinition" in value;
    isInstance = isInstance && "connectorEnd" in value;
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
    isInstance = isInstance && "interfaceDefinition" in value;
    isInstance = isInstance && "intersectingType" in value;
    isInstance = isInstance && "isAbstract" in value;
    isInstance = isInstance && "isComposite" in value;
    isInstance = isInstance && "isConjugated" in value;
    isInstance = isInstance && "isDerived" in value;
    isInstance = isInstance && "isDirected" in value;
    isInstance = isInstance && "isEnd" in value;
    isInstance = isInstance && "isImplied" in value;
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
    isInstance = isInstance && "partDefinition" in value;
    isInstance = isInstance && "portionKind" in value;
    isInstance = isInstance && "portioningFeature" in value;
    isInstance = isInstance && "qualifiedName" in value;
    isInstance = isInstance && "relatedElement" in value;
    isInstance = isInstance && "relatedFeature" in value;
    isInstance = isInstance && "shortName" in value;
    isInstance = isInstance && "source" in value;
    isInstance = isInstance && "sourceFeature" in value;
    isInstance = isInstance && "target" in value;
    isInstance = isInstance && "targetFeature" in value;
    isInstance = isInstance && "textualRepresentation" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "unioningType" in value;
    isInstance = isInstance && "usage" in value;
    isInstance = isInstance && "variant" in value;
    isInstance = isInstance && "variantMembership" in value;

    return isInstance;
}

export function InterfaceUsageFromJSON(json: any): InterfaceUsage {
    return InterfaceUsageFromJSONTyped(json, false);
}

export function InterfaceUsageFromJSONTyped(json: any, ignoreDiscriminator: boolean): InterfaceUsage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['@id'],
        'atType': json['@type'],
        'aliasIds': json['aliasIds'],
        'association': json['association'],
        'chainingFeature': json['chainingFeature'],
        'connectionDefinition': json['connectionDefinition'],
        'connectorEnd': json['connectorEnd'],
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
        'interfaceDefinition': json['interfaceDefinition'],
        'intersectingType': json['intersectingType'],
        'isAbstract': json['isAbstract'],
        'isComposite': json['isComposite'],
        'isConjugated': json['isConjugated'],
        'isDerived': json['isDerived'],
        'isDirected': json['isDirected'],
        'isEnd': json['isEnd'],
        'isImplied': json['isImplied'],
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
        'partDefinition': json['partDefinition'],
        'portionKind': json['portionKind'],
        'portioningFeature': json['portioningFeature'],
        'qualifiedName': json['qualifiedName'],
        'relatedElement': json['relatedElement'],
        'relatedFeature': json['relatedFeature'],
        'shortName': json['shortName'],
        'source': json['source'],
        'sourceFeature': json['sourceFeature'],
        'target': json['target'],
        'targetFeature': json['targetFeature'],
        'textualRepresentation': json['textualRepresentation'],
        'type': json['type'],
        'unioningType': json['unioningType'],
        'usage': json['usage'],
        'variant': json['variant'],
        'variantMembership': json['variantMembership'],
    };
}

export function InterfaceUsageToJSON(value?: InterfaceUsage | null): any {
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
        'interfaceDefinition': value.interfaceDefinition,
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
        'partDefinition': value.partDefinition,
        'portionKind': value.portionKind,
        'portioningFeature': value.portioningFeature,
        'qualifiedName': value.qualifiedName,
        'relatedElement': value.relatedElement,
        'relatedFeature': value.relatedFeature,
        'shortName': value.shortName,
        'source': value.source,
        'sourceFeature': value.sourceFeature,
        'target': value.target,
        'targetFeature': value.targetFeature,
        'textualRepresentation': value.textualRepresentation,
        'type': value.type,
        'unioningType': value.unioningType,
        'usage': value.usage,
        'variant': value.variant,
        'variantMembership': value.variantMembership,
    };
}

