import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TouchableOpacityProps,
} from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <>
      <TouchableOpacity style={styles.container} {...rest}>
        <Text style={styles.buttonTitle}>{title}</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 16,
    height: 56,
  },
  buttonTitle: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.heading,
  },
});
