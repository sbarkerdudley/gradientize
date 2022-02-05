import React from 'react';
import { Outlet, Link } from "react-router-dom";
import {Gradient, Login} from '../components';

export default function LoginPage() {
  return (
    <Gradient>
      <Login />
    </Gradient>
  )
}