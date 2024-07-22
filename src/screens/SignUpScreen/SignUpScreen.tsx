import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import Logo from '../../../assets/images/logo-bg.png';
import Input from '../../components/Input/Input';
import Input2 from '../../components/Input/Input2';
import Button from '../../components/Button/Button';
import Icon from 'react-native-vector-icons/FontAwesome';

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onSignUpPressed = () => {
    console.warn('Register');
  };

  return (
    <SafeAreaView style={styles.area}>
      <ScrollView style={styles.scroll}>
        <View style={styles.root}>
          {/* Logo by jobseekers */}
          <Image source={Logo} style={styles.logo} resizeMode="contain" />
          <Text style={styles.text}>Register</Text>

          {/* Input username, email and password */}
          <Input
            placeholder="Username"
            value={username}
            setValue={setUsername}
          />
          <Input
            placeholder="Email address"
            value={email}
            setValue={setEmail}
          />
          <Input2
            placeholder={'Password'}
            value={password}
            setValue={setPassword}
            secureTextEntry
          />
          <View style={styles.check}>
            <Icon
              name="check-square"
              size={25}
              color={'#000'}
              style={styles.icon}
            />
            <Text style={styles.text6}>
              By registering, I agree to the Privacy Policy and consent to the
              collection, storage and use of my personal data as described in
              that policy. I agree to receive marketing messages from Jobseekers
              and affiliates and understand that I can opt out at any time via
              the unsubscribe links or as detailed in the Privacy Policy.
            </Text>
          </View>

          {/* Button sign in */}
          <Button text={'Register'} onPress={onSignUpPressed} />

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
            <Icon
              name="facebook"
              size={25}
              color={'#000'}
              style={styles.icon}
            />
            <Text style={styles.text4}>Continue with Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.link}>
            <Icon name="apple" size={25} color={'#000'} style={styles.icon} />
            <Text style={styles.text4}>Continue with Apple</Text>
          </TouchableOpacity>

          <View style={styles.footer}>
            <Text style={styles.text4}>Already have an account? </Text>
            <TouchableOpacity>
              <Text style={styles.text5}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    // alignItems: 'flex-end',
    // padding: 15,
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
  text6: {
    color: '#000',
    fontSize: 12,
    marginLeft: 40,
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
    marginBottom: 20,
  },
  check: {
    marginBottom: 30,
  },
  area: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scroll: {
    marginHorizontal: 20,
  },
});

export default SignUpScreen;
