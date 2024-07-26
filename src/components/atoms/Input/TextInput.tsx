import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import styles from './TextInput.styles';
type CustomInputProps = {
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
};
const CustomTextInput: React.FC<CustomInputProps> = ({
  value,
  setValue,
  placeholder,
  secureTextEntry = false,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        placeholderTextColor="#008A00"
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default CustomTextInput;
