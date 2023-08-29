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

  const [textInput2Value, setTextInput2Value] = React.useState('');

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <View
        style={StyleSheet.applyWidth(
          { alignItems: 'center', marginTop: 200 },
          dimensions.width
        )}
      >
        <View>
          {/* Text Input 2 */}
          <TextInput
            style={StyleSheet.applyWidth(
              GlobalStyles.TextInputStyles(theme)['Text Input'],
              dimensions.width
            )}
            value={textInput2Value}
            autoCapitalize={'none'}
            changeTextDelay={500}
            placeholder={'Enter a value...'}
          />
          {/* 插入 */}
          <Button
            onPress={() => {
              const handler = async () => {
                try {
                  const data = (
                    await organization2AddrolePOST.mutateAsync({ roleCd: 4 })
                  )?.json;
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
          {/* 插入 2 */}
          <Button
            onPress={() => {
              const handler = async () => {
                try {
                  const data = (
                    await organization2AddrolePOST.mutateAsync({ roleCd: 4 })
                  )?.json;
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
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(DuchangweiSwiperScreen);
