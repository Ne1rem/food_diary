import { WrapperComponent, Title, WrapperTitle, TrashSvg, ButtonSvg } from "./DiaryItemMain.styled";
import ListNutritients from "./ListNutritients";
import trashImg from "../../assets/diary/trash.svg"

const DiaryItemMain = ({name, img}) => {
    return ( 
    <WrapperComponent>
    <WrapperTitle>
        <img src={img} width={36} height={36}/>
        <Title>{name}</Title>
    </WrapperTitle>
    <ListNutritients />
    <ButtonSvg>
    <TrashSvg><use href={`${trashImg}#icon-trash`} /></TrashSvg>
    </ButtonSvg>
    </WrapperComponent> );
}
 
export default DiaryItemMain;