import {ITableHead, ITableHeaders} from "../types";
import {useState} from "react";

function TableCell({ data }: { data: ITableHead }) {
  // const [visible, setVisible] = useState(false)
  const {
    fixed,
    sortRule,
    menu,
    title
  } = data
  const hasMenu = Boolean(sortRule || menu)
  function concatClassName(className: string) {
    return (value: any, name: string) => `${className}${ value ? `__${name}` : ''}`
  }
  return <div className={
    concatClassName(
      concatClassName(`lehkost-table-header--cell`)(fixed, 'fixed')
    )(hasMenu, 'has-menu')
  }>
    <div className="lehkost-table-header--cell-title">{title}</div>
    {
      hasMenu && <div className="lehkost-table-header--cell-menu"></div>
    }
    {
      true && <div className="lehkost-table-header--cell-popup">
        팝업
      </div>
    }
  </div>
}

export default function TableHeader({ headers }: { headers: ITableHeaders }) {
  return <div className="lehkost-table-header">
    {
      headers.map(header => <TableCell data={header}/>)
    }
  </div>
}