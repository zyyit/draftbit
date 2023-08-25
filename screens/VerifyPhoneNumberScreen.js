import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Circle,
  Icon,
  ScreenContainer,
  Spacer,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const VerifyPhoneNumberScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;

  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');

  return (
    <ScreenContainer
      style={StyleSheet.applyWidth(
        { backgroundColor: theme.colors.studilyWhite4 },
        dimensions.width
      )}
      hasSafeArea={false}
      scrollable={false}
    >
      <KeyboardAwareScrollView
        contentContainerStyle={StyleSheet.applyWidth(
          {
            flex: 1,
            justifyContent: 'center',
            paddingBottom: 36,
            paddingLeft: 36,
            paddingRight: 36,
            paddingTop: 36,
          },
          dimensions.width
        )}
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={true}
      >
        <View>
          {/* Heading */}
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center' },
              dimensions.width
            )}
          >
            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.studilyMediumUI,
                  fontFamily: 'Nunito_700Bold',
                  fontSize: 32,
                },
                dimensions.width
              )}
            >
              {"Let's get started"}
            </Text>

            <Text
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.studilyLightGray2,
                  fontFamily: 'Nunito_600SemiBold',
                  fontSize: 16,
                  marginTop: 8,
                  textAlign: 'center',
                },
                dimensions.width
              )}
            >
              {'Verify your mobile number\nby entering it below'}
            </Text>
          </View>
          <Spacer bottom={16} left={8} right={8} top={16} />
          {/* Form */}
          <View>
            <View
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors.studilyWhite3,
                  borderBottomWidth: 1,
                  borderColor: theme.colors.studilyGray4,
                  borderLeftWidth: 1,
                  borderRadius: 12,
                  borderRightWidth: 1,
                  borderTopWidth: 1,
                  overflow: 'hidden',
                },
                dimensions.width
              )}
            >
              <View
                style={StyleSheet.applyWidth(
                  {
                    paddingBottom: 16,
                    paddingLeft: 16,
                    paddingRight: 16,
                    paddingTop: 16,
                  },
                  dimensions.width
                )}
              >
                <TextInput
                  onChangeText={newTextInputValue => {
                    try {
                      setTextInputValue(newTextInputValue);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.studilyMediumUI,
                      fontFamily: 'Nunito_500Medium',
                      fontSize: 16,
                      textAlign: 'center',
                    },
                    dimensions.width
                  )}
                  value={textInputValue}
                  placeholder={'512-234-5678'}
                  keyboardType={'email-address'}
                />
              </View>
            </View>
            <Spacer bottom={16} left={8} right={8} top={16} />
            {/* Login */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center' },
                dimensions.width
              )}
            >
              <Text
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.studilyLightGray2,
                    fontFamily: 'Nunito_600SemiBold',
                    textAlign: 'center',
                  },
                  dimensions.width
                )}
              >
                {
                  "We'll send you a text message with a 4-digit verification code. Carrier rates may apply."
                }
              </Text>
            </View>
          </View>
          <Spacer bottom={24} left={8} right={8} top={24} />
          {/* Button */}
          <View>
            {/* Touchable Frame */}
            <View
              style={StyleSheet.applyWidth({ zIndex: 10 }, dimensions.width)}
            >
              <Touchable>
                {/* CTA Frame */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      backgroundColor: theme.colors.studilyPrimary,
                      borderRadius: 12,
                      flexDirection: 'row',
                      paddingBottom: 12,
                      paddingLeft: 18,
                      paddingRight: 18,
                      paddingTop: 12,
                      zIndex: 10,
                    },
                    dimensions.width
                  )}
                >
                  {/* Label Frame */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        flexGrow: 1,
                        flexShrink: 0,
                        justifyContent: 'center',
                      },
                      dimensions.width
                    )}
                  >
                    {/* Label */}
                    <Text
                      style={StyleSheet.applyWidth(
                        {
                          color: theme.colors.studilyWhite3,
                          fontFamily: 'Nunito_700Bold',
                          fontSize: 15,
                          lineHeight: 21,
                          marginLeft: 42,
                          textTransform: 'uppercase',
                        },
                        dimensions.width
                      )}
                    >
                      {'Continue'}
                    </Text>
                  </View>
                  {/* Icon Group Frame */}
                  <View>
                    <Circle bgColor={theme.colors.studily25Percent} size={42}>
                      {/* Icon Flex Frame */}
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            flexGrow: 0,
                            flexShrink: 0,
                            paddingBottom: 12,
                            paddingLeft: 12,
                            paddingRight: 12,
                            paddingTop: 12,
                          },
                          dimensions.width
                        )}
                      >
                        {/* Icon  */}
                        <Icon
                          color={theme.colors.studilyWhite3}
                          name={'AntDesign/arrowright'}
                          size={18}
                        />
                      </View>
                    </Circle>
                  </View>
                </View>
              </Touchable>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(VerifyPhoneNumberScreen);
