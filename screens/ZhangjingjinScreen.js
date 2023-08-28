import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import * as CustomCode from '../custom-files/CustomCode';
import * as TestFile from '../custom-files/TestFile';
import * as Utils from '../utils';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
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

  const loginCheck = () => {
    TestFile.test();
  };

  const { theme } = props;

  const [ERRMSG, setERRMSG] = React.useState('账号或密码不能为空');
  const [loginFlg, setLoginFlg] = React.useState(false);
  const [nameStr, setNameStr] = React.useState('');
  const [passwordStr, setPasswordStr] = React.useState('');

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      {/* CustomCode */}
      <Utils.CustomCodeErrorBoundary>
        <TestFile.test />
      </Utils.CustomCodeErrorBoundary>
    </ScreenContainer>
  );
};

export default withTheme(ZhangjingjinScreen);
