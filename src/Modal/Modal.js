import React from "react";
import "./modal.css"

export default function Modal ({isModalActive, setIsModalActive, setModalContent, children}){
    return <div className={isModalActive ? "modal active" : "modal"} onClick={()=>{setIsModalActive(false); setModalContent('')}}>
                <div className={isModalActive ? "modal_content active" : "modal_content"} /*onClick={e=>e.stopPropagation()}*/>
                    {children}
                </div>
            </div>
}