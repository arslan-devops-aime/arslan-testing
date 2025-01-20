import {
  HStack,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  ModalHeaderProps,
  ModalBodyProps,
  ModalContentProps,
  ModalFooterProps,
} from '@chakra-ui/react';
import CButton, { CButtonProps } from '../CButton';

interface CModalProps extends ModalProps {
  title: string;
  buttonProps: {
    cancel: CButtonProps;
    save: CButtonProps;
  };
  modalheaderProps?: ModalHeaderProps;
  modalBodyProps?: ModalBodyProps;
  modalContentProps?: ModalContentProps;
  modalFooterProps?: ModalFooterProps;
}

const CModal = (props: CModalProps) => {
  const {
    title,
    children,
    buttonProps,
    modalheaderProps,
    modalBodyProps,
    modalContentProps,
    modalFooterProps,
    ...rest
  } = props;
  return (
    <Modal blockScrollOnMount={false} {...rest}>
      <ModalOverlay bg={'#12125999'} backdropFilter={'blur(5px)'} />
      <ModalContent
        borderRadius={'20px'}
        bg={'white.100'}
        pl={15}
        pt={15}
        {...modalContentProps}>
        <ModalHeader {...modalheaderProps}>{title}</ModalHeader>
        <ModalBody {...modalBodyProps}>{children}</ModalBody>
        <ModalFooter {...modalFooterProps}>
          <HStack spacing={5}>
            <CButton {...buttonProps.cancel} />
            <CButton {...buttonProps.save} />
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CModal;
