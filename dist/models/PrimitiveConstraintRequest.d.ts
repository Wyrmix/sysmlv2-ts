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
 * @interface PrimitiveConstraintRequest
 */
export interface PrimitiveConstraintRequest {
    /**
     *
     * @type {any}
     * @memberof PrimitiveConstraintRequest
     */
    atType: any | null;
    /**
     *
     * @type {any}
     * @memberof PrimitiveConstraintRequest
     */
    inverse?: any | null;
    /**
     *
     * @type {any}
     * @memberof PrimitiveConstraintRequest
     */
    operator: PrimitiveConstraintRequestOperatorEnum;
    /**
     *
     * @type {any}
     * @memberof PrimitiveConstraintRequest
     */
    property: any | null;
    /**
     *
     * @type {any}
     * @memberof PrimitiveConstraintRequest
     */
    value: any | null;
}
/**
 * @export
 */
export declare const PrimitiveConstraintRequestOperatorEnum: {
    readonly Equal: "=";
    readonly GreaterThan: ">";
    readonly LessThan: "<";
};
export type PrimitiveConstraintRequestOperatorEnum = typeof PrimitiveConstraintRequestOperatorEnum[keyof typeof PrimitiveConstraintRequestOperatorEnum];
/**
 * Check if a given object implements the PrimitiveConstraintRequest interface.
 */
export declare function instanceOfPrimitiveConstraintRequest(value: object): boolean;
export declare function PrimitiveConstraintRequestFromJSON(json: any): PrimitiveConstraintRequest;
export declare function PrimitiveConstraintRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PrimitiveConstraintRequest;
export declare function PrimitiveConstraintRequestToJSON(value?: PrimitiveConstraintRequest | null): any;
