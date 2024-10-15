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
          <SignedStack.Screen name="account" component={Account} />
          <SignedStack.Screen name="home" component={Home} />
          <SignedStack.Screen name="trips" component={Trips} />
          <SignedStack.Screen name="trip/[id]" component={Trip} />
          <UnnsignedStack.Screen name="+not-found" component={NotFound} />
        </SignedStack.Navigator>
      ) : (
        <UnnsignedStack.Navigator
          initialRouteName="welcome"
          screenOptions={DEFAULT_SCREEN_OPTIONS}
        >
          <UnnsignedStack.Screen name="+not-found" component={NotFound} />
          <UnnsignedStack.Screen name="login" component={Login} />
          <UnnsignedStack.Screen name="register" component={Register} />
          <UnnsignedStack.Screen name="welcome" component={Welcome} />
        </UnnsignedStack.Navigator>
      )}
    </>
  );
};

export default Navigation;
