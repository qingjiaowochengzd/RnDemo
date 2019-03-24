"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var Hello = /** @class */ (function (_super) {
    __extends(Hello, _super);
    function Hello(props) {
        var _this = _super.call(this, props) || this;
        _this.onIncrement = function () {
            // const { userId, dispatch } = this.props
            // this.props.changeTabBar(!this.props.testShow)
            _this.setState({ enthusiasmLevel: _this.state.enthusiasmLevel + 1 });
            // dispatch({type: 'USER_FETCH_REQUESTED', payload: {userId}})
        };
        _this.onDecrement = function () { return _this.setState({ enthusiasmLevel: _this.state.enthusiasmLevel - 1 }); };
        _this.getExclamationMarks = function (numChars) { return Array(numChars + 1).join("!"); };
        if ((props.enthusiasmLevel || 0) <= 0) {
            throw new Error("You could be a little more enthusiastic. :D");
        }
        _this.state = {
            enthusiasmLevel: props.enthusiasmLevel || 1
        };
        return _this;
    }
    Hello.prototype.render = function () {
        return (react_1.default.createElement(react_native_1.View, { style: styles.root },
            react_1.default.createElement(react_native_1.Text, { style: styles.greeting },
                "Hello ",
                this.props.name + this.getExclamationMarks(this.state.enthusiasmLevel)),
            react_1.default.createElement(react_native_1.View, { style: styles.buttons },
                react_1.default.createElement(react_native_1.View, { style: styles.button },
                    react_1.default.createElement(react_native_1.Button, { title: "-", onPress: this.onDecrement, accessibilityLabel: "decrement", color: "red" })),
                react_1.default.createElement(react_native_1.View, { style: styles.button },
                    react_1.default.createElement(react_native_1.Button, { title: "+", onPress: this.onIncrement, accessibilityLabel: "increment", color: "blue" })))));
    };
    return Hello;
}(react_1.default.Component));
// styles
var styles = react_native_1.StyleSheet.create({
    root: {
        alignItems: "center",
        alignSelf: "center"
    },
    buttons: {
        flexDirection: "row",
        minHeight: 70,
        alignItems: "stretch",
        alignSelf: "center",
        borderWidth: 5
    },
    button: {
        flex: 1,
        paddingVertical: 0
    },
    greeting: {
        color: "#999",
        fontWeight: "bold"
    }
});
//用来获取更新后的数据   监听数据更新
// const mapStateToProps = (state, ownProps) => {
//     console.log(state);
//     return {
//         testShow: state.find.testShow,
//      }
// }
// //用来派发消息
// const mapDispatchToProps = (dispatch, ownProps) => ({
//   changeTabBar: (...args) => dispatch(showTabBar(...args)),
// });
// //用来进行数据流  和  控件的绑定关系
// export default connect(mapStateToProps, mapDispatchToProps)(Hello)
exports.default = Hello;
