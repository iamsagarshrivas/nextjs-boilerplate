import App from './App';
import SignIn from "./pages/auth/SignIn";
import SignUp  from "./pages/auth/SignUp";
import ForgotPassword from "./pages/auth/ForgotPassword";
import NotFoundPage from './pages/NotFound';

export default [
  {
	...App,
    routes: [
      {
        ...SignIn,
        path: '/',
        exact: true
      },
      {
        ...SignUp,
        path: '/sign-up'
      },
      {
        ...ForgotPassword,
        path: '/forgot-password'
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
