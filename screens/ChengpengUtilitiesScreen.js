import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as Utils from '../utils';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  CircularProgress,
  LinearProgress,
  ScreenContainer,
  WebView,
  withTheme,
} from '@draftbit/ui';
import { ActivityIndicator, useWindowDimensions } from 'react-native';

const ChengpengUtilitiesScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <ActivityIndicator
        style={StyleSheet.applyWidth(
          GlobalStyles.ActivityIndicatorStyles(theme)['Activity Indicator'],
          dimensions.width
        )}
        animating={true}
        hidesWhenStopped={true}
        size={'small'}
      />
      <CircularProgress
        animationDuration={500}
        color={theme.colors.primary}
        dashWidth={100}
        isAnimated={true}
        lineCap={'round'}
        maximumValue={100}
        showTrack={true}
        startPosition={'top'}
        thickness={10}
        trackColor={theme.colors.divider}
        trackDashGap={100}
        trackDashWidth={50}
        trackLineCap={'round'}
        trackThickness={20}
      />
      <Utils.CustomCodeErrorBoundary>
        <></>
      </Utils.CustomCodeErrorBoundary>
      <WebView
        style={StyleSheet.applyWidth(
          GlobalStyles.WebViewStyles(theme)['HTML View 2'],
          dimensions.width
        )}
        cacheEnabled={true}
        javaScriptEnabled={true}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        source={{
          html: '<h1>这是HTML的h1标签</h1>\n<input type="text"></input>',
        }}
      />
      <LinearProgress
        animationDuration={500}
        color={theme.colors.primary}
        isAnimated={true}
        lineCap={'round'}
        maximumValue={100}
        showTrack={true}
        thickness={10}
        trackColor={theme.colors.divider}
        trackLineCap={'round'}
      />
      <WebView
        style={StyleSheet.applyWidth(
          GlobalStyles.WebViewStyles(theme)['Web View'],
          dimensions.width
        )}
        cacheEnabled={true}
        javaScriptEnabled={true}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        source={{ uri: 'https://www.baidu.com' }}
      />
    </ScreenContainer>
  );
};

export default withTheme(ChengpengUtilitiesScreen);
