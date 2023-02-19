import { lazy, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { ErrorMessage, Loader, MainContainer } from 'components';
import { fetchCustomers } from 'redux/customers/action';
import { getCustomers } from 'redux/customers/selectors';

import CustomersTable from './CustomersTable';
import PopUpContent from './PopUpContent';

const PopUpComponent = lazy(() => import('components/PopUp'));

const Home = () => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(getCustomers);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch]);

  return (
    <MainContainer>
      <PopUpComponent
        titleBtn="Select Columns"
        onOpen={handleOpen}
        onClose={handleClose}
        open={open}
      >
        <PopUpContent onClose={handleClose} />
      </PopUpComponent>
      <CustomersTable />
      {isLoading && <Loader />}
      {!isLoading && error ? <ErrorMessage message={error} /> : null}
    </MainContainer>
  );
};

export default Home;
