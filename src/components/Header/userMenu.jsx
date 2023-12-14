// import { useDispatch, useSelector } from "react-redux"

import { AvatarSvg, DivGoal, DivGoalPart, DivWeight, DivWeightPart, GoalButton, GoalModal, GoalP, GoalPName, GoalSvg, ImageGoal,ImageWeight,UserAvatar,UserHeader,UserHeaderButton,UserMenuContainer, UserNameHeader, WeightButton, WeightModal, WeightP, WeightPName, WeightSpan, WeightSvg } from "./userMenu.styled"
import  GainMuscle  from "../../assets/header/Gain-muscle.png"
import  LoseFatGirl  from "../../assets/header/Lose-fat-girl.png"
import  LoseFatMan  from "../../assets/header/Lose-fat-man.png"
import  MaintakeGirl  from "../../assets/header/Maintake-girl.png"
import  MaintakeMan  from "../../assets/header/Maintake-man.png"
import changeGoalWeight from '../../assets/header/open-change-modals.svg'
import changeWeight from '../../assets/header/Weight-image.png'

const UserMenu = () => {
    // const dispatch = useDispatch()
    // const user = useSelector(selectUser)
    const gender = 'man';
    const goal = 'Gain muscle';
    const weight = 130;
    const userName = 'Dima'

    const imagesPath = {
        'LoseFat girl': LoseFatGirl,
        'Maintake girl': MaintakeGirl,
        'LoseFat man': LoseFatMan, 
        'Maintake man': MaintakeMan,
        'Gain muscle': GainMuscle
    }

    const selectedImage = goal === 'Gain muscle' ? imagesPath[`Gain muscle`]: imagesPath[`${goal} ${gender}`];

    return (
        <UserMenuContainer>
            <GoalModal>
                <GoalButton>
                <ImageGoal src={selectedImage} alt="Goal image" />
                </GoalButton>
                <DivGoalPart>
                    <DivGoal>
                <GoalPName>Goal</GoalPName>
                <GoalP>{goal}</GoalP>
                </DivGoal>
                <GoalSvg><use href={`${changeGoalWeight}#change-your-goal`} /></GoalSvg>
                </DivGoalPart>
            </GoalModal>
            <WeightModal>
                <WeightButton>
                <ImageWeight src={changeWeight} alt="Change weight" />
                </WeightButton>
                <DivWeightPart>
                    <DivWeight>
                <WeightPName>Weight</WeightPName>
                <div style={{display:'flex'}}>
                <WeightP>{weight}<WeightSpan>kg</WeightSpan></WeightP>
                <WeightSvg><use href={`${changeGoalWeight}#edit-weight`} /></WeightSvg>  
                </div>             
                 </DivWeight>
                </DivWeightPart>
            </WeightModal>
            <UserHeader>
                <UserHeaderButton>
                <UserNameHeader>{userName}
                </UserNameHeader>
                <UserAvatar  src={selectedImage}/>
                <AvatarSvg><use href={`${changeGoalWeight}#change-your-goal`} /></AvatarSvg>
                </UserHeaderButton>
            </UserHeader>
        </UserMenuContainer>
    )
}

export default UserMenu