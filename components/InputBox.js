import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Button,
  Modal,
  View,
  Image,
} from "react-native";

const InputBox = ({ goalButtonHandler, isVisible, modalVisibleHandler }) => {
  const [goalVal, setGoalVal] = useState("");

  const goalInputHandler = (val) => {
    setGoalVal(val);
  };

  const goalPressHandler = () => {
    goalButtonHandler(goalVal);
    setGoalVal("");
    modalVisibleHandler();
  };

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
        />
        <TextInput
          placeholder="Add a new goal now ..."
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={goalVal}
          placeholderTextColor={"#ffffff"}
        />
        <View style={styles.buttonContainer}>
          <Button title="Add" onPress={goalPressHandler} color={"#51D259"} />
          <Button title="Quit" onPress={modalVisibleHandler} />
        </View>
      </View>
    </Modal>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#1C2939",
    paddingTop: 100,
  },
  textInput: {
    borderWidth: 2,
    borderRadius: 4,
    borderColor: "#cccccc",
    padding: 10,
    width: "60%",
    color: "white",
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: "row-reverse",
    gap: 20,
  },
  logo: {
    width: 200,
    height: 200,
  },
});
