import React from 'react';
import { FormattedMessage } from 'react-intl';

import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';

import messages from './messages';
import Marvel from './marvel.jpg';

function Header() {
  return (
    <div>
      <Img src={Marvel} alt="marvel-header" />
      <NavBar>
        <HeaderLink to="/">
          <FormattedMessage {...messages.home} />
        </HeaderLink>
        <HeaderLink to="/features">
          <FormattedMessage {...messages.features} />
        </HeaderLink>
        <HeaderLink to="/search">
          <FormattedMessage {...messages.search} />
        </HeaderLink>
      </NavBar>
    </div>
  );
}

export default Header;
