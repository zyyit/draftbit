import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  AccordionGroup,
  Button,
  ScreenContainer,
  Surface,
  Switch,
  Table,
  TableCell,
  TableRow,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, useWindowDimensions } from 'react-native';

const ChengpengContainersScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;

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
        borderColor={theme.colors['Error']}
        borderStyle={'solid'}
        borderWidth={2}
        cellHorizontalPadding={50}
        cellVerticalPadding={50}
        drawBottomBorder={true}
        drawEndBorder={true}
        drawStartBorder={false}
        drawTopBorder={false}
        showsVerticalScrollIndicator={true}
      >
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
        </TableRow>
        {/* Table Row 2 */}
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
        </TableRow>
      </Table>
    </ScreenContainer>
  );
};

export default withTheme(ChengpengContainersScreen);
