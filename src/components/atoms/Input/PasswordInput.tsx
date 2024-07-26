import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import styles from './PasswordInput.styles';
type CustomInputPasswordProps = {
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
};
const CustomPasswordInput: React.FC<CustomInputPasswordProps> = ({
  value,
  setValue,
  placeholder,
  secureTextEntry = true,
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
      <Icon name="eye" size={25} color={'gray'} />
    </View>
  );
};

export default CustomPasswordInput;
