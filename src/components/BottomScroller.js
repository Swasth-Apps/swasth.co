import React, {useEffect, useState} from "react";

const BottomScroller = props => {
    const [visible, setVisible] = useState(true)

    useEffect(()=>{
        window.addEventListener('scroll', toggleVisible);
    }, [])

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 0){
            setVisible(false)
        }
        else if (scrolled <= 0){
            setVisible(true)
        }
    };

    const scrollToBottom = () =>{
        console.log(window.scrollY)
        window.scrollTo({
            top: window.scrollY + window.innerHeight - 80,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
               in place of 'smooth' */
        });
    };

    return (
        <div className="bottom-arrow-container" onClick={scrollToBottom}>
            <img src={require("../assets/images/arrow-down.png")}/>
        </div>
    )

}
export default BottomScroller;