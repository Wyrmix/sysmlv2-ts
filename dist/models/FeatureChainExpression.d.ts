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
 * @interface FeatureChainExpression
 */
export interface FeatureChainExpression {
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    id: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    atType: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    aliasIds: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    argument: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    behavior: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    chainingFeature: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    declaredName: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    declaredShortName: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    differencingType: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    directedFeature: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    direction: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    documentation: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    elementId: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    endFeature: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    endOwningType: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    feature: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    featureMembership: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    featuringType: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    _function: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    importedMembership: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    inheritedFeature: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    inheritedMembership: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    input: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    intersectingType: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    isAbstract: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    isComposite: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    isConjugated: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    isDerived: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    isEnd: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    isImpliedIncluded: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    isLibraryElement: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    isModelLevelEvaluable: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    isOrdered: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    isPortion: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    isReadOnly: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    isSufficient: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    isUnique: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    member: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    membership: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    multiplicity: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    name: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    operator: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    output: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    ownedAnnotation: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    ownedConjugator: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    ownedDifferencing: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    ownedDisjoining: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    ownedElement: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    ownedEndFeature: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    ownedFeature: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    ownedFeatureChaining: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    ownedFeatureInverting: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    ownedFeatureMembership: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    ownedImport: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    ownedIntersecting: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    ownedMember: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    ownedMembership: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    ownedRedefinition: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    ownedReferenceSubsetting: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    ownedRelationship: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    ownedSpecialization: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    ownedSubsetting: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    ownedTypeFeaturing: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    ownedTyping: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    ownedUnioning: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    owner: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    owningFeatureMembership: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    owningMembership: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    owningNamespace: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    owningRelationship: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    owningType: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    parameter: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    qualifiedName: any | null;
    /**
     *
     * @type {Identified}
     * @memberof FeatureChainExpression
     */
    result: Identified;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    shortName: any | null;
    /**
     *
     * @type {Identified}
     * @memberof FeatureChainExpression
     */
    targetFeature: Identified;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    textualRepresentation: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    type: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureChainExpression
     */
    unioningType: any | null;
}
/**
 * Check if a given object implements the FeatureChainExpression interface.
 */
export declare function instanceOfFeatureChainExpression(value: object): boolean;
export declare function FeatureChainExpressionFromJSON(json: any): FeatureChainExpression;
export declare function FeatureChainExpressionFromJSONTyped(json: any, ignoreDiscriminator: boolean): FeatureChainExpression;
export declare function FeatureChainExpressionToJSON(value?: FeatureChainExpression | null): any;
