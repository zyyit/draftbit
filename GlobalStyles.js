import * as StyleSheet from './utils/StyleSheet';

import Breakpoints from './utils/Breakpoints';

export const ActionSheetItemStyles = theme =>
  StyleSheet.create({ 'Action Sheet Item': { textAlign: 'center' } });

export const ActivityIndicatorStyles = theme =>
  StyleSheet.create({
    'Activity Indicator': { height: 36, width: 36 },
    'Activity Indicator 2': { height: 36, width: 36 },
  });

export const AudioPlayerStyles = theme =>
  StyleSheet.create({
    'Audio Player': {
      alignItems: 'center',
      borderRadius: 8,
      borderWidth: 1,
      flexDirection: 'row',
      padding: 8,
    },
  });

export const BlurViewStyles = theme =>
  StyleSheet.create({
    'Blur View': { flexBasis: 0, flexGrow: 1, flexShrink: 1 },
  });

export const ButtonStyles = theme =>
  StyleSheet.create({
    Button: {
      backgroundColor: theme.colors.primary,
      borderRadius: 8,
      fontFamily: 'System',
      fontWeight: '700',
      textAlign: 'center',
    },
    'Button 2': {
      backgroundColor: theme.colors.primary,
      borderRadius: 8,
      fontFamily: 'System',
      fontWeight: '700',
      textAlign: 'center',
    },
  });

export const DeckSwiperStyles = theme =>
  StyleSheet.create({ 'Deck Swiper': { position: 'absolute' } });

export const DeckSwiperCardStyles = theme =>
  StyleSheet.create({
    'Deck Swiper Card': {
      alignItems: 'center',
      borderWidth: 2,
      justifyContent: 'center',
      padding: 20,
    },
  });

export const FetchStyles = theme =>
  StyleSheet.create({ Fetch: { minHeight: 40 } });

export const H4Styles = theme =>
  StyleSheet.create({
    H4: { color: theme.colors.strong, fontSize: 16, fontWeight: 'bold' },
  });

export const ImageStyles = theme =>
  StyleSheet.create({ Image: { height: 100, width: 100 } });

export const ImageBackgroundStyles = theme =>
  StyleSheet.create({ 'Image Background': { flex: 1 } });

export const LinkStyles = theme =>
  StyleSheet.create({ Link: { color: theme.colors.primary } });

export const MapViewStyles = theme =>
  StyleSheet.create({ 'Map View': { flex: 1, height: '100%', width: '100%' } });

export const NumberInputStyles = theme =>
  StyleSheet.create({
    'Number Input': {
      borderBottomWidth: 1,
      borderColor: theme.colors.divider,
      borderLeftWidth: 1,
      borderRadius: 8,
      borderRightWidth: 1,
      borderTopWidth: 1,
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8,
    },
  });

export const SwipeableItemStyles = theme =>
  StyleSheet.create({ 'Swipeable Item': { overflow: 'hidden' } });

export const TableStyles = theme => StyleSheet.create({ Table: { flex: 1 } });

export const TableCellStyles = theme =>
  StyleSheet.create({ 'Table Cell': { flex: 1, flexDirection: 'row' } });

export const TextStyles = theme =>
  StyleSheet.create({
    Text: { alignSelf: 'flex-start', color: theme.colors.strong },
  });

export const TextInputStyles = theme =>
  StyleSheet.create({
    'Text Area': {
      borderBottomWidth: 1,
      borderColor: theme.colors.divider,
      borderLeftWidth: 1,
      borderRadius: 8,
      borderRightWidth: 1,
      borderTopWidth: 1,
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8,
    },
    'Text Input': {
      borderBottomWidth: 1,
      borderColor: theme.colors.divider,
      borderLeftWidth: 1,
      borderRadius: 8,
      borderRightWidth: 1,
      borderTopWidth: 1,
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8,
    },
  });

export const YoutubePlayerStyles = theme =>
  StyleSheet.create({ 'Youtube Player': { height: 250 } });
