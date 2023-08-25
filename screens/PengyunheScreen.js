import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as BelongingPlaceApi from '../apis/BelongingPlaceApi.js';
import * as DraftbitExampleApi from '../apis/DraftbitExampleApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Button, NumberInput, ScreenContainer, withTheme } from '@draftbit/ui';
import { H4 } from '@expo/html-elements';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const PengyunheScreen = props => {
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const { theme } = props;

  const [numberInputValue, setNumberInputValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      {/* title */}
      <View
        style={StyleSheet.applyWidth(
          { flexDirection: 'column', marginLeft: 10 },
          dimensions.width
        )}
      >
        <H4
          style={StyleSheet.applyWidth(
            GlobalStyles.H4Styles(theme)['H4'],
            dimensions.width
          )}
        >
          {'查询电话号码归属地'}
        </H4>
      </View>
      {/* condition */}
      <View
        style={StyleSheet.applyWidth(
          { flexDirection: 'row', marginLeft: 10 },
          dimensions.width
        )}
      >
        <Text
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
              marginTop: 12,
            }),
            dimensions.width
          )}
        >
          {'电话号码：'}
        </Text>
        <NumberInput
          onChangeText={newNumberInputValue => {
            const numberInputValue = newNumberInputValue;
            try {
              setNumberInputValue(newNumberInputValue);
            } catch (err) {
              console.error(err);
            }
          }}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.NumberInputStyles(theme)['Number Input'],
              { borderColor: theme.colors['Strong'] }
            ),
            dimensions.width
          )}
          value={numberInputValue}
          changeTextDelay={500}
          editable={true}
          placeholder={'请输入电话号码'}
          placeholderTextColor={theme.colors['Custom Color_16']}
        />
        <Button
          onPress={() => {
            const handler = async () => {
              try {
                (await BelongingPlaceApi.getBelongingPlaceGET(Constants))?.json;
              } catch (err) {
                console.error(err);
              }
            };
            handler();
          }}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'], {
              fontSize: 16,
              marginLeft: 15,
              width: 80,
            }),
            dimensions.width
          )}
          title={'查   询'}
        />
      </View>

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
            <FlatList
              renderItem={({ item }) => {
                const listData = item;
                return (
                  <>
                    {/* result */}
                    <View
                      style={StyleSheet.applyWidth(
                        { marginLeft: 10 },
                        dimensions.width
                      )}
                    >
                      {/* prov */}
                      <Text
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'],
                            { marginTop: 10 }
                          ),
                          dimensions.width
                        )}
                      >
                        {'省：'}
                        {fetchData?.code}
                      </Text>
                      {/* name */}
                      <Text
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'],
                            { marginTop: 10 }
                          ),
                          dimensions.width
                        )}
                      >
                        {'运营商：'}
                      </Text>
                      {/* areaCode */}
                      <Text
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'],
                            { marginTop: 10 }
                          ),
                          dimensions.width
                        )}
                      >
                        {'区域代码：'}
                      </Text>
                      {/* postCode */}
                      <Text
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'],
                            { marginTop: 10 }
                          ),
                          dimensions.width
                        )}
                      >
                        {'邮政编码：'}
                      </Text>
                      {/* cityCode */}
                      <Text
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'],
                            { marginTop: 10 }
                          ),
                          dimensions.width
                        )}
                      >
                        {'行政编码：'}
                      </Text>
                      {/* provCode */}
                      <Text
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'],
                            { marginTop: 10 }
                          ),
                          dimensions.width
                        )}
                      >
                        {'省行政编码：'}
                      </Text>
                    </View>
                  </>
                );
              }}
              data={fetchData}
              listKey={'DahzRYbl'}
              keyExtractor={listData =>
                listData?.id || listData?.uuid || JSON.stringify(listData)
              }
              numColumns={1}
              onEndReachedThreshold={0.5}
              showsHorizontalScrollIndicator={true}
              showsVerticalScrollIndicator={true}
            />
          );
        }}
      </DraftbitExampleApi.FetchDoctorsListGET>
    </ScreenContainer>
  );
};

export default withTheme(PengyunheScreen);
