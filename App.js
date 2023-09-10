import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './Screens/Shared/LoginScreen';
import SignupAs from './Screens/Shared/SignupAs';
import { View } from 'react-native';
import PatientSideSignup from './Screens/PatientSide/PatientSideSignup';
import DoctorSideSignup from './Screens/DoctorSide/DoctorSideSignup';
import LabSideSignup from './Screens/LabSide/LabSideSignup';
import WelcomeScreen from './Screens/DoctorSide/WelcomeScreen';
import PatientReportsScreen from './Screens/DoctorSide/PatientReportsScreen';
import ReportScreen from './Screens/DoctorSide/ReportScreen';
import RecommendTest from './Screens/DoctorSide/RecommendTest';
import DetailReportScreen from './Screens/DoctorSide/DetailReportScreen';


const Stack = createStackNavigator();

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="HealthLab"
            component={LoginScreen}
            options={{
              headerShown: true,
              title: 'Labs Result with EHR.s and PHR.s',
              headerStyle: {
                backgroundColor: '#7eb7e8',
              },
              headerTitleStyle: {
                color: 'white',
              },
            }}
          />
          <Stack.Screen
            name="SignupAs"
            component={SignupAs}
            options={{
              headerShown: true,
              title: 'Signup',
              headerStyle: {
                backgroundColor: '#7eb7e8',
              },
              headerTitleStyle: {
                color: 'white',
              },
            }}
          />
          <Stack.Screen
            name="PatientSideSignup"
            component={PatientSideSignup}
            options={{
              headerShown: true,
              title: 'Signup As Patient',
              headerStyle: {
                backgroundColor: '#7eb7e8',
              },
              headerTitleStyle: {
                color: 'white',
              },
            }}
          />
          <Stack.Screen
            name="DoctorSideSignup"
            component={DoctorSideSignup}
            options={{
              headerShown: true,
              title: 'Signup As Doctor',
              headerStyle: {
                backgroundColor: '#7eb7e8',
              },
              headerTitleStyle: {
                color: 'white',
              },
            }}
          />
          <Stack.Screen
            name="LabSideSignup"
            component={LabSideSignup}
            options={{
              headerShown: true,
              title: 'Signup As Lab',
              headerStyle: {
                backgroundColor: '#7eb7e8',
              },
              headerTitleStyle: {
                color: 'white',
              },
            }}
          />
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{
              headerShown: true,
              title: 'Doctors Dashboard',
              headerStyle: {
                backgroundColor: '#7eb7e8',
              },
              headerTitleStyle: {
                color: 'white',
              },
            }}
          />
          <Stack.Screen
            name="PatientReportsScreen"
            component={PatientReportsScreen}
            options={{
              headerShown: true,
              title: 'Patients Report',
              headerStyle: {
                backgroundColor: '#7eb7e8',
              },
              headerTitleStyle: {
                color: 'white',
              },
            }}
          />
          <Stack.Screen
            name="ReportScreen"
            component={ReportScreen}
            options={{
              headerShown: true,
              title: 'Reports',
              headerStyle: {
                backgroundColor: '#7eb7e8',
              },
              headerTitleStyle: {
                color: 'white',
              },
            }}
          />
          <Stack.Screen
            name="RecommendTest"
            component={RecommendTest}
            options={{
              headerShown: true,
              title: 'Recommend Test',
              headerStyle: {
                backgroundColor: '#7eb7e8',
              },
              headerTitleStyle: {
                color: 'white',
              },
            }}
          />
          <Stack.Screen
            name="DetailReportScreen"
            component={DetailReportScreen}
            options={{
              headerShown: true,
              title: 'Detail Report ',
              headerStyle: {
                backgroundColor: '#7eb7e8',
              },
              headerTitleStyle: {
                color: 'white',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;
