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
import * as runtime from '../runtime';
import type { Branch, BranchRequest } from '../models';
export interface DeleteBranchByProjectAndIdRequest {
    projectId: any;
    branchId: any;
}
export interface GetBranchesByProjectRequest {
    projectId: any;
    pageAfter?: any;
    pageBefore?: any;
    pageSize?: any;
}
export interface GetBranchesByProjectAndIdRequest {
    projectId: any;
    branchId: any;
}
export interface PostBranchByProjectRequest {
    projectId: any;
    branchRequest: BranchRequest;
}
/**
 *
 */
export declare class BranchApi extends runtime.BaseAPI {
    /**
     * Delete branch by project and ID
     */
    deleteBranchByProjectAndIdRaw(requestParameters: DeleteBranchByProjectAndIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Branch>>;
    /**
     * Delete branch by project and ID
     */
    deleteBranchByProjectAndId(requestParameters: DeleteBranchByProjectAndIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Branch>;
    /**
     * Get branches by project
     */
    getBranchesByProjectRaw(requestParameters: GetBranchesByProjectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>>;
    /**
     * Get branches by project
     */
    getBranchesByProject(requestParameters: GetBranchesByProjectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any>;
    /**
     * Get branch by project and ID
     */
    getBranchesByProjectAndIdRaw(requestParameters: GetBranchesByProjectAndIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Branch>>;
    /**
     * Get branch by project and ID
     */
    getBranchesByProjectAndId(requestParameters: GetBranchesByProjectAndIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Branch>;
    /**
     * Create branch by project
     */
    postBranchByProjectRaw(requestParameters: PostBranchByProjectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Branch>>;
    /**
     * Create branch by project
     */
    postBranchByProject(requestParameters: PostBranchByProjectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Branch>;
}
