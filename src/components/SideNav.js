import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const SideNav = () => {
    const { pathname } = useLocation()

    const [active, setActive] = useState("");

    useEffect(() => {
        setActive(pathname);
    }, [pathname]);

    return (
        <nav className="side-nav">
            <ul>
                <li>
                    <Link to="/" className={`side-menu  ${active === '/' ? '' : ''}`}>
                        <div className="side-menu__icon"> <img src="/dist/img/home.png" alt='icon' width={24} /> </div>
                        <div className="side-menu__title ">
                            Dashboard { }
                            <div className="side-menu__sub-icon transform rotate-180"> <i data-lucide="chevron-down"></i> </div>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/customer-management" className={`side-menu ${active === '/customer-management' ? '' : ''}`}>
                        <div className="side-menu__icon"> <img src="/dist/img/users.png" alt='icon' width={24} /> </div>
                        <div className="side-menu__title">
                            Customers
                            <div className="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/accounts-management" className={`side-menu ${active === '/accounts-management' ? '' : ''}`}>
                        <div className="side-menu__icon"> <img src="/dist/img/accounts.png" alt='icon' width={24} /> </div>
                        <div className="side-menu__title">
                            Accounts
                            <div className="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/transactions" className={`side-menu ${active === '/transactions' ? '' : ''}`}>
                        <div className="side-menu__icon"> <img src="/dist/img/list.png" alt='icon' width={24} /> </div>
                        <div className="side-menu__title">
                            T.Requests
                            <div className="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                        </div>
                    </Link>
                </li>

                <li style={{ borderBottom: 0 }}>
                    <Link to="javascript:;" onClick={(e) => e.preventDefault()} className={`side-menu side-menu--open ${active === '/user-accounts' ? '' : ''}`} style={{ borderBottom: "1px solid #c4c4c4" }}>
                        <div className="side-menu__icon"> <img src="/dist/img/admin.png" alt='icon' width={24} /> </div>
                        <div className="side-menu__title">
                            Admin
                            <div className="side-menu__sub-icon transform rotate-180"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" icon-name="chevron-down" data-lucide="chevron-down" className="lucide lucide-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                            </div>
                        </div>
                    </Link>
                    <ul className="side-menu__sub-open pl-10" style={{ display: 'block' }}>
                        <li>
                            <Link to="/user-accounts" className={`side-menu ${active === '/user-accounts' ? '' : ''}`}>
                                <div className="side-menu__icon"> <img src="/dist/img/user.png" alt='icon' width={24} /> </div>
                                <div className="side-menu__title">
                                    Users
                                    <div className="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/roles" className={`side-menu ${active === '/customer-management' ? '' : ''}`}>
                                <div className="side-menu__icon"> <img src="/dist/img/roles.png" alt='icon' width={24} /> </div>
                                <div className="side-menu__title">
                                    Role and Access
                                    <div className="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/audit-logs" className={`side-menu ${active === '/audit-logs' ? '' : ''}`}>
                                <div className="side-menu__icon"> <img src="/dist/img/audit.png" alt='icon' width={24} /> </div>
                                <div className="side-menu__title">
                                    Audit Logs
                                    <div className="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className={`side-menu ${active === '/customer-management' ? '' : ''}`}>
                                <div className="side-menu__icon"> <img src="/dist/img/settings.png" alt='icon' width={24} /> </div>
                                <div className="side-menu__title">
                                    Settings
                                    <div className="side-menu__sub-icon "> <i data-lucide="chevron-down"></i> </div>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>);
}

export default SideNav;