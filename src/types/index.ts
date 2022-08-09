import React from "react"

export interface ITableProps<TableItem = any> {
  width?: 'auto' | '100%' | number
  height?: 'auto' | '100%' | number
  headers: ITableHeaders<TableItem>
  data?: TableItem[]
}

type ICompare<TableItem = any> = (a: TableItem, b: TableItem) => number

export type ITableHeaders<TableItem = any> = ITableHead<TableItem>[]

export interface ITableHead<TableItem = any> {
  key: any
  title: any
  fixed?: boolean
  width?: number
  height?: number
  sortRule?: {
    name: string
    compare: ICompare<TableItem>
  }[],
  menu?: {
    value: React.ReactElement
    onClick: () => void
  }[]
}