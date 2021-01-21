import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';

import messages from './messages';
import Marvel from './marvel.jpg';

function Header() {
  return (
    <div>
      <A href="https://www.marvel.com/">
        <Img src={Marvel} alt="marvel-header" />
      </A>
      <NavBar>
        <HeaderLink to="/">
          <FormattedMessage {...messages.home} />
        </HeaderLink>
        <HeaderLink to="/search">
          <FormattedMessage {...messages.search} />
        </HeaderLink>
      </NavBar>
    </div>
  );
}

export default Header;
