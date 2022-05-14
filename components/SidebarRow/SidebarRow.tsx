/* eslint-disable no-undef */
import React, { SVGProps } from 'react';

interface SiderbarProps{
    // eslint-disable-next-line no-unused-vars
    Icon : (props:SVGProps<SVGSVGElement>)=>JSX.Element;
    title : string;
}

const SidebarRow = ({ Icon, title } : SiderbarProps) => (
  <div>
    <Icon className="h-6 w-6" />
    <p>{title}</p>
  </div>
);

export default React.memo(SidebarRow);
