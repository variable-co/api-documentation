import localVarRequest from 'request';

export * from './activity';
export * from './activityResponse';
export * from './authorization';
export * from './baseNode';
export * from './company';
export * from './createdUpdated';
export * from './dataQualityIndicators';
export * from './dataQualityIndicatorsEdit';
export * from './editFootprint';
export * from './editInput';
export * from './editProduct';
export * from './expiredTokenResponse';
export * from './footprint';
export * from './footprintCO2e';
export * from './footprintCO2eComputed';
export * from './geoLocation';
export * from './geoLocationBounds';
export * from './getActivityData200Response';
export * from './getModelInput200Response';
export * from './getPactFootprintById200Response';
export * from './getProduct200Response';
export * from './getSearch200Response';
export * from './getSupplier200Response';
export * from './iDAndName';
export * from './latLon';
export * from './lifecycleStage';
export * from './listResponse';
export * from './location';
export * from './material';
export * from './newActivity';
export * from './newActivityAllOfOrg';
export * from './newActivityAllOfProduct';
export * from './newActivityAllOfScope';
export * from './newActivityAllOfTaxonomy';
export * from './newInput';
export * from './newInputBlock';
export * from './newInputMaterial';
export * from './newProduct';
export * from './newProductAllOfGeoLocation';
export * from './newProductAllOfLocation';
export * from './newProductAllOfTaxonomy';
export * from './newSupplier';
export * from './newSwitch';
export * from './org';
export * from './pactDataQualityIndicators';
export * from './pactListResponse';
export * from './pactProductCarbonFootprint';
export * from './pactProductFootprint';
export * from './product';
export * from './productDataSource';
export * from './productOrSectorSpecificRuleInner';
export * from './returnedInput';
export * from './scope';
export * from './secondaryEmissionFactorSourcesInner';
export * from './startEndDate';
export * from './successResponse';
export * from './supplier';
export * from './switch';
export * from './switchAllOfFootprint';
export * from './switchAllOfFootprintCO2e';
export * from './taxonomy';
export * from './unauthorizedResponse';
export * from './unit';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { Activity } from './activity';
import { ActivityResponse } from './activityResponse';
import { Authorization } from './authorization';
import { BaseNode } from './baseNode';
import { Company } from './company';
import { CreatedUpdated } from './createdUpdated';
import { DataQualityIndicators } from './dataQualityIndicators';
import { DataQualityIndicatorsEdit } from './dataQualityIndicatorsEdit';
import { EditFootprint } from './editFootprint';
import { EditInput } from './editInput';
import { EditProduct } from './editProduct';
import { ExpiredTokenResponse } from './expiredTokenResponse';
import { Footprint } from './footprint';
import { FootprintCO2e } from './footprintCO2e';
import { FootprintCO2eComputed } from './footprintCO2eComputed';
import { GeoLocation } from './geoLocation';
import { GeoLocationBounds } from './geoLocationBounds';
import { GetActivityData200Response } from './getActivityData200Response';
import { GetModelInput200Response } from './getModelInput200Response';
import { GetPactFootprintById200Response } from './getPactFootprintById200Response';
import { GetProduct200Response } from './getProduct200Response';
import { GetSearch200Response } from './getSearch200Response';
import { GetSupplier200Response } from './getSupplier200Response';
import { IDAndName } from './iDAndName';
import { LatLon } from './latLon';
import { LifecycleStage } from './lifecycleStage';
import { ListResponse } from './listResponse';
import { Location } from './location';
import { Material } from './material';
import { NewActivity } from './newActivity';
import { NewActivityAllOfOrg } from './newActivityAllOfOrg';
import { NewActivityAllOfProduct } from './newActivityAllOfProduct';
import { NewActivityAllOfScope } from './newActivityAllOfScope';
import { NewActivityAllOfTaxonomy } from './newActivityAllOfTaxonomy';
import { NewInput } from './newInput';
import { NewInputBlock } from './newInputBlock';
import { NewInputMaterial } from './newInputMaterial';
import { NewProduct } from './newProduct';
import { NewProductAllOfGeoLocation } from './newProductAllOfGeoLocation';
import { NewProductAllOfLocation } from './newProductAllOfLocation';
import { NewProductAllOfTaxonomy } from './newProductAllOfTaxonomy';
import { NewSupplier } from './newSupplier';
import { NewSwitch } from './newSwitch';
import { Org } from './org';
import { PactDataQualityIndicators } from './pactDataQualityIndicators';
import { PactListResponse } from './pactListResponse';
import { PactProductCarbonFootprint } from './pactProductCarbonFootprint';
import { PactProductFootprint } from './pactProductFootprint';
import { Product } from './product';
import { ProductDataSource } from './productDataSource';
import { ProductOrSectorSpecificRuleInner } from './productOrSectorSpecificRuleInner';
import { ReturnedInput } from './returnedInput';
import { Scope } from './scope';
import { SecondaryEmissionFactorSourcesInner } from './secondaryEmissionFactorSourcesInner';
import { StartEndDate } from './startEndDate';
import { SuccessResponse } from './successResponse';
import { Supplier } from './supplier';
import { Switch } from './switch';
import { SwitchAllOfFootprint } from './switchAllOfFootprint';
import { SwitchAllOfFootprintCO2e } from './switchAllOfFootprintCO2e';
import { Taxonomy } from './taxonomy';
import { UnauthorizedResponse } from './unauthorizedResponse';
import { Unit } from './unit';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "ProductDataSource": ProductDataSource,
}

let typeMap: {[index: string]: any} = {
    "Activity": Activity,
    "ActivityResponse": ActivityResponse,
    "Authorization": Authorization,
    "BaseNode": BaseNode,
    "Company": Company,
    "CreatedUpdated": CreatedUpdated,
    "DataQualityIndicators": DataQualityIndicators,
    "DataQualityIndicatorsEdit": DataQualityIndicatorsEdit,
    "EditFootprint": EditFootprint,
    "EditInput": EditInput,
    "EditProduct": EditProduct,
    "ExpiredTokenResponse": ExpiredTokenResponse,
    "Footprint": Footprint,
    "FootprintCO2e": FootprintCO2e,
    "FootprintCO2eComputed": FootprintCO2eComputed,
    "GeoLocation": GeoLocation,
    "GeoLocationBounds": GeoLocationBounds,
    "GetActivityData200Response": GetActivityData200Response,
    "GetModelInput200Response": GetModelInput200Response,
    "GetPactFootprintById200Response": GetPactFootprintById200Response,
    "GetProduct200Response": GetProduct200Response,
    "GetSearch200Response": GetSearch200Response,
    "GetSupplier200Response": GetSupplier200Response,
    "IDAndName": IDAndName,
    "LatLon": LatLon,
    "LifecycleStage": LifecycleStage,
    "ListResponse": ListResponse,
    "Location": Location,
    "Material": Material,
    "NewActivity": NewActivity,
    "NewActivityAllOfOrg": NewActivityAllOfOrg,
    "NewActivityAllOfProduct": NewActivityAllOfProduct,
    "NewActivityAllOfScope": NewActivityAllOfScope,
    "NewActivityAllOfTaxonomy": NewActivityAllOfTaxonomy,
    "NewInput": NewInput,
    "NewInputBlock": NewInputBlock,
    "NewInputMaterial": NewInputMaterial,
    "NewProduct": NewProduct,
    "NewProductAllOfGeoLocation": NewProductAllOfGeoLocation,
    "NewProductAllOfLocation": NewProductAllOfLocation,
    "NewProductAllOfTaxonomy": NewProductAllOfTaxonomy,
    "NewSupplier": NewSupplier,
    "NewSwitch": NewSwitch,
    "Org": Org,
    "PactDataQualityIndicators": PactDataQualityIndicators,
    "PactListResponse": PactListResponse,
    "PactProductCarbonFootprint": PactProductCarbonFootprint,
    "PactProductFootprint": PactProductFootprint,
    "Product": Product,
    "ProductOrSectorSpecificRuleInner": ProductOrSectorSpecificRuleInner,
    "ReturnedInput": ReturnedInput,
    "Scope": Scope,
    "SecondaryEmissionFactorSourcesInner": SecondaryEmissionFactorSourcesInner,
    "StartEndDate": StartEndDate,
    "SuccessResponse": SuccessResponse,
    "Supplier": Supplier,
    "Switch": Switch,
    "SwitchAllOfFootprint": SwitchAllOfFootprint,
    "SwitchAllOfFootprintCO2e": SwitchAllOfFootprintCO2e,
    "Taxonomy": Taxonomy,
    "UnauthorizedResponse": UnauthorizedResponse,
    "Unit": Unit,
}

// Check if a string starts with another string without using es6 features
function startsWith(str: string, match: string): boolean {
    return str.substring(0, match.length) === match;
}

// Check if a string ends with another string without using es6 features
function endsWith(str: string, match: string): boolean {
    return str.length >= match.length && str.substring(str.length - match.length) === match;
}

const nullableSuffix = " | null";
const optionalSuffix = " | undefined";
const arrayPrefix = "Array<";
const arraySuffix = ">";
const mapPrefix = "{ [key: string]: ";
const mapSuffix = "; }";

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string): any {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (endsWith(type, nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.serialize(data, subType);
        } else if (endsWith(type, optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.serialize(data, subType);
        } else if (startsWith(type, arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (startsWith(type, mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.serialize(
                    data[key],
                    subType,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string): any {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (endsWith(type, nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.deserialize(data, subType);
        } else if (endsWith(type, optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.deserialize(data, subType);
        } else if (startsWith(type, arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (startsWith(type, mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.deserialize(
                    data[key],
                    subType,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
