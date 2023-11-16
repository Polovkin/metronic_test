import React, {FC, HTMLAttributes, useState} from "react";
import {Link} from "react-router-dom";
import styles from '../styles/auth-step-one.module.scss'
import * as classNames from "classnames";

import {toAbsoluteUrl} from "../../../../_metronic/helpers";
import SVG from "react-inlinesvg";
type Props = {
    setCurrentStep: (index: number) => void
}

interface TypeCardProps extends HTMLAttributes<HTMLDivElement> {
    isActive: boolean,
    title: string,
    description: string,
    icon: string
    handleClick?: () => void
}

const cardData = [
    {
        title: 'Creator',
        description: 'Sign-up as a creator',
        icon: '/media/icons/users.svg'
    },
    {
        title: 'Agency',
        description: 'Sign-up as an agency',
        icon: '/media/icons/education.svg'
    },
]

const TypeCard: FC<TypeCardProps> = ({title,handleClick, description, icon,isActive}) => {
    return (
        <div onClick={handleClick} className={classNames(styles.card, isActive ? styles.active : '')}>
            <div className={styles.icon}>
                <SVG src={toAbsoluteUrl(icon)} />
            </div>
            <div>
                <div>{title}</div>
                <div>{description}</div>
            </div>
        </div>
    )
}

const AuthStepOne:FC<Props> = ({setCurrentStep}) => {
    const [activeCard, setActiveCard] = useState(0)

    return (
        <div>
            <div className='text-start mb-11'>
                {/* begin::Title */}
                <h1 className='text-gray-900 fw-bolder mb-3'>Choose an account type</h1>
                {/* end::Title */}

                <div className='text-gray-500 fw-semibold fs-6'>If you need more info, please visit our <Link to='/auth' className='link-primary'>
                    help page.
                    </Link>
                </div>
                <div className={styles.cardWrapper}>
                    {cardData.map((card, index) =>
                        <TypeCard handleClick={()=>setActiveCard(index)} isActive={activeCard===index} key={card.title} {...card}/>
                    )}
                </div>
            </div>
            <button className="btn btn-primary" onClick={()=>setCurrentStep(1)}>Continue   <i className="flaticon2-chat-1"></i></button>
        </div>
    )
}

export default AuthStepOne
