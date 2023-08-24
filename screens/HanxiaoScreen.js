import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import showAlertUtil from '../utils/showAlert';
import { Button, ScreenContainer, TextInput, withTheme } from '@draftbit/ui';
import { FlashList } from '@shopify/flash-list';
import { Text, View, useWindowDimensions } from 'react-native';
import { Fetch } from 'react-request';

const HanxiaoScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;

  const [checkboxValue, setCheckboxValue] = React.useState(false);
  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
  const [radioButtonGroupValue, setRadioButtonGroupValue] = React.useState('');
  const [switchValue, setSwitchValue] = React.useState(false);
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [textAreaValue2, setTextAreaValue2] = React.useState('');
  const [textAreaValue3, setTextAreaValue3] = React.useState('');
  const [textAreaValue4, setTextAreaValue4] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <View>
        <>
          <FlashList
            renderItem={({ item }) => {
              const flashListData = item;
              return null;
            }}
            data={[]}
            listKey={'SnGasEry'}
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
          <TextInput
            onChangeText={newTextAreaValue => {
              const textInputValue = newTextAreaValue;
              try {
                setTextAreaValue4(newTextAreaValue);
              } catch (err) {
                console.error(err);
              }
            }}
            onChangeTextDelayed={newTextAreaValue => {
              const textInputValue = newTextAreaValue;
              try {
                showAlertUtil({
                  title: 'APP',
                  message: newTextAreaValue,
                  buttonText: 'OK',
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              GlobalStyles.TextInputStyles(theme)['Text Area'],
              dimensions.width
            )}
            value={textAreaValue4}
            changeTextDelay={500}
            multiline={true}
            numberOfLines={4}
            placeholder={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            }
            textAlignVertical={'top'}
          />
          {/* Button 2 */}
          <Button
            style={StyleSheet.applyWidth(
              GlobalStyles.ButtonStyles(theme)['Button'],
              dimensions.width
            )}
            title={'Get Started'}
          />
          <Text
            style={StyleSheet.applyWidth(
              GlobalStyles.TextStyles(theme)['Text'],
              dimensions.width
            )}
          >
            {'Double click me to edit 👀'}
          </Text>
          <Button
            style={StyleSheet.applyWidth(
              GlobalStyles.ButtonStyles(theme)['Button'],
              dimensions.width
            )}
            title={'Get Started'}
          />
        </>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(HanxiaoScreen);
