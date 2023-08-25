import { BarChart, Grid, XAxis } from 'react-native-svg-charts';
import { View } from 'react-native';
export function BarChartComponent() {
  const fill = 'rgb(120, 50, 120)';
  const data = [5, 3, 4, 4, 4, 2, 1];

  return (
    <View style={{ height: 200, padding: 20 }}>
      <BarChart
        style={{ height: 200 }}
        data={data}
        svg={{ fill }}
        contentInset={{ top: 30, bottom: 30 }}
      >
        <Grid />
      </BarChart>
      <XAxis
        style={{ marginHorizontal: -10 }}
        data={data}
        formatLabel={(value, index) => index + 1}
        contentInset={{ left: 10, right: 10 }}
        svg={{ fontSize: 14, fill: 'black' }}
      />
    </View>
  );
}
