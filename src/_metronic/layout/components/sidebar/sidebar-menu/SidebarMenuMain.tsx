
import {SidebarMenuItem} from './SidebarMenuItem'

const dashboardItems = [
    {
        text: 'Home',
        icon: '/media/icons/menu/general.svg',
        url: '/dashboard',
    },
    {
        text: 'Submit Violations',
        icon: '/media/icons/menu/files-folders.svg',
        url: '/violation',
    },
    {
        text: 'Whitelist',
        icon: '/media/icons/menu/it-network.svg',
        url: '/whitelist',
    },
    {
        text: 'Billing',
        icon: '/media/icons/menu/questionnaire-tablet.svg',
        url: '/billing',
    },
    {
        text: 'Affiliate Program',
        icon: '/media/icons/menu/graph-up.svg',
        url: '/affiliate',
    },
    {
        text: 'Settings',
        icon: '/media/icons/menu/setting-2.svg',
        url: '/settings',
    },
    {
        text: 'FAQ',
        icon: '/media/icons/menu/message-questio.svg',
        url: '/faq',
    },
    {
        text: 'Support',
        icon: '/media/icons/menu/rescue.svg',
        url: '/support',
    }
]

const SidebarMenuMain = () => {

  return (
    <>
      {dashboardItems.map(({icon,text,url}) =>
          <SidebarMenuItem key={url} to={url} icon={icon} title={text} fontIcon='bi-layers' />
      )}
    </>
  )
}

export {SidebarMenuMain}
