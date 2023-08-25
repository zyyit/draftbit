import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as DraftbitExampleApi from '../apis/DraftbitExampleApi.js';
import * as TodosApi from '../apis/TodosApi.js';
import * as CustomCode from '../custom-files/CustomCode';
import * as Utils from '../utils';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Button, NumberInput, ScreenContainer, withTheme } from '@draftbit/ui';
import { H4 } from '@expo/html-elements';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const PengyunheScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;

  const [numberInputValue, setNumberInputValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      {/* CustomCode */}
      <Utils.CustomCodeErrorBoundary>
        <CustomCode.BarChartComponent />
      </Utils.CustomCodeErrorBoundary>
      {/* title */}
      <View
        style={StyleSheet.applyWidth(
          { flexDirection: 'column', marginLeft: 10, marginTop: 20 },
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

      <H4
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.H4Styles(theme)['H4'], {
            marginLeft: 10,
          }),
          dimensions.width
        )}
      >
        {'显示单条数据'}
      </H4>
      {/* Fetch 2 */}
      <TodosApi.FetchGetTodosGET>
        {({ loading, error, data, refetchGetTodos }) => {
          const fetch2Data = data?.json;
          if (loading) {
            return <ActivityIndicator />;
          }

          if (error || data?.status < 200 || data?.status >= 300) {
            return <ActivityIndicator />;
          }

          return (
            <View
              style={StyleSheet.applyWidth(
                { marginLeft: 10 },
                dimensions.width
              )}
            >
              {/* id */}
              <Text
                style={StyleSheet.applyWidth(
                  GlobalStyles.TextStyles(theme)['Text'],
                  dimensions.width
                )}
              >
                {'id：'}
                {fetch2Data?.id}
              </Text>
              {/* name */}
              <Text
                style={StyleSheet.applyWidth(
                  GlobalStyles.TextStyles(theme)['Text'],
                  dimensions.width
                )}
              >
                {'name：'}
                {fetch2Data?.name}
              </Text>
              {/* description */}
              <Text
                style={StyleSheet.applyWidth(
                  GlobalStyles.TextStyles(theme)['Text'],
                  dimensions.width
                )}
              >
                {'description：'}
                {fetch2Data?.description}
              </Text>
              <Image
                style={StyleSheet.applyWidth(
                  GlobalStyles.ImageStyles(theme)['Image'],
                  dimensions.width
                )}
                resizeMode={'cover'}
                source={{ uri: `${fetch2Data?.image_url}` }}
              />
            </View>
          );
        }}
      </TodosApi.FetchGetTodosGET>
      {/* H4 2 */}
      <H4
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.H4Styles(theme)['H4'], {
            marginLeft: 10,
          }),
          dimensions.width
        )}
      >
        {'显示List'}
      </H4>

      <DraftbitExampleApi.FetchDoctorsListGET count={3}>
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
                        {
                          borderColor: theme.colors['Strong'],
                          borderRadius: 1,
                          borderStyle: 'dotted',
                          borderWidth: 1,
                          marginLeft: 10,
                        },
                        dimensions.width
                      )}
                    >
                      {/* city */}
                      <Text
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'],
                            { marginTop: 10 }
                          ),
                          dimensions.width
                        )}
                      >
                        {'city：'}
                        {listData?.city}
                      </Text>
                      {/* email */}
                      <Text
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'],
                            { marginTop: 10 }
                          ),
                          dimensions.width
                        )}
                      >
                        {'email：'}
                        {listData?.email}
                      </Text>
                      {/* country */}
                      <Text
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'],
                            { marginTop: 10 }
                          ),
                          dimensions.width
                        )}
                      >
                        {'country：'}
                        {listData?.country}
                      </Text>
                      <Image
                        style={StyleSheet.applyWidth(
                          GlobalStyles.ImageStyles(theme)['Image'],
                          dimensions.width
                        )}
                        resizeMode={'cover'}
                        source={{ uri: `${listData?.bgimage}` }}
                      />
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
