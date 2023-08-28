import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  AccordionGroup,
  Button,
  Icon,
  ScreenContainer,
  Surface,
  Switch,
  Table,
  TableCell,
  TableRow,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, useWindowDimensions } from 'react-native';

const ChengpengContainersTableScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;
  const { navigation } = props;

  const [cp_message_button_text, setCp_message_button_text] =
    React.useState('cp确认');
  const [cp_message_ng, setCp_message_ng] = React.useState('错误');
  const [cp_message_ok, setCp_message_ok] = React.useState('正确');
  const [cp_message_title, setCp_message_title] = React.useState('输出信息');
  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
  const [pickerValue, setPickerValue] = React.useState('');
  const [switchValue, setSwitchValue] = React.useState(false);

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <AccordionGroup
        style={StyleSheet.applyWidth(
          GlobalStyles.AccordionGroupStyles(theme)['Accordion'],
          dimensions.width
        )}
        caretColor={theme.colors['Error']}
        caretSize={24}
        icon={'AntDesign/infocirlceo'}
        iconSize={24}
        label={'Beautiful West Coast Villa'}
      >
        <Text
          style={StyleSheet.applyWidth(
            GlobalStyles.TextStyles(theme)['Text'],
            dimensions.width
          )}
        >
          {'Double click me to edit 👀'}
        </Text>
        <Switch
          onValueChange={newSwitchValue => {
            const switchValue = newSwitchValue;
            try {
              setSwitchValue(newSwitchValue);
            } catch (err) {
              console.error(err);
            }
          }}
          value={switchValue}
        />
        <Image
          style={StyleSheet.applyWidth(
            GlobalStyles.ImageStyles(theme)['Image'],
            dimensions.width
          )}
          resizeMode={'cover'}
          source={{
            uri: 'https://static.draftbit.com/images/placeholder-image.png',
          }}
        />
      </AccordionGroup>

      <Surface
        style={StyleSheet.applyWidth(
          GlobalStyles.SurfaceStyles(theme)['Surface'],
          dimensions.width
        )}
        elevation={0}
      >
        <Button
          style={StyleSheet.applyWidth(
            GlobalStyles.ButtonStyles(theme)['Button'],
            dimensions.width
          )}
          title={'Get Started'}
        />
        <Text
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
              marginBottom: 20,
            }),
            dimensions.width
          )}
        >
          {'Double click me to edit 👀'}
        </Text>
      </Surface>

      <Table
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.TableStyles(theme)['Table'], {
            height: 80,
          }),
          dimensions.width
        )}
        borderStyle={'solid'}
        borderWidth={1}
        cellHorizontalPadding={10}
        cellVerticalPadding={10}
        drawBottomBorder={false}
        drawEndBorder={false}
        drawStartBorder={false}
        drawTopBorder={true}
        showsVerticalScrollIndicator={true}
      >
        <TableRow
          borderColor={'"rgba(0, 0, 0, 0)"'}
          drawBottomBorder={true}
          drawStartBorder={true}
          isTableHeader={true}
        >
          <TableCell
            style={StyleSheet.applyWidth(
              GlobalStyles.TableCellStyles(theme)['Table Cell'],
              dimensions.width
            )}
            drawEndBorder={true}
          >
            <Text
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  color: theme.colors['Surface'],
                }),
                dimensions.width
              )}
            >
              {'姓名'}
            </Text>
          </TableCell>
          {/* Table Cell 2 */}
          <TableCell
            style={StyleSheet.applyWidth(
              GlobalStyles.TableCellStyles(theme)['Table Cell'],
              dimensions.width
            )}
            drawEndBorder={true}
          >
            <Text
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  color: theme.colors['Surface'],
                }),
                dimensions.width
              )}
            >
              {'年龄'}
            </Text>
          </TableCell>
          {/* Table Cell 3 */}
          <TableCell
            style={StyleSheet.applyWidth(
              GlobalStyles.TableCellStyles(theme)['Table Cell'],
              dimensions.width
            )}
            drawEndBorder={true}
          >
            <Text
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  color: theme.colors['Surface'],
                }),
                dimensions.width
              )}
            >
              {'头像'}
            </Text>
          </TableCell>
        </TableRow>
        {/* Table Row 2 */}
        <TableRow drawBottomBorder={true} drawStartBorder={true}>
          <TableCell
            style={StyleSheet.applyWidth(
              GlobalStyles.TableCellStyles(theme)['Table Cell'],
              dimensions.width
            )}
            drawEndBorder={true}
          >
            <Text
              style={StyleSheet.applyWidth(
                GlobalStyles.TextStyles(theme)['Text'],
                dimensions.width
              )}
            >
              {'小王'}
            </Text>
          </TableCell>
          {/* Table Cell 2 */}
          <TableCell
            style={StyleSheet.applyWidth(
              GlobalStyles.TableCellStyles(theme)['Table Cell'],
              dimensions.width
            )}
            drawEndBorder={true}
          >
            <Text
              style={StyleSheet.applyWidth(
                GlobalStyles.TextStyles(theme)['Text'],
                dimensions.width
              )}
            >
              {'23'}
            </Text>
          </TableCell>
          {/* Table Cell 3 */}
          <TableCell
            style={StyleSheet.applyWidth(
              GlobalStyles.TableCellStyles(theme)['Table Cell'],
              dimensions.width
            )}
            drawEndBorder={true}
          >
            <Icon name={'FontAwesome/photo'} size={24} />
          </TableCell>
        </TableRow>
        {/* Table Row 3 */}
        <TableRow drawBottomBorder={true} drawStartBorder={true}>
          <TableCell
            style={StyleSheet.applyWidth(
              GlobalStyles.TableCellStyles(theme)['Table Cell'],
              dimensions.width
            )}
            drawEndBorder={true}
          />
          {/* Table Cell 2 */}
          <TableCell
            style={StyleSheet.applyWidth(
              GlobalStyles.TableCellStyles(theme)['Table Cell'],
              dimensions.width
            )}
            drawEndBorder={true}
          />
          {/* Table Cell 3 */}
          <TableCell
            style={StyleSheet.applyWidth(
              GlobalStyles.TableCellStyles(theme)['Table Cell'],
              dimensions.width
            )}
            drawEndBorder={true}
          />
        </TableRow>
        {/* Table Row 4 */}
        <TableRow drawBottomBorder={true} drawStartBorder={true}>
          <TableCell
            style={StyleSheet.applyWidth(
              GlobalStyles.TableCellStyles(theme)['Table Cell'],
              dimensions.width
            )}
            drawEndBorder={true}
          />
          {/* Table Cell 2 */}
          <TableCell
            style={StyleSheet.applyWidth(
              GlobalStyles.TableCellStyles(theme)['Table Cell'],
              dimensions.width
            )}
            drawEndBorder={true}
          />
          {/* Table Cell 3 */}
          <TableCell
            style={StyleSheet.applyWidth(
              GlobalStyles.TableCellStyles(theme)['Table Cell'],
              dimensions.width
            )}
            drawEndBorder={true}
          />
        </TableRow>
        {/* Table Row 5 */}
        <TableRow drawBottomBorder={true} drawStartBorder={true}>
          <TableCell
            style={StyleSheet.applyWidth(
              GlobalStyles.TableCellStyles(theme)['Table Cell'],
              dimensions.width
            )}
            drawEndBorder={true}
          />
          {/* Table Cell 2 */}
          <TableCell
            style={StyleSheet.applyWidth(
              GlobalStyles.TableCellStyles(theme)['Table Cell'],
              dimensions.width
            )}
            drawEndBorder={true}
          />
          {/* Table Cell 3 */}
          <TableCell
            style={StyleSheet.applyWidth(
              GlobalStyles.TableCellStyles(theme)['Table Cell'],
              dimensions.width
            )}
            drawEndBorder={true}
          />
        </TableRow>
      </Table>
      <Button
        onPress={() => {
          try {
            navigation.navigate('ListzyyScreen');
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
    </ScreenContainer>
  );
};

export default withTheme(ChengpengContainersTableScreen);
