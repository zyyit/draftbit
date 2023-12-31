import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { ScreenContainer, withTheme } from '@draftbit/ui';
import { useWindowDimensions } from 'react-native';

const LOGINScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;

  const [checkboxValue, setCheckboxValue] = React.useState(false);

  return (
    <ScreenContainer
      style={StyleSheet.applyWidth(
        {
          alignItems: 'flex-start',
          alignSelf: 'auto',
          borderColor: 'rgb(204, 21, 21)',
        },
        dimensions.width
      )}
      hasSafeArea={false}
      scrollable={false}
    />
  );
};

export default withTheme(LOGINScreen);
