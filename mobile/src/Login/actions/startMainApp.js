import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startMainApp = () => {
    Promise.all([
        Icon.getImageSource("ios-paper", 30),
        Icon.getImageSource("ios-archive", 30),
        Icon.getImageSource("ios-contacts", 30)
    ]).then(sources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    label: 'Feed',
                    screen: 'demo.AllPostsScreen',
                    title: 'Feed',
                    icon: sources[0]
                },
                {
                    label: 'Own Posts', 
                    screen: 'demo.OwnPostsScreen', 
                    title: 'Own Posts',
                    icon: sources[1] 
                },
                {
                    label: 'Users',
                    screen: 'demo.UsersScreen',
                    title: 'Users',
                    icon: sources[2]
                }
            ],
            tabsStyle: { 
                tabBarButtonColor: '#ffff00', 
                tabBarSelectedButtonColor: '#ff9900', 
                tabBarBackgroundColor: '#551A8B',
                initialTabIndex: 0, 
            }
        });
    });
}

export default startMainApp;