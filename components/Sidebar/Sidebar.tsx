/* eslint-disable @next/next/no-img-element */
import React from 'react';
import {
  HomeIcon, HashtagIcon, BellIcon, MailIcon, BookmarkIcon, CollectionIcon,
} from '@heroicons/react/outline';
import Image from 'next/image';
import styled, { css } from 'styled-components';
import SidebarRow from '../SidebarRow/SidebarRow';

const StyledImageContainer = styled('div')(() => css`
position: relative;
height: 40px;
width: 40px;
cursor: pointer;
`);

const Sidebar : React.FC = () => (
  <div>
    <StyledImageContainer>
      <Image src="/logo-twitter-icon-symbol-0.png" objectFit="cover" alt="Twitter logo" layout="fill" />

    </StyledImageContainer>
    {/* <img src="/logo-twitter-icon-symbol-0.png" className="h-10 w-10" alt="Twitter Logo" /> */}
    <SidebarRow Icon={HomeIcon} title="Home" />
    <SidebarRow Icon={HashtagIcon} title="Explore" />
    <SidebarRow Icon={BellIcon} title="Notifications" />
    <SidebarRow Icon={MailIcon} title="Messages" />
    <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
    <SidebarRow Icon={CollectionIcon} title="Lists" />
  </div>
);

export default React.memo(Sidebar);
