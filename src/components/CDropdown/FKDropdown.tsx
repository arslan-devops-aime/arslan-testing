import React from 'react';
import { useFormContext, RegisterOptions } from 'react-hook-form';
import CDropdown, { OptionType } from 'src/components/CDropdown';
import { ObjectType } from 'src/types/common';
import instance from 'src/services/base/instance';
import { toastError } from 'src/utils/toast';

interface FKDropdownProps {
  name: string;
  label: string;
  endpoint: string;
  labelKey: string;
  placeholder?: string;
  validationProps?: RegisterOptions;
}

const FKDropdown = (props: FKDropdownProps) => {
  const { name, label, endpoint, labelKey, validationProps } = props;

  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();
  const watchFkDropdown: ObjectType<OptionType> = watch(name);
  const watchFkDropdownValue = watchFkDropdown && watchFkDropdown.value;

  const [options, setOptions] = React.useState<OptionType[]>([]);
  const [isLoading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (name) register(name, validationProps);
  }, [name, register, validationProps]);

  const handleChange = (obj: OptionType) => {
    setValue(name, { type: 'fk-select', value: obj } as ObjectType<OptionType>);
  };

  const handleGetOptions = () => {
    (async () => {
      try {
        setLoading(true);
        const res = await instance.get(endpoint);
        const data = res?.data;
        if (Array.isArray(data)) {
          setOptions(
            data.map(item => ({ label: item[labelKey], value: item?._id }))
          );
        }
      } catch (error: any) {
        toastError(error?.message);
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  };

  return (
    <CDropdown
      label={label}
      value={watchFkDropdownValue}
      onChange={handleChange}
      errorText={errors[name]?.message?.toString()}
      options={options}
      isSearchable={false}
      isLoading={isLoading}
      onMenuOpen={handleGetOptions}
      maxMenuHeight={120}
    />
  );
};

export default FKDropdown;
