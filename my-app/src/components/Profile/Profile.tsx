import React from 'react';
import {Container, Text, StrongText, LogOut} from './Profile.styles';
import {Link} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {getRootState} from "../../store/selectors";
import {errorAction, rememberPassword, send, success} from "../../store/actions";

const Profile : React.FC = () =>
{
    const state = useSelector(getRootState);
    const dispatch = useDispatch();
    console.log(state);
    return <Container>
        <Text>Здравствуйте, <StrongText>steve.jobs@example.com</StrongText></Text>
        <Link to="/"><LogOut>Выйти</LogOut></Link>
    </Container>
};

export default Profile;

