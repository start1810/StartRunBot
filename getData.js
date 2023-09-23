import { weekPlanCreator } from "./workoutPlanCreator/weekPlanCreator.js";

const userData =[
    {
        profile: {
            userId: 400233058,
            gender: 'male',
            birth: 1997,
            weeklyValue: 57,
            trainModel: [
                true,
                false,
                true,
                true,
                true,
                true,
                true
            ],
            longRunDay: 6,
            level: 57,
            competitonDate: null,
        },
        workoutsPlan: [

        ],
        workouts: [

        ]
    }
]

export const getProfile = (id) => {
    const profileData = userData.find(user => user.profile.userId === id);
    return profileData ? profileData.profile : false;
}

export const getWorkoutsPlan = (id) => {
    const profileData = userData.find(user => user.profile.userId === id);
    const workoutsPlan = profileData ? profileData.workoutsPlan : false;
    if (workoutsPlan[0]) {
        return workoutsPlan;
    }
    else if (!workoutsPlan) {
        return false;
    }
    else {
        const workoutsDays = profileData.profile.trainModel;
        const longRunDay = profileData.profile.longRunDay;
        profileData.workoutsPlan = weekPlanCreator(workoutsDays, longRunDay);
        return profileData.workoutsPlan;
    }

}