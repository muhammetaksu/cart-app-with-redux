import { Badge } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark" style={{ height: '50px' }}>
        <Container>
          <NavLink to="/" className="text-decoration-none text-light mx-2">
            365 Redux-Cart
          </NavLink>
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none text-light mx-2">
              Home
            </NavLink>
          </Nav>

          <Badge
            badgeContent={4}
            color="primary"
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <i
              className="fa-solid fa-cart-shopping text-light"
              style={{ fontSize: 25, cursor: 'pointer' }}
            ></i>
          </Badge>
        </Container>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <div
            className="card_details d-flex justify-content-center align-items-center"
            style={{ width: '25rem', padding: 10, position: 'relative' }}
          >
            <i
              className="fas fa-close sm"
              onClick={handleClose}
              style={{ position: 'absolute', top: 2, right: 15, fontSize: 24 }}
            ></i>
            <p>Sepette ürün bulunmamaktadır.</p>
            <img
              src="./cart.gif"
              alt=""
              style={{ height: '100px' }}
              className="bos_sepet_img"
            />
          </div>
        </Menu>
      </Navbar>
    </div>
  );
};

export default Header;
