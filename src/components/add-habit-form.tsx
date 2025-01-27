import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React from 'react'
import useHabitStore from '../store/store';

const AddHabitForm = () => {
    const [name, setName] = React.useState('')
    const [frequency, setFrequency] = React.useState<"daily" | "weekly">('daily');

    const { habits, addHabit } = useHabitStore();

    console.log('habits', habits)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(name.trim()){
            addHabit(name, frequency);
            setName('');
        }
    }



    return (
        <form onSubmit={handleSubmit}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                }}
            >
                <TextField
                    label='Habit name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Enter habit name'
                    fullWidth
                />
                <FormControl fullWidth>
                    <InputLabel>Frequency</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={frequency}
                        label="Frequency"
                        onChange={(e) => setFrequency(e.target.value as "daily" | "weekly")}
                    >
                        <MenuItem value="daily">Daily</MenuItem>
                        <MenuItem value="weekly">Weekly</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <Button variant='contained' type='submit'>
                    Add Habit
                </Button>
            </Box>
        </form>
    )
}

export default AddHabitForm
