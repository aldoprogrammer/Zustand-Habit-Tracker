import { Box, Button, Grid, LinearProgress, Paper, Typography } from '@mui/material';
import useHabitStore, { Habit } from '../store/store';
import { CheckCircleOutline } from '@mui/icons-material';

const HabitList = () => {
    const { habits, removeHabit, toggleHabit } = useHabitStore();

    const today = new Date().toISOString().split('T')[0];

    const getStreak = (habit: Habit) => {
        let streak = 0;
        const currentDate = new Date();

        while (true) {
            const dateString = currentDate.toISOString().split('T')[0];
            if (habit.completedDates.includes(dateString)) {
                streak++;
                currentDate.setDate(currentDate.getDate() - 1);
            } else {
                break;
            }
        }
        return streak;
    };

    const totalHabits = habits.length;
    const completedToday = habits.filter((habit) => habit.completedDates.includes(today)).length;
    const longestStreak = habits.reduce((max, habit) => Math.max(max, getStreak(habit)), 0);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', mt: '2rem' }}>
            {habits.map((habit) => (
                <Paper key={habit.id} elevation={2} sx={{ p: '1rem', display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                    <Grid container alignItems={'center'}>
                        <Grid item xs={12} sm={6}>
                            <Typography variant='h6'>{habit.name}</Typography>
                            <Typography variant='body2'>{habit.frequency}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Box sx={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', flex: 1 }}>
                                <Button
                                    variant='outlined'
                                    color={habit.completedDates.includes(today) ? 'success' : 'primary'}
                                    onClick={() => toggleHabit(habit.id, today)}
                                    startIcon={<CheckCircleOutline />}
                                >
                                    {habit.completedDates.includes(today) ? 'Completed' : 'Mark as completed'}
                                </Button>
                                <Button
                                    variant='outlined'
                                    color='error'
                                    onClick={() => removeHabit(habit.id)}
                                >
                                    Delete
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box sx={{ mt: '1rem' }}>
                        <Typography variant='body2'>Current streak: {getStreak(habit)}</Typography>
                        <LinearProgress 
                            variant='determinate' 
                            value={(getStreak(habit) / 30) * 100} />
                    </Box>
                </Paper>
            ))}

            {/* Statistics Card */}
            <Paper elevation={2} sx={{ p: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <Typography variant='h6'>Statistics</Typography>
                <Typography variant='body2'>Total Habits: {totalHabits}</Typography>
                <Typography variant='body2'>Completed Today: {completedToday}</Typography>
                <Typography variant='body2'>Longest Streak: {longestStreak}</Typography>
            </Paper>
        </Box>
    );
};

export default HabitList;
