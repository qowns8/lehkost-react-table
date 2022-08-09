import './index.scss'
import {ITableProps} from "./types";

export default function Component (props: ITableProps) {
  return <div className="lehkost-table-wrappper">
    <div className="lehkost-table-header">
      {
        props.headers.map(header =>
          <div className="lehkost-table-header--cell">
            {header.title}
          </div>
        )
      }
    </div>
    <div className="lehkost-table-body">
    </div>
  </div>
}