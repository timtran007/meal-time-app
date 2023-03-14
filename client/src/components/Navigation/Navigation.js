import React from "react";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import MealTimeLogo from '../../MealTimeLogo.png'
import { useHistory } from "react-router-dom";

function Navigation({user, setUser}){
    //useHistory is currently not working... 
    const history = useHistory()

    //fetch to logout user (delete session)
    function handleLogout(){
        fetch("/logout", {
            method: "DELETE"
        }).then( resp => {
            if (resp.ok){
                setUser(null)
                history.push("/login")
            }
        }) 
    }

    return(
        <Navbar>
            <Container>
                <Navbar.Brand href="/">
                    <img
                        id='nav-logo'
                        src={MealTimeLogo}
                        width="120"
                        alt='MealTime logo'
                    />
                </Navbar.Brand>
                {user ? (
                    <Nav>
                        <Nav.Link href="/profile">
                            {user.name}'s Profile
                        </Nav.Link>
                        <Nav.Link href="/profile/recipes">
                            My Recipes
                        </Nav.Link>
                        <Nav.Link href="/profile/shopping-lists">
                            My Shopping Lists
                        </Nav.Link>
                        <Nav.Link onClick={handleLogout} href="/logout">
                            Logout
                        </Nav.Link>
                    </Nav>) : (
                    <Nav>
                        <Nav.Link href="/sign-up">
                            Signup
                        </Nav.Link>
                        <Nav.Link href="/login">
                            Login
                        </Nav.Link>
                    </Nav>
                    )}
                
                    
            </Container>
        </Navbar>
    )
}

export default Navigation