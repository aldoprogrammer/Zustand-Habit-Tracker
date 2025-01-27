import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import useHabitStore from '../store/store'

const HabitList = () => {

    const { habits } = useHabitStore();
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', mt: '2rem' }}>
            {habits.map((habit) => (
                <Paper key={habit.id} elevation={2} sx={{ p: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                    <Grid container alignItems={'center'}>
                        <Grid xs={12} sm={6}>
                            <Typography variant='h6'>{habit.name}</Typography>
                            <Typography variant='body2'>{habit.frequency}</Typography>
                        </Grid>
                        <Grid xs={12} sm={6}>
                            <Box sx={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', flex: 1 }}>
                                <Button variant='outlined'>Mark as completed</Button>
                                <Button variant='outlined' color='error'>Delete</Button>
                            {/* <Typography variant='body2'>Created at: {new Date(habit.createdAt).toLocaleDateString()}</Typography>
                            <Typography variant='body2'>Completed: {habit.completedDates.length} times</Typography> */}
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            ))}

        </Box>
    )
}

export default HabitList
