/* tslint:disable */
/* eslint-disable */
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
import type {
  Tag,
  TagRequest,
} from '../models';
import {
    TagFromJSON,
    TagToJSON,
    TagRequestFromJSON,
    TagRequestToJSON,
} from '../models';

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
export class TagApi extends runtime.BaseAPI {

    /**
     * Delete tag by project and ID
     */
    async deleteTagByProjectAndIdRaw(requestParameters: DeleteTagByProjectAndIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Tag>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling deleteTagByProjectAndId.');
        }

        if (requestParameters.tagId === null || requestParameters.tagId === undefined) {
            throw new runtime.RequiredError('tagId','Required parameter requestParameters.tagId was null or undefined when calling deleteTagByProjectAndId.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/projects/{projectId}/tags/{tagId}`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"tagId"}}`, encodeURIComponent(String(requestParameters.tagId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TagFromJSON(jsonValue));
    }

    /**
     * Delete tag by project and ID
     */
    async deleteTagByProjectAndId(requestParameters: DeleteTagByProjectAndIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Tag> {
        const response = await this.deleteTagByProjectAndIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get tag by project and ID
     */
    async getTagByProjectAndIdRaw(requestParameters: GetTagByProjectAndIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Tag>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling getTagByProjectAndId.');
        }

        if (requestParameters.tagId === null || requestParameters.tagId === undefined) {
            throw new runtime.RequiredError('tagId','Required parameter requestParameters.tagId was null or undefined when calling getTagByProjectAndId.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/projects/{projectId}/tags/{tagId}`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"tagId"}}`, encodeURIComponent(String(requestParameters.tagId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TagFromJSON(jsonValue));
    }

    /**
     * Get tag by project and ID
     */
    async getTagByProjectAndId(requestParameters: GetTagByProjectAndIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Tag> {
        const response = await this.getTagByProjectAndIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get tags by project
     */
    async getTagsByProjectRaw(requestParameters: GetTagsByProjectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling getTagsByProject.');
        }

        const queryParameters: any = {};

        if (requestParameters.pageAfter !== undefined) {
            queryParameters['page[after]'] = requestParameters.pageAfter;
        }

        if (requestParameters.pageBefore !== undefined) {
            queryParameters['page[before]'] = requestParameters.pageBefore;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['page[size]'] = requestParameters.pageSize;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/projects/{projectId}/tags`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Get tags by project
     */
    async getTagsByProject(requestParameters: GetTagsByProjectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.getTagsByProjectRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create tag by project
     */
    async postTagByProjectRaw(requestParameters: PostTagByProjectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Tag>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling postTagByProject.');
        }

        if (requestParameters.tagRequest === null || requestParameters.tagRequest === undefined) {
            throw new runtime.RequiredError('tagRequest','Required parameter requestParameters.tagRequest was null or undefined when calling postTagByProject.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/projects/{projectId}/tags`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TagRequestToJSON(requestParameters.tagRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TagFromJSON(jsonValue));
    }

    /**
     * Create tag by project
     */
    async postTagByProject(requestParameters: PostTagByProjectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Tag> {
        const response = await this.postTagByProjectRaw(requestParameters, initOverrides);
        return await response.value();
    }

}