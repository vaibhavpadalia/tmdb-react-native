import React, { Component } from "react";
import { StyleSheet, View, Modal, ActivityIndicator } from "react-native";

class Loader extends Component {
  render() {
    return this.props.show ? (
      <Modal transparent animationType={"none"} visible={this.props.loading} onRequestClose={() => null}>
        <View style={[styles.modalBackground, { backgroundColor: `rgba(0,0,0,0.4)` }]}>
          <View style={styles.activityIndicatorWrapper}>
            <ActivityIndicator />
          </View>
        </View>
      </Modal>
    ) : null;
  }
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  activityIndicatorWrapper: {
    backgroundColor: "white",
    height: 100,
    width: 100,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Loader;
