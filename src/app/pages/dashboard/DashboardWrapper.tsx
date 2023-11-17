import {FC} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import style from './dashboard.module.scss'
import DashboardCard from "../../modules/dashboard/components/DashboardCard";
import DashboardTable from "../../modules/dashboard/components/DashboardTable";
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
           {cards.map((card) =>
               <DashboardCard key={card.text} {...card} />
           )}
       </div>
      <DashboardTable/>
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
