import { HiChevronDown } from 'react-icons/hi';
import { Box, HStack, Text, Th, Thead, Tr } from '@chakra-ui/react';
import { CustomTableHeadProps, sortConfigT } from 'src/components/table/type';

const TableHead = (props: CustomTableHeadProps) => {
  const { columns, hasData, sortConfig, toggleSortOrder } = props;

  const getSortStyle = (config: sortConfigT) => {
    let returnValue = 'none';

    if (config.sort === 'ASCE') returnValue = 'rotate(0deg)';
    else if (config.sort === 'DESC') returnValue = 'rotate(180deg)';

    return returnValue;
  };

  return (
    <Thead>
      <Tr>
        {columns?.map((col, index) => (
          <Th
            key={index}
            px={'16px'}
            py={'12px'}
            borderBottom={'1px solid #E4E4EF'}
            sx={{
              '&:not(:last-of-type)': { borderRight: '1px solid #E4E4EF' },
            }}>
            <HStack
              spacing={'0px'}
              w={'max-content'}
              userSelect={'none'}
              cursor={col.disableSort ? 'default' : 'pointer'}
              onClick={() =>
                hasData && !col.disableSort
                  ? toggleSortOrder(col.accessor, index)
                  : null
              }>
              <Text
                color={'primary.100'}
                fontSize={'14px'}
                fontWeight={'700'}
                textTransform={'capitalize'}>
                {col.title}
              </Text>
              {!col.disableSort && (
                <Box
                  as='span'
                  display={'inherit'}
                  ml={0.3}
                  transition={'transform 0.3s'}
                  transform={getSortStyle(sortConfig[index])}>
                  <HiChevronDown size={'16px'} />
                </Box>
              )}
            </HStack>
          </Th>
        ))}
      </Tr>
    </Thead>
  );
};

export default TableHead;
