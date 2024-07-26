import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import Logo from '../../../assets/images/logo-bg.png';
import Input from '../../components/atoms/Input/TextInput';
import Input2 from '../../components/atoms/Input/PasswordInput';
import Button from '../../components/atoms/Button/Button';
import Icon from 'react-native-vector-icons/FontAwesome';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onSignInPressed = () => {
    console.warn('Sign in');
  };

  return (
    <View style={styles.root}>
      {/* Logo by jobseekers */}
      <Image source={Logo} style={styles.logo} resizeMode="contain" />
      <Text style={styles.text}>Sign in</Text>

      {/* Input email and password */}
      <Input placeholder="Email address" value={email} setValue={setEmail} />
      <Input2
        placeholder={'Password'}
        value={password}
        setValue={setPassword}
        secureTextEntry
      />

      <Text style={styles.text2}>Forgot password?</Text>

      {/* Button sign in */}
      <Button text={'Sign In'} onPress={onSignInPressed} />

      {/* UI line and text 'or' */}
      <View style={styles.container}>
        <View style={styles.line} />
        <Text style={styles.text3}>Or</Text>
        <View style={styles.line} />
      </View>

      {/* Link for google, facebook and apple */}
      <TouchableOpacity style={styles.link}>
        <Icon name="google" size={25} color={'#000'} style={styles.icon} />
        <Text style={styles.text4}>Continue with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link}>
        <Icon name="facebook" size={25} color={'#000'} style={styles.icon} />
        <Text style={styles.text4}>Continue with Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link}>
        <Icon name="apple" size={25} color={'#000'} style={styles.icon} />
        <Text style={styles.text4}>Continue with Apple</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.text4}>Don't have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.text5}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    // alignItems: 'flex-end',
    padding: 15,
  },
  logo: {
    width: 250,
    marginLeft: 60,
  },
  text: {
    color: '#008A00',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
  },
  text2: {
    color: '#006083',
    fontSize: 14,
    marginLeft: 250,
    marginBottom: 10,
  },
  text3: {
    color: '#008A00',
    fontSize: 14,
    marginHorizontal: 5,
    marginTop: 20,
    marginBottom: 25,
  },
  text4: {
    color: '#008A00',
    fontSize: 14,
  },
  text5: {
    color: '#006083',
    fontSize: 14,
  },
  line: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    marginHorizontal: 10,
    width: '43%',
    marginTop: 20,
    marginBottom: 25,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  link: {
    borderColor: '#008A00',
    borderWidth: 1.5,
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    position: 'relative',
    marginBottom: 10,
  },
  icon: {
    position: 'absolute',
    left: 10,
  },
  footer: {
    flexDirection: 'row',
  },
});

export default SignInScreen;
