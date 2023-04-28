import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './SideBar.scss'
import { SidebarData } from '../../SidebarData'
const SideBar = () => {
    return (

        <div className="sidebar-body col-3">
            <ul>
                {
                    SidebarData.map((data) => {
                        return (<li>
                            <div className="img" >
                                <img src={data.src} alt="img" />
                            </div>
                            <p>{data.name}</p>
                        </li>)

                    })
                }

            </ul>
        </div>

    )
}

export default SideBar
