import React from 'react';
import OnlyForm from "../OnlyForm/OnlyForm";
import Profile from "../Profile/Profile";
import { Provider } from 'react-redux';
import store from '../../store/store'
import { ThemeProvider } from 'styled-components';
import theme from "../../styles/theme";
import Layout from "../../styles/LayoutStyle";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
    Link
} from "react-router-dom";

const App: React.FC = () => {
    return <Provider store={store}>
    <ThemeProvider theme={theme}>
        <Layout>
            <h1>ONLY.</h1>
            <Router>
                <Switch>
                    <Route exact={true} path={['/login','/']}>
                        <OnlyForm/>
                    </Route>
                    <Route path={'/profile'}>
                        <Profile/>
                    </Route>
                </Switch>
            </Router>
        </Layout>
    </ThemeProvider>
    </Provider>
}
export default App;