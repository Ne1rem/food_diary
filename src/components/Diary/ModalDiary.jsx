import { useEffect } from "react";
import { useFormik } from "formik";
import { Overlay, ModalWindow, Header, Wrapper, Title, InputStyle, Button } from "./ModalDiary.styled";

const ModalDiary = ({name, img, onClose}) => {
    useEffect(()=>{
        const handleKeyDown = e => {
            if(e.code === 'Escape'){
                onClose();
            }
        }
    window.addEventListener('keydown', handleKeyDown);
    return() => {window.removeEventListener('keydown', handleKeyDown)}
    },[onClose])

    const handleOverlayClick = e => {
        if(e.currentTarget === e.target){
            onClose()
        }
    }
    const formik = useFormik({
        initialValues: {
            name: '',
            carbonohidrates: '',
            protein: '',
            fat: '',
            calories: ''
        }
    })

    return(
        <Overlay onClick={handleOverlayClick}>
            <ModalWindow>
                <Header>Record your meal</Header>
                <Wrapper>
                  <img src={img}/>
                  <Title>{name}</Title>
                </Wrapper>
            <form>
                   <InputStyle
                     id="name"
                     name="name"
                     placeholder="The name of the product or dish"
                     onChange={formik.handleChange}
                     value={formik.values.name}/>
                   <InputStyle
                     id="carbonohidrates"
                     name="carbonohidrates"
                     placeholder="Carbonoh."
                     onChange={formik.handleChange}
                     value={formik.values.carbonohidrates}/>
                   <InputStyle
                     id="protein"
                     name="protein"
                     placeholder="Protein"
                     onChange={formik.handleChange}
                     value={formik.values.protein}/>
                  <div>
                   <InputStyle
                     id="fat"
                     name="fat"
                     placeholder="Fat"
                     onChange={formik.handleChange}
                     value={formik.values.fat}/>
                   <InputStyle
                     id="calories"
                     name="calories"
                     placeholder="Calories"
                     onChange={formik.handleChange}
                     value={formik.values.calories}/>                     
                  </div>
            </form>
                <Button>Confirm</Button>
                <Button>Cancel</Button>
            </ModalWindow>
        </Overlay>
    )
}

export default ModalDiary;