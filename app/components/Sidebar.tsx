import Link from 'next/link';
export default function sidebar() {
    return (
        <div className="sidebar">
            <ul className="widget widget-menu unstyled">
                <li className="active"><Link href="/" ><i className="menu-icon icon-dashboard"></i>Dashboard
                </Link></li>
                <li><Link href="/manageUsers" ><i className="menu-icon icon-bullhorn"></i>Manage Users</Link>
                </li>
                <li><a href="#"><i className="menu-icon icon-inbox"></i>Inbox <b className="label green pull-right">
                    11</b> </a></li>
                <li><a href="#"><i className="menu-icon icon-tasks"></i>Tasks <b className="label orange pull-right">
                    19</b> </a></li>
            </ul>
            <ul className="widget widget-menu unstyled">
                <li><a href="#"><i className="menu-icon icon-bold"></i> Buttons </a></li>
                <li><a href="#"><i className="menu-icon icon-book"></i>Typography </a></li>
                <li><a href="#"><i className="menu-icon icon-paste"></i>Forms </a></li>
                <li><a href="#"><i className="menu-icon icon-table"></i>Tables </a></li>
                <li><a href="#"><i className="menu-icon icon-bar-chart"></i>Charts </a></li>
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
                <li><a href="#"><i className="menu-icon icon-signout"></i>Logout </a></li>
            </ul>
        </div>
    );
}