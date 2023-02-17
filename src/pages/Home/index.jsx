import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { ErrorMessage, Loader, MainContainer } from 'components';
import PopUp from 'components/PopUp';
import { fetchCustomers } from 'redux/customers/action';
import { getCustomers } from 'redux/customers/selectors';

import CustomersTable from './CustomersTable';
import PopUpContent from './PopUpContent';

const Home = () => {
  const { isLoading, error } = useSelector(getCustomers);

  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch]);

  return (
    <MainContainer>
      <PopUp
        titleBtn="Select Columns"
        handleOpen={handleOpen}
        handleClose={handleClose}
        open={open}
      >
        <PopUpContent handleClosePopUp={handleClose} />
      </PopUp>
      <CustomersTable />
      {isLoading && <Loader />}
      {!isLoading && error ? <ErrorMessage description={error} /> : null}
    </MainContainer>
  );
};

export default Home;
