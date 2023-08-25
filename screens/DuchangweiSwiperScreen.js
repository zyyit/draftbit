import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  DeckSwiper,
  DeckSwiperCard,
  ScreenContainer,
  Swiper,
  SwiperItem,
  withTheme,
} from '@draftbit/ui';
import { StatusBar, useWindowDimensions } from 'react-native';

const DuchangweiSwiperScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;

  React.useEffect(() => {
    StatusBar.setBarStyle('light-content');
  }, []);

  const [starRatingValue, setStarRatingValue] = React.useState(0);

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <DeckSwiper
        renderItem={({ item }) => {
          const deckSwiperData = item;
          return (
            <DeckSwiperCard
              style={StyleSheet.applyWidth(
                GlobalStyles.DeckSwiperCardStyles(theme)['Deck Swiper Card'],
                dimensions.width
              )}
            />
          );
        }}
        data={theme.colors['Studily_Gray 1']}
        listKey={'5gYFr4hu'}
        keyExtractor={deckSwiperData =>
          deckSwiperData?.id ||
          deckSwiperData?.uuid ||
          JSON.stringify(deckSwiperData)
        }
        style={StyleSheet.applyWidth(
          GlobalStyles.DeckSwiperStyles(theme)['Deck Swiper'],
          dimensions.width
        )}
        horizontalEnabled={true}
        verticalEnabled={true}
        visibleCardCount={1}
      />
      <Swiper
        style={StyleSheet.applyWidth(
          GlobalStyles.SwiperStyles(theme)['Swiper'],
          dimensions.width
        )}
        dotActiveColor={theme.colors.primary}
        dotColor={theme.colors.light}
        dotsTouchable={true}
      >
        <SwiperItem />
      </Swiper>
    </ScreenContainer>
  );
};

export default withTheme(DuchangweiSwiperScreen);
