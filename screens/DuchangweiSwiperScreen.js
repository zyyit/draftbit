import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as Organization2Api from '../apis/Organization2Api.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Button, ScreenContainer, TextInput, withTheme } from '@draftbit/ui';
import { StatusBar, View, useWindowDimensions } from 'react-native';

const DuchangweiSwiperScreen = props => {
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const { theme } = props;

  React.useEffect(() => {
    StatusBar.setBarStyle('light-content');
  }, []);

  const organization2AddrolePOST = Organization2Api.useAddrolePOST();

  const [starRatingValue, setStarRatingValue] = React.useState(0);
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <View
        style={StyleSheet.applyWidth(
          { alignItems: 'center', marginTop: 200 },
          dimensions.width
        )}
      >
        <View>
          <TextInput
            onChangeText={newTextInputValue => {
              const textInputValue = newTextInputValue;
              try {
                setTextInputValue(textInputValue);
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              GlobalStyles.TextInputStyles(theme)['Text Input'],
              dimensions.width
            )}
            value={textInputValue2}
            autoCapitalize={'none'}
            changeTextDelay={500}
            placeholder={'Enter a value...'}
          />
        </View>
      </View>
      {/* 插入 */}
      <Button
        onPress={() => {
          const handler = async () => {
            try {
              (await organization2AddrolePOST.mutateAsync())?.json;
            } catch (err) {
              console.error(err);
            }
          };
          handler();
        }}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'], {
            marginTop: 40,
          }),
          dimensions.width
        )}
        title={'角色添加'}
      />
    </ScreenContainer>
  );
};

export default withTheme(DuchangweiSwiperScreen);
