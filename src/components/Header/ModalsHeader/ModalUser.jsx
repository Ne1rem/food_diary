import HeaderSvg from '/src/assets/header/headerSvg.svg'

function ModalUserHeader ({setIsUserModalOpen})  {
    return(
        <div>
            <button onClick={() => setIsUserModalOpen(false)}><svg><use href={`${HeaderSvg}#settings`}/></svg>
            <p>Settings</p></button>
            <button onClick={() => setIsUserModalOpen(false)}><svg><use href={`${HeaderSvg}#logout`}/></svg>
            <p>Logout</p></button>
        </div>
    )
}

export default ModalUserHeader