import React, { useEffect, useRef } from 'react';
import { useAppContext } from 'src/app/AppContext';
import { useNavigate } from 'react-router-dom';
import CInput from 'src/components/CInput';
import CButton from 'src/components/CButton';
import { emailRegex } from 'src/utils/regex';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  Stack,
  Text,
  PinInput,
  PinInputField,
  HStack,
} from '@chakra-ui/react';
import { sendOtpService, verifyOtpService, updatePasswordService } from 'src/services/auth.service';
import { toastError, toastSuccess } from 'src/utils/toast';

type ForgotPasswordFormT = {
  email: string;
  otp: string;
  password: string;
  confirmPassword: string;
};

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const { user } = useAppContext();

  const [step, setStep] = React.useState<'email' | 'otp' | 'updatePassword' | 'success'>('email');
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState<string>('');
  const [otp, setOtp] = React.useState<string>(''); // Store OTP input
  const otpInputRef = useRef<HTMLInputElement>(null); // Ref for OTP input

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<ForgotPasswordFormT>();

  // Step 1: Handle email submission to request OTP
  const onEmailSubmit: SubmitHandler<ForgotPasswordFormT> = async data => {
    try {
      setLoading(true);
      setEmail(data.email); // Save email for future requests
      await sendOtpService({ email: data.email });
      setStep('otp'); // Move to OTP step
    } catch (error: any) {
      toastError(error?.message);
    } finally {
      setLoading(false);
    }
  };

  // Step 2: Handle OTP verification
  const onOtpSubmit = async () => {
    try {
      setLoading(true);
      const res = await verifyOtpService({ email, otp });
      toastSuccess('OTP verified successfully');
      setStep('updatePassword'); // Move to password update step
    } catch (error: any) {
      toastError(error?.message);
    } finally {
      setLoading(false);
    }
  };

  // Step 3: Handle password update
  const onPasswordSubmit: SubmitHandler<ForgotPasswordFormT> = async data => {
    try {
      setLoading(true);
      await updatePasswordService({ email, otp, password: data.password });
      toastSuccess('Password updated successfully!');
      setStep('success'); // Move to success step
    } catch (error: any) {
      toastError(error?.message);
    } finally {
      setLoading(false);
    }
  };

  // Automatically focus the first OTP input when 'otp' step is reached
  useEffect(() => {
    if (step === 'otp' && otpInputRef.current) {
      otpInputRef.current.focus();
    }
  }, [step]);
  // Return JSX
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

      {/* Header */}
      <Text fontWeight={800}>Forgot Password</Text>

      {/* Step 1: Email Submission Form */}
      {step === 'email' && (
        <Stack
          as='form'
          w={'100%'}
          spacing={'10px'}
          alignItems={'center'}
          onSubmit={handleSubmit(onEmailSubmit)}>
          <CInput
            type={'text'}
            placeholder={`Enter email`}
            label={'Email'}
            errorText={errors.email?.message?.toString()}
            {...register('email', {
              required: 'Field is required',
              pattern: {
                value: emailRegex,
                message: 'Please provide a valid email',
              },
            })}
          />
          <CButton
            active
            type='submit'
            width={'150px'}
            py={'12px'}
            title='Send OTP'
            isLoading={isLoading}
            loadingText='Sending...'
          />
        </Stack>
      )}

      {/* Step 2: OTP Submission Form */}
      {step === 'otp' && (
        <Stack
          w={'100%'}
          spacing={'10px'}
          alignItems={'center'}>
          <Text fontWeight={600}>Enter OTP</Text>
          <HStack>
            <PinInput
              otp
              size='lg'
              placeholder='-'
              onChange={setOtp}
              value={otp}>
              <PinInputField ref={otpInputRef} /> {/* Auto-focused input */}
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </HStack>
          <CButton
            active
            type='button'
            width={'150px'}
            py={'12px'}
            title='Verify OTP'
            onClick={onOtpSubmit}
            isLoading={isLoading}
            loadingText='Verifying...'
          />
        </Stack>
      )}

      {/* Step 3: Update Password Form */}
      {step === 'updatePassword' && (
        <Stack
          as='form'
          w={'100%'}
          spacing={'10px'}
          alignItems={'center'}
          onSubmit={handleSubmit(onPasswordSubmit)}>
          <CInput
            type='password'
            placeholder='New Password'
            label='New Password'
            errorText={errors.password?.message?.toString()}
            {...register('password', {
              required: 'Field is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            })}
          />
          <CInput
            type='password'
            placeholder='Confirm Password'
            label='Confirm Password'
            errorText={errors.confirmPassword?.message?.toString()}
            {...register('confirmPassword', {
              required: 'Field is required',
              validate: value =>
                value === getValues('password') || 'Passwords do not match',
            })}
          />
          <CButton
            active
            type='submit'
            width={'150px'}
            py={'12px'}
            title='Update Password'
            isLoading={isLoading}
            loadingText='Updating...'
          />
        </Stack>
      )}

      {/* Step 4: Success Message */}
      {step === 'success' && (
        <Stack alignItems={'center'} spacing={'1rem'}>
          <Text fontSize={'1rem'} fontWeight={600}>
            Password Updated Successfully!
          </Text>
          <Text fontSize={'0.9rem'} color={'gray.500'}>
            You can now log in with your new password.
          </Text>
          <CButton
            active
            type='button'
            width={'150px'}
            py={'12px'}
            title='Login'
            onClick={() => navigate('/auth/login')}
          />
        </Stack>
      )}
    </Stack>
  );
};

export default ForgotPasswordPage;
