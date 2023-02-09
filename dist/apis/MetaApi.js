"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaApi = void 0;
const runtime = require("../runtime");
const models_1 = require("../models");
/**
 *
 */
class MetaApi extends runtime.BaseAPI {
    /**
     * Get datatype by ID
     */
    getDatatypeByIdRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.datatypeId === null || requestParameters.datatypeId === undefined) {
                throw new runtime.RequiredError('datatypeId', 'Required parameter requestParameters.datatypeId was null or undefined when calling getDatatypeById.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/meta/datatypes/{datatypeId}`.replace(`{${"datatypeId"}}`, encodeURIComponent(String(requestParameters.datatypeId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.GetDatatypeById200ResponseFromJSON)(jsonValue));
        });
    }
    /**
     * Get datatype by ID
     */
    getDatatypeById(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getDatatypeByIdRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get datatypes
     */
    getDatatypesRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters.pageAfter !== undefined) {
                queryParameters['page[after]'] = requestParameters.pageAfter;
            }
            if (requestParameters.pageBefore !== undefined) {
                queryParameters['page[before]'] = requestParameters.pageBefore;
            }
            if (requestParameters.pageSize !== undefined) {
                queryParameters['page[size]'] = requestParameters.pageSize;
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/meta/datatypes`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.GetDatatypes200ResponseFromJSON)(jsonValue));
        });
    }
    /**
     * Get datatypes
     */
    getDatatypes(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getDatatypesRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.MetaApi = MetaApi;