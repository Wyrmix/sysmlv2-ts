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
 * @interface MultiplicityRange
 */
export interface MultiplicityRange {
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    id: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    atType: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    aliasIds: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    bound: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    chainingFeature: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    declaredName: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    declaredShortName: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    differencingType: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    directedFeature: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    direction: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    documentation: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    elementId: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    endFeature: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    endOwningType: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    feature: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    featureMembership: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    featuringType: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    importedMembership: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    inheritedFeature: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    inheritedMembership: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    input: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    intersectingType: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    isAbstract: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    isComposite: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    isConjugated: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    isDerived: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    isEnd: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    isImpliedIncluded: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    isLibraryElement: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    isOrdered: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    isPortion: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    isReadOnly: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    isSufficient: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    isUnique: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    lowerBound: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    member: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    membership: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    multiplicity: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    name: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    output: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    ownedAnnotation: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    ownedConjugator: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    ownedDifferencing: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    ownedDisjoining: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    ownedElement: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    ownedEndFeature: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    ownedFeature: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    ownedFeatureChaining: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    ownedFeatureInverting: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    ownedFeatureMembership: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    ownedImport: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    ownedIntersecting: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    ownedMember: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    ownedMembership: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    ownedRedefinition: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    ownedReferenceSubsetting: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    ownedRelationship: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    ownedSpecialization: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    ownedSubsetting: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    ownedTypeFeaturing: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    ownedTyping: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    ownedUnioning: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    owner: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    owningFeatureMembership: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    owningMembership: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    owningNamespace: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    owningRelationship: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    owningType: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    qualifiedName: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    shortName: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    textualRepresentation: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    type: any | null;
    /**
     *
     * @type {any}
     * @memberof MultiplicityRange
     */
    unioningType: any | null;
    /**
     *
     * @type {Identified}
     * @memberof MultiplicityRange
     */
    upperBound: Identified;
}
/**
 * Check if a given object implements the MultiplicityRange interface.
 */
export declare function instanceOfMultiplicityRange(value: object): boolean;
export declare function MultiplicityRangeFromJSON(json: any): MultiplicityRange;
export declare function MultiplicityRangeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MultiplicityRange;
export declare function MultiplicityRangeToJSON(value?: MultiplicityRange | null): any;
