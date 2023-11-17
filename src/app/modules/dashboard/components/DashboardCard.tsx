import style from "../../../pages/dashboard/dashboard.module.scss";
import {FC} from "react";

type Props = {
    number: number,
    icons: string,
    text: string,
    color: string

}

const DashboardCard:FC<Props> = ({number,icons,text,color}) => {
    return (
        <div className={style.card} style={{borderBottomColor: color}}>
            <div className={style.cardTitleWrap}>
                <h4 className={style.cartTitle}>{number}</h4>
                <img className={style.image} src={`/media/icons/menu/${icons}`} alt='' />
            </div>
            <p className={style.cardDescription}>{text}</p>
        </div>
    )
}

export default DashboardCard
