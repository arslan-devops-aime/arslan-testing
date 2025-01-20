import React from 'react';
import { useNavigate } from 'react-router-dom';
import CInput from 'src/components/CInput';
import CButton from 'src/components/CButton';
import { emailRegex } from 'src/utils/regex';
import { UserSignUpT } from 'src/types/user';
import { useForm, SubmitHandler } from 'react-hook-form';
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';
import {
  Stack,
  Text,
  InputGroup,
  InputRightElement,
  Icon,
} from '@chakra-ui/react';
import { signupService } from 'src/services/auth.service';
import { toastError } from 'src/utils/toast';

const SignupPage = () => {
  const navigate = useNavigate();

  const [passwordView, setPasswordView] = React.useState<boolean>(false);
  const [isLoading, setLoading] = React.useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSignUpT>();

  const onSignupSubmit: SubmitHandler<UserSignUpT> = async data => {
    try {
      setLoading(true);
      await signupService(data);
      navigate('/auth');
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
      <Text fontWeight={800}>BOP Sign up</Text>

      <Stack
        as='form'
        w={'100%'}
        spacing={'10px'}
        alignItems={'center'}
        onSubmit={handleSubmit(onSignupSubmit)}>
        <CInput
          type={'text'}
          placeholder={`Enter first name`}
          label={'Firstname'}
          errorText={errors.firstname?.message?.toString()}
          {...register('firstname', {
            required: 'Field is required',
          })}
        />
        <CInput
          type={'text'}
          placeholder={`Enter last name`}
          label={'Lastname'}
          errorText={errors.lastname?.message?.toString()}
          {...register('lastname', {
            required: 'Field is required',
          })}
        />
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

        <CButton
          active
          type='submit'
          width={'150px'}
          mt={'1rem'}
          py={'12px'}
          title='Sign up'
          isLoading={isLoading}
          loadingText='Loading...'
        />

        <Text fontSize={'0.8rem'}>
          Already have an account?&nbsp;
          <Text
            as={'span'}
            fontWeight={800}
            cursor={'pointer'}
            _hover={{ textDecoration: 'underline' }}
            onClick={() => navigate('/auth/login')}>
            Login
          </Text>
        </Text>
      </Stack>
    </Stack>
  );
};

export default SignupPage;
