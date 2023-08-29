import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  ActionSheet,
  ActionSheetCancel,
  ActionSheetItem,
  Button,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { Text, useWindowDimensions } from 'react-native';

const ZhangyuActionSheetScreen = props => {
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <Text
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
            alignSelf: 'center',
            marginTop: 200,
            textAlign: 'center',
          }),
          dimensions.width
        )}
      >
        {'Double click me to edit 👀'}
      </Text>
      <Button
        onPress={() => {
          try {
            setGlobalVariableValue({
              key: 'Visible',
              value: Constants['VisibleTrue'],
            });
          } catch (err) {
            console.error(err);
          }
        }}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'], {
            borderStyle: 'dotted',
            marginTop: 20,
          }),
          dimensions.width
        )}
        title={'Get Started'}
      />
      <ActionSheet visible={Constants['Visible']}>
        <ActionSheetItem
          style={StyleSheet.applyWidth(
            GlobalStyles.ActionSheetItemStyles(theme)['Action Sheet Item'],
            dimensions.width
          )}
          color={theme.colors.strong}
          label={'Option'}
        />
        {/* Action Sheet Item 2 */}
        <ActionSheetItem
          style={StyleSheet.applyWidth(
            GlobalStyles.ActionSheetItemStyles(theme)['Action Sheet Item'],
            dimensions.width
          )}
          color={theme.colors.strong}
          label={'Option'}
        />
        <ActionSheetCancel
          onPress={() => {
            try {
              setGlobalVariableValue({
                key: 'Visible',
                value: false,
              });
            } catch (err) {
              console.error(err);
            }
          }}
          label={'Cancel'}
        />
      </ActionSheet>
    </ScreenContainer>
  );
};

export default withTheme(ZhangyuActionSheetScreen);
