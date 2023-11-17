import {FC} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'

const cards = [
    {
        number: 252,
        icons:'flaticon2-shopping-cart-1',
        text: 'Links Scraped',
    },
    {
        number: 252,
        icons:'flaticon2-shopping-cart-1',
        text: 'Links Manually Checked',
    },
    {
        number: 252,
        icons:'flaticon2-shopping-cart-1',
        text: 'Link Violations',
    },
    {
        number: 252,
        icons:'flaticon2-shopping-cart-1',
        text: 'Links Removed',
    },
]

const DashboardPage: FC = () => (
  <>
       <div className={'row'}>
           {cards.map(({number,icons,text}) =>
               <div className={'col-md-3'}>
                    <div>{number}</div>
                    <div>{icons}</div>
                    <div>{text}</div>
                </div>
           )}
       </div>
      <div className="my_datatable" id="kt_datatable"></div>
  </>
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
