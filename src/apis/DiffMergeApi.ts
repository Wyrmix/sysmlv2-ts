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
  Commit,
} from '../models';
import {
    CommitFromJSON,
    CommitToJSON,
} from '../models';

export interface DiffRequest {
    projectId: any;
    baseCommitId: any;
    compareCommitId: any;
    pageAfter?: any;
    pageBefore?: any;
    pageSize?: any;
}

export interface MergeRequest {
    projectId: any;
    sourceCommitId: any;
    targetBranchId: any;
    description?: any;
    pageAfter?: any;
    pageBefore?: any;
    pageSize?: any;
    body?: any | null;
}

/**
 * 
 */
export class DiffMergeApi extends runtime.BaseAPI {

    /**
     * Diff a base commit and compare commit
     */
    async diffRaw(requestParameters: DiffRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling diff.');
        }

        if (requestParameters.baseCommitId === null || requestParameters.baseCommitId === undefined) {
            throw new runtime.RequiredError('baseCommitId','Required parameter requestParameters.baseCommitId was null or undefined when calling diff.');
        }

        if (requestParameters.compareCommitId === null || requestParameters.compareCommitId === undefined) {
            throw new runtime.RequiredError('compareCommitId','Required parameter requestParameters.compareCommitId was null or undefined when calling diff.');
        }

        const queryParameters: any = {};

        if (requestParameters.baseCommitId !== undefined) {
            queryParameters['baseCommitId'] = requestParameters.baseCommitId;
        }

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
            path: `/projects/{projectId}/commits/{compareCommitId}/diff`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"compareCommitId"}}`, encodeURIComponent(String(requestParameters.compareCommitId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Diff a base commit and compare commit
     */
    async diff(requestParameters: DiffRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.diffRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Merge source commit(s) into a target branch
     */
    async mergeRaw(requestParameters: MergeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Commit>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling merge.');
        }

        if (requestParameters.sourceCommitId === null || requestParameters.sourceCommitId === undefined) {
            throw new runtime.RequiredError('sourceCommitId','Required parameter requestParameters.sourceCommitId was null or undefined when calling merge.');
        }

        if (requestParameters.targetBranchId === null || requestParameters.targetBranchId === undefined) {
            throw new runtime.RequiredError('targetBranchId','Required parameter requestParameters.targetBranchId was null or undefined when calling merge.');
        }

        const queryParameters: any = {};

        if (requestParameters.sourceCommitId !== undefined) {
            queryParameters['sourceCommitId'] = requestParameters.sourceCommitId;
        }

        if (requestParameters.description !== undefined) {
            queryParameters['description'] = requestParameters.description;
        }

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

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/projects/{projectId}/branches/{targetBranchId}/merge`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"targetBranchId"}}`, encodeURIComponent(String(requestParameters.targetBranchId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CommitFromJSON(jsonValue));
    }

    /**
     * Merge source commit(s) into a target branch
     */
    async merge(requestParameters: MergeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Commit> {
        const response = await this.mergeRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
