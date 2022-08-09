import './index.scss'
import {ITableProps} from "./types";
import Header from './header'

export default function Component (props: ITableProps) {
  return <div className="lehkost-table-wrappper">
    <Header headers={props.headers}/>
    <div className="lehkost-table-body">
      {
        props.data.map(item => <div className="lehkost-table-body--tr">
          {item}
        </div>)
      }
    </div>
  </div>
}