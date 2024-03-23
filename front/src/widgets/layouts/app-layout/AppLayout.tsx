import React, { useState, type FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header';
import { ReactComponent as DescriptionOutline } from '@openvtb/admiral-icons/build/documents/DescriptionOutline.svg';

export const AppLayout: FC = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const handleLogButton = () => {
    setIsPanelOpen((prev) => !prev);
  };

  const currentUser = {
    username: 'theUser444'
  };

  return (
    <>
      8uppo
    </>
  );
};
