import NotFoundScreen from "@/app/+not-found";
import { useAuth } from "@/hooks";
import { AccountScreen } from "@/screens/account";
import { HomeScreen } from "@/screens/home";
import { LoginScreen } from "@/screens/login";
import { RegisterScreen } from "@/screens/register";
import { TripsScreen } from "@/screens/trips";
import { TripScreen } from "@/screens/trip";
import { WelcomeScreen } from "@/screens/welcome";
import { useRoute } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

const DEFAULT_SCREEN_OPTIONS = { headerShown: false };

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  const SignedStack = createStackNavigator();
  const UnnsignedStack = createStackNavigator();

  return (
    <>
      {isLoggedIn ? (
        <SignedStack.Navigator
          initialRouteName="home"
          screenOptions={DEFAULT_SCREEN_OPTIONS}
        >
          <SignedStack.Screen name="account" component={AccountScreen} />
          <SignedStack.Screen name="home" component={HomeScreen} />
          <SignedStack.Screen name="trips" component={TripsScreen} />
          <SignedStack.Screen name="trip" component={TripScreen} />
        </SignedStack.Navigator>
      ) : (
        <UnnsignedStack.Navigator
          initialRouteName="welcome"
          screenOptions={DEFAULT_SCREEN_OPTIONS}
        >
          <UnnsignedStack.Screen name="not-found" component={NotFoundScreen} />
          <UnnsignedStack.Screen name="login" component={LoginScreen} />
          <UnnsignedStack.Screen name="register" component={RegisterScreen} />
          <UnnsignedStack.Screen name="welcome" component={WelcomeScreen} />
        </UnnsignedStack.Navigator>
      )}
    </>
  );
};

export default Navigation;
