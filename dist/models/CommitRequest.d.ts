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
/**
 *
 * @export
 * @interface CommitRequest
 */
export interface CommitRequest {
    /**
     *
     * @type {any}
     * @memberof CommitRequest
     */
    atType?: any | null;
    /**
     *
     * @type {any}
     * @memberof CommitRequest
     */
    change: any | null;
    /**
     *
     * @type {any}
     * @memberof CommitRequest
     */
    description?: any | null;
}
/**
 * Check if a given object implements the CommitRequest interface.
 */
export declare function instanceOfCommitRequest(value: object): boolean;
export declare function CommitRequestFromJSON(json: any): CommitRequest;
export declare function CommitRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommitRequest;
export declare function CommitRequestToJSON(value?: CommitRequest | null): any;