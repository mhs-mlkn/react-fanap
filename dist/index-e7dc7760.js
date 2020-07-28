function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var index$1 = require('./index-c1696f3e.js');
var React = require('react');
var React__default = _interopDefault(React);
require('react-redux');
require('react-router-dom');
require('@material-ui/icons/Mail');
require('./index-e7edec8b.js');
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
var Typography = _interopDefault(require('@material-ui/core/Typography'));
var withWidth = require('@material-ui/core/withWidth');
var withWidth__default = _interopDefault(withWidth);
var clsx = _interopDefault(require('clsx'));
var IconButton = _interopDefault(require('@material-ui/core/IconButton'));
var AppBar$1 = _interopDefault(require('@material-ui/core/AppBar'));
var Toolbar = _interopDefault(require('@material-ui/core/Toolbar'));
var MenuIcon = _interopDefault(require('@material-ui/icons/Menu'));

var drawerWidth = 240;
var useStyles = styles.makeStyles(function (theme) { return ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        maxHeight: 64
    },
    menuButton: {
        marginLeft: -12
    },
    content: {
        flex: 1,
        backgroundColor: theme.palette.background.default
    },
    appBarShift: {
        width: "calc(100% - " + drawerWidth + "px)",
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    hide: {
        display: "none"
    },
    grow: {
        flex: "1 1 auto"
    }
}); });
var MyAppBar = function (props) {
    var _a, _b;
    var title = props.title, appBarProps = props.appBarProps, toolbarProps = props.toolbarProps, width = props.width, children = props.children;
    var classes = useStyles();
    var drawer = useDrawer.useDrawer();
    var smDown = withWidth.isWidthDown("sm", width);
    var handleDrawerMenuClick = function () {
        drawer.setDrawerOpen(!drawer.open);
    };
    return (React__default.createElement(AppBar$1, index$1.__assign({ color: "default", className: ["xs", "sm"].indexOf(width) === -1
            ? clsx(classes.appBar, (_a = {},
                _a[classes.appBarShift] = drawer.open && drawer.variant !== "temporary",
                _a))
            : classes.appBar }, appBarProps),
        React__default.createElement(Toolbar, index$1.__assign({}, toolbarProps),
            React__default.createElement(IconButton, { color: "inherit", onClick: handleDrawerMenuClick, className: clsx(classes.menuButton, (_b = {},
                    _b[classes.hide] = drawer.open && !smDown,
                    _b)) },
                React__default.createElement(MenuIcon, null)),
            React__default.createElement(Typography, { variant: "h6", color: "inherit", noWrap: true }, title),
            React__default.createElement("div", { className: classes.grow }),
            children)));
};
var AppBar = withWidth__default()(MyAppBar);

exports.default = AppBar;
//# sourceMappingURL=index-e7dc7760.js.map
