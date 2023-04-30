import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './SideBar.scss'
import { SidebarData } from '../../SidebarData'
const SideBar = () => {
    return (

        <div className="sidebar col-lg-3 d-none d-lg-block">
            <div className='sidebar-body'>
            <ul>
                {
                    SidebarData.map((data) => {
                        return (<li>
                            <div className="img" >
                                <img src={data.src} alt="img" />
                            </div>
                            <p>{data.name}</p>
                            <div className="li-item"></div>
                        </li>)

                    })
                }

            </ul>
            </div>
        </div>

    )
}

export default SideBar
