import * as hapi from "hapi";
import * as paypal from "paypal-rest-sdk";
export * from "./joi";
export declare type Partial<T> = {
    [P in keyof T]?: T[P];
};
export interface IHapiPayPalOptions {
    sdk: any;
    routes?: [Partial<IPayPalRouteConfiguration>];
    webhook?: paypal.notification.webhook.Webhook;
}
export interface IPayPalRouteConfig extends hapi.RouteAdditionalConfigurationOptions {
    id: string;
}
export interface IPayPalRouteConfiguration extends hapi.RouteConfiguration {
    handler?: IPayPalRouteHandler;
    config: IPayPalRouteConfig;
}
export declare type IPayPalRouteHandler = (request: hapi.Request, reply: hapi.ReplyNoContinue, error: any, response: any) => void;
export interface InternalRouteConfiguration extends hapi.RouteConfiguration {
    handler?: InternalRouteHandler;
    config: {
        id: string;
    };
}
export declare type InternalRouteHandler = (request: hapi.Request, reply: hapi.ReplyNoContinue, ohandler: IPayPalRouteHandler) => void;
export declare class HapiPayPal {
    private webhookEvents;
    private webhook;
    private routes;
    private server;
    constructor();
    register: hapi.PluginFunction<any>;
    private defaultResponseHandler(ohandler, request, reply, error, response);
    private buildRoutes(routes);
    private enableWebhooks(webhook);
    private getWebhookEventTypes();
    private getAccountWebhooks();
    private createWebhook(webhook);
    private replaceWebhook(webhook);
}
