function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var index = require('./index-e7edec8b.js');

var useDrawer = function () {
    var menu = React.useContext(index.MenuContext);
    if (menu === undefined) {
        throw new Error("useDrawer must be used within a DrawerProvider");
    }
    return menu;
};

exports.useDrawer = useDrawer;
//# sourceMappingURL=useDrawer-f3ced8cd.js.map
