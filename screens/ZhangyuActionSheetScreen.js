import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  ActionSheet,
  ActionSheetItem,
  Button,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { Text, useWindowDimensions } from 'react-native';

const ZhangyuActionSheetScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <Text
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
            alignSelf: 'center',
            marginTop: 200,
          }),
          dimensions.width
        )}
      >
        {'Double click me to edit 👀'}
      </Text>
      <Button
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'], {
            marginLeft: 50,
            marginTop: 20,
            width: '70%',
          }),
          dimensions.width
        )}
        title={'Get Started'}
      />
      <ActionSheet>
        <ActionSheetItem
          style={StyleSheet.applyWidth(
            GlobalStyles.ActionSheetItemStyles(theme)['Action Sheet Item'],
            dimensions.width
          )}
          color={theme.colors.strong}
          label={'Option'}
        />
      </ActionSheet>
    </ScreenContainer>
  );
};

export default withTheme(ZhangyuActionSheetScreen);
