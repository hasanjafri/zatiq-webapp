import React, { Component, Fragment } from 'react'
import Header from '../../widgets/Header'
import SplitBackground from '../../widgets/SplitBackground'
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login'
import './Login.scss'

const FB_APP_ID = '1277509129016312'
const WEB_CLIENT_ID = '013702018515-g3mjgf56essrqkp573bjjpfau5a62405.apps.googleusercontent.com'

class LoginForm extends Component {
    onFacebookResponse = () => {
        console.log('response')
    }
    onGoogleResponse = () => {
        
    }
    render() {
        return (
            <div className="login-form">
                <FacebookLogin
                    cssClass="facebook-btn"
                    appId={FB_APP_ID}
                    autoLoad
                    fields="name,email,picture"
                    icon="fa-facebook"
                    callback={this.onFacebookResponse} />
                <GoogleLogin
                    className="google-btn"
                    clientId={WEB_CLIENT_ID}
                    onSuccess={this.onGoogleResponse}
                    onFailure={this.onGoogleResponse}>
                    <i className="ion-logo-googleplus" />
                    <span>LOGIN WITH GOOGLE</span>
                </GoogleLogin>
            </div>
        )
    }
}

class Login extends Component {
    render() {
        return (
            <Fragment>
                <Header zatiq/>
                <SplitBackground>
                    <SplitBackground.Content className="centered">
                        <video id="video" style={{ width: '100%', height: '100%', objectFit: 'fill' }} loop autoPlay>
                            <source src={require('../../assets/background/Zatiq.mp4')} type="video/mp4" />
                        </video>
                    </SplitBackground.Content>
                    <SplitBackground.Content className="centered">
                        <img className="logo-image" height="150" src={require('../../assets/logos/logo.png')} />
                        <LoginForm />
                    </SplitBackground.Content>
                </SplitBackground>
            </Fragment>
        )
    }
}

export default Login