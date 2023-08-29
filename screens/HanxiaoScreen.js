import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as Organization2Api from '../apis/Organization2Api.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import showAlertUtil from '../utils/showAlert';
import {
  MapCallout,
  MapMarker,
  MapMarkerCluster,
  MapView,
} from '@draftbit/maps';
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

  const organization2AddrolePOST = Organization2Api.useAddrolePOST();

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

  const mapViewTMEmnkdLRef = React.useRef();

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <Organization2Api.FetchAddrolePOST roleCd={55}>
        {({ loading, error, data, refetchAddrole }) => {
          const fetchData = data?.json;
          if (loading) {
            return <ActivityIndicator />;
          }

          if (error || data?.status < 200 || data?.status >= 300) {
            return <ActivityIndicator />;
          }

          return <></>;
        }}
      </Organization2Api.FetchAddrolePOST>
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
                  await organization2AddrolePOST.mutateAsync({ roleCd: 6 })
                )?.json;
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
                const erR = await organization2AddrolePOST.mutateAsync({
                  roleCd: 132,
                });

                showAlertUtil({
                  title: 'Message',
                  message: erR,
                  buttonText: 'OK',
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
      </View>
    </ScreenContainer>
  );
};

export default withTheme(HanxiaoScreen);
