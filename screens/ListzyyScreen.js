import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as DraftbitExampleApi from '../apis/DraftbitExampleApi.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Button,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const ListzyyScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasSafeArea={true}
      hasTopSafeArea={false}
      scrollable={false}
    >
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
          {'Hospital'}
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={StyleSheet.applyWidth(
          {
            marginTop: 10,
            paddingBottom: 20,
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 10,
          },
          dimensions.width
        )}
        bounces={true}
        showsVerticalScrollIndicator={true}
      >
        <Button
          onPress={() => {
            try {
              console.log();
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'], {
              backgroundColor: theme.colors['Primary'],
            }),
            dimensions.width
          )}
          title={'検索'}
        />
        {/* Medicine List */}
        <DraftbitExampleApi.FetchDoctorsListGET count={6}>
          {({ loading, error, data, refetchDoctorsList }) => {
            const medicineListData = data?.json;
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
                      style={StyleSheet.applyWidth(
                        { marginTop: 20 },
                        dimensions.width
                      )}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            backgroundColor: theme.colors['Custom Color'],
                            borderRadius: 12,
                            flexDirection: 'row',
                            height: 104,
                            paddingLeft: 12,
                          },
                          dimensions.width
                        )}
                      >
                        <Image
                          style={StyleSheet.applyWidth(
                            { borderRadius: 4, height: 80, width: 80 },
                            dimensions.width
                          )}
                          resizeMode={'cover'}
                          source={{ uri: 'https://picsum.photos/64' }}
                        />
                        <View
                          style={StyleSheet.applyWidth(
                            { flex: 1, marginLeft: 15 },
                            dimensions.width
                          )}
                        >
                          {/* Name */}
                          <Text
                            style={StyleSheet.applyWidth(
                              {
                                color: theme.colors.strong,
                                fontFamily: 'Inter_500Medium',
                                fontSize: 16,
                              },
                              dimensions.width
                            )}
                          >
                            {flashListData?.last_name}
                            {' Hospital'}
                          </Text>
                          {/* Address */}
                          <Text
                            style={StyleSheet.applyWidth(
                              {
                                color: theme.colors.strong,
                                fontFamily: 'Inter_300Light',
                                fontSize: 12,
                                marginTop: 5,
                                opacity: 0.7,
                              },
                              dimensions.width
                            )}
                          >
                            {'Jl. Prapatan No 26, Labuan, Malang'}
                          </Text>
                          {/* Distance */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                flexDirection: 'row',
                                marginTop: 12,
                              },
                              dimensions.width
                            )}
                          >
                            <Icon
                              color={theme.colors['Primary']}
                              name={'FontAwesome/location-arrow'}
                              size={20}
                            />
                            <Text
                              style={StyleSheet.applyWidth(
                                {
                                  color: theme.colors['Primary'],
                                  fontFamily: 'Inter_400Regular',
                                  fontSize: 13,
                                  marginLeft: 5,
                                },
                                dimensions.width
                              )}
                            >
                              {flashListData?.id}
                              {' KM'}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </Touchable>
                  );
                }}
                data={medicineListData}
                listKey={'SnybTfke'}
                keyExtractor={flashListData =>
                  flashListData?.id ||
                  flashListData?.uuid ||
                  JSON.stringify(flashListData)
                }
                contentContainerStyle={StyleSheet.applyWidth(
                  { flex: 1 },
                  dimensions.width
                )}
                estimatedItemSize={50}
                numColumns={1}
              />
            );
          }}
        </DraftbitExampleApi.FetchDoctorsListGET>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(ListzyyScreen);
