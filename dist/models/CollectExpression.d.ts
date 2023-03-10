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
 * @interface CollectExpression
 */
export interface CollectExpression {
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    id: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    atType: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    aliasIds: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    argument: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    behavior: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    chainingFeature: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    declaredName: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    declaredShortName: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    differencingType: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    directedFeature: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    direction: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    documentation: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    elementId: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    endFeature: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    endOwningType: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    feature: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    featureMembership: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    featuringType: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    _function: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    importedMembership: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    inheritedFeature: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    inheritedMembership: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    input: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    intersectingType: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    isAbstract: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    isComposite: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    isConjugated: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    isDerived: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    isEnd: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    isImpliedIncluded: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    isLibraryElement: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    isModelLevelEvaluable: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    isOrdered: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    isPortion: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    isReadOnly: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    isSufficient: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    isUnique: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    member: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    membership: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    multiplicity: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    name: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    operator: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    output: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    ownedAnnotation: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    ownedConjugator: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    ownedDifferencing: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    ownedDisjoining: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    ownedElement: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    ownedEndFeature: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    ownedFeature: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    ownedFeatureChaining: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    ownedFeatureInverting: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    ownedFeatureMembership: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    ownedImport: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    ownedIntersecting: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    ownedMember: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    ownedMembership: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    ownedRedefinition: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    ownedReferenceSubsetting: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    ownedRelationship: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    ownedSpecialization: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    ownedSubsetting: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    ownedTypeFeaturing: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    ownedTyping: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    ownedUnioning: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    owner: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    owningFeatureMembership: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    owningMembership: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    owningNamespace: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    owningRelationship: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    owningType: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    parameter: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    qualifiedName: any | null;
    /**
     *
     * @type {Identified}
     * @memberof CollectExpression
     */
    result: Identified;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    shortName: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    textualRepresentation: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    type: any | null;
    /**
     *
     * @type {any}
     * @memberof CollectExpression
     */
    unioningType: any | null;
}
/**
 * Check if a given object implements the CollectExpression interface.
 */
export declare function instanceOfCollectExpression(value: object): boolean;
export declare function CollectExpressionFromJSON(json: any): CollectExpression;
export declare function CollectExpressionFromJSONTyped(json: any, ignoreDiscriminator: boolean): CollectExpression;
export declare function CollectExpressionToJSON(value?: CollectExpression | null): any;
