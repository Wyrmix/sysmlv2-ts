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
 * @interface IfActionUsage
 */
export interface IfActionUsage {
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    id: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    atType: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    actionDefinition: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    aliasIds: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    behavior: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    chainingFeature: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    declaredName: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    declaredShortName: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    definition: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    differencingType: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    directedFeature: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    directedUsage: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    direction: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    documentation: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    elementId: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    elseAction: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    endFeature: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    endOwningType: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    feature: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    featureMembership: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    featuringType: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof IfActionUsage
     */
    ifArgument: Identified;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    importedMembership: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    individualDefinition: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    inheritedFeature: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    inheritedMembership: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    input: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    intersectingType: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    isAbstract: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    isComposite: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    isConjugated: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    isDerived: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    isEnd: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    isImpliedIncluded: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    isIndividual: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    isLibraryElement: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    isOrdered: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    isPortion: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    isReadOnly: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    isReference: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    isSufficient: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    isUnique: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    isVariation: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    member: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    membership: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    multiplicity: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    name: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    nestedAction: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    nestedAllocation: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    nestedAnalysisCase: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    nestedAttribute: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    nestedCalculation: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    nestedCase: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    nestedConcern: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    nestedConnection: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    nestedConstraint: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    nestedEnumeration: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    nestedFlow: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    nestedInterface: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    nestedItem: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    nestedMetadata: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    nestedOccurrence: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    nestedPart: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    nestedPort: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    nestedReference: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    nestedRendering: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    nestedRequirement: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    nestedState: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    nestedTransition: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    nestedUsage: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    nestedUseCase: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    nestedVerificationCase: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    nestedView: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    nestedViewpoint: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    occurrenceDefinition: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    output: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    ownedAnnotation: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    ownedConjugator: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    ownedDifferencing: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    ownedDisjoining: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    ownedElement: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    ownedEndFeature: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    ownedFeature: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    ownedFeatureChaining: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    ownedFeatureInverting: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    ownedFeatureMembership: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    ownedImport: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    ownedIntersecting: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    ownedMember: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    ownedMembership: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    ownedRedefinition: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    ownedReferenceSubsetting: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    ownedRelationship: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    ownedSpecialization: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    ownedSubsetting: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    ownedTypeFeaturing: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    ownedTyping: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    ownedUnioning: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    owner: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    owningDefinition: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    owningFeatureMembership: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    owningMembership: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    owningNamespace: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    owningRelationship: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    owningType: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    owningUsage: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    parameter: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    portionKind: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    portioningFeature: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    qualifiedName: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    shortName: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    textualRepresentation: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof IfActionUsage
     */
    thenAction: Identified;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
     type: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    unioningType: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    usage: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    variant: any | null;
    /**
     * 
     * @type {any}
     * @memberof IfActionUsage
     */
    variantMembership: any | null;
}

/**
 * Check if a given object implements the IfActionUsage interface.
 */
export function instanceOfIfActionUsage(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "actionDefinition" in value;
    isInstance = isInstance && "aliasIds" in value;
    isInstance = isInstance && "behavior" in value;
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
    isInstance = isInstance && "elseAction" in value;
    isInstance = isInstance && "endFeature" in value;
    isInstance = isInstance && "endOwningType" in value;
    isInstance = isInstance && "feature" in value;
    isInstance = isInstance && "featureMembership" in value;
    isInstance = isInstance && "featuringType" in value;
    isInstance = isInstance && "ifArgument" in value;
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
    isInstance = isInstance && "parameter" in value;
    isInstance = isInstance && "portionKind" in value;
    isInstance = isInstance && "portioningFeature" in value;
    isInstance = isInstance && "qualifiedName" in value;
    isInstance = isInstance && "shortName" in value;
    isInstance = isInstance && "textualRepresentation" in value;
    isInstance = isInstance && "thenAction" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "unioningType" in value;
    isInstance = isInstance && "usage" in value;
    isInstance = isInstance && "variant" in value;
    isInstance = isInstance && "variantMembership" in value;

    return isInstance;
}

export function IfActionUsageFromJSON(json: any): IfActionUsage {
    return IfActionUsageFromJSONTyped(json, false);
}

export function IfActionUsageFromJSONTyped(json: any, ignoreDiscriminator: boolean): IfActionUsage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['@id'],
        'atType': json['@type'],
        'actionDefinition': json['actionDefinition'],
        'aliasIds': json['aliasIds'],
        'behavior': json['behavior'],
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
        'elseAction': json['elseAction'],
        'endFeature': json['endFeature'],
        'endOwningType': json['endOwningType'],
        'feature': json['feature'],
        'featureMembership': json['featureMembership'],
        'featuringType': json['featuringType'],
        'ifArgument': IdentifiedFromJSON(json['ifArgument']),
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
        'parameter': json['parameter'],
        'portionKind': json['portionKind'],
        'portioningFeature': json['portioningFeature'],
        'qualifiedName': json['qualifiedName'],
        'shortName': json['shortName'],
        'textualRepresentation': json['textualRepresentation'],
        'thenAction': IdentifiedFromJSON(json['thenAction']),
        'type': json['type'],
        'unioningType': json['unioningType'],
        'usage': json['usage'],
        'variant': json['variant'],
        'variantMembership': json['variantMembership'],
    };
}

export function IfActionUsageToJSON(value?: IfActionUsage | null): any {
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
        'elseAction': value.elseAction,
        'endFeature': value.endFeature,
        'endOwningType': value.endOwningType,
        'feature': value.feature,
        'featureMembership': value.featureMembership,
        'featuringType': value.featuringType,
        'ifArgument': IdentifiedToJSON(value.ifArgument),
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
        'thenAction': IdentifiedToJSON(value.thenAction),
        'type': value.type,
        'unioningType': value.unioningType,
        'usage': value.usage,
        'variant': value.variant,
        'variantMembership': value.variantMembership,
    };
}

