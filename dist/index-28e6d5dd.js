function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactRedux = require('react-redux');
var reactRouterDom = require('react-router-dom');
var MailIcon = _interopDefault(require('@material-ui/icons/Mail'));
var ReactGA = _interopDefault(require('react-ga'));
var reactToastify = require('react-toastify');
var toolkit = require('@reduxjs/toolkit');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

exports.__assign = function() {
    exports.__assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return exports.__assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

var landingPage = (function () {
    return (React__default.createElement("div", null,
        React__default.createElement("p", null, "Landing Page"),
        React__default.createElement(reactRouterDom.Link, { to: "/test" }, "Test"),
        React__default.createElement("br", null),
        React__default.createElement(reactRouterDom.Link, { to: "/321" }, "nowhere")));
});

var LoadingComponent = (function () { return React__default.createElement("div", null, "Loading ..."); });

var config = {
    analyticsProps: { trackingID: "UA-172951553-1" },
    landingPage: landingPage,
    datepickerEnabled: true,
    drawer: {
        display: true,
        items: [
            [
                {
                    text: "test",
                    path: "/test",
                    visible: true,
                    icon: React__default.createElement(MailIcon, null)
                },
                {
                    text: "test2",
                    path: "/test2",
                    visible: true,
                    icon: React__default.createElement(MailIcon, null)
                }
            ]
        ]
    },
    dispalyAppBar: true,
    auth: {
        isAuthenticated: function () { return false; },
        signInURL: "/signin",
        fullContent: true,
        displaySignInPage: true
    },
    routes: [
        {
            path: "/test",
            component: React__default.lazy(function () { return Promise.resolve().then(function () { return require('./Test-4d6c061e.js'); }); }),
            exact: true,
            isPrivate: true
        }
    ],
    theme: {
        defaultThemeID: "default",
        defaultType: "light",
        themes: {}
    },
    components: {
        Loading: LoadingComponent,
        Footer: function () { return React__default.createElement("div", null, "Footer"); }
    }
};

var Context = React.createContext(undefined);

var Provider = function (props) {
    var appTheme = props.theme, children = props.children;
    var _a = appTheme || {}, _b = _a.lsKey, lsKey = _b === void 0 ? "theme" : _b, _c = _a.defaultThemeID, defaultThemeID = _c === void 0 ? "default" : _c, _d = _a.defaultType, defaultType = _d === void 0 ? "light" : _d;
    var _e = React.useState(defaultThemeID), themeID = _e[0], setThemeID = _e[1];
    var _f = React.useState(defaultType), type = _f[0], setType = _f[1];
    var themeIDKey = lsKey + ":themeID";
    var typeKey = lsKey + ":type";
    React.useEffect(function () {
        var persistThemeID = localStorage.getItem(themeIDKey);
        var persistType = localStorage.getItem(typeKey);
        if (persistThemeID) {
            setThemeID(persistThemeID);
        }
        if (persistType) {
            setType(persistType);
        }
    }, [themeIDKey, typeKey]);
    React.useEffect(function () {
        try {
            localStorage.setItem(themeIDKey, themeID);
        }
        catch (error) {
            console.warn(error);
        }
    }, [themeID, themeIDKey]);
    React.useEffect(function () {
        try {
            localStorage.setItem(typeKey, type);
        }
        catch (error) {
            console.warn(error);
        }
    }, [type, typeKey]);
    return (React__default.createElement(Context.Provider, { value: {
            themeID: themeID,
            type: type,
            setThemeID: setThemeID,
            setType: setType
        } }, children));
};

var isAnalyticsEnabled = function () {
    var enabled = localStorage.getItem("isAnalyticsEnabled");
    if (enabled === null) {
        return false;
    }
    else {
        return !!JSON.parse(enabled);
    }
};
var setAnalyticsEnabled = function (trackingID, enabled) {
    localStorage.setItem("isAnalyticsEnabled", JSON.stringify(enabled));
};
var Analytics = /** @class */ (function (_super) {
    __extends(Analytics, _super);
    function Analytics() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            showPrompt: false
        };
        _this.runAnalytics = function () {
            var _a = _this.props, trackingID = _a.trackingID, history = _a.history;
            ReactGA.initialize(trackingID);
            ReactGA.pageview(window.location.pathname + window.location.search);
            history.listen(function (location) {
                ReactGA.set({ page: location.pathname });
                ReactGA.pageview(location.pathname);
            });
        };
        _this.handleAccept = function () {
            var trackingID = _this.props.trackingID;
            setAnalyticsEnabled(trackingID, true);
            _this.runAnalytics();
        };
        _this.handleClose = function () {
            Analytics.count -= 1;
        };
        _this.Prompt = (React__default.createElement("div", null,
            "\u0622\u06CC\u0627 \u0645\u0648\u0627\u0641\u0642\u06CC\u062F\u061F ",
            React__default.createElement("button", { onClick: _this.handleAccept }, "\u0628\u0644\u0647")));
        return _this;
    }
    Analytics.prototype.componentDidMount = function () {
        if (process.env.NODE_ENV !== "production") {
            return;
        }
        if (isAnalyticsEnabled()) {
            this.runAnalytics();
        }
        else {
            if (Analytics.count === 0) {
                Analytics.count += 1;
                reactToastify.toast(this.Prompt, {
                    autoClose: false,
                    onClose: this.handleClose
                });
            }
        }
    };
    Analytics.prototype.render = function () {
        return null;
    };
    Analytics.count = 0;
    return Analytics;
}(React.Component));
var Analytics$1 = reactRouterDom.withRouter(Analytics);

var ErrorBoundary = /** @class */ (function (_super) {
    __extends(ErrorBoundary, _super);
    function ErrorBoundary(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { error: undefined };
        return _this;
    }
    ErrorBoundary.getDerivedStateFromError = function (error) {
        return { error: error };
    };
    ErrorBoundary.prototype.render = function () {
        var error = this.state.error;
        if (!!error) {
            return (React__default.createElement("div", null,
                React__default.createElement("p", null, "root error boundary:"),
                React__default.createElement("p", null, error.message),
                ";",
                process.env.NODE_ENV !== "production" && error.stack));
        }
        return this.props.children;
    };
    return ErrorBoundary;
}(React__default.Component));

var rootReducer = toolkit.combineReducers({
    r: function (state) { return 1; }
});

var middleware = __spreadArrays(toolkit.getDefaultMiddleware());
if (process.env.NODE_ENV !== "production") {
    var logger = require("redux-logger").default;
    middleware.push(logger);
}
var store = toolkit.configureStore({
    reducer: rootReducer,
    middleware: middleware
});

var RootAsync = React.lazy(function () { return Promise.resolve().then(function () { return require('./index-e5e53630.js'); }).then(function (n) { return n.index; }); });
var SignInAsync = React.lazy(function () { return Promise.resolve().then(function () { return require('./index-2c88992c.js'); }); });
var App = function (_a) {
    var appConfig = _a.appConfig;
    var configs = exports.__assign(exports.__assign({}, config), appConfig);
    var auth = configs.auth, _b = configs.landingPage, LandingPage = _b === void 0 ? false : _b;
    var _c = configs.components, _d = _c.Loading, Loading = _d === void 0 ? LoadingComponent : _d, _e = _c.SignIn, SignIn = _e === void 0 ? SignInAsync : _e;
    var signInURL = auth.signInURL, fullContent = auth.fullContent, displaySignInPage = auth.displaySignInPage;
    return (React__default.createElement(React__default.StrictMode, null,
        React__default.createElement(ErrorBoundary, null,
            React__default.createElement(React.Suspense, { fallback: React__default.createElement(Loading, null) },
                React__default.createElement(reactRedux.Provider, { store: store },
                    React__default.createElement(Provider, { theme: configs.theme },
                        React__default.createElement(reactRouterDom.BrowserRouter, null,
                            React__default.createElement(reactRouterDom.Switch, null,
                                LandingPage && (React__default.createElement(reactRouterDom.Route, { path: "/", exact: true },
                                    React__default.createElement(React__default.Fragment, null,
                                        React__default.createElement(LandingPage, null),
                                        configs.analyticsProps && (React__default.createElement(Analytics$1, exports.__assign({}, configs.analyticsProps)))))),
                                displaySignInPage && fullContent && (React__default.createElement(reactRouterDom.Route, { path: signInURL, exact: true },
                                    React__default.createElement(SignIn, null))),
                                React__default.createElement(reactRouterDom.Route, null,
                                    React__default.createElement(RootAsync, { appConfig: configs }))))))))));
};

exports.Analytics = Analytics$1;
exports.App = App;
exports.Context = Context;
exports.__extends = __extends;
exports.__rest = __rest;
exports.__spreadArrays = __spreadArrays;
exports.config = config;
//# sourceMappingURL=index-28e6d5dd.js.map
