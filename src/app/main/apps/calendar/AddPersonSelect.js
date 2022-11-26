import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector } from 'react-redux';
import { forwardRef, React, useState } from 'react';
import { Box } from '@mui/system';
import { selectContacts, selectContactById } from './store/contactsSlice';

const AddPersonSelect = forwardRef((props, ref) => {
  const { className, value, onChange } = props;
  const contacts = useSelector(selectContacts);
  const selectedContact = useSelector((state) => selectContactById(state, value));

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <FormControl fullWidth className={className}>
      <InputLabel id="add-person-label">Add person</InputLabel>
      <Select
        labelId="add-person-label"
        id="add=person-select"
        value={value}
        label="Add person"
        onChange={handleChange}
        ref={ref}
        multiple
        classes={{ select: 'flex items-center space-x-12' }}
      >
        {contacts.map((contact) => (
          <MenuItem value={contact.id} key={contact.id} className="space-x-12">
            <Box className="w-12 h-12 shrink-0 rounded-full" />
            <span>{contact.name}</span>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
});

export default AddPersonSelect;
