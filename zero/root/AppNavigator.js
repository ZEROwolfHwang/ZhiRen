import React from 'react';
import {connect} from 'react-redux';
import {Root} from 'native-base';
import {addNavigationHelpers} from 'react-navigation';
import SNavigator from './SNavigator';



import {addListener} from '../root/redux';

const AppNavigator = ({dispatch, nav}) => {
    return <Root>

        <SNavigator
            navigation={{
                dispatch,
                state: nav,
                addListener,
            }}
        />
    </Root>
};

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppNavigator);
