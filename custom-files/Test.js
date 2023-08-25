// This import is required if you are defining react components in this module.
import React from 'react';

// Add any other imports you need here. Make sure to add those imports (besides "react"
// and "react-native") to the Packages section.
import { Text } from 'react-native';

// Define and export your components as named exports here.

// You can use components exported from this file within a Custom Code component as
// <F.MyExampleComponent />
export const test = () => show();
function show() {
  alert('1');
  return (
    <section>
      <h1>test</h1>
    </section>
  );
}
