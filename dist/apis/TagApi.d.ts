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
import type { Tag, TagRequest } from '../models';
export interface DeleteTagByProjectAndIdRequest {
    projectId: any;
    tagId: any;
}
export interface GetTagByProjectAndIdRequest {
    projectId: any;
    tagId: any;
}
export interface GetTagsByProjectRequest {
    projectId: any;
    pageAfter?: any;
    pageBefore?: any;
    pageSize?: any;
}
export interface PostTagByProjectRequest {
    projectId: any;
    tagRequest: TagRequest;
}
/**
 *
 */
export declare class TagApi extends runtime.BaseAPI {
    /**
     * Delete tag by project and ID
     */
    deleteTagByProjectAndIdRaw(requestParameters: DeleteTagByProjectAndIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Tag>>;
    /**
     * Delete tag by project and ID
     */
    deleteTagByProjectAndId(requestParameters: DeleteTagByProjectAndIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Tag>;
    /**
     * Get tag by project and ID
     */
    getTagByProjectAndIdRaw(requestParameters: GetTagByProjectAndIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Tag>>;
    /**
     * Get tag by project and ID
     */
    getTagByProjectAndId(requestParameters: GetTagByProjectAndIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Tag>;
    /**
     * Get tags by project
     */
    getTagsByProjectRaw(requestParameters: GetTagsByProjectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>>;
    /**
     * Get tags by project
     */
    getTagsByProject(requestParameters: GetTagsByProjectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any>;
    /**
     * Create tag by project
     */
    postTagByProjectRaw(requestParameters: PostTagByProjectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Tag>>;
    /**
     * Create tag by project
     */
    postTagByProject(requestParameters: PostTagByProjectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Tag>;
}
