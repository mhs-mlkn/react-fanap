function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var index$1 = require('./index-c1696f3e.js');
var React = require('react');
var React__default = _interopDefault(React);
var reactRouterDom = require('react-router-dom');
var reactToastify = require('react-toastify');
var jss$1 = require('jss');
var rtl = _interopDefault(require('jss-rtl'));
var styles = require('@material-ui/core/styles');
var pickers = require('@material-ui/pickers');
var CssBaseline = _interopDefault(require('@material-ui/core/CssBaseline'));
var JalaliUtils = _interopDefault(require('@date-io/jalaali'));
require('react-toastify/dist/ReactToastify.css');

var useAppTheme = function () {
    var theme = React.useContext(index$1.Context);
    if (theme === undefined) {
        throw new Error("useAppTheme must be used within a AppThemeProvider");
    }
    return theme;
};

var AppConfigContext = React__default.createContext(index$1.config);

var Provider = /** @class */ (function (_super) {
    index$1.__extends(Provider, _super);
    function Provider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Provider.prototype.render = function () {
        var _a = this.props, appConfig = _a.appConfig, children = _a.children;
        return (React__default.createElement(AppConfigContext.Provider, { value: index$1.__assign(index$1.__assign({}, index$1.config), appConfig) }, children));
    };
    return Provider;
}(React.Component));

var useAppConfig = function () {
    var appConfig = React.useContext(AppConfigContext);
    return appConfig;
};

var MenuContext = React.createContext(undefined);

var Provider$1 = function (props) {
    var _a = props.menu, menu = _a === void 0 ? {} : _a, children = props.children;
    var _b = menu.open, defaultDrawerOpen = _b === void 0 ? true : _b, _c = menu.minified, defaultMinified = _c === void 0 ? false : _c, _d = menu.variant, defaultVariant = _d === void 0 ? "permanent" : _d;
    var _e = React.useState(defaultDrawerOpen), open = _e[0], setDrawerOpen = _e[1];
    var _f = React.useState(defaultMinified), minified = _f[0], setMinified = _f[1];
    var _g = React.useState(defaultVariant), variant = _g[0], setDrawerVariant = _g[1];
    return (React__default.createElement(MenuContext.Provider, { value: {
            open: open,
            minified: minified,
            variant: variant,
            setDrawerOpen: setDrawerOpen,
            setMinified: setMinified,
            setDrawerVariant: setDrawerVariant
        } }, children));
};

var PrivateRoute = function (props) {
    var Component = props.component, FallbackComponent = props.fallbackComponent, rest = index$1.__rest(props, ["component", "fallbackComponent"]);
    var appConfig = useAppConfig();
    var auth = (appConfig || {}).auth;
    var _a = auth || {}, _b = _a.isAuthenticated, isAuthenticated = _b === void 0 ? function () { return false; } : _b, _c = _a.signInURL, signInURL = _c === void 0 ? "/signin" : _c;
    return (React__default.createElement(reactRouterDom.Route, index$1.__assign({}, rest, { children: function (routeProps) {
            return isAuthenticated(appConfig) ? (React__default.createElement(Component, index$1.__assign({}, routeProps))) : !!FallbackComponent ? (React__default.createElement(FallbackComponent, index$1.__assign({}, routeProps))) : (React__default.createElement(reactRouterDom.Redirect, { to: {
                    pathname: signInURL,
                    search: "from=" + routeProps.location.pathname,
                    state: { from: routeProps.location }
                } }));
        } })));
};

var PageNotFound = function () { return React__default.createElement("div", null, "PageNotFound"); };

var SignInAsync = React__default.lazy(function () { return Promise.resolve().then(function () { return require('./index-162d13e0.js'); }); });
var Routes = function () {
    var appConfig = useAppConfig();
    var routes = appConfig.routes, _a = appConfig.pageNotFound, NotFound = _a === void 0 ? PageNotFound : _a;
    var _b = appConfig.auth, signInURL = _b.signInURL, fullContent = _b.fullContent, displaySignInPage = _b.displaySignInPage;
    var _c = appConfig.components.SignIn, SignIn = _c === void 0 ? SignInAsync : _c;
    return (React__default.createElement(reactRouterDom.Switch, null,
        routes.map(function (route, i) {
            return route.isPrivate ? (React__default.createElement(PrivateRoute, index$1.__assign({ key: i }, route))) : (React__default.createElement(reactRouterDom.Route, index$1.__assign({ key: i }, route, { children: function (routeProps) { return React__default.createElement(route.component, index$1.__assign({}, routeProps)); } })));
        }),
        displaySignInPage && !fullContent && (React__default.createElement(reactRouterDom.Route, { path: signInURL, exact: true },
            React__default.createElement(SignIn, null))),
        React__default.createElement(reactRouterDom.Route, null,
            React__default.createElement(NotFound, null))));
};

var DrawerAsync = React__default.lazy(function () { return Promise.resolve().then(function () { return require('./index-a4db6398.js'); }); });
var AppBarAsync = React__default.lazy(function () { return Promise.resolve().then(function () { return require('./index-e7dc7760.js'); }); });
var FooterAsync = React__default.lazy(function () {
    return Promise.resolve().then(function () { return require('./Footer-6f0a2b48.js'); });
});
var useStyles = styles.makeStyles(function (theme) { return ({
    root: {
        flexGrow: 1,
        zIndex: 1,
        overflow: "hidden",
        position: "relative",
        display: "flex",
        width: "100%",
        height: "100vh"
    },
    body: {
        width: "100%",
        display: "flex",
        flexDirection: "column"
    },
    offset: index$1.__assign({}, theme.mixins.toolbar),
    content: {
        width: "100%",
        height: "100vh",
        padding: theme.spacing()
    },
    footer: {
        padding: theme.spacing(),
        marginTop: "auto",
        backgroundColor: theme.palette.type === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800]
    }
}); });
var AppLayout = function () {
    var classes = useStyles();
    var appConfig = useAppConfig();
    var components = appConfig.components, drawer = appConfig.drawer, dispalyAppBar = appConfig.dispalyAppBar;
    var Footer = components.Footer;
    return (React__default.createElement("div", { className: classes.root },
        drawer.display && React__default.createElement(DrawerAsync, null),
        dispalyAppBar && React__default.createElement(AppBarAsync, null),
        React__default.createElement("div", { className: classes.body },
            React__default.createElement("div", { className: classes.content },
                dispalyAppBar && React__default.createElement("div", { className: classes.offset }),
                React__default.createElement(Routes, null)),
            Footer && React__default.createElement(FooterAsync, { component: Footer })),
        React__default.createElement(reactToastify.ToastContainer, { position: "top-center", hideProgressBar: true, transition: reactToastify.Slide, rtl: true }),
        appConfig.analyticsProps && React__default.createElement(index$1.Analytics, index$1.__assign({}, appConfig.analyticsProps))));
};

var DefaultTheme = { palette: {} };
var jss = jss$1.create({ plugins: index$1.__spreadArrays(styles.jssPreset().plugins, [rtl()]) });
var Root = function (_a) {
    var appConfig = _a.appConfig;
    var themeConfig = appConfig.theme;
    var _b = useAppTheme(), themeID = _b.themeID, type = _b.type;
    var themes = themeConfig.themes;
    var selectedTheme = themes[themeID] || DefaultTheme;
    var _c = selectedTheme.palette, palette = _c === void 0 ? {} : _c;
    var options = index$1.__assign(index$1.__assign({ direction: "rtl" }, selectedTheme), { palette: index$1.__assign(index$1.__assign({}, palette), { type: type }) });
    var theme = styles.createMuiTheme(options);
    return (React__default.createElement(styles.StylesProvider, { jss: jss },
        React__default.createElement(Provider, { appConfig: appConfig },
            React__default.createElement(styles.ThemeProvider, { theme: theme },
                React__default.createElement(Provider$1, { menu: {} },
                    React__default.createElement(pickers.MuiPickersUtilsProvider, { utils: JalaliUtils, locale: "fa" },
                        React__default.createElement(CssBaseline, null),
                        React__default.createElement(AppLayout, null)))))));
};

var index = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': Root
});

exports.MenuContext = MenuContext;
exports.index = index;
exports.useAppConfig = useAppConfig;
//# sourceMappingURL=index-e7edec8b.js.map
