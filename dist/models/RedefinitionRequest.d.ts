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
 * @interface RedefinitionRequest
 */
export interface RedefinitionRequest {
    /**
     *
     * @type {any}
     * @memberof RedefinitionRequest
     */
    id?: any | null;
    /**
     *
     * @type {any}
     * @memberof RedefinitionRequest
     */
    atType: any | null;
    /**
     *
     * @type {any}
     * @memberof RedefinitionRequest
     */
    aliasIds?: any | null;
    /**
     *
     * @type {any}
     * @memberof RedefinitionRequest
     */
    declaredName?: any | null;
    /**
     *
     * @type {any}
     * @memberof RedefinitionRequest
     */
    declaredShortName?: any | null;
    /**
     *
     * @type {any}
     * @memberof RedefinitionRequest
     */
    documentation?: any | null;
    /**
     *
     * @type {any}
     * @memberof RedefinitionRequest
     */
    elementId?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof RedefinitionRequest
     */
    general?: Identified;
    /**
     *
     * @type {any}
     * @memberof RedefinitionRequest
     */
    isImplied?: any | null;
    /**
     *
     * @type {any}
     * @memberof RedefinitionRequest
     */
    isImpliedIncluded?: any | null;
    /**
     *
     * @type {any}
     * @memberof RedefinitionRequest
     */
    isLibraryElement?: any | null;
    /**
     *
     * @type {any}
     * @memberof RedefinitionRequest
     */
    name?: any | null;
    /**
     *
     * @type {any}
     * @memberof RedefinitionRequest
     */
    ownedAnnotation?: any | null;
    /**
     *
     * @type {any}
     * @memberof RedefinitionRequest
     */
    ownedElement?: any | null;
    /**
     *
     * @type {any}
     * @memberof RedefinitionRequest
     */
    ownedRelatedElement?: any | null;
    /**
     *
     * @type {any}
     * @memberof RedefinitionRequest
     */
    ownedRelationship?: any | null;
    /**
     *
     * @type {any}
     * @memberof RedefinitionRequest
     */
    owner?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof RedefinitionRequest
     */
    owningFeature?: Identified;
    /**
     *
     * @type {any}
     * @memberof RedefinitionRequest
     */
    owningMembership?: any | null;
    /**
     *
     * @type {any}
     * @memberof RedefinitionRequest
     */
    owningNamespace?: any | null;
    /**
     *
     * @type {any}
     * @memberof RedefinitionRequest
     */
    owningRelatedElement?: any | null;
    /**
     *
     * @type {any}
     * @memberof RedefinitionRequest
     */
    owningRelationship?: any | null;
    /**
     *
     * @type {any}
     * @memberof RedefinitionRequest
     */
    owningType?: any | null;
    /**
     *
     * @type {any}
     * @memberof RedefinitionRequest
     */
    qualifiedName?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof RedefinitionRequest
     */
    redefinedFeature?: Identified;
    /**
     *
     * @type {Identified}
     * @memberof RedefinitionRequest
     */
    redefiningFeature?: Identified;
    /**
     *
     * @type {any}
     * @memberof RedefinitionRequest
     */
    relatedElement?: any | null;
    /**
     *
     * @type {any}
     * @memberof RedefinitionRequest
     */
    shortName?: any | null;
    /**
     *
     * @type {any}
     * @memberof RedefinitionRequest
     */
    source?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof RedefinitionRequest
     */
    specific?: Identified;
    /**
     *
     * @type {Identified}
     * @memberof RedefinitionRequest
     */
    subsettedFeature?: Identified;
    /**
     *
     * @type {Identified}
     * @memberof RedefinitionRequest
     */
    subsettingFeature?: Identified;
    /**
     *
     * @type {any}
     * @memberof RedefinitionRequest
     */
    target?: any | null;
    /**
     *
     * @type {any}
     * @memberof RedefinitionRequest
     */
    textualRepresentation?: any | null;
}
/**
 * Check if a given object implements the RedefinitionRequest interface.
 */
export declare function instanceOfRedefinitionRequest(value: object): boolean;
export declare function RedefinitionRequestFromJSON(json: any): RedefinitionRequest;
export declare function RedefinitionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RedefinitionRequest;
export declare function RedefinitionRequestToJSON(value?: RedefinitionRequest | null): any;