import * as React from 'react';
import TableComponent from '@material-ui/core/Table';
import TableBodyComponent from '@material-ui/core/TableBody';
import TableCellComponent from '@material-ui/core/TableCell';
import TableFooterComponent from '@material-ui/core/TableFooter';
import TableHeadComponent from '@material-ui/core/TableHead';
import TablePaginationComponent from '@material-ui/core/TablePagination';
import TableRowComponent from '@material-ui/core/TableRow';
import TableSortLabelComponent from '@material-ui/core/TableSortLabel';
import { TypographyAlign, StandardProps } from './types';
import { ButtonBaseProps } from './button';

export interface TableProps {

    /**
     * @name Padding
     * @group Table
     * */
    padding?: TablePadding;

    /**
    * @default
    * ```tsx
    * import * as React from 'react';
    * import { TableHead, TableRow, TableBody, TableCell } from './';
    * import { Text } from '@meetalva/essentials';
    *  
    * export default () => (
    * <>
    *    <TableHead>
    *      <TableRow>
    *        <TableCell />
    *        <TableCell align="right" />
    *        <TableCell align="right" />
    *      </TableRow>
    *    </TableHead>
    *    <TableBody>
    *        <TableRow>
    *          <TableCell component="th" scope="row" />
    *          <TableCell align="right" />
    *          <TableCell align="right" />
    *        </TableRow>
    *    </TableBody>
    * <>
    * );
    * ```
    **/
    children?: React.ReactNode;
}

export interface TableCellProps {

    /**
     * @name Variant
     * @group Table Cell
     * @control ButtonGroup
     * */
    variant?: TableCellVariant;

    /**
     * @name Sort Direction
     * @group Table Cell
     * @control ButtonGroup
     * */
    sortDirection?: TableSortDirection;


    /**
     * @name Align
     * @description Set the text-align on the table cell content.
     * @group Style
     * */
    align?: TypographyAlign;

    /**
     * @name Padding
     * @group Style
     * */
    padding?: TablePadding;

    /**
    * @default
    * ```tsx
    * import * as React from 'react';
    * import { Typography } from './';
    * import { Text  } from '@meetalva/essentials';
    *  
    * export default () => (
    *   <Typography >
    *        <Text text="Content" />
    *    </Typography>
    * );
    * ```
    **/
    children?: React.ReactNode;
}

export interface TablePaginagionProps {
    /** @name Count */
    count: number;

    /** @name Label Rows Per Page */
    labelRowsPerPage?: React.ReactNode;

    /** @name On Change Page */
    onChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, page: number) => void;

    /** @name On Change Rows per Page */
    onChangeRowsPerPage?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;

    /** @name Page */
    page: number;

    /** @name Rows per Page */
    rowsPerPage: number;

    /** @name Rows per Page Options */
    rowsPerPageOptions?: number[];
}

export interface TableRowProps {

    /**
     * @name Hover
     * @group Table Row
     * @description If true, the table row will shade on hover.
     * */
    hover?: boolean;

    /**
     * @name Selected
     * @group Table Row
     * @description If true, the table row will have the selected shading.
     * */
    selected?: boolean;
}

export interface TableSortLabelProps extends StandardProps<ButtonBaseProps> {
    /** @name Active */
    active?: boolean;

    /** @name Direction */
    direction?: TableSortLabelDirection;

    /** @name Hide Sort Icon */
    hideSortIcon?: boolean;
}

export enum TablePadding {
    Default = 'default',
    Checkbox = 'checkbox',
    Dense = 'dense',
    None = 'none'
}

export enum TableCellVariant {
    Head = 'head',
    Body = 'body',
    Footer = 'footer'
}

export enum TableSortDirection {
    Asc = 'asc',
    Desc = 'desc'
}

export enum TableSortLabelDirection {
    Asc = 'asc',
    Desc = 'desc'
}

/**
 * @name Table
 * @group Table
 * @icon Columns
 * @ignore 
 */
export const Table: React.SFC<TableProps> = props => {
    return (
        <TableComponent {...props}>
            {props.children}
        </TableComponent>
    )
}

/**
 * @name Table Body
 * @group Table
 * @ignore 
 */
export const TableBody: React.SFC = props => {
    return (
        <TableBodyComponent {...props}>
            {props.children}
        </TableBodyComponent>
    )
}

/**
 * @name Table Cell
 * @group Table
 * @ignore 
 */
export const TableCell: React.SFC<TableCellProps> = props => {
    return (
        <TableCellComponent {...props}>
            {props.children}
        </TableCellComponent>
    )
}

/**
 * @name Table Footer
 * @group Table
 * @ignore 
 */
export const TableFooter: React.SFC = props => {
    return (
        <TableFooterComponent {...props}>
            {props.children}
        </TableFooterComponent>
    )
}

/**
 * @name Table Head
 * @group Table
 * @ignore 
 */
export const TableHead: React.SFC = props => {
    return (
        <TableHeadComponent {...props}>
            {props.children}
        </TableHeadComponent>
    )
}

/**
 * @name Table Pagination
 * @group Table
 * @ignore 
 */
export const TablePagination: React.SFC<TablePaginagionProps> = props => {
    return (
        <TablePaginationComponent {...props}>
            {props.children}
        </TablePaginationComponent>
    )
}

/**
 * @name Table Row
 * @group Table
 * @ignore 
 */
export const TableRow: React.SFC<TableRowProps> = props => {
    return (
        <TableRowComponent {...props}>
            {props.children}
        </TableRowComponent>
    )
}

/**
 * @name Table Sort Label
 * @group Table
 * @ignore 
 */
export const TableSortLabel: React.SFC<TableSortLabelProps> = props => {
    return (
        <TableSortLabelComponent {...props}>
            {props.children}
        </TableSortLabelComponent>
    )
}
