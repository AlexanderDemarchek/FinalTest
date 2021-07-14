import React,{useState} from 'react';
import OnlyForm from "../OnlyForm/OnlyForm";
import Profile from "../Profile/Profile";
import { ThemeProvider } from 'styled-components';
import theme from "../../styles/theme";
import Layout from "../../styles/LayoutStyle";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

export type Props = {
    loginContainer: string;
    passwordContainer: string;
    statusContainer: string;
    profileSaver: boolean;
    setLogin: React.Dispatch<React.SetStateAction<string>>;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    setStatus: React.Dispatch<React.SetStateAction<string>>;
    saveProfile: React.Dispatch<React.SetStateAction<boolean>>;
};

const App: React.FC = () => {

    const [loginContainer, setLogin] = useState('');
    const [passwordContainer, setPassword] = useState('');
    const [statusContainer, setStatus] = useState('auth');
    const [profileSaver, saveProfile] = useState(false);

    const props:Props = {
                    loginContainer:loginContainer,
                    passwordContainer:passwordContainer,
                    statusContainer:statusContainer,
                    profileSaver:profileSaver,
                    setLogin:setLogin,
                    setPassword:setPassword,
                    setStatus:setStatus,
                    saveProfile:saveProfile
    };

    return <ThemeProvider theme={theme}>
        <Layout>
            <h1>ONLY.</h1>
            <Router>
                <Switch>
                    <Route exact={true} path={['/login','/']}>
                        <OnlyForm {...props}/>
                    </Route>
                    <Route path={'/profile'}>
                        <Profile {...props}/>
                    </Route>
                </Switch>
            </Router>
        </Layout>
    </ThemeProvider>

}
export default App;