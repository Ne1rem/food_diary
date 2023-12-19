import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import PublicRoute from './route/PublicRoute/PublicRoute';
import PrivateRoute from './route/PrivateRoutes/PrivateRoutes';
import './main.css';
import SharedLayout from './components/SharedLayout/SharedLayout';
import { selectIsLoggedIn } from "./Redux/Auth/selectors";
import { useSelector,  useDispatch } from 'react-redux';
import { refresh } from './Redux/Auth/authThunks';

const Welcome = lazy(() => import('./pages/PublicPage/Welcome/Welcome'));
const SignUp = lazy(() => import('./pages/PublicPage/SignUp/SignUp'));
const SignIn = lazy(() => import('./pages//PublicPage/SignIn/SignIn'));
const ForgotPassword = lazy(() =>
  import('./pages/PublicPage/ForgotPassword/ForgotPassword')
);
const Main = lazy(() => import('./pages/PrivatePage/Main/Main'));
const Dashboard = lazy(() => import('./pages/PrivatePage/Dashboard/Dashboard'));
const Diary = lazy(() => import('./pages/PrivatePage/Diary/Diary'));
const RecommendedFood = lazy(() =>
  import('./pages/PrivatePage/RecommendedFood/RecommendedFood')
);
const Settings = lazy(() => import('./pages/PrivatePage/Settings/Settings'));

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'flex-start',
      //   alignItems: 'center',
      //   flexDirection: 'column',
      // }}
    >
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route element={<PublicRoute isLoggedIn={isLoggedIn} />}>
            <Route index element={<Welcome />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
          </Route>
          <Route element={<PrivateRoute isLoggedIn={isLoggedIn} />}>
            <Route path="main" element={<Main />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="diary" element={<Diary />} />
            <Route path="recommended-food" element={<RecommendedFood />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
