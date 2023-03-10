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
 * @interface ResultExpressionMembership
 */
export interface ResultExpressionMembership {
    /**
     *
     * @type {any}
     * @memberof ResultExpressionMembership
     */
    id: any | null;
    /**
     *
     * @type {any}
     * @memberof ResultExpressionMembership
     */
    atType: any | null;
    /**
     *
     * @type {any}
     * @memberof ResultExpressionMembership
     */
    aliasIds: any | null;
    /**
     *
     * @type {any}
     * @memberof ResultExpressionMembership
     */
    declaredName: any | null;
    /**
     *
     * @type {any}
     * @memberof ResultExpressionMembership
     */
    declaredShortName: any | null;
    /**
     *
     * @type {any}
     * @memberof ResultExpressionMembership
     */
    documentation: any | null;
    /**
     *
     * @type {any}
     * @memberof ResultExpressionMembership
     */
    elementId: any | null;
    /**
     *
     * @type {Identified}
     * @memberof ResultExpressionMembership
     */
    feature: Identified;
    /**
     *
     * @type {any}
     * @memberof ResultExpressionMembership
     */
    isImplied: any | null;
    /**
     *
     * @type {any}
     * @memberof ResultExpressionMembership
     */
    isImpliedIncluded: any | null;
    /**
     *
     * @type {any}
     * @memberof ResultExpressionMembership
     */
    isLibraryElement: any | null;
    /**
     *
     * @type {Identified}
     * @memberof ResultExpressionMembership
     */
    memberElement: Identified;
    /**
     *
     * @type {any}
     * @memberof ResultExpressionMembership
     */
    memberElementId: any | null;
    /**
     *
     * @type {any}
     * @memberof ResultExpressionMembership
     */
    memberName: any | null;
    /**
     *
     * @type {any}
     * @memberof ResultExpressionMembership
     */
    memberShortName: any | null;
    /**
     *
     * @type {Identified}
     * @memberof ResultExpressionMembership
     */
    membershipOwningNamespace: Identified;
    /**
     *
     * @type {any}
     * @memberof ResultExpressionMembership
     */
    name: any | null;
    /**
     *
     * @type {any}
     * @memberof ResultExpressionMembership
     */
    ownedAnnotation: any | null;
    /**
     *
     * @type {any}
     * @memberof ResultExpressionMembership
     */
    ownedElement: any | null;
    /**
     *
     * @type {Identified}
     * @memberof ResultExpressionMembership
     */
    ownedMemberElement: Identified;
    /**
     *
     * @type {any}
     * @memberof ResultExpressionMembership
     */
    ownedMemberElementId: any | null;
    /**
     *
     * @type {Identified}
     * @memberof ResultExpressionMembership
     */
    ownedMemberFeature: Identified;
    /**
     *
     * @type {any}
     * @memberof ResultExpressionMembership
     */
    ownedMemberName: any | null;
    /**
     *
     * @type {any}
     * @memberof ResultExpressionMembership
     */
    ownedMemberShortName: any | null;
    /**
     *
     * @type {any}
     * @memberof ResultExpressionMembership
     */
    ownedRelatedElement: any | null;
    /**
     *
     * @type {any}
     * @memberof ResultExpressionMembership
     */
    ownedRelationship: any | null;
    /**
     *
     * @type {Identified}
     * @memberof ResultExpressionMembership
     */
    ownedResultExpression: Identified;
    /**
     *
     * @type {any}
     * @memberof ResultExpressionMembership
     */
    owner: any | null;
    /**
     *
     * @type {any}
     * @memberof ResultExpressionMembership
     */
    owningMembership: any | null;
    /**
     *
     * @type {any}
     * @memberof ResultExpressionMembership
     */
    owningNamespace: any | null;
    /**
     *
     * @type {any}
     * @memberof ResultExpressionMembership
     */
    owningRelatedElement: any | null;
    /**
     *
     * @type {any}
     * @memberof ResultExpressionMembership
     */
    owningRelationship: any | null;
    /**
     *
     * @type {Identified}
     * @memberof ResultExpressionMembership
     */
    owningType: Identified;
    /**
     *
     * @type {any}
     * @memberof ResultExpressionMembership
     */
    qualifiedName: any | null;
    /**
     *
     * @type {any}
     * @memberof ResultExpressionMembership
     */
    relatedElement: any | null;
    /**
     *
     * @type {any}
     * @memberof ResultExpressionMembership
     */
    shortName: any | null;
    /**
     *
     * @type {any}
     * @memberof ResultExpressionMembership
     */
    source: any | null;
    /**
     *
     * @type {any}
     * @memberof ResultExpressionMembership
     */
    target: any | null;
    /**
     *
     * @type {any}
     * @memberof ResultExpressionMembership
     */
    textualRepresentation: any | null;
    /**
     *
     * @type {Identified}
     * @memberof ResultExpressionMembership
     */
    type: Identified;
    /**
     *
     * @type {any}
     * @memberof ResultExpressionMembership
     */
    visibility: any | null;
}
/**
 * Check if a given object implements the ResultExpressionMembership interface.
 */
export declare function instanceOfResultExpressionMembership(value: object): boolean;
export declare function ResultExpressionMembershipFromJSON(json: any): ResultExpressionMembership;
export declare function ResultExpressionMembershipFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResultExpressionMembership;
export declare function ResultExpressionMembershipToJSON(value?: ResultExpressionMembership | null): any;
