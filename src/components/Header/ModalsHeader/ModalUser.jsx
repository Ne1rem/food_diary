import { ModalButtonSettigns, ModalPartButtonSettigns, ModalSettigns, ModalSvgSettigns, ModalTextSettigns } from './Modals-styles/ModalUsers.styles'
import HeaderSvg from '/src/assets/header/headerSvg.svg'

function ModalUserHeader ()  {

    return(
        <ModalSettigns>
            <ModalPartButtonSettigns>
            <ModalButtonSettigns to="/settings"><ModalSvgSettigns><use href={`${HeaderSvg}#settings`}/></ModalSvgSettigns>
            <ModalTextSettigns>Settings</ModalTextSettigns></ModalButtonSettigns>
            <ModalButtonSettigns to="/"><ModalSvgSettigns><use href={`${HeaderSvg}#logout`}/></ModalSvgSettigns>
            <ModalTextSettigns>Logout</ModalTextSettigns></ModalButtonSettigns>
            </ModalPartButtonSettigns>
        </ModalSettigns>
    )
}

export default ModalUserHeader