import React from "react";
import { Link } from "react-router-dom";

const HeaderMenu = () => {
    return (
        <div>
            <div className="row header d-flex">
                <nav>
                    <ul className="menu">
                        <li>
                            <Link to="">
                                <img
                                    src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_heart_header.svg"
                                    alt="icon-love"
                                />
                                <span>Yêu thích</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="">
                                <img
                                    src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images//svg/icon_dang_nhap.svg"
                                    alt="icon-sign-in"
                                />
                                <span>Đăng nhập</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="">
                                <img
                                    src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_gio_hang.svg"
                                    alt="icon-love"
                                />
                                <span>Giỏ hàng</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default HeaderMenu;
