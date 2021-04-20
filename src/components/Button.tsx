import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TouchableOpacityProps,
} from "react-native";
import colors from "../../styles/colors";

export interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

function Button({ title }: ButtonProps) {
  return (
    <>
      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <Text style={styles.buttonTitle}>{title}</Text>
      </TouchableOpacity>
    </>
  );
}

export default Button;
const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56,
  },
  buttonTitle: {
    color: colors.white,
    fontSize: 24,
  },
});
