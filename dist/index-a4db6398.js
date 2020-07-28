function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var index$1 = require('./index-c1696f3e.js');
var React = require('react');
var React__default = _interopDefault(React);
require('react-redux');
require('react-router-dom');
require('@material-ui/icons/Mail');
var index = require('./index-e7edec8b.js');
require('react-ga');
require('react-toastify');
require('@reduxjs/toolkit');
require('jss');
require('jss-rtl');
var styles = require('@material-ui/core/styles');
require('@material-ui/pickers');
require('@material-ui/core/CssBaseline');
require('@date-io/jalaali');
var useDrawer = require('./useDrawer-f3ced8cd.js');
require('react-toastify/dist/ReactToastify.css');
var withWidth = require('@material-ui/core/withWidth');
var withWidth__default = _interopDefault(withWidth);
var clsx = _interopDefault(require('clsx'));
var Divider = _interopDefault(require('@material-ui/core/Divider'));
var IconButton = _interopDefault(require('@material-ui/core/IconButton'));
var ChevronLeftIcon = _interopDefault(require('@material-ui/icons/ChevronLeft'));
var ChevronRightIcon = _interopDefault(require('@material-ui/icons/ChevronRight'));
var AdjustIcon = _interopDefault(require('@material-ui/icons/Adjust'));
var CallToActionIcon = _interopDefault(require('@material-ui/icons/CallToAction'));
var PanoramaFishEyeIcon = _interopDefault(require('@material-ui/icons/PanoramaFishEye'));
var reactCustomScrollbars = require('react-custom-scrollbars');
var List = _interopDefault(require('@material-ui/core/List'));
require('@material-ui/core/ListItem');
require('@material-ui/core/ListItemIcon');
require('@material-ui/core/ListItemText');
var SwipeableDrawer = _interopDefault(require('@material-ui/core/SwipeableDrawer'));

var useStyles = styles.makeStyles(function (theme) { return ({
    toolbar: index$1.__assign({ display: "flex", alignItems: "center", justifyContent: "flex-start", padding: theme.spacing(0, 1, 0, 1) }, theme.mixins.toolbar),
    drawerToggleBtn: { flexGrow: 1, justifyContent: "end" },
    drawerMinifyBtn: { transform: "rotate(-270deg)" },
    hide: { display: "none" }
}); });
var DrawerHeader = function (props) {
    var _a;
    var classes = useStyles();
    var theme = styles.useTheme();
    var smDown = props.smDown, open = props.open, variant = props.variant, onDrawerToggle = props.onDrawerToggle, onVariantToggle = props.onVariantToggle, onMinifiedToggle = props.onMinifiedToggle;
    var isRTL = theme.direction === "rtl";
    var isPinned = variant === "permanent";
    var PinIcon = isPinned ? AdjustIcon : PanoramaFishEyeIcon;
    var ToggleIconLtr = open ? ChevronRightIcon : ChevronLeftIcon;
    var ToggleIconRtl = open ? ChevronLeftIcon : ChevronRightIcon;
    return (React__default.createElement("section", null,
        React__default.createElement("div", { className: classes.toolbar },
            React__default.createElement("div", { className: classes.drawerToggleBtn },
                React__default.createElement(IconButton, { onClick: onDrawerToggle }, isRTL ? React__default.createElement(ToggleIconLtr, null) : React__default.createElement(ToggleIconRtl, null)),
                !smDown && (React__default.createElement(IconButton, { className: clsx(classes.drawerMinifyBtn, (_a = {},
                        _a[classes.hide] = !isPinned,
                        _a)), onClick: onMinifiedToggle },
                    React__default.createElement(CallToActionIcon, null)))),
            !smDown && (React__default.createElement(IconButton, { color: isPinned ? "primary" : "default", onClick: onVariantToggle }, smDown ? null : React__default.createElement(PinIcon, null)))),
        React__default.createElement(Divider, null)));
};

var Scrollbar = function (props) {
    var children = props.children, rest = index$1.__rest(props, ["children"]);
    return (React__default.createElement(reactCustomScrollbars.Scrollbars, index$1.__assign({ hideTracksWhenNotNeeded: true }, rest, { renderView: function (_props) { return (React__default.createElement("div", index$1.__assign({}, _props, { style: index$1.__assign(index$1.__assign({}, _props.style), { marginLeft: _props.style.marginRight, marginRight: 0 }) }))); } }), children));
};

var DrawerContent = function (props) {
    var items = props.items, Item = props.itemComponent, _a = props.divider, divider = _a === void 0 ? true : _a;
    return (React__default.createElement(Scrollbar, null,
        React__default.createElement(List, null, items
            .filter(function (item) { return item.visible; })
            .map(function (item, index) { return (React__default.createElement(Item, index$1.__assign({ key: index }, item))); })),
        divider && React__default.createElement(Divider, null)));
};

function isIOS() {
    return ([
        "iPad Simulator",
        "iPhone Simulator",
        "iPod Simulator",
        "iPad",
        "iPhone",
        "iPod"
    ].includes(navigator.platform) ||
        // iPad on iOS 13 detection
        (navigator.userAgent.includes("Mac") && "ontouchend" in document));
}

var drawerWidth = 240;
var IOS = isIOS();
var useStyles$1 = styles.makeStyles(function (theme) {
    var _a, _b, _c;
    return ({
        drawerPaper: (_a = {
                height: "100vh",
                width: drawerWidth
            },
            _a[theme.breakpoints.up("md")] = {
                position: "relative"
            },
            _a.transition = theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen
            }),
            _a),
        drawerPaperOpen: {
            height: "100vh",
            position: "relative",
            whiteSpace: "nowrap",
            width: drawerWidth,
            transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen
            })
        },
        drawerPaperClose: (_b = {
                height: "100vh",
                overflowX: "hidden",
                transition: theme.transitions.create("width", {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen
                }),
                width: theme.spacing(1) * 7
            },
            _b[theme.breakpoints.up("sm")] = {
                width: theme.spacing(1) * 7.75
            },
            _b),
        border: (_c = {},
            _c[theme.direction === "rtl"
                ? "borderLeftColor"
                : "borderRightColor"] = "#00000026",
            _c),
        hide: { display: "none" }
    });
});
var ResponsiveDrawer = function (props) {
    var classes = useStyles$1();
    var smDown = props.smDown, open = props.open, minified = props.minified, variant = props.variant, onDrawerToggle = props.onDrawerToggle, children = props.children;
    return (React__default.createElement("div", { style: { boxSizing: "content-box" } },
        React__default.createElement(SwipeableDrawer, { disableBackdropTransition: !IOS, disableDiscovery: IOS, variant: smDown ? "temporary" : variant, classes: {
                paperAnchorDockedLeft: classes.border,
                paperAnchorDockedRight: classes.border,
                paper: smDown
                    ? classes.drawerPaper
                    : clsx(classes.drawerPaperOpen, !open && classes.drawerPaperClose, !minified && !open && classes.hide)
            }, open: open, onOpen: onDrawerToggle, onClose: onDrawerToggle, ModalProps: { keepMounted: true } }, children)));
};

var DrawerItemAsync = React__default.lazy(function () {
    return Promise.resolve().then(function () { return require('./DarwerItem-1ba33c3f.js'); });
});
var Drawer = function (_a) {
    var width = _a.width;
    var config = index.useAppConfig();
    var menu = useDrawer.useDrawer();
    var smDown = withWidth.isWidthDown("sm", width);
    var _b = config.drawer.itemComponent, ItemComponent = _b === void 0 ? DrawerItemAsync : _b;
    var handleDrawerToggle = function () {
        var open = menu.open, setDrawerOpen = menu.setDrawerOpen;
        setDrawerOpen(!open);
        menu.setMinified(false);
    };
    var handleVariantToggle = function () {
        var variant = menu.variant, setDrawerVariant = menu.setDrawerVariant;
        setDrawerVariant(variant === "permanent" ? "temporary" : "permanent");
    };
    var handleMinifiedToggle = function () {
        menu.setDrawerOpen(false);
        menu.setMinified(true);
    };
    return (React__default.createElement(ResponsiveDrawer, { smDown: smDown, open: menu.open, minified: menu.minified, variant: menu.variant, onDrawerToggle: handleDrawerToggle },
        React__default.createElement(DrawerHeader, { smDown: smDown, open: menu.open, variant: menu.variant, minified: menu.minified, onDrawerToggle: handleDrawerToggle, onVariantToggle: handleVariantToggle, onMinifiedToggle: handleMinifiedToggle }),
        config.drawer.items.map(function (list, index) { return (React__default.createElement(DrawerContent, { key: index, items: list, itemComponent: ItemComponent, divider: true })); })));
};
var Drawer$1 = withWidth__default()(Drawer);

exports.default = Drawer$1;
//# sourceMappingURL=index-a4db6398.js.map
