import { $ as isDevMode, Al as ɵɵdefineInjectable, Fn as Injectable, Pl as ɵɵinject, Pn as Inject, Sc as ErrorHandler, Wi as setClassMetadata, _l as makeEnvironmentProviders, ao as ɵɵdefineNgModule, dl as inject, jl as ɵɵdefineInjector, kc as InjectionToken, qn as NgModule, xl as provideEnvironmentInitializer } from "./core-Ca5btl7b.js";
import { t as require_operators } from "./rxjs_operators.js";
import { G as NavigationCancel, J as NavigationError, Z as NavigationStart, lt as Router, mt as RoutesRecognized, q as NavigationEnd } from "./router-Brn0ytEC.js";
import { A as createFeatureSelector, B as props, D as createAction, G as select, N as createSelector, R as isNgrxMockEnvironment, t as ACTIVE_RUNTIME_CHECKS, v as Store } from "./ngrx-store-1R1EyzCe.js";
//#region node_modules/@ngrx/router-store/fesm2022/ngrx-router-store.mjs
var import_operators = require_operators();
/**
* An action dispatched when a router navigation request is fired.
*/
var ROUTER_REQUEST = "@ngrx/router-store/request";
var routerRequestAction = createAction(ROUTER_REQUEST, props());
/**
* An action dispatched when the router navigates.
*/
var ROUTER_NAVIGATION = "@ngrx/router-store/navigation";
var routerNavigationAction = createAction(ROUTER_NAVIGATION, props());
/**
* An action dispatched when the router cancels navigation.
*/
var ROUTER_CANCEL = "@ngrx/router-store/cancel";
var routerCancelAction = createAction(ROUTER_CANCEL, props());
/**
* An action dispatched when the router errors.
*/
var ROUTER_ERROR = "@ngrx/router-store/error";
var routerErrorAction = createAction(ROUTER_ERROR, props());
/**
* An action dispatched after navigation has ended and new route is active.
*/
var ROUTER_NAVIGATED = "@ngrx/router-store/navigated";
var routerNavigatedAction = createAction(ROUTER_NAVIGATED, props());
function routerReducer(state, action) {
	const routerAction = action;
	switch (routerAction.type) {
		case ROUTER_NAVIGATION:
		case ROUTER_ERROR:
		case ROUTER_CANCEL: return {
			state: routerAction.payload.routerState,
			navigationId: routerAction.payload.event.id
		};
		default: return state;
	}
}
var MinimalRouterStateSerializer = class {
	serialize(routerState) {
		return {
			root: this.serializeRoute(routerState.root),
			url: routerState.url
		};
	}
	serializeRoute(route) {
		const children = route.children.map((c) => this.serializeRoute(c));
		return {
			params: route.params,
			data: route.data,
			url: route.url,
			outlet: route.outlet,
			title: route.title,
			routeConfig: route.routeConfig ? {
				path: route.routeConfig.path,
				pathMatch: route.routeConfig.pathMatch,
				redirectTo: route.routeConfig.redirectTo,
				outlet: route.routeConfig.outlet,
				title: typeof route.routeConfig.title === "string" ? route.routeConfig.title : void 0
			} : null,
			queryParams: route.queryParams,
			fragment: route.fragment,
			firstChild: children[0],
			children
		};
	}
};
var NavigationActionTiming;
(function(NavigationActionTiming) {
	NavigationActionTiming[NavigationActionTiming["PreActivation"] = 1] = "PreActivation";
	NavigationActionTiming[NavigationActionTiming["PostActivation"] = 2] = "PostActivation";
})(NavigationActionTiming || (NavigationActionTiming = {}));
var DEFAULT_ROUTER_FEATURENAME = "router";
var _ROUTER_CONFIG = new InjectionToken("@ngrx/router-store Internal Configuration");
var ROUTER_CONFIG = new InjectionToken("@ngrx/router-store Configuration");
/**
* Minimal = Serializes the router event with MinimalRouterStateSerializer
* Full = Serializes the router event with FullRouterStateSerializer
*/
var RouterState;
(function(RouterState) {
	RouterState[RouterState["Full"] = 0] = "Full";
	RouterState[RouterState["Minimal"] = 1] = "Minimal";
})(RouterState || (RouterState = {}));
function _createRouterConfig(config) {
	return {
		stateKey: DEFAULT_ROUTER_FEATURENAME,
		serializer: MinimalRouterStateSerializer,
		navigationActionTiming: NavigationActionTiming.PreActivation,
		...config
	};
}
var FullRouterStateSerializer = class {
	serialize(routerState) {
		return {
			root: this.serializeRoute(routerState.root),
			url: routerState.url
		};
	}
	serializeRoute(route) {
		const children = route.children.map((c) => this.serializeRoute(c));
		return {
			params: route.params,
			paramMap: route.paramMap,
			data: route.data,
			url: route.url,
			outlet: route.outlet,
			title: route.title,
			routeConfig: route.routeConfig ? {
				component: route.routeConfig.component,
				path: route.routeConfig.path,
				pathMatch: route.routeConfig.pathMatch,
				redirectTo: route.routeConfig.redirectTo,
				outlet: route.routeConfig.outlet,
				title: route.routeConfig.title
			} : null,
			queryParams: route.queryParams,
			queryParamMap: route.queryParamMap,
			fragment: route.fragment,
			component: route.routeConfig ? route.routeConfig.component : void 0,
			root: void 0,
			parent: void 0,
			firstChild: children[0],
			pathFromRoot: void 0,
			children
		};
	}
};
var RouterStateSerializer = class {};
var RouterTrigger;
(function(RouterTrigger) {
	RouterTrigger[RouterTrigger["NONE"] = 1] = "NONE";
	RouterTrigger[RouterTrigger["ROUTER"] = 2] = "ROUTER";
	RouterTrigger[RouterTrigger["STORE"] = 3] = "STORE";
})(RouterTrigger || (RouterTrigger = {}));
/**
* Shared router initialization logic used alongside both the StoreRouterConnectingModule and the provideRouterStore
* function
*/
var StoreRouterConnectingService = class StoreRouterConnectingService {
	constructor(store, router, serializer, errorHandler, config, activeRuntimeChecks) {
		this.store = store;
		this.router = router;
		this.serializer = serializer;
		this.errorHandler = errorHandler;
		this.config = config;
		this.activeRuntimeChecks = activeRuntimeChecks;
		this.lastEvent = null;
		this.routerState = null;
		this.trigger = RouterTrigger.NONE;
		this.stateKey = this.config.stateKey;
		if (!isNgrxMockEnvironment() && isDevMode() && (activeRuntimeChecks?.strictActionSerializability || activeRuntimeChecks?.strictStateSerializability) && this.serializer instanceof FullRouterStateSerializer) console.warn("@ngrx/router-store: The serializability runtime checks cannot be enabled with the FullRouterStateSerializer. The FullRouterStateSerializer has an unserializable router state and actions that are not serializable. To use the serializability runtime checks either use the MinimalRouterStateSerializer or implement a custom router state serializer.");
		this.setUpStoreStateListener();
		this.setUpRouterEventsListener();
	}
	setUpStoreStateListener() {
		this.store.pipe(select(this.stateKey), (0, import_operators.withLatestFrom)(this.store)).subscribe(([routerStoreState, storeState]) => {
			this.navigateIfNeeded(routerStoreState, storeState);
		});
	}
	navigateIfNeeded(routerStoreState, storeState) {
		if (!routerStoreState || !routerStoreState.state) return;
		if (this.trigger === RouterTrigger.ROUTER) return;
		if (this.lastEvent instanceof NavigationStart) return;
		const url = routerStoreState.state.url;
		if (!isSameUrl(this.router.url, url)) {
			this.storeState = storeState;
			this.trigger = RouterTrigger.STORE;
			this.router.navigateByUrl(url).catch((error) => {
				this.errorHandler.handleError(error);
			});
		}
	}
	setUpRouterEventsListener() {
		const dispatchNavLate = this.config.navigationActionTiming === NavigationActionTiming.PostActivation;
		let routesRecognized;
		this.router.events.pipe((0, import_operators.withLatestFrom)(this.store)).subscribe(([event, storeState]) => {
			this.lastEvent = event;
			if (event instanceof NavigationStart) {
				this.routerState = this.serializer.serialize(this.router.routerState.snapshot);
				if (this.trigger !== RouterTrigger.STORE) {
					this.storeState = storeState;
					this.dispatchRouterRequest(event);
				}
			} else if (event instanceof RoutesRecognized) {
				routesRecognized = event;
				if (!dispatchNavLate && this.trigger !== RouterTrigger.STORE) this.dispatchRouterNavigation(event);
			} else if (event instanceof NavigationCancel) {
				this.dispatchRouterCancel(event);
				this.reset();
			} else if (event instanceof NavigationError) {
				this.dispatchRouterError(event);
				this.reset();
			} else if (event instanceof NavigationEnd) {
				if (this.trigger !== RouterTrigger.STORE) {
					if (dispatchNavLate) this.dispatchRouterNavigation(routesRecognized);
					this.dispatchRouterNavigated(event);
				}
				this.reset();
			}
		});
	}
	dispatchRouterRequest(event) {
		this.dispatchRouterAction(ROUTER_REQUEST, { event });
	}
	dispatchRouterNavigation(lastRoutesRecognized) {
		const nextRouterState = this.serializer.serialize(lastRoutesRecognized.state);
		this.dispatchRouterAction(ROUTER_NAVIGATION, {
			routerState: nextRouterState,
			event: new RoutesRecognized(lastRoutesRecognized.id, lastRoutesRecognized.url, lastRoutesRecognized.urlAfterRedirects, nextRouterState)
		});
	}
	dispatchRouterCancel(event) {
		this.dispatchRouterAction(ROUTER_CANCEL, {
			storeState: this.storeState,
			event
		});
	}
	dispatchRouterError(event) {
		this.dispatchRouterAction(ROUTER_ERROR, {
			storeState: this.storeState,
			event: new NavigationError(event.id, event.url, `${event}`)
		});
	}
	dispatchRouterNavigated(event) {
		const routerState = this.serializer.serialize(this.router.routerState.snapshot);
		this.dispatchRouterAction(ROUTER_NAVIGATED, {
			event,
			routerState
		});
	}
	dispatchRouterAction(type, payload) {
		this.trigger = RouterTrigger.ROUTER;
		try {
			this.store.dispatch({
				type,
				payload: {
					routerState: this.routerState,
					...payload,
					event: this.config.routerState === RouterState.Full ? payload.event : {
						id: payload.event.id,
						url: payload.event.url,
						urlAfterRedirects: payload.event.urlAfterRedirects
					}
				}
			});
		} finally {
			this.trigger = RouterTrigger.NONE;
		}
	}
	reset() {
		this.trigger = RouterTrigger.NONE;
		this.storeState = null;
		this.routerState = null;
	}
	/** @nocollapse */ static {
		this.ɵfac = function StoreRouterConnectingService_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || StoreRouterConnectingService)(ɵɵinject(Store), ɵɵinject(Router), ɵɵinject(RouterStateSerializer), ɵɵinject(ErrorHandler), ɵɵinject(ROUTER_CONFIG), ɵɵinject(ACTIVE_RUNTIME_CHECKS));
		};
	}
	/** @nocollapse */ static {
		this.ɵprov = /*@__PURE__*/ ɵɵdefineInjectable({
			token: StoreRouterConnectingService,
			factory: StoreRouterConnectingService.ɵfac
		});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreRouterConnectingService, [{ type: Injectable }], () => [
		{ type: Store },
		{ type: Router },
		{ type: RouterStateSerializer },
		{ type: ErrorHandler },
		{
			type: void 0,
			decorators: [{
				type: Inject,
				args: [ROUTER_CONFIG]
			}]
		},
		{
			type: void 0,
			decorators: [{
				type: Inject,
				args: [ACTIVE_RUNTIME_CHECKS]
			}]
		}
	], null);
})();
/**
* Check if the URLs are matching. Accounts for the possibility of trailing "/" in url.
*/
function isSameUrl(first, second) {
	return stripTrailingSlash(first) === stripTrailingSlash(second);
}
function stripTrailingSlash(text) {
	if (text?.length > 0 && text[text.length - 1] === "/") return text.substring(0, text.length - 1);
	return text;
}
/**
* Connects the Angular Router to the Store.
*
* @usageNotes
*
* ```ts
* bootstrapApplication(AppComponent, {
*   providers: [
*     provideStore({ router: routerReducer }),
*     provideRouterStore(),
*   ],
* });
* ```
*/
function provideRouterStore(config = {}) {
	return makeEnvironmentProviders([
		{
			provide: _ROUTER_CONFIG,
			useValue: config
		},
		{
			provide: ROUTER_CONFIG,
			useFactory: _createRouterConfig,
			deps: [_ROUTER_CONFIG]
		},
		{
			provide: RouterStateSerializer,
			useClass: config.serializer ? config.serializer : config.routerState === RouterState.Full ? FullRouterStateSerializer : MinimalRouterStateSerializer
		},
		provideEnvironmentInitializer(() => inject(StoreRouterConnectingService)),
		StoreRouterConnectingService
	]);
}
/**
* Connects RouterModule with StoreModule.
*
* During the navigation, before any guards or resolvers run, the router will dispatch
* a ROUTER_NAVIGATION action, which has the following signature:
*
* ```
* export type RouterNavigationPayload = {
*   routerState: SerializedRouterStateSnapshot,
*   event: RoutesRecognized
* }
* ```
*
* Either a reducer or an effect can be invoked in response to this action.
* If the invoked reducer throws, the navigation will be canceled.
*
* If navigation gets canceled because of a guard, a ROUTER_CANCEL action will be
* dispatched. If navigation results in an error, a ROUTER_ERROR action will be dispatched.
*
* Both ROUTER_CANCEL and ROUTER_ERROR contain the store state before the navigation
* which can be used to restore the consistency of the store.
*
* Usage:
*
* ```typescript
* @NgModule({
*   declarations: [AppCmp, SimpleCmp],
*   imports: [
*     BrowserModule,
*     StoreModule.forRoot(mapOfReducers),
*     RouterModule.forRoot([
*       { path: '', component: SimpleCmp },
*       { path: 'next', component: SimpleCmp }
*     ]),
*     StoreRouterConnectingModule.forRoot()
*   ],
*   bootstrap: [AppCmp]
* })
* export class AppModule {
* }
* ```
*/
var StoreRouterConnectingModule = class StoreRouterConnectingModule {
	static forRoot(config = {}) {
		return {
			ngModule: StoreRouterConnectingModule,
			providers: [provideRouterStore(config)]
		};
	}
	/** @nocollapse */ static {
		this.ɵfac = function StoreRouterConnectingModule_Factory(__ngFactoryType__) {
			return new (__ngFactoryType__ || StoreRouterConnectingModule)();
		};
	}
	/** @nocollapse */ static {
		this.ɵmod = /*@__PURE__*/ ɵɵdefineNgModule({ type: StoreRouterConnectingModule });
	}
	/** @nocollapse */ static {
		this.ɵinj = /*@__PURE__*/ ɵɵdefineInjector({});
	}
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StoreRouterConnectingModule, [{
		type: NgModule,
		args: [{}]
	}], null, null);
})();
function createRouterSelector() {
	return createFeatureSelector(DEFAULT_ROUTER_FEATURENAME);
}
function getRouterSelectors(selectState = createRouterSelector()) {
	const selectRouterState = createSelector(selectState, (router) => router && router.state);
	const selectRootRoute = createSelector(selectRouterState, (routerState) => routerState && routerState.root);
	const selectCurrentRoute = createSelector(selectRootRoute, (rootRoute) => {
		if (!rootRoute) return;
		let route = rootRoute;
		while (route.firstChild) route = route.firstChild;
		return route;
	});
	const selectFragment = createSelector(selectRootRoute, (route) => route && route.fragment);
	const selectQueryParams = createSelector(selectRootRoute, (route) => route && route.queryParams);
	const selectQueryParam = (param) => createSelector(selectQueryParams, (params) => params && params[param]);
	const selectRouteParams = createSelector(selectCurrentRoute, (route) => route && route.params);
	const selectRouteParam = (param) => createSelector(selectRouteParams, (params) => params && params[param]);
	const selectRouteData = createSelector(selectCurrentRoute, (route) => route && route.data);
	const selectRouteDataParam = (param) => createSelector(selectRouteData, (data) => data && data[param]);
	return {
		selectCurrentRoute,
		selectFragment,
		selectQueryParams,
		selectQueryParam,
		selectRouteParams,
		selectRouteParam,
		selectRouteData,
		selectRouteDataParam,
		selectUrl: createSelector(selectRouterState, (routerState) => routerState && routerState.url),
		selectTitle: createSelector(selectCurrentRoute, (route) => {
			if (!route?.routeConfig) return;
			return typeof route.routeConfig.title === "string" ? route.routeConfig.title : route.title;
		})
	};
}
//#endregion
export { DEFAULT_ROUTER_FEATURENAME, FullRouterStateSerializer, MinimalRouterStateSerializer, NavigationActionTiming, ROUTER_CANCEL, ROUTER_CONFIG, ROUTER_ERROR, ROUTER_NAVIGATED, ROUTER_NAVIGATION, ROUTER_REQUEST, RouterState, RouterStateSerializer, StoreRouterConnectingModule, createRouterSelector, getRouterSelectors, provideRouterStore, routerCancelAction, routerErrorAction, routerNavigatedAction, routerNavigationAction, routerReducer, routerRequestAction };
