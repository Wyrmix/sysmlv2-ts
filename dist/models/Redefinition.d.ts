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
 * @interface Redefinition
 */
export interface Redefinition {
    /**
     *
     * @type {any}
     * @memberof Redefinition
     */
    id: any | null;
    /**
     *
     * @type {any}
     * @memberof Redefinition
     */
    atType: any | null;
    /**
     *
     * @type {any}
     * @memberof Redefinition
     */
    aliasIds: any | null;
    /**
     *
     * @type {any}
     * @memberof Redefinition
     */
    declaredName: any | null;
    /**
     *
     * @type {any}
     * @memberof Redefinition
     */
    declaredShortName: any | null;
    /**
     *
     * @type {any}
     * @memberof Redefinition
     */
    documentation: any | null;
    /**
     *
     * @type {any}
     * @memberof Redefinition
     */
    elementId: any | null;
    /**
     *
     * @type {Identified}
     * @memberof Redefinition
     */
    general: Identified;
    /**
     *
     * @type {any}
     * @memberof Redefinition
     */
    isImplied: any | null;
    /**
     *
     * @type {any}
     * @memberof Redefinition
     */
    isImpliedIncluded: any | null;
    /**
     *
     * @type {any}
     * @memberof Redefinition
     */
    isLibraryElement: any | null;
    /**
     *
     * @type {any}
     * @memberof Redefinition
     */
    name: any | null;
    /**
     *
     * @type {any}
     * @memberof Redefinition
     */
    ownedAnnotation: any | null;
    /**
     *
     * @type {any}
     * @memberof Redefinition
     */
    ownedElement: any | null;
    /**
     *
     * @type {any}
     * @memberof Redefinition
     */
    ownedRelatedElement: any | null;
    /**
     *
     * @type {any}
     * @memberof Redefinition
     */
    ownedRelationship: any | null;
    /**
     *
     * @type {any}
     * @memberof Redefinition
     */
    owner: any | null;
    /**
     *
     * @type {Identified}
     * @memberof Redefinition
     */
    owningFeature: Identified;
    /**
     *
     * @type {any}
     * @memberof Redefinition
     */
    owningMembership: any | null;
    /**
     *
     * @type {any}
     * @memberof Redefinition
     */
    owningNamespace: any | null;
    /**
     *
     * @type {any}
     * @memberof Redefinition
     */
    owningRelatedElement: any | null;
    /**
     *
     * @type {any}
     * @memberof Redefinition
     */
    owningRelationship: any | null;
    /**
     *
     * @type {any}
     * @memberof Redefinition
     */
    owningType: any | null;
    /**
     *
     * @type {any}
     * @memberof Redefinition
     */
    qualifiedName: any | null;
    /**
     *
     * @type {Identified}
     * @memberof Redefinition
     */
    redefinedFeature: Identified;
    /**
     *
     * @type {Identified}
     * @memberof Redefinition
     */
    redefiningFeature: Identified;
    /**
     *
     * @type {any}
     * @memberof Redefinition
     */
    relatedElement: any | null;
    /**
     *
     * @type {any}
     * @memberof Redefinition
     */
    shortName: any | null;
    /**
     *
     * @type {any}
     * @memberof Redefinition
     */
    source: any | null;
    /**
     *
     * @type {Identified}
     * @memberof Redefinition
     */
    specific: Identified;
    /**
     *
     * @type {Identified}
     * @memberof Redefinition
     */
    subsettedFeature: Identified;
    /**
     *
     * @type {Identified}
     * @memberof Redefinition
     */
    subsettingFeature: Identified;
    /**
     *
     * @type {any}
     * @memberof Redefinition
     */
    target: any | null;
    /**
     *
     * @type {any}
     * @memberof Redefinition
     */
    textualRepresentation: any | null;
}
/**
 * Check if a given object implements the Redefinition interface.
 */
export declare function instanceOfRedefinition(value: object): boolean;
export declare function RedefinitionFromJSON(json: any): Redefinition;
export declare function RedefinitionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Redefinition;
export declare function RedefinitionToJSON(value?: Redefinition | null): any;