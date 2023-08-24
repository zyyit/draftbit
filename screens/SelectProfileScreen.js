import React from 'react';
import * as DraftbitExampleApi from '../apis/DraftbitExampleApi.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  Icon,
  RadioButton,
  RadioButtonGroup,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import {
  ActivityIndicator,
  Image,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const SelectProfileScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

  const [radioButtonGroupValue, setRadioButtonGroupValue] = React.useState('');

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          { alignItems: 'center', flexDirection: 'row', paddingLeft: 20 },
          dimensions.width
        )}
      >
        {/* Back btn */}
        <Touchable
          onPress={() => {
            try {
              navigation.goBack();
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 44,
                justifyContent: 'center',
                width: 44,
              },
              dimensions.width
            )}
          >
            <Icon name={'AntDesign/arrowleft'} size={24} />
          </View>
        </Touchable>
        {/* Screen Heading */}
        <Text
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.strong,
              fontFamily: 'Inter_500Medium',
              fontSize: 16,
              marginLeft: 10,
            },
            dimensions.width
          )}
        >
          {'Select Another Profile'}
        </Text>
      </View>

      <View
        style={StyleSheet.applyWidth(
          { flex: 1, marginTop: 20, paddingLeft: 20, paddingRight: 20 },
          dimensions.width
        )}
      >
        {/* Disclaimer */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              backgroundColor: theme.colors['Custom Color_6'],
              borderRadius: 4,
              flexDirection: 'row',
              height: 40,
              paddingLeft: 10,
            },
            dimensions.width
          )}
        >
          <Icon
            color={theme.colors['Primary']}
            name={'Ionicons/ios-information-circle-outline'}
            size={20}
          />
          <Text
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontFamily: 'Inter_300Light',
                fontSize: 12,
                marginLeft: 10,
              },
              dimensions.width
            )}
          >
            {'By default the main profile will be selected'}
          </Text>
        </View>

        <RadioButtonGroup
          onValueChange={newRadioButtonGroupValue => {
            const radioButtonGroupValue = newRadioButtonGroupValue;
            try {
              setRadioButtonGroupValue(newRadioButtonGroupValue);
            } catch (err) {
              console.error(err);
            }
          }}
          value={radioButtonGroupValue}
        >
          {/* Profiles */}
          <DraftbitExampleApi.FetchDoctorsListGET count={3}>
            {({ loading, error, data, refetchDoctorsList }) => {
              const profilesData = data?.json;
              if (loading) {
                return <ActivityIndicator />;
              }

              if (error || data?.status < 200 || data?.status >= 300) {
                return <ActivityIndicator />;
              }

              return (
                <FlashList
                  renderItem={({ item }) => {
                    const flashListData = item;
                    return (
                      <Touchable
                        onPress={() => {
                          try {
                            setRadioButtonGroupValue(flashListData?.id);
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                      >
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'center',
                              flexDirection: 'row',
                              marginTop: 20,
                            },
                            dimensions.width
                          )}
                        >
                          <RadioButton
                            value={flashListData?.id}
                            color={theme.colors.primary}
                            selectedIcon={'MaterialIcons/radio-button-checked'}
                            size={24}
                            unselectedColor={theme.colors.primary}
                            unselectedIcon={
                              'MaterialIcons/radio-button-unchecked'
                            }
                          />
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                backgroundColor: theme.colors['Custom Color'],
                                borderRadius: 12,
                                flex: 1,
                                flexDirection: 'row',
                                marginLeft: 10,
                                paddingBottom: 20,
                                paddingLeft: 20,
                                paddingRight: 20,
                                paddingTop: 20,
                              },
                              dimensions.width
                            )}
                          >
                            <Image
                              style={StyleSheet.applyWidth(
                                { borderRadius: 4, height: 64, width: 64 },
                                dimensions.width
                              )}
                              resizeMode={'cover'}
                              source={{ uri: `${flashListData?.avatar}` }}
                            />
                            <View
                              style={StyleSheet.applyWidth(
                                { marginLeft: 12 },
                                dimensions.width
                              )}
                            >
                              {/* Name */}
                              <Text
                                style={StyleSheet.applyWidth(
                                  {
                                    color: theme.colors.strong,
                                    fontFamily: 'Inter_500Medium',
                                    fontSize: 18,
                                    marginBottom: 5,
                                  },
                                  dimensions.width
                                )}
                              >
                                {flashListData?.first_name}
                              </Text>
                              {/* Relation */}
                              <Text
                                style={StyleSheet.applyWidth(
                                  {
                                    color: theme.colors.strong,
                                    fontFamily: 'Inter_300Light',
                                    fontSize: 12,
                                    opacity: 0.4,
                                  },
                                  dimensions.width
                                )}
                              >
                                {flashListData?.job_title}
                              </Text>
                            </View>
                          </View>
                        </View>
                      </Touchable>
                    );
                  }}
                  data={profilesData}
                  listKey={'NzePVQ47'}
                  keyExtractor={flashListData =>
                    flashListData?.id ||
                    flashListData?.uuid ||
                    JSON.stringify(flashListData)
                  }
                  estimatedItemSize={50}
                  numColumns={1}
                />
              );
            }}
          </DraftbitExampleApi.FetchDoctorsListGET>
        </RadioButtonGroup>
        {/* Add New Profile */}
        <Button
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['Custom Color'],
              borderBottomWidth: 1,
              borderColor: theme.colors['Light'],
              borderLeftWidth: 1,
              borderRadius: 6,
              borderRightWidth: 1,
              borderTopWidth: 1,
              color: theme.colors['Strong'],
              fontFamily: 'Inter_400Regular',
              fontSize: 15,
              height: 40,
              marginBottom: 50,
              marginTop: 25,
              textAlign: 'center',
            },
            dimensions.width
          )}
          title={'Add New Profile'}
        />
      </View>
      {/* Select Profile */}
      <Button
        onPress={() => {
          try {
            navigation.goBack();
          } catch (err) {
            console.error(err);
          }
        }}
        style={StyleSheet.applyWidth(
          {
            backgroundColor: theme.colors.primary,
            borderRadius: 12,
            fontFamily: 'Inter_500Medium',
            fontSize: 15,
            height: 52,
            marginBottom: 25,
            marginLeft: 20,
            marginRight: 20,
            textAlign: 'center',
          },
          dimensions.width
        )}
        title={'Select Profile'}
      />
    </ScreenContainer>
  );
};

export default withTheme(SelectProfileScreen);
