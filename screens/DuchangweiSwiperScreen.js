import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  DeckSwiper,
  DeckSwiperCard,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { useWindowDimensions } from 'react-native';

const DuchangweiSwiperScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <DeckSwiper
        style={StyleSheet.applyWidth(
          GlobalStyles.DeckSwiperStyles(theme)['Deck Swiper'],
          dimensions.width
        )}
        horizontalEnabled={true}
        verticalEnabled={true}
        visibleCardCount={1}
      >
        <DeckSwiperCard
          style={StyleSheet.applyWidth(
            GlobalStyles.DeckSwiperCardStyles(theme)['Deck Swiper Card'],
            dimensions.width
          )}
        />
      </DeckSwiper>
    </ScreenContainer>
  );
};

export default withTheme(DuchangweiSwiperScreen);
