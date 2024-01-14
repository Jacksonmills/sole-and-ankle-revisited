import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, QUERIES } from '../../constants';

import SearchInput from '../SearchInput';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';

const SuperHeader = () => {
  return (
    <Wrapper>
      <Content>
        <MarketingMessage>
          Free shipping on domestic orders over $75!
        </MarketingMessage>
        <SearchInput />
        <HelpLink href="/help">Help</HelpLink>
        <UnstyledButton>
          <Icon id="shopping-bag" strokeWidth={1} />
        </UnstyledButton>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  background-color: var(--color-gray-900);
  height: 10px;
  padding-left: 32px;
  padding-right: 32px;

  @media ${QUERIES.laptopAndUp} {
    height: 40px
  }
`;

const Content = styled.div`
  display: none;
  align-items: center;
  gap: 24px;
  font-size: 0.875rem;
  color: var(--color-gray-300);

  @media ${QUERIES.laptopAndUp} {
    display: flex;
  }
`

const MarketingMessage = styled.span`
  color: white;
  margin-right: auto;
`;

const HelpLink = styled.a`
  color: inherit;
  text-decoration: none;
  outline-offset: 2px;

  &:not(:focus-visible) {
    outline: none;
  }
`;

export default SuperHeader;
