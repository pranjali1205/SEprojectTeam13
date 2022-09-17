const express=require('express')
const {
    getWorkout,
    getWorkouts,
    deleteWorkout,
    createWorkout,
    updateWorkout

}=require('../controllers/workoutController')

// const Workout=require('../models/workoutModel')
const router = express.Router()

//get all workouts
router.get('/',getWorkouts)

//get a single workout
router.get('/:id',getWorkout)

//post a new workout
router.post('/',createWorkout)

//delete a workout
router.delete('/:id',deleteWorkout)

//update a workout
router.patch('/:id',updateWorkout)


module.exports=router