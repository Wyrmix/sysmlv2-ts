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
 * @interface LiteralRational
 */
export interface LiteralRational {
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    id: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    atType: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    aliasIds: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    behavior: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    chainingFeature: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    declaredName: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    declaredShortName: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    differencingType: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    directedFeature: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    direction: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    documentation: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    elementId: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    endFeature: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    endOwningType: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    feature: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    featureMembership: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    featuringType: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    _function: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    importedMembership: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    inheritedFeature: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    inheritedMembership: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    input: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    intersectingType: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    isAbstract: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    isComposite: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    isConjugated: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    isDerived: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    isEnd: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    isImpliedIncluded: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    isLibraryElement: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    isModelLevelEvaluable: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    isOrdered: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    isPortion: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    isReadOnly: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    isSufficient: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    isUnique: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    member: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    membership: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    multiplicity: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    name: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    output: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    ownedAnnotation: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    ownedConjugator: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    ownedDifferencing: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    ownedDisjoining: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    ownedElement: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    ownedEndFeature: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    ownedFeature: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    ownedFeatureChaining: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    ownedFeatureInverting: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    ownedFeatureMembership: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    ownedImport: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    ownedIntersecting: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    ownedMember: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    ownedMembership: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    ownedRedefinition: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    ownedReferenceSubsetting: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    ownedRelationship: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    ownedSpecialization: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    ownedSubsetting: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    ownedTypeFeaturing: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    ownedTyping: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    ownedUnioning: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    owner: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    owningFeatureMembership: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    owningMembership: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    owningNamespace: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    owningRelationship: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    owningType: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    parameter: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    qualifiedName: any | null;
    /**
     *
     * @type {Identified}
     * @memberof LiteralRational
     */
    result: Identified;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    shortName: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    textualRepresentation: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    type: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    unioningType: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralRational
     */
    value: any | null;
}
/**
 * Check if a given object implements the LiteralRational interface.
 */
export declare function instanceOfLiteralRational(value: object): boolean;
export declare function LiteralRationalFromJSON(json: any): LiteralRational;
export declare function LiteralRationalFromJSONTyped(json: any, ignoreDiscriminator: boolean): LiteralRational;
export declare function LiteralRationalToJSON(value?: LiteralRational | null): any;
