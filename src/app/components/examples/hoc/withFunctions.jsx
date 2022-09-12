import React, { useState } from "react";
import CardWrapper from "../../common/Card";
import SimpleComponent from "./simpleComponent";

const withFunctions = (Component) => (props) => {
    const [isAuth, setIsAuth] = useState();

    const onLogin = () => {
        localStorage.setItem("auth", "token");
        setIsAuth("auth", "token");
    };

    const onLogOut = () => {
        localStorage.removeItem("auth");
        setIsAuth("", "");
    };

    return (
        <CardWrapper>
            <SimpleComponent
                isAuth={isAuth}
                onLogin={onLogin}
                onLogOut={onLogOut}
                {...props}
            />
        </CardWrapper>
    );
};

export default withFunctions;
