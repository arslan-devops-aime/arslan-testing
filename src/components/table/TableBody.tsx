import { Tbody, Td, Text, Tr } from '@chakra-ui/react';
import { CustomTableBodyProps, ColumnT } from 'src/components/table/type';

interface BodyDataProps {
  value: JSX.Element | string;
  col?: ColumnT;
}

interface BodyColumnProps {
  col: ColumnT;
  row: any;
  defaultPlaceholder: string;
}

const BodyData = ({ value, col }: BodyDataProps) => {
  return (
    <Text
      as='span'
      aria-label='column-text'
      userSelect={'none'}
      fontSize={'14px'}
      style={col?.styles || {}}>
      {value}
    </Text>
  );
};

const BodyColumn = ({ row, col, defaultPlaceholder }: BodyColumnProps) => {
  const accessor = row[col.accessor];
  let value = accessor ?? col?.noValueText ?? defaultPlaceholder;

  const CustomComp = col?.body;
  if (CustomComp) {
    value = CustomComp(row);
  }

  return <BodyData col={col} value={value} />;
};

const NoRowsFound = ({ colSpan = 1, noDataText = 'No Data Found' }) => (
  <Tr>
    <Td px={'16px'} py={'18px'} colSpan={colSpan} textAlign='center'>
      <BodyData value={noDataText} />
    </Td>
  </Tr>
);

const TableBody = (props: CustomTableBodyProps) => {
  const { columns, rows, noValueText, noDataText } = props;

  return (
    <Tbody>
      {rows.length > 0 ? (
        rows.map((row, i) => (
          <Tr key={i}>
            {columns.map((col, index) => (
              <Td
                key={index}
                px={'16px'}
                py={'10px'}
                sx={{
                  '&:not(:last-of-type)': { borderRight: '1px solid #E4E4EF' },
                }}
                borderBottom={
                  i + 1 !== rows.length ? '1px solid #E4E4EF' : 'none'
                }>
                <BodyColumn
                  col={col}
                  row={row}
                  defaultPlaceholder={noValueText}
                />
              </Td>
            ))}
          </Tr>
        ))
      ) : (
        <NoRowsFound colSpan={columns.length} noDataText={noDataText} />
      )}
    </Tbody>
  );
};

export default TableBody;
