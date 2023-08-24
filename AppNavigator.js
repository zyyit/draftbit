import * as React from 'react';
import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { systemWeights } from 'react-native-typography';
import { Icon, Touchable } from '@draftbit/ui';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from './themes/DraftbitTheme.js';
import LinkingConfiguration from './LinkingConfiguration.js';

import BlankCopyScreen from './screens/BlankCopyScreen';
import ChengpengScreen from './screens/ChengpengScreen';
import HanxiaoScreen from './screens/HanxiaoScreen';
import HomeScreen from './screens/HomeScreen';
import LOGINScreen from './screens/LOGINScreen';
import PengyunheScreen from './screens/PengyunheScreen';
import SelectProfileScreen from './screens/SelectProfileScreen';
import ZhangjingjinScreen from './screens/ZhangjingjinScreen';
import ZhangyuScreen from './screens/ZhangyuScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Placeholder() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#131A2A',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 36,
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 12,
          color: '#FFF',
        }}
      >
        Missing Screen
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          color: '#FFF',
          marginBottom: 8,
        }}
      >
        This screen is not in a navigator.
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          color: '#FFF',
          marginBottom: 8,
        }}
      >
        Go to Navigation mode, and click the + (plus) icon in the Navigator tab
        on the left side to add this screen to a Navigator.
      </Text>
      <Text style={{ textAlign: 'center', fontSize: 16, color: '#FFF' }}>
        If the screen is in a Tab Navigator, make sure the screen is assigned to
        a tab in the Config panel on the right.
      </Text>
    </View>
  );
}
export default function RootAppNavigator() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <Stack.Navigator initialRouteName="ChengpengScreen">
        <Stack.Screen
          name="LOGINScreen"
          component={LOGINScreen}
          options={{
            title: 'LOG IN',
          }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerStyle: {
              backgroundColor: theme.colors['Primary'],
              borderBottomColor: 'transparent',
            },
            headerTintColor: '"rgba(0, 0, 0, 0)"',
            title: 'Home',
          }}
        />
        <Stack.Screen
          name="ZhangjingjinScreen"
          component={ZhangjingjinScreen}
          options={{
            title: 'zhangjingjin',
          }}
        />
        <Stack.Screen
          name="PengyunheScreen"
          component={PengyunheScreen}
          options={{
            title: 'pengyunhe',
          }}
        />
        <Stack.Screen
          name="SelectProfileScreen"
          component={SelectProfileScreen}
          options={{
            title: 'Select Profile',
          }}
        />
        <Stack.Screen
          name="BlankCopyScreen"
          component={BlankCopyScreen}
          options={{
            title: 'Blank Copy',
          }}
        />
        <Stack.Screen
          name="HanxiaoScreen"
          component={HanxiaoScreen}
          options={{
            title: 'Hanxiao',
          }}
        />
        <Stack.Screen
          name="ZhangyuScreen"
          component={ZhangyuScreen}
          options={{
            title: 'zhangyu',
          }}
        />
        <Stack.Screen
          name="ChengpengScreen"
          component={ChengpengScreen}
          options={{
            title: 'chengpeng',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerIcon: Platform.select({
    ios: {
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    default: {
      margin: 3,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
  }),
  headerIconLeft: Platform.select({
    ios: {
      marginRight: 6,
    },
  }),
  headerIconRight: Platform.select({
    ios: {
      marginLeft: 6,
    },
  }),
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    }),
  },
  headerContainerLeft: Platform.select({
    ios: {
      marginLeft: 8,
    },
  }),
  headerContainerRight: Platform.select({
    ios: {
      marginRight: 8,
    },
  }),
  headerLabelWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  headerLabel: {
    fontSize: 17,
    letterSpacing: 0.35,
  },
});