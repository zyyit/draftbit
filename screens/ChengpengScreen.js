import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as Utils from '../utils';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { CircularProgress, ScreenContainer, withTheme } from '@draftbit/ui';
import { ActivityIndicator, useWindowDimensions } from 'react-native';

const ChengpengScreen = props => {
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
    </ScreenContainer>
  );
};

export default withTheme(ChengpengScreen);
