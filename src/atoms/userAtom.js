import { atom } from 'recoil';
import { getUserFromStorage } from 'utils/persistUser';

const userAtom = atom({
  key: 'userState',
  default: getUserFromStorage()
});

export default userAtom;