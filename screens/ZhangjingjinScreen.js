import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import showAlertUtil from '../utils/showAlert';
import {
  Button,
  Icon,
  Link,
  NumberInput,
  ScreenContainer,
  Table,
  TableCell,
  TableRow,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { ImageBackground, useWindowDimensions } from 'react-native';

const ZhangjingjinScreen = props => {
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  // }
  const loginCheck = (Variables, setGlobalVariableValue) => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.
    console.log('进入函数');
    console.log('name: ' + nameStr);
    console.log('password: ' + passwordStr);
    if (nameStr == '' || nameStr == '') {
      setLoginFlg(true);
    } else {
      setLoginFlg(false);
    }
    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */
  };

  const { theme } = props;

  const [ERRMSG, setERRMSG] = React.useState('账号或密码不能为空');
  const [loginFlg, setLoginFlg] = React.useState(false);
  const [nameStr, setNameStr] = React.useState('');
  const [passwordStr, setPasswordStr] = React.useState('');

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      {/* Background */}
      <ImageBackground
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.ImageBackgroundStyles(theme)['Image Background'],
            { position: 'relative' }
          ),
          dimensions.width
        )}
        resizeMode={'cover'}
        source={Images.Snipaste20230823172051}
      >
        {/* form */}
        <Table
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TableStyles(theme)['Table'], {
              backgroundColor: theme.colors['Light Inverse'],
              flex: 0,
              height: 300,
              left: 45,
              opacity: 0.4,
              overflow: 'hidden',
              position: 'absolute',
              top: 250,
              width: 300,
            }),
            dimensions.width
          )}
          borderColor={'"rgba(0, 0, 0, 0)"'}
          borderStyle={'solid'}
          borderWidth={1}
          cellHorizontalPadding={10}
          cellVerticalPadding={10}
          drawTopBorder={false}
          showsVerticalScrollIndicator={false}
        >
          <TableRow
            borderStyle={'dashed'}
            drawBottomBorder={false}
            drawStartBorder={false}
          >
            <TableCell
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TableCellStyles(theme)['Table Cell'],
                  {
                    alignItems: 'stretch',
                    flexDirection: 'column',
                    flexWrap: 'nowrap',
                    marginLeft: 20,
                    marginTop: 30,
                    overflow: 'hidden',
                    position: 'relative',
                  }
                ),
                dimensions.width
              )}
              drawEndBorder={false}
            >
              {/* findpassword_link */}
              <Link
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.LinkStyles(theme)['Link'], {
                    alignSelf: 'flex-end',
                    marginTop: 110,
                    textDecorationLine: 'underline',
                  }),
                  dimensions.width
                )}
                title={'忘记密码'}
              />
              {/* login */}
              <Button
                onPress={() => {
                  try {
                    loginCheck(Variables, setGlobalVariableValue);

                    showAlertUtil({
                      title: 'ERROR',
                      message: ERRMSG,
                      buttonText: 'OK',
                    });
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ButtonStyles(theme)['Button'],
                    {
                      borderRadius: 12,
                      borderWidth: 1,
                      height: 40,
                      overflow: 'hidden',
                      position: 'absolute',
                      top: 150,
                      width: 260,
                    }
                  ),
                  dimensions.width
                )}
                title={'登录'}
              />
              {/* password */}
              <NumberInput
                onChangeText={newPasswordValue => {
                  try {
                    setPasswordStr(newPasswordValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.NumberInputStyles(theme)['Number Input'],
                    {
                      borderColor: theme.colors['Strong'],
                      borderRadius: 12,
                      borderWidth: 1,
                      height: 40,
                      overflow: 'hidden',
                      paddingLeft: 35,
                      position: 'absolute',
                      top: 70,
                      width: 260,
                    }
                  ),
                  dimensions.width
                )}
                value={passwordStr}
                changeTextDelay={500}
                editable={true}
                placeholder={'密码'}
              />
              {/* name */}
              <TextInput
                onChangeText={newNameValue => {
                  try {
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextInputStyles(theme)['Text Input'],
                    {
                      borderColor: theme.colors['Strong'],
                      borderRadius: 12,
                      height: 40,
                      overflow: 'hidden',
                      paddingLeft: 40,
                      position: 'absolute',
                      width: 260,
                    }
                  ),
                  dimensions.width
                )}
                value={nameStr}
                placeholder={'账号/邮箱'}
                autoCapitalize={'none'}
                changeTextDelay={500}
              />
              {/* register */}
              <Link
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.LinkStyles(theme)['Link'], {
                    alignSelf: 'flex-end',
                    marginTop: 70,
                    textDecorationLine: 'underline',
                  }),
                  dimensions.width
                )}
                title={'注册'}
              />
              {/* Icon_name */}
              <Icon
                style={StyleSheet.applyWidth(
                  {
                    marginLeft: 5,
                    marginTop: 8,
                    overflow: 'hidden',
                    position: 'absolute',
                  },
                  dimensions.width
                )}
                name={'AntDesign/user'}
                size={24}
              />
              {/* Icon_password */}
              <Icon
                style={StyleSheet.applyWidth(
                  {
                    marginLeft: 5,
                    marginTop: 77,
                    overflow: 'hidden',
                    position: 'absolute',
                  },
                  dimensions.width
                )}
                name={'AntDesign/lock'}
                size={24}
              />
            </TableCell>
          </TableRow>
        </Table>
      </ImageBackground>
    </ScreenContainer>
  );
};

export default withTheme(ZhangjingjinScreen);
