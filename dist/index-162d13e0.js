function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var index$1 = require('./index-c1696f3e.js');
var React = require('react');
var React__default = _interopDefault(React);
require('react-redux');
require('react-router-dom');
require('@material-ui/icons/Mail');
require('react-ga');
require('react-toastify');
require('@reduxjs/toolkit');
var styles = require('@material-ui/core/styles');
var Grid = _interopDefault(require('@material-ui/core/Grid'));
var Slide = _interopDefault(require('@material-ui/core/Slide'));
var Typography = _interopDefault(require('@material-ui/core/Typography'));
var InputIcon = _interopDefault(require('@material-ui/icons/Input'));
var CircularProgress = _interopDefault(require('@material-ui/core/CircularProgress'));
var Button = _interopDefault(require('@material-ui/core/Button'));

var useStyles = styles.makeStyles(styles.createStyles({
    startIcon: {
        marginRight: -4,
        marginLeft: 8
    }
}));
var LoadingButton = React__default.forwardRef(function (props, ref) {
    var classes = useStyles();
    var _a = props.loading, loading = _a === void 0 ? false : _a, _b = props.startIcon, startIcon = _b === void 0 ? null : _b, children = props.children, buttonProps = index$1.__rest(props, ["loading", "startIcon", "children"]);
    var Loading = React__default.createElement(CircularProgress, { size: 24 });
    return (React__default.createElement(Button, index$1.__assign({}, buttonProps, { ref: ref, startIcon: loading ? Loading : startIcon, disabled: loading, classes: { startIcon: classes.startIcon } }), children));
});

var useStyles$1 = styles.makeStyles(function (theme) {
    return styles.createStyles({
        root: {
            height: "100vh",
            width: "100%"
        }
    });
});
var SignIn = function () {
    var classes = useStyles$1();
    var _a = React.useState(false), loading = _a[0], setLoading = _a[1];
    return (React__default.createElement(Grid, { container: true, direction: "column", justify: "center", alignItems: "center", spacing: 3, className: classes.root },
        React__default.createElement(Grid, { item: true },
            React__default.createElement(Slide, { direction: "up", in: true, mountOnEnter: true, unmountOnExit: true },
                React__default.createElement(LoadingButton, { loading: loading, variant: "contained", color: "primary", startIcon: React__default.createElement(InputIcon, null), onClick: function () { return setLoading(!loading); } }, "\u0628\u0631\u0627\u06CC \u0627\u062F\u0627\u0645\u0647 \u06A9\u0646\u06CC\u062F"))),
        React__default.createElement(Grid, { item: true },
            React__default.createElement(Typography, { gutterBottom: true, variant: "body1", color: "error" }, "\u0648\u0631\u0648\u062F \u0646\u0627\u0645\u0648\u0641\u0642 \u0628\u0648\u062F\u060C \u062F\u0648\u0628\u0627\u0631\u0647 \u062A\u0644\u0627\u0634 \u06A9\u0646\u06CC\u062F"))));
};

exports.default = SignIn;
//# sourceMappingURL=index-162d13e0.js.map
