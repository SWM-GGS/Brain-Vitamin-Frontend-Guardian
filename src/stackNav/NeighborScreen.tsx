import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Neighbor from '../pages/Neighbor';
import NeighborPostRead from '../pages/NeighborPostRead';
import NeighborPostEdit from '../pages/NeighborPostEdit';
import NeighborPostWrite from '../pages/NeighborPostWrite';

export type NeighborScreenStackParamList = {
  Neighbor: undefined;
  NeighborPostRead: undefined;
  NeighborPostEdit: undefined;
  NeighborPostWrite: undefined;
};

const NeighborScreenStack =
  createNativeStackNavigator<NeighborScreenStackParamList>();

function NeighborScreen() {
  return (
    <NeighborScreenStack.Navigator screenOptions={{ headerShown: false }}>
      <NeighborScreenStack.Screen name="Neighbor" component={Neighbor} />
      <NeighborScreenStack.Screen
        name="NeighborPostRead"
        component={NeighborPostRead}
      />
      <NeighborScreenStack.Screen
        name="NeighborPostEdit"
        component={NeighborPostEdit}
      />
      <NeighborScreenStack.Screen
        name="NeighborPostWrite"
        component={NeighborPostWrite}
      />
    </NeighborScreenStack.Navigator>
  );
}

export default NeighborScreen;
