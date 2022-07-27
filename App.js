import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import axios from "axios";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from './screens/Home/Home';
import ProductDetail from './screens/ProductDetail/ProductDetail';
import CreateProduct from './screens/CreateProduct/CreateProduct';

const Stack = createStackNavigator();
const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "rgba(255,220,0,1.0)",
  },
  headerBackTitleVisible: false,
  headerTintColor: "black",
  gestureEnabled: false,
};

axios.interceptors.request.use((request) => {
  console.log("Starting Request", JSON.stringify(request, null, 2));
  return request;
});

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={screenOptionStyle}
        >
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={Home}
          />
          <Stack.Screen
            options={{ title: 'Product', headerStyle: { backgroundColor: '#e1e7ec', }, }}
            name="ProductDetail"
            component={ProductDetail}
          />
          <Stack.Screen
            options={{ title: 'Create product', headerStyle: { backgroundColor: '#e1e7ec', }, }}
            name="CreateProduct"
            component={CreateProduct}
          />
        </Stack.Navigator>
      </NavigationContainer>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
