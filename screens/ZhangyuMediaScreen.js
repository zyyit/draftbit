import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  AudioPlayer,
  SVG,
  ScreenContainer,
  VideoPlayer,
  YoutubePlayer,
  withTheme,
} from '@draftbit/ui';
import { BlurView } from 'expo-blur';
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Text,
  useWindowDimensions,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const ZhangyuMediaScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <BlurView
        style={StyleSheet.applyWidth(
          GlobalStyles.BlurViewStyles(theme)['Blur View'],
          dimensions.width
        )}
        intensity={50}
        tint={'default'}
      >
        <KeyboardAvoidingView
          style={StyleSheet.applyWidth(
            { alignSelf: 'center', marginTop: 100 },
            dimensions.width
          )}
          behavior={'padding'}
          enabled={true}
        >
          <Image
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'], {
                height: 180,
                marginTop: 50,
                width: 300,
              }),
              dimensions.width
            )}
            blurRadius={0}
            resizeMode={'cover'}
            source={{
              uri: 'https://static.draftbit.com/images/placeholder-image.png',
            }}
          />
          <KeyboardAwareScrollView
            style={StyleSheet.applyWidth(
              { height: 650, width: 350 },
              dimensions.width
            )}
            keyboardShouldPersistTaps={'never'}
            showsVerticalScrollIndicator={true}
          >
            <VideoPlayer
              style={StyleSheet.applyWidth(
                GlobalStyles.VideoPlayerStyles(theme)['Video'],
                dimensions.width
              )}
              posterResizeMode={'cover'}
              posterSource={{ uri: '' }}
              rate={1}
              resizeMode={'cover'}
              source={{ uri: '' }}
              useNativeControls={true}
              volume={0.5}
            />
          </KeyboardAwareScrollView>
        </KeyboardAvoidingView>
      </BlurView>
    </ScreenContainer>
  );
};

export default withTheme(ZhangyuMediaScreen);
