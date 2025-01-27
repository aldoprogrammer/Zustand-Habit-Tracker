import { Box, Container, Typography } from "@mui/material";
import useHabitStore from "./store/store"
import AddHabitForm from "./components/add-habit-form";
import HabitList from "./components/habit-list";


function App() {
  const store = useHabitStore();
  console.log('store', store)

  return (
    <Container>
      <Box>
        <Typography variant="h2" align="center">Habit Tracker</Typography>
        {/* Form */}
        <AddHabitForm/>
        {/* Lists */}
        <HabitList/>
        {/* Stats */}
      </Box>

    </Container>
  )
}

export default App
