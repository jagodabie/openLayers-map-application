import { useState, useMemo } from 'react';
import TextField from '@mui/material/TextField';
import { FormHeader, FormWrapper, StyledForm } from './index.styled';
import { FormProps } from './index.types';
import { Button } from '@mui/material';

const Form: React.FC<FormProps> = ({
  type,
  onSubmit,
  wktString,
  setWktString,
  setSelectedType,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    creationDate: new Date().toISOString().split('T')[0],
    wkt: wktString ?? '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      wkt: wktString,
    });
    setFormData({
      name: '',
      creationDate: '',
      wkt: '',
    });
    setWktString('');
    setSelectedType(null);
  };

  return (
    <FormWrapper>
      <FormHeader>
        {type} Form <Button onClick={() => setSelectedType(null)}> X </Button>
      </FormHeader>

      <StyledForm onSubmit={handleSubmit}>
        <TextField
          label='Name'
          name='name'
          value={formData?.name ?? ''}
          onChange={handleChange}
          required
        />
        <TextField
          label='Creation Date'
          name={'creationDate'}
          value={formData?.creationDate ?? ''}
          onChange={handleChange}
          type='date'
          required
        />
        <TextField
          label='WKT'
          value={wktString ?? ''}
          onChange={handleChange}
          disabled
        />
        <Button type='submit' variant='contained'>
          Submit
        </Button>
      </StyledForm>
    </FormWrapper>
  );
};

export default Form;
