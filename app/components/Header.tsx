import Link from 'next/link';
export default function header() {
    return (
        <div className="navbar navbar-fixed-top">
            <div className="navbar-inner">
                <div className="container">
                    <a className="btn btn-navbar" data-toggle="collapse" data-target=".navbar-inverse-collapse">
                        <i className="icon-reorder shaded"></i></a><a className="brand" href="index.html">Edmin </a>
                    <div className="nav-collapse collapse navbar-inverse-collapse">
                        <ul className="nav nav-icons">
                            <li className="active"><a href="#"><i className="icon-envelope"></i></a></li>
                            <li><a href="#"><i className="icon-eye-open"></i></a></li>
                            <li><a href="#"><i className="icon-bar-chart"></i></a></li>
                        </ul>
                        <form className="navbar-search pull-left input-append" action="#">
                            <input type="text" className="span3" />
                            <button className="btn" type="button">
                                <i className="icon-search"></i>
                            </button>
                        </form>
                        <ul className="nav pull-right">
                            <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown
                                <b className="caret"></b></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Item No. 1</a></li>
                                    <li><a href="#">Don't Click</a></li>
                                    <li className="divider"></li>
                                    <li className="nav-header">Example Header</li>
                                    <li><a href="#">A Separated link</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Support </a></li>
                            <li className="nav-user dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                <img src="/assets/images/user.png" className="nav-avatar" />
                                <b className="caret"></b></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Your Profile</a></li>
                                    <li><a href="#">Edit Profile</a></li>
                                    <li><a href="#">Account Settings</a></li>
                                    <li className="divider"></li>
                                    <li><a href="#">Logout</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}