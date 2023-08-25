import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  ActionSheet,
  ActionSheetCancel,
  ActionSheetItem,
  AudioPlayer,
  Button,
  IconButton,
  Markdown,
  ScreenContainer,
  Shadow,
  SwipeableItem,
  SwipeableItemButton,
  SwipeableList,
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
import { Fetch } from 'react-request';

const ZhangyuScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      {null}
    </ScreenContainer>
  );
};

export default withTheme(ZhangyuScreen);
