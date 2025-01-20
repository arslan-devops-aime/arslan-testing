import { Button, ButtonProps } from '@chakra-ui/react';

export interface CButtonProps extends ButtonProps {
  title: string;
  active?: boolean;
}

const CButton = (props: CButtonProps) => {
  const { title, active, ...rest } = props;
  return (
    <Button
      h={'48px'}
      bg={active ? 'green.100' : 'gray.100'}
      color={'primary.100'}
      borderRadius={'8px'}
      fontWeight={'700'}
      fontSize={'14px'}
      _hover={{}}
      {...rest}>
      {title}
    </Button>
  );
};

export default CButton;
