import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

interface IItemsList {
    priority: number
    label: string
    checked: boolean
}

interface ICheckboxesGroupProps {
    itemsList: IItemsList[]
    setItemsList: React.Dispatch<React.SetStateAction<IItemsList[]>>
}

export default function CheckboxesGroup({ itemsList, setItemsList }: ICheckboxesGroupProps) {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const modifiedList = itemsList.map(obj => {
            if (obj.label === event.target.name) {
                return { ...obj, checked: event.target.checked };
            }
            return obj;
        });
        setItemsList(modifiedList)
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                <FormGroup>
                    {itemsList.sort((a , b) => a.priority < b.priority ? -1 : 1).map(ele =>
                        <FormControlLabel
                            control={<Checkbox checked={ele.checked} onChange={handleChange} name={ele.label} />}
                            label={ele.label}
                        />)}
                </FormGroup>
            </FormControl>
        </Box>
    );
}
