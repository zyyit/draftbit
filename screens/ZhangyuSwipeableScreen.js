import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  ScreenContainer,
  SwipeableItem,
  SwipeableList,
  withTheme,
} from '@draftbit/ui';
import { ScrollView, Text, useWindowDimensions } from 'react-native';
import { Fetch } from 'react-request';

const ZhangyuSwipeableScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <SwipeableList
        renderItem={({ item }) => {
          const swipeableListData = item;
          return (
            <SwipeableItem
              style={StyleSheet.applyWidth(
                GlobalStyles.SwipeableItemStyles(theme)['Swipeable Item'],
                dimensions.width
              )}
              closeOnPress={true}
              friction={20}
              swipeActivationPercentage={80}
              swipeToClosePercent={50}
              swipeToOpenPercent={50}
            >
              <ScrollView
                bounces={true}
                showsHorizontalScrollIndicator={true}
                showsVerticalScrollIndicator={true}
              >
                <Text
                  style={StyleSheet.applyWidth(
                    GlobalStyles.TextStyles(theme)['Text'],
                    dimensions.width
                  )}
                >
                  {null}
                </Text>
              </ScrollView>
              <Button
                style={StyleSheet.applyWidth(
                  GlobalStyles.ButtonStyles(theme)['Button'],
                  dimensions.width
                )}
                title={'Get Started'}
              />
            </SwipeableItem>
          );
        }}
        data={[]}
        listKey={'HOG1XTZ9'}
        keyExtractor={swipeableListData =>
          swipeableListData?.id ||
          swipeableListData?.uuid ||
          JSON.stringify(swipeableListData)
        }
        disableScrollWhenSwiping={true}
        estimatedItemSize={50}
        listComponent={'FlatList'}
        numColumns={1}
        onEndReachedThreshold={0.5}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
      />
    </ScreenContainer>
  );
};

export default withTheme(ZhangyuSwipeableScreen);
