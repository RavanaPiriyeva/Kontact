import React from 'react'
import './Footer.scss'
import '../../Style/grid.scss'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container-fluid container-xl">
                <div className="row">
                    <div className="col-lg-3 col-sm-6 col-12 footer-item">
                        <h3>İnformasiya</h3>
                        <li><Link to="#">Konfidensiallıq siyasəti</Link></li>
                        <li><Link to="#">Hissə-hissə ödəniş şərtləri</Link></li>
                        <li><Link to="#">Geri qaytarma siyasəti</Link></li>
                        <li><Link to="#">Aylıq ödənişlərin həyata keçməsi</Link></li>
                        <li><Link to="#">Servis Mərkəzləri</Link></li>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12 footer-item">
                        <h3>Müştərilər</h3>
                        <li><Link to="#">Saytın istifadə şərtləri</Link></li>
                        <li><Link to="#">Korporativ satışlar</Link></li>
                        <li><Link to="#">Zəmanətlər</Link></li>
                        <li><Link to="#">Şikayətlərin idarəolunma siyasəti</Link></li>
                        <li><Link to="#">Ən yaxşı qiymətə zəmanət!</Link></li>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12 footer-item">
                        <h3>Şirkət</h3>
                        <li><Link to="#">Şirkət haqqında</Link></li>
                        <li><Link to="#">Karyera</Link></li>
                        <li><Link to="#">“Qarabağ” Proqramı</Link></li>
                        <li><Link to="#">Şeş at, 10 qatını geri al!</Link></li>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12 footer-item">
                        <div className="contact">
                            <h3>Əlaqə</h3>
                            <ul>
                                <li className="col-6"><Link to="#"><i className="fa-solid fa-mobile"></i>*6060</Link></li>
                                <li className="col-6"><Link to="#"><i className="fa-solid fa-location-dot"></i>Mağazalarımız xəritədə</Link></li>
                                <li className="col-6"><Link to="#"><i className="fa-solid fa-phone"> </i>012 310 24 24</Link></li>
                            </ul>
                        </div>

                    </div>
                </div>
                <p>© 2023 Kontakt Home</p>
            </div>
        </div>
    )
}

export default Footer
