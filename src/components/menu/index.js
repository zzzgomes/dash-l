import {Container, Button, Options,ProfileContainer} from "./style"

import {ReactComponent as Logo} from "assets/images/logo.svg"
import {ReactComponent as Help} from "assets/images/help.svg"
import {ReactComponent as ArrowDown} from "assets/images/arrowDown.svg"
import Profile from "assets/images/profile.png"
const Menu = () => {
    return (
        <Container>
            <Logo/>
            <Options>
                <Button> <Help/> AJUDA </Button>
                <ProfileContainer>
                    <img src={Profile} alt="Photo profile"/>
                    <ArrowDown/>
                </ProfileContainer>
            </Options>


        </Container>

    )

}

export default Menu
