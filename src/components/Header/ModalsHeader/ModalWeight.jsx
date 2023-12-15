import HeaderSvg from '/src/assets/header/headerSvg.svg'

function ModalWeight ({setIsWeightModalOpen}) {
    const today = new Date();
    const formattedDate = `${String(today.getDate()).padStart(2, '0')}.${String(today.getMonth() + 1).padStart(2, '0')}.${today.getFullYear()}`;

    return(
    <div>
        <button  onClick={() => setIsWeightModalOpen(false)}><svg><use href={`${HeaderSvg}#close-modal`}/></svg></button>
        <div>
        <p>Enter your current weight</p>
        <p>You can record your weight once a day</p>
        <p>Today {formattedDate}</p>
        </div>
        <div>
            <input placeholder="Enter your weight"></input>
            <button  onClick={() => setIsWeightModalOpen(false)}>Confirm</button>
        </div>
    </div>
        )
}

export default ModalWeight