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
 * @interface DocumentationRequest
 */
export interface DocumentationRequest {
    /**
     *
     * @type {any}
     * @memberof DocumentationRequest
     */
    id?: any | null;
    /**
     *
     * @type {any}
     * @memberof DocumentationRequest
     */
    atType: any | null;
    /**
     *
     * @type {any}
     * @memberof DocumentationRequest
     */
    aliasIds?: any | null;
    /**
     *
     * @type {any}
     * @memberof DocumentationRequest
     */
    annotatedElement?: any | null;
    /**
     *
     * @type {any}
     * @memberof DocumentationRequest
     */
    annotation?: any | null;
    /**
     *
     * @type {any}
     * @memberof DocumentationRequest
     */
    body?: any | null;
    /**
     *
     * @type {any}
     * @memberof DocumentationRequest
     */
    declaredName?: any | null;
    /**
     *
     * @type {any}
     * @memberof DocumentationRequest
     */
    declaredShortName?: any | null;
    /**
     *
     * @type {any}
     * @memberof DocumentationRequest
     */
    documentation?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof DocumentationRequest
     */
    documentedElement?: Identified;
    /**
     *
     * @type {any}
     * @memberof DocumentationRequest
     */
    elementId?: any | null;
    /**
     *
     * @type {any}
     * @memberof DocumentationRequest
     */
    isImpliedIncluded?: any | null;
    /**
     *
     * @type {any}
     * @memberof DocumentationRequest
     */
    isLibraryElement?: any | null;
    /**
     *
     * @type {any}
     * @memberof DocumentationRequest
     */
    locale?: any | null;
    /**
     *
     * @type {any}
     * @memberof DocumentationRequest
     */
    name?: any | null;
    /**
     *
     * @type {any}
     * @memberof DocumentationRequest
     */
    ownedAnnotation?: any | null;
    /**
     *
     * @type {any}
     * @memberof DocumentationRequest
     */
    ownedElement?: any | null;
    /**
     *
     * @type {any}
     * @memberof DocumentationRequest
     */
    ownedRelationship?: any | null;
    /**
     *
     * @type {any}
     * @memberof DocumentationRequest
     */
    owner?: any | null;
    /**
     *
     * @type {any}
     * @memberof DocumentationRequest
     */
    owningMembership?: any | null;
    /**
     *
     * @type {any}
     * @memberof DocumentationRequest
     */
    owningNamespace?: any | null;
    /**
     *
     * @type {any}
     * @memberof DocumentationRequest
     */
    owningRelationship?: any | null;
    /**
     *
     * @type {any}
     * @memberof DocumentationRequest
     */
    qualifiedName?: any | null;
    /**
     *
     * @type {any}
     * @memberof DocumentationRequest
     */
    shortName?: any | null;
    /**
     *
     * @type {any}
     * @memberof DocumentationRequest
     */
    textualRepresentation?: any | null;
}
/**
 * Check if a given object implements the DocumentationRequest interface.
 */
export declare function instanceOfDocumentationRequest(value: object): boolean;
export declare function DocumentationRequestFromJSON(json: any): DocumentationRequest;
export declare function DocumentationRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): DocumentationRequest;
export declare function DocumentationRequestToJSON(value?: DocumentationRequest | null): any;