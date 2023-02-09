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
 * @interface Branch
 */
export interface Branch {
    /**
     *
     * @type {any}
     * @memberof Branch
     */
    id: any | null;
    /**
     *
     * @type {any}
     * @memberof Branch
     */
    atType: any | null;
    /**
     *
     * @type {any}
     * @memberof Branch
     */
    created: any | null;
    /**
     *
     * @type {any}
     * @memberof Branch
     */
    head: any | null;
    /**
     *
     * @type {any}
     * @memberof Branch
     */
    name: any | null;
    /**
     *
     * @type {Identified}
     * @memberof Branch
     */
    owningProject: Identified;
    /**
     *
     * @type {Identified}
     * @memberof Branch
     */
    referencedCommit: Identified;
}
/**
 * Check if a given object implements the Branch interface.
 */
export declare function instanceOfBranch(value: object): boolean;
export declare function BranchFromJSON(json: any): Branch;
export declare function BranchFromJSONTyped(json: any, ignoreDiscriminator: boolean): Branch;
export declare function BranchToJSON(value?: Branch | null): any;