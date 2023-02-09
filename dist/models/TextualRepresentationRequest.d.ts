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
 * @interface TextualRepresentationRequest
 */
export interface TextualRepresentationRequest {
    /**
     *
     * @type {any}
     * @memberof TextualRepresentationRequest
     */
    id?: any | null;
    /**
     *
     * @type {any}
     * @memberof TextualRepresentationRequest
     */
    atType: any | null;
    /**
     *
     * @type {any}
     * @memberof TextualRepresentationRequest
     */
    aliasIds?: any | null;
    /**
     *
     * @type {any}
     * @memberof TextualRepresentationRequest
     */
    annotatedElement?: any | null;
    /**
     *
     * @type {any}
     * @memberof TextualRepresentationRequest
     */
    annotation?: any | null;
    /**
     *
     * @type {any}
     * @memberof TextualRepresentationRequest
     */
    body?: any | null;
    /**
     *
     * @type {any}
     * @memberof TextualRepresentationRequest
     */
    declaredName?: any | null;
    /**
     *
     * @type {any}
     * @memberof TextualRepresentationRequest
     */
    declaredShortName?: any | null;
    /**
     *
     * @type {any}
     * @memberof TextualRepresentationRequest
     */
    documentation?: any | null;
    /**
     *
     * @type {any}
     * @memberof TextualRepresentationRequest
     */
    elementId?: any | null;
    /**
     *
     * @type {any}
     * @memberof TextualRepresentationRequest
     */
    isImpliedIncluded?: any | null;
    /**
     *
     * @type {any}
     * @memberof TextualRepresentationRequest
     */
    isLibraryElement?: any | null;
    /**
     *
     * @type {any}
     * @memberof TextualRepresentationRequest
     */
    language?: any | null;
    /**
     *
     * @type {any}
     * @memberof TextualRepresentationRequest
     */
    name?: any | null;
    /**
     *
     * @type {any}
     * @memberof TextualRepresentationRequest
     */
    ownedAnnotation?: any | null;
    /**
     *
     * @type {any}
     * @memberof TextualRepresentationRequest
     */
    ownedElement?: any | null;
    /**
     *
     * @type {any}
     * @memberof TextualRepresentationRequest
     */
    ownedRelationship?: any | null;
    /**
     *
     * @type {any}
     * @memberof TextualRepresentationRequest
     */
    owner?: any | null;
    /**
     *
     * @type {any}
     * @memberof TextualRepresentationRequest
     */
    owningMembership?: any | null;
    /**
     *
     * @type {any}
     * @memberof TextualRepresentationRequest
     */
    owningNamespace?: any | null;
    /**
     *
     * @type {any}
     * @memberof TextualRepresentationRequest
     */
    owningRelationship?: any | null;
    /**
     *
     * @type {any}
     * @memberof TextualRepresentationRequest
     */
    qualifiedName?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof TextualRepresentationRequest
     */
    representedElement?: Identified;
    /**
     *
     * @type {any}
     * @memberof TextualRepresentationRequest
     */
    shortName?: any | null;
    /**
     *
     * @type {any}
     * @memberof TextualRepresentationRequest
     */
    textualRepresentation?: any | null;
}
/**
 * Check if a given object implements the TextualRepresentationRequest interface.
 */
export declare function instanceOfTextualRepresentationRequest(value: object): boolean;
export declare function TextualRepresentationRequestFromJSON(json: any): TextualRepresentationRequest;
export declare function TextualRepresentationRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TextualRepresentationRequest;
export declare function TextualRepresentationRequestToJSON(value?: TextualRepresentationRequest | null): any;