import React from "react";


interface IPropsButton {
    buttonClicked: () => void,
    title: string,
    isDisabled: boolean,
}

function Button({buttonClicked, title, isDisabled}: IPropsButton) {

    return (
        <button onClick={buttonClicked}
                className='buttonsWrapper_button'
                disabled={isDisabled}>
            {title}
        </button>
    );
}

export default Button;