import { WrapperComponent, Title, WrapperTitle, TrashSvg } from "./DiaryItemMain.styled";
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
    <TrashSvg><use href={`${trashImg}#icon-trash`} /></TrashSvg>
    </WrapperComponent> );
}
 
export default DiaryItemMain;