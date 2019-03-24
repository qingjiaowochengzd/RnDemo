"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_native_1 = require("react-native");
exports.default = (function (_a) {
    var name = _a.name, _b = _a.count, count = _b === void 0 ? 1 : _b, onInc = _a.onInc, onDec = _a.onDec;
    return (React.createElement(react_native_1.View, { style: styles.root },
        React.createElement(react_native_1.Text, null,
            "Counter ",
            name,
            ": ",
            count),
        React.createElement(react_native_1.View, null,
            React.createElement(react_native_1.Button, { title: "+", onPress: onInc || (function () { }) }),
            React.createElement(react_native_1.Button, { title: "-", onPress: onDec || (function () { }) }))));
});
// styles
var styles = react_native_1.StyleSheet.create({
    root: {
        alignItems: 'center',
        alignSelf: 'center',
    },
    buttons: {
        flexDirection: 'row',
        minHeight: 70,
        alignItems: 'stretch',
        alignSelf: 'center',
        borderWidth: 5,
    },
    button: {
        flex: 1,
        paddingVertical: 0,
    },
    greeting: {
        color: '#999',
        fontWeight: 'bold',
    },
});
