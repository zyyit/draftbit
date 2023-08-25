import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  IconButton,
  Markdown,
  ScreenContainer,
  Shadow,
  SwipeableItem,
  TabView,
  TabViewItem,
  withTheme,
} from '@draftbit/ui';
import { H1, H2, H3, H4, H5, H6 } from '@expo/html-elements';
import { FlashList } from '@shopify/flash-list';
import { BlurView } from 'expo-blur';
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  useWindowDimensions,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const ZhangyuScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <FlashList
        renderItem={({ item }) => {
          const flashListData = item;
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
            />
          );
        }}
        data={[]}
        listKey={'zC3JOZb1'}
        keyExtractor={flashListData =>
          flashListData?.id ||
          flashListData?.uuid ||
          JSON.stringify(flashListData)
        }
        estimatedItemSize={50}
        numColumns={1}
        onEndReachedThreshold={0.5}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
      />
    </ScreenContainer>
  );
};

export default withTheme(ZhangyuScreen);
