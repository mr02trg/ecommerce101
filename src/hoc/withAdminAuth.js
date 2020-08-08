import React, { useEffect } from 'react';
import userAtom from 'atoms/userAtom';
import { useRecoilValue } from 'recoil';
import history from 'history.js';

const withAdminAuth = WrappedComponent => props => {
  const userState = useRecoilValue(userAtom);
  useEffect(() => {
    if (! userState?.role['admin']) {
      history.push('/');
    }
  }, [userState])
  return userState && <WrappedComponent {...props} />;
};

export default withAdminAuth;