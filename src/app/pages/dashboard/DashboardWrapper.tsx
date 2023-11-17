import {FC} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import style from './dashboard.module.scss'
const cards = [
    {
        number: 252,
        icons:'lock-frame.svg',
        text: 'Links Scraped',
        color: '#3E97FF',
    },
    {
        number: 252,
        icons:'search-frame.svg',
        text: 'Links Manually Checked',
        color: '#7239EA',
    },
    {
        number: 252,
        icons:'alert-frame.svg',
        text: 'Link Violations',
        color: '#F6C000',
    },
    {
        number: 252,
        icons:'trash-frame.svg',
        text: 'Links Removed',
        color: '#F1416C',
    },
]

const DashboardPage: FC = () => (
  <div>
       <div className={style.grid}>
           {cards.map(({number,icons,color,text}) =>
               <div className={style.card} style={{borderBottomColor: color}}>
                   <div className={style.cardTitleWrap}>
                       <h4 className={style.cartTitle}>{number}</h4>
                       <img className={style.image} src={`/media/icons/menu/${icons}`} alt='' />
                   </div>
                   <p className={style.cardDescription}>{text}</p>
                </div>
           )}
       </div>
      <div className="my_datatable" id="kt_datatable"></div>
  </div>
)

const DashboardWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
