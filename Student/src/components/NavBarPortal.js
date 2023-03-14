import React from 'react';
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
} from './NavbarElements';

const NavBarPortal = () => {
	return (
		<>
			<div>
				<Nav>
					<Bars />

					<NavMenu>
						<NavLink to='/about' activeStyle>
							Profile
						</NavLink>
						<NavLink to='/events' activeStyle>
							Courses
						</NavLink>
						<NavLink to='/events' activeStyle>
							Schedule
						</NavLink>
						<NavLink to='/events' activeStyle>
							Attendance
						</NavLink>
						<NavLink to='/events' activeStyle>
							Chat
						</NavLink>
					
					</NavMenu>
				</Nav>
			</div>

		</>
	);
};

export default NavBarPortal;
