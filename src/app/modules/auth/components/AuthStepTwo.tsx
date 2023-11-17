import {Registration} from "./Registration.tsx";
import {FC} from "react";

type Props = {
    setCurrentStep: (index: number) => void
}
const AuthStepTwo: FC<Props> = ({setCurrentStep}) => {
    return (
        <div>
            <Registration setCurrentStep={setCurrentStep}/>
        </div>
    )
}

export default AuthStepTwo
