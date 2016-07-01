var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as React from 'react';
var TAB_NAMES = ['Home', 'Projects', 'LinkedIn'];
/**
 *
 */
var NavHeadTabContainer = (function (_super) {
    __extends(NavHeadTabContainer, _super);
    function NavHeadTabContainer() {
        _super.call(this);
    }
    NavHeadTabContainer.prototype.render = function () {
        return React.createElement("div", null, TAB_NAMES.map(function (name) { return React.createElement(NavHeadTab, {label: name}); }));
    };
    return NavHeadTabContainer;
}(React.Component));
/**
 *
 */
var NavHeadTab = (function (_super) {
    __extends(NavHeadTab, _super);
    function NavHeadTab() {
        _super.call(this);
        this.name = this.props.label;
    }
    NavHeadTab.prototype.render = function () {
        return React.createElement("a", {href: '#' + this.name}, React.createElement("div", {class: "nav nav-tabs"}, this.name));
    };
    return NavHeadTab;
}(React.Component));
export default NavHeadTabContainer;
//# sourceMappingURL=nav.js.map