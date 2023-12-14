// import { useDispatch, useSelector } from "react-redux"

import { GoalButton, ImageGoal,UserMenuContainer } from "./userMenu.styled"
import  GainMuscle  from "../../assets/header/Gain-muscle.png"
import  LoseFatGirl  from "../../assets/header/Lose-fat-girl.png"
import  LoseFatMan  from "../../assets/header/Lose-fat-man.png"
import  MaintakeGirl  from "../../assets/header/Maintake-girl.png"
import  MaintakeMan  from "../../assets/header/Maintake-man.png"


const UserMenu = () => {
    // const dispatch = useDispatch()
    // const user = useSelector(selectUser)
    const gender = 'girl';
    const goal = 'LoseFat';
    
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
            <GoalButton>
                <ImageGoal src={selectedImage} alt="Goal image" />
            </GoalButton>
        </UserMenuContainer>
    )
}

export default UserMenu