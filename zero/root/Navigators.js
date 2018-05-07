import {NavigationActions} from 'react-navigation';
import SNavigator from '../root/SNavigator';

export const nav = (state, action) => {
    switch (action.type) {

        case 'WebView1':
            return SNavigator.router.getStateForAction(
                NavigationActions.navigate({routeName: 'WebView1'}),
                {...state, webViewURL: action.webViewURL}
            );

   // case 'TestComponent':
   //          return SNavigator.router.getStateForAction(
   //              NavigationActions.navigate({routeName: 'TestComponent'}),
   //              {...state, data: action.data}
   //          );
   //

        default:
            return SNavigator.router.getStateForAction(action, state) || state;
    }
}
