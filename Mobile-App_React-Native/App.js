import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './Main.js';
import Forgot_pass from './Forgot_pass';

import Mthq_log from './Mthq_log';
import Mthq_main from './Mthq_main';
import Mthq_infaq from './Mthq_infaq';
import Mthq_infaqcnf from './Mthq_infaqcnf';
import Mthq_infaqfinal from './Mthq_infaqfinal';

import Mzki_reg from './Mzki_reg';
import Mzki_log from './Mzki_log';
import Mzki_main from './Mzki_main';
import Mzki_infaq from './Mzki_infaq';
import Mzki_bzbx from './Mzki_bzbx';
import Mzki_bzbxcnf from './Mzki_bzbxcnf';
import Mzki_bzbxfinal from './Mzki_bzbxfinal';
import Mzki_infaqcnf from './Mzki_infaqcnf';

import Amil_log from './Amil_log';
import Amil_main from './Amil_main';
import Amil_riwayatmthq from './Amil_riwayatmthq';
import Amil_veriffg from './Amil_veriffg';
import Amil_veriffinal from './Amil_veriffinal';
import Amil_infaq from './Amil_infaq';
import Amil_infaqcnf from './Amil_infaqcnf.js'
import Amil_bzbx from './Amil_bzbx';
import Amil_bzbxfinal from './Amil_bzbxfinal.js';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Main} />
        <Stack.Screen name="Forgot_pass" component={Forgot_pass} />
        <Stack.Screen name="Mthq_log" component={Mthq_log} />
        <Stack.Screen name="Mthq_main" component={Mthq_main} />
        <Stack.Screen name="Mthq_infaq" component={Mthq_infaq} />
        <Stack.Screen name="Mthq_infaqcnf" component={Mthq_infaqcnf} />
        <Stack.Screen name="Mthq_infaqfinal" component={Mthq_infaqfinal} />

        <Stack.Screen name="Mzki_log" component={Mzki_log} />
        <Stack.Screen name="Mzki_reg" component={Mzki_reg} />
        <Stack.Screen name="Mzki_main" component={Mzki_main} />
        <Stack.Screen name="Mzki_infaq" component={Mzki_infaq} />
        <Stack.Screen name="Mzki_bzbx" component={Mzki_bzbx} />
        <Stack.Screen name="Mzki_bzbxcnf" component={Mzki_bzbxcnf} />
        <Stack.Screen name="Mzki_bzbxfinal" component={Mzki_bzbxfinal} />
        <Stack.Screen name="Mzki_infaqcnf" component={Mzki_infaqcnf} />

        <Stack.Screen name="Amil_main" component={Amil_main} />
        <Stack.Screen name="Amil_riwayatmthq" component={Amil_riwayatmthq} />
        <Stack.Screen name="Amil_veriffg" component={Amil_veriffg} />
        <Stack.Screen name="Amil_veriffinal" component={Amil_veriffinal} />
        <Stack.Screen name="Amil_log" component={Amil_log} />
        <Stack.Screen name="Amil_infaq" component={Amil_infaq} />
        <Stack.Screen name="Amil_infaqcnf" component={Amil_infaqcnf} />
        <Stack.Screen name="Amil_bzbx" component={Amil_bzbx} />
        <Stack.Screen name="Amil_bzbxfinal" component={Amil_bzbxfinal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;