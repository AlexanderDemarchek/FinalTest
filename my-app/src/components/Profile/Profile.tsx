import React from 'react';
import {Props} from '../App/App';
import {Container, Text, StrongText, LogOut} from './Profile.styles';
import {
    Redirect,
    Route,
    Link
} from "react-router-dom";

const Profile : React.FC<Props> = (props) =>
{
    const container =
    <Container>
        <Text>Здравствуйте,
            <StrongText> {localStorage.getItem('login')}</StrongText>
        </Text>
        <Link to="/" onClick = {() => {localStorage.clear();
                                props.setStatus('auth')}}>
            <LogOut>Выйти</LogOut>
        </Link>
    </Container>

    return <Route
        render={() =>
        localStorage.getItem('login') ? container : (<Redirect to={{pathname:"/"}}/>)
        }
    />
};

export default Profile;


