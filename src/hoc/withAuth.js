import React, { useEffect } from 'react';
import userAtom from 'atoms/userAtom';
import { useRecoilValue } from 'recoil';
import history from 'history.js';
import { notify, NOTIFICATION_TYPE } from 'utils/notification';

const withAuth = WrappedComponent => props => {
  const userState = useRecoilValue(userAtom);
  useEffect(() => {
    if (! userState) {
      notify(NOTIFICATION_TYPE.WARNING, 'Please login to continue')
      history.push('/login');
    }
  }, [userState])
  return userState && <WrappedComponent {...props} />;
};

export default withAuth;