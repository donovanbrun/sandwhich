import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Add from './Add';
import Profile from './Profile';
import Explore from './Explore';
import PostFull from './postFull/PostFull';

const Tab = createBottomTabNavigator();

export default function Nav() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Explore"
                component={Explore}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="ios-search" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Add"
                component={Add}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="add" color={color} size={size} />
                    ),
                    headerTitle: 'Create a sandwich',
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="ios-man" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="PostFull"
                component={PostFull}
                options={{
                    tabBarButton: () => null,
                    headerTitle: 'Post',
                }}
            />
        </Tab.Navigator>
    );
}