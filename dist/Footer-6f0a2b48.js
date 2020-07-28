function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styles = require('@material-ui/core/styles');
var Container = _interopDefault(require('@material-ui/core/Container'));

var useStyles = styles.makeStyles(function (theme) { return ({
    footer: {
        padding: theme.spacing(),
        marginTop: "auto",
        backgroundColor: theme.palette.type === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800]
    }
}); });
var Footer = function (_a) {
    var Component = _a.component;
    var classes = useStyles();
    return (React__default.createElement("footer", { className: classes.footer },
        React__default.createElement(Container, null,
            React__default.createElement(Component, null))));
};

exports.default = Footer;
//# sourceMappingURL=Footer-6f0a2b48.js.map
