/* eslint-disable no-undef */
import React, { SVGProps } from 'react';

interface SiderbarProps{
    // eslint-disable-next-line no-unused-vars
    Icon : (props:SVGProps<SVGSVGElement>)=>JSX.Element;
    title : string;
}

const SidebarRow = ({ Icon, title } : SiderbarProps) : JSX.Element => (
  <div className="group flex items-center max-w-fit space-x-2 py-3 px-4 rounded-full cursor-pointer hover:bg-gray-100 transition-all duration-300 dark:hover:bg-gray-800">
    <Icon className="h-6 w-6 dark:fill-slate-300 dark:stroke-white" />
    <p className="group-hover:text-twitter dark:group-hover:text-twitterDark duration-200 dark:text-white">{title}</p>
  </div>
);

export default React.memo(SidebarRow);
