import { Button } from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import styles from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div className={styles.container}>
      <span className={styles.name}>Welcome, {name}</span>
      <Button
        variant="outline-light"
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Logout
      </Button>{' '}
    </div>
  );
}
