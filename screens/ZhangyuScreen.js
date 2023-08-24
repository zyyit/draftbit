import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  IconButton,
  ScreenContainer,
  Shadow,
  withTheme,
} from '@draftbit/ui';
import { BlurView } from 'expo-blur';
import {
  KeyboardAvoidingView,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const ZhangyuScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <BlurView
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.BlurViewStyles(theme)['Blur View'], {
            borderColor: theme.colors['Error'],
            borderRadius: 10,
            borderWidth: 3,
          }),
          dimensions.width
        )}
        intensity={100}
        tint={'light'}
      >
        <ScrollView
          style={StyleSheet.applyWidth(
            { height: 0, width: 200 },
            dimensions.width
          )}
          contentContainerStyle={StyleSheet.applyWidth(
            {
              borderColor: theme.colors['Custom Color_12'],
              borderRadius: 10,
              borderWidth: 100,
              margin: 30,
            },
            dimensions.width
          )}
          bounces={true}
          horizontal={true}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
        >
          <Button
            style={StyleSheet.applyWidth(
              GlobalStyles.ButtonStyles(theme)['Button'],
              dimensions.width
            )}
            title={'Get Started'}
          />
          <IconButton icon={'FontAwesome/photo'} size={32} />
        </ScrollView>
        <KeyboardAvoidingView
          style={StyleSheet.applyWidth(
            { borderWidth: 5, height: 50, margin: 40 },
            dimensions.width
          )}
          behavior={'padding'}
          enabled={true}
        />
      </BlurView>
    </ScreenContainer>
  );
};

export default withTheme(ZhangyuScreen);
