/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { Dialog, DialogOverlay, DialogContent } from '@reach/dialog';
import "@reach/dialog/styles.css";

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { Menu, X } from 'react-feather';
import { QUERIES } from '../../constants';

const MobileMenu = ({ isOpen, onDismiss, toggle }) => {
  return (
    <Wrapper>
      <StyledUnstyledButton onClick={toggle}>
          <Menu />
      </StyledUnstyledButton>

      <Dialog isOpen={isOpen}>
        <UnstyledButton onClick={onDismiss}><X /><VisuallyHidden>Dismiss menu</VisuallyHidden></UnstyledButton>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <NavLink href="/terms">Terms and Conditions</NavLink>
          <NavLink href="/privacy">Privacy Policy</NavLink>
          <NavLink href="/contact">Contact Us</NavLink>
        </Footer>
      </Dialog>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
  margin-top: 22px;
  font-size: 18px;
  font-weight: 600;
`

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: auto;
  font-size: 14px;
  color: var(--color-gray-700);
`

const NavLink = styled.a`
  color: var(--color-gray-900);
  text-decoration: none;
  text-transform: uppercase;
`

const StyledUnstyledButton = styled(UnstyledButton)`
  display: flex;

  @media ${QUERIES.tabletAndUp} {
    display: none;
  }
`

export default MobileMenu;
