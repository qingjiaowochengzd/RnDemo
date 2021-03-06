import React from "react"
import { Button, StyleSheet, Text, View } from "react-native"
import { connect } from 'react-redux';

export interface Props {
  name: string
  enthusiasmLevel?: number
  onIncrement?: () => void
  onDecrement?: () => void
}

interface State {
  enthusiasmLevel: number
}

class Hello extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    if ((props.enthusiasmLevel || 0) <= 0) {
      throw new Error("You could be a little more enthusiastic. :D")
    }

    this.state = {
      enthusiasmLevel: props.enthusiasmLevel || 1
    }
  }

    onIncrement = () => {
        // const { userId, dispatch } = this.props
        // this.props.changeTabBar(!this.props.testShow)
        this.setState({ enthusiasmLevel: this.state.enthusiasmLevel + 1 })
        // dispatch({type: 'USER_FETCH_REQUESTED', payload: {userId}})
    }
  onDecrement = () => this.setState({ enthusiasmLevel: this.state.enthusiasmLevel - 1 });
  getExclamationMarks = (numChars: number) => Array(numChars + 1).join("!")

  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.greeting}>
          Hello {this.props.name + this.getExclamationMarks(this.state.enthusiasmLevel)}
        </Text>

        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button
              title="-"
              onPress={this.onDecrement}
              accessibilityLabel="decrement"
              color="red"
            />
          </View>

          <View style={styles.button}>
            <Button
              title="+"
              onPress={this.onIncrement}
              accessibilityLabel="increment"
              color="blue"
            />
          </View>
        </View>
      </View>
    )
  }
}

// styles

const styles = StyleSheet.create({
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
})

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

export default Hello