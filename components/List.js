import { Button, StyleSheet, Text, View } from "react-native";

const List = ({ goalItem, removeGoal }) => {
  const removeGoalHandler = () => {
    removeGoal(goalItem._id);
  };
  return (
    <View style={styles.goalItem}>
      <Text style={styles.textWhite}>{goalItem.goal}</Text>
      <Button title="Delete Goal" onPress={removeGoalHandler} color="#FA3118" />
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "#2196F3",
    padding: 12,
    marginVertical: 6,
    borderRadius: 4,
  },
  textWhite: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 10,
  },
});
