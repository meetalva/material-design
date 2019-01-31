import * as React from 'react';
import TableComponent from '@material-ui/core/Table';
import TableBodyComponent from '@material-ui/core/TableBody';
import TableCellComponent from '@material-ui/core/TableCell';
import TableFooterComponent from '@material-ui/core/TableFooter';
import TableHeadComponent from '@material-ui/core/TableHead';
import TablePaginationComponent from '@material-ui/core/TablePagination';
import TableRowComponent from '@material-ui/core/TableRow';
import TableSortLabelComponent from '@material-ui/core/TableSortLabel';
import { TypographyAlign } from './types';

export interface TableProps {
    padding?: TablePadding;
}

export interface TableCellProps {
    /** @name Align */
    align?: TypographyAlign;

    /** @name Numeric */
    numeric?: boolean;

    /** @name Padding */
    padding?: TablePadding;

    /** @name Sort Direction */
    sortDirection?: TableSortDirection;

    /** @name Variant */
    variant?: TableCellVariant;
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
    /** @name Hover */
    hover?: boolean;

    /** @name Selected */
    selected?: boolean;
}

export interface TableSortLabelProps {
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
 */
export const TableSortLabel: React.SFC<TableSortLabelProps> = props => {
    return (
        <TableSortLabelComponent {...props}>
            {props.children}
        </TableSortLabelComponent>
    )
}
