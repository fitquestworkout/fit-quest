// Exercise Databases

// Yoga Database
const yogaDatabase = [
    { id: 1, name: "Sun Salutation", duration: 15, difficulty: "Beginner", youtubeLink: "https://youtu.be/example1" },
    { id: 2, name: "Vinyasa Flow", duration: 30, difficulty: "Intermediate", youtubeLink: "https://youtu.be/example2" },
    { id: 3, name: "Yin Yoga", duration: 45, difficulty: "Beginner", youtubeLink: "https://youtu.be/example3" },
    { id: 4, name: "Power Yoga", duration: 60, difficulty: "Advanced", youtubeLink: "https://youtu.be/example4" },
    { id: 5, name: "Restorative Yoga", duration: 45, difficulty: "Beginner", youtubeLink: "https://youtu.be/example5" }
];

// HIIT Database
const hiitDatabase = [
    { id: 1, name: "Tabata Workout", duration: 20, difficulty: "Intermediate", exercises: ["Jump Squats", "Push-ups", "Burpees", "Mountain Climbers"] },
    { id: 2, name: "Full Body HIIT", duration: 30, difficulty: "Advanced", exercises: ["High Knees", "Plank Jacks", "Jumping Lunges", "Tricep Dips"] },
    { id: 3, name: "Beginner HIIT", duration: 15, difficulty: "Beginner", exercises: ["Jumping Jacks", "Wall Push-ups", "Squats", "Knee Raises"] },
    { id: 4, name: "Core HIIT", duration: 25, difficulty: "Intermediate", exercises: ["Crunches", "Russian Twists", "Plank Hold", "Bicycle Crunches"] },
    { id: 5, name: "Cardio Blast", duration: 35, difficulty: "Advanced", exercises: ["Squat Jumps", "Mountain Climbers", "Burpees", "High Knees"] }
];

// PreHab Database
const prehabDatabase = [
    { id: 1, name: "Shoulder Mobility", exercises: ["Arm Circles", "Shoulder Rolls", "Wall Slides", "Doorway Stretch"] },
    { id: 2, name: "Hip Flexibility", exercises: ["Hip Circles", "Pigeon Pose", "Butterfly Stretch", "Lunges"] },
    { id: 3, name: "Ankle Mobility", exercises: ["Ankle Circles", "Calf Raises", "Toe Walks", "Heel Walks"] },
    { id: 4, name: "Spine Health", exercises: ["Cat-Cow Stretch", "Thoracic Rotations", "Child's Pose", "Supine Twist"] },
    { id: 5, name: "Neck Tension Relief", exercises: ["Neck Rolls", "Chin Tucks", "Levator Scapulae Stretch", "Upper Trapezius Stretch"] }
];

// Function to get a random workout from a database
function getRandomWorkout(database) {
    const randomIndex = Math.floor(Math.random() * database.length);
    return database[randomIndex];
}

// Function to get a workout by difficulty
function getWorkoutByDifficulty(database, difficulty) {
    return database.filter(workout => workout.difficulty === difficulty);
}

// Function to get a PreHab routine
function getPrehabRoutine() {
    return prehabDatabase[Math.floor(Math.random() * prehabDatabase.length)];
}

// Function to add a new workout to a database
function addWorkout(database, workout) {
    const newId = database[database.length - 1].id + 1;
    workout.id = newId;
    database.push(workout);
    return newId;
}

// Example usage:
// const randomYogaWorkout = getRandomWorkout(yogaDatabase);
// const intermediateHiitWorkouts = getWorkoutByDifficulty(hiitDatabase, "Intermediate");
// const todaysPrehabRoutine = getPrehabRoutine();
// const newYogaWorkoutId = addWorkout(yogaDatabase, { name: "Morning Yoga", duration: 20, difficulty: "Beginner", youtubeLink: "https://youtu.be/example6" });

// Export the databases and functions
export {
    yogaDatabase,
    hiitDatabase,
    prehabDatabase,
    getRandomWorkout,
    getWorkoutByDifficulty,
    getPrehabRoutine,
    addWorkout
};
