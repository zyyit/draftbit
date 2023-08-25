import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as DraftbitExampleApi from '../apis/DraftbitExampleApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import openShareUtil from '../utils/openShare';
import showAlertUtil from '../utils/showAlert';
import {
  Button,
  Link,
  ScreenContainer,
  Swiper,
  SwiperItem,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import {
  ActivityIndicator,
  ImageBackground,
  Platform,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const HanxiaoScreen = props => {
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const { theme } = props;
  const { navigation } = props;

  const [checkboxValue, setCheckboxValue] = React.useState(false);
  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
  const [datePickerValue2, setDatePickerValue2] = React.useState(new Date());
  const [numberInputValue, setNumberInputValue] = React.useState('');
  const [pickerValue, setPickerValue] = React.useState('');
  const [r1, setR1] = React.useState('');
  const [r2, setR2] = React.useState('aaa');
  const [radioButtonGroupValue, setRadioButtonGroupValue] = React.useState('');
  const [styledTextFieldValue, setStyledTextFieldValue] = React.useState('');
  const [switchValue, setSwitchValue] = React.useState(false);
  const [text1Val, setText1Val] = React.useState('');
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [textAreaValue2, setTextAreaValue2] = React.useState('');
  const [textAreaValue3, setTextAreaValue3] = React.useState('');
  const [textAreaValue4, setTextAreaValue4] = React.useState('');
  const [textAreaValue5, setTextAreaValue5] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');
  const [textInputValue3, setTextInputValue3] = React.useState('');

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <DraftbitExampleApi.FetchDoctorsListGET count={6}>
        {({ loading, error, data, refetchDoctorsList }) => {
          const fetchData = data?.json;
          if (loading) {
            return <ActivityIndicator />;
          }

          if (error || data?.status < 200 || data?.status >= 300) {
            return <ActivityIndicator />;
          }

          return (
            <View>
              <FlashList
                renderItem={({ item }) => {
                  const flashListData = item;
                  return (
                    <View
                      style={StyleSheet.applyWidth(
                        { flex: 1 },
                        dimensions.width
                      )}
                    >
                      <TextInput
                        onFocus={() => {
                          const textInputValue = undefined;
                          try {
                            navigation.goBack();
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        style={StyleSheet.applyWidth(
                          GlobalStyles.TextInputStyles(theme)['Text Area'],
                          dimensions.width
                        )}
                        changeTextDelay={500}
                        defaultValue={flashListData?.city}
                        multiline={true}
                        numberOfLines={4}
                        placeholder={
                          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                        }
                        textAlignVertical={'top'}
                      />
                    </View>
                  );
                }}
                data={fetchData}
                listKey={'SnGasEry'}
                keyExtractor={flashListData =>
                  flashListData?.id ||
                  flashListData?.uuid ||
                  JSON.stringify(flashListData)
                }
                contentContainerStyle={StyleSheet.applyWidth(
                  { backgroundColor: theme.colors['Secondary'] },
                  dimensions.width
                )}
                estimatedItemSize={10}
                horizontal={false}
                inverted={false}
                numColumns={2}
                onEndReachedThreshold={0.5}
                showsHorizontalScrollIndicator={true}
                showsVerticalScrollIndicator={true}
              />
              <View>
                <Button
                  onPress={() => {
                    try {
                      navigation.navigate('LOGINScreen', {
                        user: 'lm',
                        ok: 'yes',
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.ButtonStyles(theme)['Button'],
                    dimensions.width
                  )}
                  title={'页面跳转'}
                />
                <Link
                  style={StyleSheet.applyWidth(
                    GlobalStyles.LinkStyles(theme)['Link'],
                    dimensions.width
                  )}
                  title={'Get Started'}
                />
                {/* Button 2 */}
                <Button
                  onPress={() => {
                    try {
                      const e1 = fetchData?.[2].email;
                      setR1(e1);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
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
                  {r1}
                </Text>
              </View>
            </View>
          );
        }}
      </DraftbitExampleApi.FetchDoctorsListGET>
      <View>
        <Swiper
          style={StyleSheet.applyWidth(
            GlobalStyles.SwiperStyles(theme)['Swiper'],
            dimensions.width
          )}
          dotActiveColor={theme.colors.primary}
          dotColor={theme.colors.light}
          dotsTouchable={true}
        >
          <SwiperItem
            style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
          >
            <ImageBackground
              style={StyleSheet.applyWidth(
                GlobalStyles.ImageBackgroundStyles(theme)['Image Background'],
                dimensions.width
              )}
              resizeMode={'cover'}
              source={Images.Logo}
            />
          </SwiperItem>
          {/* Swiper Item 2 */}
          <SwiperItem
            style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
          />
        </Swiper>
        <Button
          onPress={() => {
            const handler = async () => {
              try {
                const d1 = (
                  await DraftbitExampleApi.doctorsListGET(Constants, {
                    count: 6,
                  })
                )?.json;
                const r2 = d1?.[0].first_name;

                showAlertUtil({
                  title: undefined,
                  message: 110,
                  buttonText: undefined,
                });
              } catch (err) {
                console.error(err);
              }
            };
            handler();
          }}
          style={StyleSheet.applyWidth(
            GlobalStyles.ButtonStyles(theme)['Button'],
            dimensions.width
          )}
          title={'Get Started'}
        />
        {/* Button 2 */}
        <Button
          onPress={() => {
            const handler = async () => {
              try {
                showAlertUtil({
                  title: undefined,
                  message: r2,
                  buttonText: undefined,
                });

                await openShareUtil('https://baidu.com/');
              } catch (err) {
                console.error(err);
              }
            };
            handler();
          }}
          style={StyleSheet.applyWidth(
            GlobalStyles.ButtonStyles(theme)['Button'],
            dimensions.width
          )}
          title={'Get Started'}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(HanxiaoScreen);
