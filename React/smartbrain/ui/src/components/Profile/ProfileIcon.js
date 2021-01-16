import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const ProfileIcon = () => {
    const [dropdownToggle, setDropdownToggle] = useState(false);

    return (
        <div className="pa4 tc">
            <Dropdown isOpen={dropdownToggle} toggle={() => setDropdownToggle(!dropdownToggle)}>
                <DropdownToggle caret tag="span" data-toggle="dropdown" aria-expanded={dropdownToggle}>
                    <img src="http://tachyons.io/img/logo.jpg" className="br-100 ba h3 w3 dib" alt="avatar" />
                </DropdownToggle>
                <DropdownMenu style={{marginTop: '20px', backgroundColor: 'rgba(255 255 255 0.5)'}}>
                    <DropdownItem>View Profile</DropdownItem>
                    <DropdownItem>Signout</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );

};

export default ProfileIcon;