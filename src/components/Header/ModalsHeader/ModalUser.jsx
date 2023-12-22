import { useDispatch } from 'react-redux';
import { logOut } from '../../../Redux/Auth/authThunks'
import { ModalButtonSettigns, ModalPartButtonSettigns, ModalSettigns, ModalSvgSettigns, ModalTextSettigns } from './Modals-styles/ModalUsers.styles'
import HeaderSvg from '/src/assets/header/headerSvg.svg'

function ModalUserHeader ({setIsUserModalOpen})  {
    const dispatch = useDispatch();
    
  const handleLogout = () => {
    dispatch(logOut())
      .then(() => {
      })
      .catch(error => {
        console.error('Error logging out:', error);
      });
  };

    return(
        <ModalSettigns>
            <ModalPartButtonSettigns>
            <ModalButtonSettigns to="/settings" onClick={() => setIsUserModalOpen(false)}><ModalSvgSettigns><use href={`${HeaderSvg}#settings`}/></ModalSvgSettigns>
            <ModalTextSettigns>Settings</ModalTextSettigns></ModalButtonSettigns>
            <ModalButtonSettigns to="/" onClick={handleLogout}><ModalSvgSettigns><use href={`${HeaderSvg}#logout`}/></ModalSvgSettigns>
            <ModalTextSettigns>Logout</ModalTextSettigns></ModalButtonSettigns>
            </ModalPartButtonSettigns>
        </ModalSettigns>
    )
}

export default ModalUserHeader