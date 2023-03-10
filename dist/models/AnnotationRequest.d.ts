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
 * @interface AnnotationRequest
 */
export interface AnnotationRequest {
    /**
     *
     * @type {any}
     * @memberof AnnotationRequest
     */
    id?: any | null;
    /**
     *
     * @type {any}
     * @memberof AnnotationRequest
     */
    atType: any | null;
    /**
     *
     * @type {any}
     * @memberof AnnotationRequest
     */
    aliasIds?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof AnnotationRequest
     */
    annotatedElement?: Identified;
    /**
     *
     * @type {Identified}
     * @memberof AnnotationRequest
     */
    annotatingElement?: Identified;
    /**
     *
     * @type {any}
     * @memberof AnnotationRequest
     */
    declaredName?: any | null;
    /**
     *
     * @type {any}
     * @memberof AnnotationRequest
     */
    declaredShortName?: any | null;
    /**
     *
     * @type {any}
     * @memberof AnnotationRequest
     */
    documentation?: any | null;
    /**
     *
     * @type {any}
     * @memberof AnnotationRequest
     */
    elementId?: any | null;
    /**
     *
     * @type {any}
     * @memberof AnnotationRequest
     */
    isImplied?: any | null;
    /**
     *
     * @type {any}
     * @memberof AnnotationRequest
     */
    isImpliedIncluded?: any | null;
    /**
     *
     * @type {any}
     * @memberof AnnotationRequest
     */
    isLibraryElement?: any | null;
    /**
     *
     * @type {any}
     * @memberof AnnotationRequest
     */
    name?: any | null;
    /**
     *
     * @type {any}
     * @memberof AnnotationRequest
     */
    ownedAnnotation?: any | null;
    /**
     *
     * @type {any}
     * @memberof AnnotationRequest
     */
    ownedElement?: any | null;
    /**
     *
     * @type {any}
     * @memberof AnnotationRequest
     */
    ownedRelatedElement?: any | null;
    /**
     *
     * @type {any}
     * @memberof AnnotationRequest
     */
    ownedRelationship?: any | null;
    /**
     *
     * @type {any}
     * @memberof AnnotationRequest
     */
    owner?: any | null;
    /**
     *
     * @type {any}
     * @memberof AnnotationRequest
     */
    owningAnnotatedElement?: any | null;
    /**
     *
     * @type {any}
     * @memberof AnnotationRequest
     */
    owningMembership?: any | null;
    /**
     *
     * @type {any}
     * @memberof AnnotationRequest
     */
    owningNamespace?: any | null;
    /**
     *
     * @type {any}
     * @memberof AnnotationRequest
     */
    owningRelatedElement?: any | null;
    /**
     *
     * @type {any}
     * @memberof AnnotationRequest
     */
    owningRelationship?: any | null;
    /**
     *
     * @type {any}
     * @memberof AnnotationRequest
     */
    qualifiedName?: any | null;
    /**
     *
     * @type {any}
     * @memberof AnnotationRequest
     */
    relatedElement?: any | null;
    /**
     *
     * @type {any}
     * @memberof AnnotationRequest
     */
    shortName?: any | null;
    /**
     *
     * @type {any}
     * @memberof AnnotationRequest
     */
    source?: any | null;
    /**
     *
     * @type {any}
     * @memberof AnnotationRequest
     */
    target?: any | null;
    /**
     *
     * @type {any}
     * @memberof AnnotationRequest
     */
    textualRepresentation?: any | null;
}
/**
 * Check if a given object implements the AnnotationRequest interface.
 */
export declare function instanceOfAnnotationRequest(value: object): boolean;
export declare function AnnotationRequestFromJSON(json: any): AnnotationRequest;
export declare function AnnotationRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnnotationRequest;
export declare function AnnotationRequestToJSON(value?: AnnotationRequest | null): any;
