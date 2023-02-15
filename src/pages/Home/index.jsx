import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import BasicTable from 'components/BasicTable';
import ErrorMessage from 'components/ErrorMessage';
import Loader from 'components/Loader';
import Main from 'components/Main';
import { fetchCustomers } from 'redux/customers/action';
import { getCustomers } from 'redux/customers/selectors';

const Home = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(getCustomers);

  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch]);

  return (
    <Main>
      <BasicTable />
      {isLoading && <Loader />}
      {!isLoading && error ? <ErrorMessage description={error} /> : null}
    </Main>
  );
};

export default Home;
