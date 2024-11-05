import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Animated, {FadeInUp, FadeInDown} from 'react-native-reanimated';

const SignUpScreen = () => {
  const navigation = useNavigation();

  return (
    <View className="w-full h-full bg-white">
      <StatusBar barStyle="light-content" />
      <Image
        className="absolute w-full h-full"
        source={require('../../assets/images/background.png')}
      />
      {/* Lights= lambalar*/}
      <View className="absolute flex-row justify-around w-full">
        <Animated.Image
          entering={FadeInUp.duration(1000).springify()}
          className="h- [225] w-[90]"
          source={require('../../assets/images/light.png')}
        />
        <Animated.Image
          entering={FadeInUp.duration(1000).springify()}
          className="h-[160] w-[65]"
          source={require('../../assets/images/light.png')}
        />
      </View>

      {/* Title and from= başlık ve form*/}
      <View className="flex justify-around w-full h-full pt-40 pb-10">
        {/* Title=başlık*/}
        <View className="flex items-center">
          <Animated.Text
            entering={FadeInUp.duration(1000).springify()}
            className="text-5xl font-bold tracking-wider text-white">
            SignUp
          </Animated.Text>
        </View>

        {/* form*/}

        <View className="flex items-center mx-4 space-y-4">
          <Animated.View
            entering={FadeInDown.duration(1000).delay(200).springify()}
            className="w-full p-5 bg-black/5 rounded-2xl">
            <TextInput placeholder="Username" placeholderTextColor={'gray'} />
          </Animated.View>

          <Animated.View
            entering={FadeInDown.duration(1000).delay(400).springify()}
            className="w-full p-5 bg-black/5 rounded-2xl">
            <TextInput placeholder="E-mail" placeholderTextColor={'gray'} />
          </Animated.View>

          <View className="w-full p-5 bg-black/5 rounded-2xl">
            <TextInput
              placeholder="Password"
              placeholderTextColor={'gray'}
              secureTextEntry
            />
          </View>

          <Animated.View
            entering={FadeInDown.duration(1000).delay(600).springify()}
            className="w-full">
            <TouchableOpacity className="w-full p-3 bg-sky-400 rounded-2xl">
              <Text className="text-2xl font-bold text-center text-white">
                SignUp
              </Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View
            entering={FadeInDown.duration(1000).delay(800).springify()}
            className="flex-row justify-center">
            <Text>Alredady have an account? </Text>
            <TouchableOpacity onPress={() => navigation.push('Login')}>
              <Text className="text-sky-600">SignUp</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;
