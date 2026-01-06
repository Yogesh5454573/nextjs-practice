"use client";
import Link from 'next/link';
import { useRouter } from "next/navigation";
import axios from "axios";
export default function sidebar() {
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
        <div className="sidebar">
            <ul className="widget widget-menu unstyled">
                <li className="active"><Link href="/dashboard" ><i className="menu-icon icon-dashboard"></i>Dashboard
                </Link></li>
                <li><Link href="/manageUsers" ><i className="menu-icon icon-bullhorn"></i>Manage Users</Link>
                </li>
                <li><Link href="/manageUsers"><i className="menu-icon icon-inbox"></i>Inbox <b className="label green pull-right">
                    11</b> </Link></li>
                <li><Link href="/manageUsers"><i className="menu-icon icon-tasks"></i>Tasks <b className="label orange pull-right">
                    19</b> </Link></li>
            </ul>
            <ul className="widget widget-menu unstyled">
                <li><Link href="/manageUsers"><i className="menu-icon icon-bold"></i> Buttons </Link></li>
                <li><Link href="/manageUsers"><i className="menu-icon icon-book"></i>Typography </Link></li>
                <li><Link href="/manageUsers"><i className="menu-icon icon-paste"></i>Forms </Link></li>
                <li><Link href="/manageUsers"><i className="menu-icon icon-table"></i>Tables </Link></li>
                <li><Link href="/manageUsers"><i className="menu-icon icon-bar-chart"></i>Charts </Link></li>
            </ul>
            <ul className="widget widget-menu unstyled">
                <li><a className="collapsed" data-toggle="collapse" href="#togglePages"><i className="menu-icon icon-cog">
                </i><i className="icon-chevron-down pull-right"></i><i className="icon-chevron-up pull-right">
                    </i>More Pages </a>
                    <ul id="togglePages" className="collapse unstyled">
                        <li><a href="#"><i className="icon-inbox"></i>Login </a></li>
                        <li><a href="#"><i className="icon-inbox"></i>Profile </a></li>
                        <li><a href="#"><i className="icon-inbox"></i>All Users </a></li>
                    </ul>
                </li>
                <li><a href="/" onClick={handleLogout}><i className="menu-icon icon-signout"></i>Logout </a></li>
            </ul>
        </div>
    );
}