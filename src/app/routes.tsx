
  import { useAppContext } from 'src/app/AppContext';
  import { Route, Routes, Navigate } from 'react-router-dom';

  // layout
  import MainLayout from 'src/layout/main';
  import AuthLayout from 'src/layout/auth';

  // pages
  import { Users,Users1,Users2,Users_2,Users3,Users_21,Users_3,Users_2_2,Sdv,Users_1,Users_22,Users_31,Users_4,Users_5,Users_6,Users_7,Users_8,Users_9,Users_10,Users_11,Orders_1,Orders_2,Orders_3,Orders_4,Orders_5,Orders_6,Orders_7,Categories_1,Categories_2,Categories_3,Categories_4,Categories_5,Payments_1,Payments_2,Payments_3,Payments_4,Payments_5,Payments_6,Products_1,Products_2,Products_3,Products_4,Products_5,Products_6,Products_7,Products_8,Users_12,Users_13,Sfv,LoginPage,SignupPage,NoPageFound } from 'src/pages';

  const AppRoutes = () => {
    const { user } = useAppContext();
    const hasUser = user && !!user.info?.token;

    return (
      <Routes>
        <Route path='/' element={hasUser ? <MainLayout /> : <Navigate replace to='auth' />}>
          <Route index element={<Navigate replace to='Users' />} />
<Route path='users' element={<Users />} />
<Route path='users1' element={<Users1 />} />
<Route path='users2' element={<Users2 />} />
<Route path='users_2' element={<Users_2 />} />
<Route path='users3' element={<Users3 />} />
<Route path='users_21' element={<Users_21 />} />
<Route path='users_3' element={<Users_3 />} />
<Route path='users_2_2' element={<Users_2_2 />} />
<Route path='sdv' element={<Sdv />} />
<Route path='users_1' element={<Users_1 />} />
<Route path='users_22' element={<Users_22 />} />
<Route path='users_31' element={<Users_31 />} />
<Route path='users_4' element={<Users_4 />} />
<Route path='users_5' element={<Users_5 />} />
<Route path='users_6' element={<Users_6 />} />
<Route path='users_7' element={<Users_7 />} />
<Route path='users_8' element={<Users_8 />} />
<Route path='users_9' element={<Users_9 />} />
<Route path='users_10' element={<Users_10 />} />
<Route path='users_11' element={<Users_11 />} />
<Route path='orders_1' element={<Orders_1 />} />
<Route path='orders_2' element={<Orders_2 />} />
<Route path='orders_3' element={<Orders_3 />} />
<Route path='orders_4' element={<Orders_4 />} />
<Route path='orders_5' element={<Orders_5 />} />
<Route path='orders_6' element={<Orders_6 />} />
<Route path='orders_7' element={<Orders_7 />} />
<Route path='categories_1' element={<Categories_1 />} />
<Route path='categories_2' element={<Categories_2 />} />
<Route path='categories_3' element={<Categories_3 />} />
<Route path='categories_4' element={<Categories_4 />} />
<Route path='categories_5' element={<Categories_5 />} />
<Route path='payments_1' element={<Payments_1 />} />
<Route path='payments_2' element={<Payments_2 />} />
<Route path='payments_3' element={<Payments_3 />} />
<Route path='payments_4' element={<Payments_4 />} />
<Route path='payments_5' element={<Payments_5 />} />
<Route path='payments_6' element={<Payments_6 />} />
<Route path='products_1' element={<Products_1 />} />
<Route path='products_2' element={<Products_2 />} />
<Route path='products_3' element={<Products_3 />} />
<Route path='products_4' element={<Products_4 />} />
<Route path='products_5' element={<Products_5 />} />
<Route path='products_6' element={<Products_6 />} />
<Route path='products_7' element={<Products_7 />} />
<Route path='products_8' element={<Products_8 />} />
<Route path='users_12' element={<Users_12 />} />
<Route path='users_13' element={<Users_13 />} />
<Route path='sfv' element={<Sfv />} />
</Route>

        <Route
          path='/auth'
          element={!hasUser ? <AuthLayout /> : <Navigate replace to='/' />}>
            <Route index element={<Navigate replace to='login' />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='signup' element={<SignupPage />} />
        </Route>
        {/** No page Found */}
        <Route path='*' element={<NoPageFound />} />
      </Routes>
    );
  };

  export default AppRoutes;
