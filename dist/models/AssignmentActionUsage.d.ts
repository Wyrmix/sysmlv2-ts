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
import type { Identified } from './Identified';
/**
 *
 * @export
 * @interface AssignmentActionUsage
 */
export interface AssignmentActionUsage {
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    id: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    atType: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    actionDefinition: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    aliasIds: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    behavior: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    chainingFeature: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    declaredName: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    declaredShortName: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    definition: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    differencingType: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    directedFeature: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    directedUsage: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    direction: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    documentation: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    elementId: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    endFeature: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    endOwningType: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    feature: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    featureMembership: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    featuringType: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    importedMembership: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    individualDefinition: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    inheritedFeature: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    inheritedMembership: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    input: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    intersectingType: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    isAbstract: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    isComposite: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    isConjugated: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    isDerived: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    isEnd: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    isImpliedIncluded: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    isIndividual: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    isLibraryElement: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    isOrdered: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    isPortion: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    isReadOnly: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    isReference: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    isSufficient: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    isUnique: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    isVariation: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    member: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    membership: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    multiplicity: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    name: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    nestedAction: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    nestedAllocation: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    nestedAnalysisCase: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    nestedAttribute: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    nestedCalculation: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    nestedCase: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    nestedConcern: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    nestedConnection: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    nestedConstraint: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    nestedEnumeration: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    nestedFlow: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    nestedInterface: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    nestedItem: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    nestedMetadata: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    nestedOccurrence: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    nestedPart: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    nestedPort: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    nestedReference: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    nestedRendering: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    nestedRequirement: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    nestedState: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    nestedTransition: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    nestedUsage: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    nestedUseCase: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    nestedVerificationCase: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    nestedView: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    nestedViewpoint: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    occurrenceDefinition: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    output: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    ownedAnnotation: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    ownedConjugator: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    ownedDifferencing: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    ownedDisjoining: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    ownedElement: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    ownedEndFeature: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    ownedFeature: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    ownedFeatureChaining: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    ownedFeatureInverting: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    ownedFeatureMembership: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    ownedImport: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    ownedIntersecting: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    ownedMember: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    ownedMembership: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    ownedRedefinition: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    ownedReferenceSubsetting: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    ownedRelationship: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    ownedSpecialization: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    ownedSubsetting: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    ownedTypeFeaturing: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    ownedTyping: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    ownedUnioning: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    owner: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    owningDefinition: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    owningFeatureMembership: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    owningMembership: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    owningNamespace: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    owningRelationship: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    owningType: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    owningUsage: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    parameter: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    portionKind: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    portioningFeature: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    qualifiedName: any | null;
    /**
     *
     * @type {Identified}
     * @memberof AssignmentActionUsage
     */
    referent: Identified;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    shortName: any | null;
    /**
     *
     * @type {Identified}
     * @memberof AssignmentActionUsage
     */
    targetArgument: Identified;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    textualRepresentation: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    type: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    unioningType: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    usage: any | null;
    /**
     *
     * @type {Identified}
     * @memberof AssignmentActionUsage
     */
    valueExpression: Identified;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    variant: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsage
     */
    variantMembership: any | null;
}
/**
 * Check if a given object implements the AssignmentActionUsage interface.
 */
export declare function instanceOfAssignmentActionUsage(value: object): boolean;
export declare function AssignmentActionUsageFromJSON(json: any): AssignmentActionUsage;
export declare function AssignmentActionUsageFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssignmentActionUsage;
export declare function AssignmentActionUsageToJSON(value?: AssignmentActionUsage | null): any;