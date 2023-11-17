import {Column} from 'react-table'
import {UserActionsCell} from './UserActionsCell'
import {UserSelectionCell} from './UserSelectionCell'
import {UserCustomHeader} from './UserCustomHeader'
import {UserSelectionHeader} from './UserSelectionHeader'
import {User} from '../../core/_models'

const usersColumns: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => <UserSelectionHeader tableProps={props} />,
    id: 'selection',
    Cell: ({...props}) => <UserSelectionCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='ID' className='min-w-125px' />,
    id: 'id',
    Cell: ({...props}) => <div className='d-flex align-items-center'>
      <span style={{color:'#181C32'}}>{props.data[props.row.index].id}</span>
    </div>
  },
  {
    Header: (props) => (
        <UserCustomHeader tableProps={props} title='DATE REMOVED' className='min-w-125px' />
    ),
    accessor: 'joined_day',
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='link' className='min-w-125px' />,
    id: 'link',
    Cell: ({...props}) => <div className='d-flex align-items-center'>
      <a style={{textDecoration: 'underline'}} href={props.data[props.row.index].link} className='text-primary'><span>{props.data[props.row.index].link}</span></a>
    </div>
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='source' className='min-w-125px' />,
    id: 'source',
    Cell: ({...props}) => <div className='d-flex align-items-center'>
      <span>{props.data[props.row.index].source}</span>
    </div>
  },

 /* {
    Header: (props) => <UserCustomHeader tableProps={props} title='Role' className='min-w-125px' />,
    accessor: 'role',
  },*/
 /* {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Last login' className='min-w-125px' />
    ),
    id: 'last_login',
    Cell: ({...props}) => <UserLastLoginCell last_login={props.data[props.row.index].last_login} />,
  },*/
/*  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Two steps' className='min-w-125px' />
    ),
    id: 'two_steps',
    Cell: ({...props}) => <UserTwoStepsCell two_steps={props.data[props.row.index].two_steps} />,
  },*/

  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <UserActionsCell id={props.data[props.row.index].id} />,
  },
]

export {usersColumns}
