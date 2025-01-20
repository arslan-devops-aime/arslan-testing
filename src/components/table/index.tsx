import React from 'react';
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi';
import {
  Box,
  HStack,
  Skeleton,
  Stack,
  Table,
  TableContainer,
} from '@chakra-ui/react';
import {
  CustomTableProps,
  sortConfigT,
  ColumnT,
} from 'src/components/table/type';
import { doSorting } from 'src/components/table/helper';
import TableHead from './TableHead';
import TableBody from './TableBody';

const CustomTable = (props: CustomTableProps) => {
  const {
    name,
    columns,
    rows = [],
    isLoading,
    noValueText = 'N/A',
    noDataText = 'No Data Found',
    onEdit,
    onDelete,
  } = props;

  const [tableData, setTableData] = React.useState(rows);
  const [sortConfig, setSortConfig] = React.useState<sortConfigT[]>(
    columns?.map(col => ({ accessor: col.accessor, sort: undefined }))
  );

  const defaultColumns: Array<ColumnT> = [
    {
      accessor: 'action-icons',
      title: 'Actions',
      type: 'action-icon',
      disableSort: true,
      body: row => (
        <HStack
          spacing={'6px'}
          w={'max-content'}
          sx={{ '& > span': { cursor: 'pointer' } }}>
          <Box as='span' onClick={onEdit ? () => onEdit(row) : () => null}>
            <HiOutlinePencil size={'16px'} />
          </Box>
          <Box as='span' onClick={onDelete ? () => onDelete(row) : () => null}>
            <HiOutlineTrash size={'16px'} />
          </Box>
        </HStack>
      ),
    },
  ];

  React.useEffect(() => {
    let newTableData = [...rows];
    if (rows && rows.length > 0) {
      // sort
      const sortConfigArr = sortConfig.filter(
        srtConfig => srtConfig.sort !== undefined
      );
      if (sortConfigArr && sortConfigArr.length > 0) {
        const [colConfig] = sortConfigArr;
        newTableData = doSorting(
          newTableData,
          colConfig.accessor,
          colConfig.sort
        );
      }
    }

    setTableData(newTableData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rows]);

  const toggleSortOrder = (accessor: string, index: number) => {
    const sortType = sortConfig[index].sort === 'DESC' ? 'ASCE' : 'DESC';

    setSortConfig(config =>
      config.map(col =>
        col.accessor === accessor
          ? { ...col, sort: sortType }
          : { ...col, sort: undefined }
      )
    );

    setTableData(doSorting(tableData, accessor, sortType));
  };

  return (
    <React.Fragment>
      {isLoading ? (
        <Stack>
          {Array.from({ length: 10 }, (_, k) => (
            <Skeleton key={k} height='45px' w={'100%'} borderRadius='8px' />
          ))}
        </Stack>
      ) : (
        <TableContainer
          bg={'white'}
          border={'1px solid #E4E4EF'}
          borderRadius='8px'
          aria-label={`table-container-${name}`}>
          <Table
            w={'100%'}
            h={'100%'}
            variant='simple'
            aria-label={`custom-table-${name}`}>
            <TableHead
              columns={[...columns, ...defaultColumns]}
              hasData={tableData.length > 0}
              sortConfig={sortConfig}
              toggleSortOrder={toggleSortOrder}
            />
            <TableBody
              columns={[...columns, ...defaultColumns]}
              rows={tableData}
              noValueText={noValueText}
              noDataText={noDataText}
            />
          </Table>
        </TableContainer>
      )}
    </React.Fragment>
  );
};

export default CustomTable;
