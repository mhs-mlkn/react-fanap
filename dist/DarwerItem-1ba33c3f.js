function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactRouterDom = require('react-router-dom');
var ListItem = _interopDefault(require('@material-ui/core/ListItem'));
var ListItemIcon = _interopDefault(require('@material-ui/core/ListItemIcon'));
var ListItemText = _interopDefault(require('@material-ui/core/ListItemText'));

var DrawerItem = function (props) {
    var text = props.text, path = props.path, icon = props.icon, _a = props.activeOnExact, exact = _a === void 0 ? true : _a;
    var match = reactRouterDom.useRouteMatch({ path: path, exact: exact });
    return (React__default.createElement(ListItem, { button: true, component: reactRouterDom.Link, to: path !== null && path !== void 0 ? path : "/", selected: !!match },
        React__default.createElement(ListItemIcon, null, icon),
        React__default.createElement(ListItemText, { primary: text })));
};

exports.default = DrawerItem;
//# sourceMappingURL=DarwerItem-1ba33c3f.js.map
