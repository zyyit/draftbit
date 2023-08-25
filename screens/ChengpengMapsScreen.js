import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  MapCallout,
  MapMarker,
  MapMarkerCluster,
  MapMarkerClusterView,
  MapView,
} from '@draftbit/maps';
import { ScreenContainer, withTheme } from '@draftbit/ui';
import { useWindowDimensions } from 'react-native';

const ChengpengMapsScreen = props => {
  const dimensions = useWindowDimensions();

  const { theme } = props;

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <MapView
        style={StyleSheet.applyWidth(
          GlobalStyles.MapViewStyles(theme)['Map View'],
          dimensions.width
        )}
        apiKey={'AIzaSyBzktToWosjNgrrUawZnbslB9NSXSXCkwo'}
        autoClusterMarkersDistanceMeters={10000}
        customMapStyle={'Beautiful West Coast Villa'}
        latitude={37.40241}
        loadingEnabled={true}
        longitude={-122.12125}
        rotateEnabled={true}
        scrollEnabled={true}
        showsPointsOfInterest={true}
        zoom={8}
        zoomEnabled={true}
      >
        <MapMarkerClusterView
          renderItem={({ markerCount }) => {
            return (
              <MapMarkerCluster>
                {/* Map Marker 2 */}
                <MapMarker pinImage={Images.Medicine} pinImageSize={50} />
                <MapMarker
                  flat={false}
                  pinImage={Images.ChatDoctor}
                  pinImageSize={50}
                >
                  <MapCallout
                    style={StyleSheet.applyWidth(
                      { height: 100, width: 100 },
                      dimensions.width
                    )}
                    showTooltip={true}
                  />
                </MapMarker>
              </MapMarkerCluster>
            );
          }}
          zoomOnPress={true}
        />
      </MapView>
    </ScreenContainer>
  );
};

export default withTheme(ChengpengMapsScreen);
