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
 * @interface ConjugatedPortDefinition
 */
export interface ConjugatedPortDefinition {
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    id: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    atType: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    aliasIds: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    conjugatedPortDefinition: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    declaredName: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    declaredShortName: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    differencingType: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    directedFeature: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    directedUsage: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    documentation: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    elementId: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    endFeature: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    feature: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    featureMembership: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    importedMembership: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    inheritedFeature: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    inheritedMembership: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    input: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    intersectingType: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    isAbstract: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    isConjugated: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    isImpliedIncluded: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    isIndividual: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    isLibraryElement: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    isSufficient: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    isVariation: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    lifeClass: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    member: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    membership: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    multiplicity: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    name: any | null;
    /**
     *
     * @type {Identified}
     * @memberof ConjugatedPortDefinition
     */
    originalPortDefinition: Identified;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    output: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    ownedAction: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    ownedAllocation: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    ownedAnalysisCase: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    ownedAnnotation: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    ownedAttribute: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    ownedCalculation: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    ownedCase: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    ownedConcern: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    ownedConjugator: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    ownedConnection: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    ownedConstraint: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    ownedDifferencing: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    ownedDisjoining: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    ownedElement: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    ownedEndFeature: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    ownedEnumeration: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    ownedFeature: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    ownedFeatureMembership: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    ownedFlow: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    ownedImport: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    ownedInterface: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    ownedIntersecting: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    ownedItem: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    ownedMember: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    ownedMembership: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    ownedMetadata: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    ownedOccurrence: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    ownedPart: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    ownedPort: any | null;
    /**
     *
     * @type {Identified}
     * @memberof ConjugatedPortDefinition
     */
    ownedPortConjugator: Identified;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    ownedReference: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    ownedRelationship: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    ownedRendering: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    ownedRequirement: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    ownedSpecialization: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    ownedState: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    ownedSubclassification: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    ownedTransition: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    ownedUnioning: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    ownedUsage: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    ownedUseCase: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    ownedVerificationCase: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    ownedView: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    ownedViewpoint: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    owner: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    owningMembership: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    owningNamespace: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    owningRelationship: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    qualifiedName: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    shortName: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    textualRepresentation: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    unioningType: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    usage: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    variant: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortDefinition
     */
    variantMembership: any | null;
}
/**
 * Check if a given object implements the ConjugatedPortDefinition interface.
 */
export declare function instanceOfConjugatedPortDefinition(value: object): boolean;
export declare function ConjugatedPortDefinitionFromJSON(json: any): ConjugatedPortDefinition;
export declare function ConjugatedPortDefinitionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConjugatedPortDefinition;
export declare function ConjugatedPortDefinitionToJSON(value?: ConjugatedPortDefinition | null): any;
