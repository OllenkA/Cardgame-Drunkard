import React from "react";
import Button from "./Button";


interface IPropsButtons {
    arrayButtons: any,
}

function Buttons({arrayButtons}: IPropsButtons) {

    const array = arrayButtons.map((el:any) => {

        return <Button key={el.id}
                       buttonClicked={el.buttonClicked}
                       title={el.title}
                       isDisabled={el.isDisabled}/>
    });

    return (
        <section className='buttonsWrapper'>

            {array}

        </section>
    );
}

export default Buttons;