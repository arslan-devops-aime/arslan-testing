import { createStandaloneToast, ToastProps } from '@chakra-ui/react';

const { toast } = createStandaloneToast();

const defaultOptions: ToastProps = {
  variant: 'left-accent',
  isClosable: true,
  duration: 3000,
};

export const toastInfo = (message: string, options: ToastProps = {}) => {
  toast({
    title: message,
    status: 'info',
    ...defaultOptions,
    ...options,
  });
};

export const toastSuccess = (message: string, options: ToastProps = {}) => {
  toast({
    title: message,
    status: 'success',
    ...defaultOptions,
    ...options,
  });
};

export const toastError = (message: string, options: ToastProps = {}) => {
  toast({
    title: message,
    status: 'error',
    ...defaultOptions,
    ...options,
  });
};
