import { useState } from "react";
import { Button, FlatList, StyleSheet, TextInput, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import List from "./components/List";
import InputBox from "./components/InputBox";

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const goalButtonHandler = (value) => {
    if (value.trim().length === 0) {
      return;
    }
    setGoalList((prev) => [
      ...prev,
      { _id: Math.random().toString(), goal: value },
    ]);
  };

  const removeGoal = (id) => {
    setGoalList((prev) => prev.filter((i) => i._id !== id));
  };

  const modalVisibleHandler = () => {
    setModalIsVisible((prev) => !prev);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <View style={styles.upperContainer}>
          <Button
            title="Add New Something"
            onPress={modalVisibleHandler}
            color={"#51D259"}
          />
          <InputBox
            goalButtonHandler={goalButtonHandler}
            isVisible={modalIsVisible}
            modalVisibleHandler={modalVisibleHandler}
          />
        </View>
        <View style={styles.goalContainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={goalList}
            renderItem={({ item }) => (
              <List goalItem={item} removeGoal={removeGoal} />
            )}
            keyExtractor={(item) => item._id}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C2939",
    paddingHorizontal: 20,
  },
  upperContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  goalContainer: {
    flex: 5,
    marginVertical: 10,
  },
});
