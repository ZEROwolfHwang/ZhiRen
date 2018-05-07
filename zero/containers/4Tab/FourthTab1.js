/**
 * Created by zerowolf on 2018/4/2.
 */
import React, {Component} from 'react';
import {
    Platform, StyleSheet, Text, Alert, View, TouchableOpacity, Image, Dimensions
} from 'react-native';
const {width, height} = Dimensions.get('window');
import MyTabView from '../../views/MyTabView';
import {GiftedForm, GiftedFormManager} from 'react-native-gifted-form';
import moment from 'moment';
import NavigationUtil from '../../utils/NavigationUtil';
export default class FourthTab extends Component {
    static navigationOptions = ({navigation, screenProps}) => ({
            headerTitle: '',
            header: null,
            headerBackTitle: null,
        }
    );

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
                <MyTabView titleColor={'black'} title={'第四页'}
                           navigation={this.props.navigation}/>

                <Text style={{color: 'blue', fontSize: 18}}>
                    4New Page !
                </Text>

                <GiftedForm
                    formName='signupForm' // GiftedForm instances that use the same name will also share the same states
                    openModal={(route) => {
                        this.props.navigator.push(route); // The ModalWidget will be opened using this method. Tested with ExNavigator
                    }}
                    clearOnClose={false} // delete the values of the form when unmounted
                    defaults={{
                        /*
                         username: 'Farid',
                         'gender{M}': true,
                         password: 'abcdefg',
                         country: 'FR',
                         birthday: new Date(((new Date()).getFullYear() - 18)+''),
                         */
                    }}
                    validators={{
                        fullName: {
                            title: 'Full name',
                            validate: [{
                                validator: 'isLength',
                                arguments: [1, 23],
                                message: '{TITLE} must be between {ARGS[0]} and {ARGS[1]} characters'
                            }]
                        },
                        username: {
                            title: 'Username',
                            validate: [{
                                validator: 'isLength',
                                arguments: [3, 16],
                                message: '{TITLE} must be between {ARGS[0]} and {ARGS[1]} characters'
                            }, {
                                validator: 'matches',
                                arguments: /^[a-zA-Z0-9]*$/,
                                message: '{TITLE} can contains only alphanumeric characters'
                            }]
                        },
                        password: {
                            title: 'Password',
                            validate: [{
                                validator: 'isLength',
                                arguments: [6, 16],
                                message: '{TITLE} must be between {ARGS[0]} and {ARGS[1]} characters'
                            }]
                        },
                        emailAddress: {
                            title: 'Email address',
                            validate: [{
                                validator: 'isLength',
                                arguments: [6, 255],
                            }, {
                                validator: 'isEmail',
                            }]
                        },
                        bio: {
                            title: 'Biography',
                            validate: [{
                                validator: 'isLength',
                                arguments: [0, 512],
                                message: '{TITLE} must be between {ARGS[0]} and {ARGS[1]} characters'
                            }]
                        },
                        gender: {
                            title: 'Gender',
                            validate: [{
                                validator: (...args) => {
                                    if (args[0] === undefined) {
                                        return false;
                                    }
                                    return true;
                                },
                                message: '{TITLE} is required',
                            }]
                        },
                        birthday: {
                            title: 'Birthday',
                            validate: [{
                                validator: 'isBefore',
                                arguments: [moment().utc().subtract(18, 'years').format('YYYY-MM-DD')],
                                message: 'You must be at least 18 years old'
                            }, {
                                validator: 'isAfter',
                                arguments: [moment().utc().subtract(100, 'years').format('YYYY-MM-DD')],
                                message: '{TITLE} is not valid'
                            }]
                        },
                        country: {
                            title: 'Country',
                            validate: [{
                                validator: 'isLength',
                                arguments: [2],
                                message: '{TITLE} is required'
                            }]
                        },
                    }}
                >
                    <GiftedForm.SeparatorWidget />

                    <GiftedForm.TextInputWidget
                        name='fullName' // mandatory
                        title='Full name'
                        image={require('../../../AImages/qianbao.png')}
                        placeholder='Marco Polo'
                        clearButtonMode='while-editing'
                    />

                    <GiftedForm.TextInputWidget
                        name='username'
                        title='Username'
                        image={require('../../../AImages/qianbao.png')}
                        placeholder='MarcoPolo'
                        clearButtonMode='while-editing'
                        onTextInputFocus={(currentText = '') => {
                            if (!currentText) {
                                let fullName = GiftedFormManager.getValue('signupForm', 'fullName');
                                if (fullName) {
                                    return fullName.replace(/[^a-zA-Z0-9-_]/g, '');
                                }
                            }
                            return currentText;
                        }}
                    />

                    <GiftedForm.TextInputWidget
                        name='password' // mandatory
                        title='Password'
                        placeholder='******'
                        clearButtonMode='while-editing'
                        secureTextEntry={true}
                        image={require('../../../AImages/qianbao.png')}
                    />

                    <GiftedForm.TextInputWidget
                        name='emailAddress' // mandatory
                        title='Email address'
                        placeholder='example@nomads.ly'
                        keyboardType='email-address'
                        clearButtonMode='while-editing'
                        image={require('../../../AImages/qianbao.png')}
                    />

                    <GiftedForm.SeparatorWidget />

                    <GiftedForm.ModalWidget
                        title='Gender'
                        displayValue='gender'
                        onPress={()=>{
                            console.log('onPress');
                            // NavigationUtil.reset(this.props.navigation,'FirstTab')
                            // this.props.navigation.dispatch({
                            //     type:'FirstTab'
                            // })
                        }}
                        image={require('../../../AImages/qianbao.png')}
                    >
                        <GiftedForm.SeparatorWidget />

                        <GiftedForm.SelectWidget name='gender' title='Gender' multiple={false}>
                            <GiftedForm.OptionWidget image={require('../../../AImages/qianbao.png')} title='Female'
                                                     value='F'/>
                            <GiftedForm.OptionWidget image={require('../../../AImages/qianbao.png')} title='Male'
                                                     value='M'/>
                        </GiftedForm.SelectWidget>
                    </GiftedForm.ModalWidget>

                    <GiftedForm.ModalWidget
                        title='Birthday'
                        displayValue='birthday'
                        image={require('../../../AImages/qianbao.png')}
                        scrollEnabled={false}
                    >
                        <GiftedForm.SeparatorWidget/>

                        <GiftedForm.DatePickerIOSWidget
                            name='birthday'
                            mode='date'
                            getDefaultDate={() => {
                                return new Date(((new Date()).getFullYear() - 18) + '');
                            }}
                        />
                    </GiftedForm.ModalWidget>

                    <GiftedForm.ModalWidget
                        title='Country'
                        displayValue='country'
                        image={require('../../../AImages/qianbao.png')}
                        scrollEnabled={false}
                    >
                        <GiftedForm.SelectCountryWidget
                            code='alpha2'
                            name='country'
                            title='Country'
                            autoFocus={true}
                        />
                    </GiftedForm.ModalWidget>

                    <GiftedForm.ModalWidget
                        title='Biography'
                        displayValue='bio'
                        image={require('../../../AImages/qianbao.png')}
                        scrollEnabled={true} // true by default
                    >
                        <GiftedForm.SeparatorWidget/>

                        <GiftedForm.TextAreaWidget
                            name='bio'
                            autoFocus={true}
                            placeholder='Something interesting about yourself'
                        />
                    </GiftedForm.ModalWidget>

                    <GiftedForm.ErrorsWidget/>

                    <GiftedForm.SubmitWidget
                        title='Sign up'
                        widgetStyles={{
                            submitButton: {
                                backgroundColor: 'blue',
                            }
                        }}
                        onSubmit={(isValid, values, validationResults, postSubmit = null, modalNavigator = null) => {
                            if (isValid === true) {
                                // prepare object
                                values.gender = values.gender[0];
                                values.birthday = moment(values.birthday).format('YYYY-MM-DD');

                                /* Implement the request to your server using values variable
                                 ** then you can do:
                                 ** postSubmit(); // disable the loader
                                 ** postSubmit(['An error occurred, please try again']); // disable the loader and display an error message
                                 ** postSubmit(['Username already taken', 'Email already taken']); // disable the loader and display an error message
                                 ** GiftedFormManager.reset('signupForm'); // clear the states of the form manually. 'signupForm' is the formName used
                                 */
                            }
                        }}
                    />

                    <GiftedForm.NoticeWidget
                        title='By signing up, you agree to the Terms of Service and Privacy Policity.'
                    />

                    <GiftedForm.HiddenWidget name='tos' value={true}/>
                </GiftedForm>
            </View>
        )
    }
}