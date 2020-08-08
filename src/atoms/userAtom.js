import { atom } from 'recoil';
import { getUserFromStorage } from 'utils/user.helper';

const userAtom = atom({
  key: 'userState',
  default: getUserFromStorage()
});

export default userAtom;