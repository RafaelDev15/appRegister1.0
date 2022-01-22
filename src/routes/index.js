import React, {useContext} from 'react';

import {AuthContext} from '../contexts/auth';

import AuthRoutes from './app.auth';
import AppRoutes from './app.routes';

export default function Routes() {

  const {signed} = useContext(AuthContext);

 return (
    signed ? <AppRoutes /> : <AuthRoutes />
  );
}