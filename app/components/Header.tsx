"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Header() {
    const router = useRouter();

    const handleLogout = async (e: React.MouseEvent) => {
        e.preventDefault();
        try {
            await axios.post(
                "http://nextjs-api.in/api/adminlogout",
                {},
                { withCredentials: true }
            );
            router.push("/"); 
        } catch (error) {
            console.error("Logout failed", error);
        }
    };

    return (
        <div className="navbar navbar-fixed-top">
            <div className="navbar-inner">
                <div className="container">
                    <a
                        className="btn btn-navbar"
                        data-toggle="collapse"
                        data-target=".navbar-inverse-collapse"
                    >
                        <i className="icon-reorder shaded"></i>
                    </a>

                    <Link className="brand" href="/">
                        Edmin
                    </Link>

                    <div className="nav-collapse collapse navbar-inverse-collapse">
                        <ul className="nav nav-icons">
                            <li className="active">
                                <a href="#"><i className="icon-envelope"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="icon-eye-open"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="icon-bar-chart"></i></a>
                            </li>
                        </ul>

                        <form className="navbar-search pull-left input-append">
                            <input type="text" className="span3" />
                            <button className="btn" type="button">
                                <i className="icon-search"></i>
                            </button>
                        </form>

                        <ul className="nav pull-right">
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    Dropdown <b className="caret"></b>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Item No. 1</a></li>
                                    <li><a href="#">Don't Click</a></li>
                                    <li className="divider"></li>
                                    <li className="nav-header">Example Header</li>
                                    <li><a href="#">A Separated link</a></li>
                                </ul>
                            </li>

                            <li><a href="#">Support</a></li>

                            {/* USER DROPDOWN */}
                            <li className="nav-user dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <img
                                        src="/assets/images/user.png"
                                        className="nav-avatar"
                                        alt="User"
                                    />
                                    <b className="caret"></b>
                                </a>

                                <ul className="dropdown-menu">
                                    <li><a href="#">Your Profile</a></li>
                                    <li><a href="#">Edit Profile</a></li>
                                    <li><a href="#">Account Settings</a></li>
                                    <li className="divider"></li>

                                    {/* LOGOUT */}
                                    <li>
                                        <a href="#" onClick={handleLogout}>
                                            Logout
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
