import React from 'react'
import { Redirect, Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { useAuth } from '@clerk/clerk-expo'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const TabsLayout = () => {
    const { isSignedIn, isLoaded } = useAuth()
    const insets = useSafeAreaInsets()

    if (!isLoaded) {
        return null
    }
    if (!isSignedIn) {
        return <Redirect href={'/(auth)'} />
    }

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#1DB954",
                tabBarInactiveTintColor: "#B3B3B3",
                tabBarStyle: {
                    backgroundColor: "#121212",
                    borderTopWidth: 0,
                },
                // tabBarStyle: {
                //     position: "absolute",
                //     backgroundColor: "transparent",
                //     borderTopWidth: 0,
                //     height: 32 + insets.bottom,
                //     paddingTop: 4,
                //     marginHorizontal: 100,
                //     marginBottom: insets.bottom,
                //     borderRadius: 24,
                //     overflow: "hidden",
                // }
                tabBarLabelStyle: {
                    fontSize: 11,
                },
                headerShown: false
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, size }) => <Ionicons name='grid' size={size} color={color} />
                }}
            />
            <Tabs.Screen
                name="cart"
                options={{
                    title: "Cart",
                    tabBarIcon: ({ color, size }) => <Ionicons name='cart' size={size} color={color} />
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    tabBarIcon: ({ color, size }) => <Ionicons name='person' size={size} color={color} />
                }}
            />
        </Tabs>
    )
}

export default TabsLayout