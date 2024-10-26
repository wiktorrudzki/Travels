import { useAuth } from "@/hooks";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Account from "@/app/account";
import Home from "@/app/home";
import Trips from "@/app/trips";
import Trip from "@/app/trip/[id]";
import NotFound from "@/app/+not-found";
import Login from "@/app/login";
import Register from "@/app/register";
import Welcome from "@/app/welcome";
import {
  RootStackSignedInPropsList,
  RootStackUnsignedInPropsList,
} from "@/types/routes";
import { NavigationContainer } from "@react-navigation/native";
import CreateEvent from "@/app/trip/create-event/[id]";
import EditEvent from "@/app/trip/edit-event/[id]";
import QrCode from "@/app/qr-code";
import EditTrip from "@/app/trip/edit/[id]";

const DEFAULT_SCREEN_OPTIONS = { headerShown: false };

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  const SignedStack = createStackNavigator<RootStackSignedInPropsList>();
  const UnnsignedStack = createStackNavigator<RootStackUnsignedInPropsList>();

  return (
    <NavigationContainer independent={true}>
      {isLoggedIn ? (
        <SignedStack.Navigator
          initialRouteName="home"
          screenOptions={DEFAULT_SCREEN_OPTIONS}
        >
          <SignedStack.Screen name="home" component={Home} />
          <SignedStack.Screen name="account" component={Account} />
          <SignedStack.Screen name="trips" component={Trips} />
          <SignedStack.Screen name="trip" component={Trip} />
          <SignedStack.Screen name="trip/edit" component={EditTrip} />
          <SignedStack.Screen
            name="trip/create-event"
            component={CreateEvent}
          />
          <SignedStack.Screen name="trip/edit-event" component={EditEvent} />
          <SignedStack.Screen name="qr-code" component={QrCode} />
          <SignedStack.Screen name="+not-found" component={NotFound} />
          <SignedStack.Screen name="*" component={NotFound} />
        </SignedStack.Navigator>
      ) : (
        <UnnsignedStack.Navigator
          initialRouteName="welcome"
          screenOptions={DEFAULT_SCREEN_OPTIONS}
        >
          <UnnsignedStack.Screen name="login" component={Login} />
          <UnnsignedStack.Screen name="register" component={Register} />
          <UnnsignedStack.Screen name="welcome" component={Welcome} />
          <SignedStack.Screen name="+not-found" component={NotFound} />
          <SignedStack.Screen name="*" component={NotFound} />
        </UnnsignedStack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Navigation;
