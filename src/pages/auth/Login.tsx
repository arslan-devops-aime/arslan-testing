import React from 'react';
import { useAppContext } from 'src/app/AppContext';
import { useNavigate } from 'react-router-dom';
import CInput from 'src/components/CInput';
import CButton from 'src/components/CButton';
import { emailRegex } from 'src/utils/regex';
import { UserLoginCredentilsT } from 'src/types/user';
import { useForm, SubmitHandler } from 'react-hook-form';
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';
import {
  Stack,
  Text,
  InputGroup,
  InputRightElement,
  Icon,
  Flex,
} from '@chakra-ui/react';
import { loginService } from 'src/services/auth.service';
import { toastError } from 'src/utils/toast';

const LoginPage = () => {
  const navigate = useNavigate();
  const { user } = useAppContext();

  const [passwordView, setPasswordView] = React.useState<boolean>(false);
  const [isLoading, setLoading] = React.useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLoginCredentilsT>();

  const onLoginSubmit: SubmitHandler<UserLoginCredentilsT> = async data => {
    try {
      setLoading(true);
      const res = await loginService(data);
      const userObj = res.data?.user;
      user.setUser({
        firstname: userObj?.first_name,
        lastname: userObj?.last_name,
        email: userObj?.email,
        token: res.data?.token,
      });
      navigate('/');
    } catch (error: any) {
      toastError(error?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Stack
      w={{ base: '100%', sm: '350px' }}
      px={'1.5rem'}
      py={'2rem'}
      bg={'white'}
      spacing={'1.5rem'}
      alignItems={'center'}
      borderRadius={'10px'}
      boxShadow={'0px 0px 24px 0px rgba(0, 0, 0, 0.15)'}>
      <Text fontWeight={800}>BOP Login</Text>

      <Stack
        as='form'
        w={'100%'}
        spacing={'10px'}
        alignItems={'center'}
        onSubmit={handleSubmit(onLoginSubmit)}>
        <CInput
          type={'text'}
          placeholder={`Enter email`}
          label={'Email'}
          errorText={errors.email?.message?.toString()}
          {...register('email', {
            required: 'Field is required',
            pattern: {
              value: emailRegex,
              message: 'Please provide valid email',
            },
          })}
        />
        <InputGroup>
          <CInput
            type={passwordView ? 'text' : 'password'}
            placeholder={`Enter password`}
            label={'Password'}
            errorText={errors.password?.message?.toString()}
            {...register('password', {
              required: 'Field is required',
            })}
          />
          <InputRightElement
            top={'1.85rem'}
            children={
              <Icon
                as={passwordView ? HiOutlineEye : HiOutlineEyeOff}
                color='whatsapp.500'
                cursor={'pointer'}
                userSelect={'none'}
                onClick={() => setPasswordView(prev => !prev)}
              />
            }
          />
        </InputGroup>
        <Flex justifyContent={'flex-end'} width={'100%'} mb={0}>
          <Text
            as={'span'}
            cursor={'pointer'}
            textAlign={'right'}
            fontSize={'0.8rem'}
            textDecoration={'underline'}
            onClick={() => navigate('/auth/forgot-password')}>
            Forgot Password?
          </Text>
        </Flex>
        <CButton
          active
          type='submit'
          width={'150px'}
          py={'12px'}
          title='Login'
          isLoading={isLoading}
          loadingText='Loading...'
        />

        <Text fontSize={'0.8rem'}>
          Don't have an account?&nbsp;
          <Text
            as={'span'}
            fontWeight={800}
            cursor={'pointer'}
            _hover={{ textDecoration: 'underline' }}
            onClick={() => navigate('/auth/signup')}>
            Register
          </Text>
        </Text>
      </Stack>
    </Stack>
  );
};

export default LoginPage;
