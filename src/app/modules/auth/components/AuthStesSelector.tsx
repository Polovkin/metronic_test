import {FC} from "react";
import styles from '../styles/auth-selector.module.scss'
import * as classNames from "classnames";

export const steps = [
    {
        title: 'Account Type',
        description: 'Select your account type',
    },
    {
        title: 'Account Details',
        description: 'Add your personal info',
    },
    {
        title: 'Verification',
        description: 'Verify your account',
    },
    {
        title: 'Creator Info',
        description: 'Setup your business details',
    },
    {
        title: 'Completed',
        description: 'Your account is created',
    },
]

type Props = {
    activeStep: number
}

const AuthSteps: FC<Props> = ({activeStep = 0}) => {

    return (
        <div>
            <ul>
                {steps.map((step, index) => (
                    <li className={classNames('d-flex p-3 align-items-center',
                        activeStep === index && styles.active,
                        styles.step)} key={index}>
                        <div className={classNames(styles.stepNumber,'p-3 text-white')}>{index + 1}</div>
                        <div className={classNames('d-flex flex-column mx-4 text-white',styles.text)}>
                            <span className={styles.stepTextTitle}>{step.title}</span>
                            <span className={styles.stepTextDescription}>{step.description}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AuthSteps
