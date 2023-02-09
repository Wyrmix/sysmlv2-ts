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
 * @interface ConjugatedPortTypingRequest
 */
export interface ConjugatedPortTypingRequest {
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortTypingRequest
     */
    id?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortTypingRequest
     */
    atType: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortTypingRequest
     */
    aliasIds?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof ConjugatedPortTypingRequest
     */
    conjugatedPortDefinition?: Identified;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortTypingRequest
     */
    declaredName?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortTypingRequest
     */
    declaredShortName?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortTypingRequest
     */
    documentation?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortTypingRequest
     */
    elementId?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof ConjugatedPortTypingRequest
     */
    general?: Identified;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortTypingRequest
     */
    isImplied?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortTypingRequest
     */
    isImpliedIncluded?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortTypingRequest
     */
    isLibraryElement?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortTypingRequest
     */
    name?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortTypingRequest
     */
    ownedAnnotation?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortTypingRequest
     */
    ownedElement?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortTypingRequest
     */
    ownedRelatedElement?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortTypingRequest
     */
    ownedRelationship?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortTypingRequest
     */
    owner?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortTypingRequest
     */
    owningFeature?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortTypingRequest
     */
    owningMembership?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortTypingRequest
     */
    owningNamespace?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortTypingRequest
     */
    owningRelatedElement?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortTypingRequest
     */
    owningRelationship?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortTypingRequest
     */
    owningType?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof ConjugatedPortTypingRequest
     */
    portDefinition?: Identified;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortTypingRequest
     */
    qualifiedName?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortTypingRequest
     */
    relatedElement?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortTypingRequest
     */
    shortName?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortTypingRequest
     */
    source?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof ConjugatedPortTypingRequest
     */
    specific?: Identified;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortTypingRequest
     */
    target?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConjugatedPortTypingRequest
     */
    textualRepresentation?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof ConjugatedPortTypingRequest
     */
    type?: Identified;
    /**
     *
     * @type {Identified}
     * @memberof ConjugatedPortTypingRequest
     */
    typedFeature?: Identified;
}
/**
 * Check if a given object implements the ConjugatedPortTypingRequest interface.
 */
export declare function instanceOfConjugatedPortTypingRequest(value: object): boolean;
export declare function ConjugatedPortTypingRequestFromJSON(json: any): ConjugatedPortTypingRequest;
export declare function ConjugatedPortTypingRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConjugatedPortTypingRequest;
export declare function ConjugatedPortTypingRequestToJSON(value?: ConjugatedPortTypingRequest | null): any;