/**
 * Created by austinli on 11/10/15.
 */

function addHabit(){

    var myFirebaseRef = new Firebase("https://torrid-fire-6209.firebaseio.com/");

    var habitsRef = myFirebaseRef.child("habits");
    var newHabitRef = habitsRef.push();

    // TODO: Fill with habit values to add to firebase
    newHabitRef.set({
        title: "",
        icon: "",
        weeklyfrequency: {
            sun: "",
            mon: "",
            tues: "",
            wed: "",
            thurs: "",
            fri: "",
            sat: ""
        },
        dailyfrequency: ""
    });


}

function listHabits(){

    var myFirebaseRef = new Firebase("https://torrid-fire-6209.firebaseio.com");

    var habitsRef = myFirebaseRef.child("habits");

    // TODO: retrieve habits and list them

    habitsRef.on("value", function(snapshot) {
        console.log(snapshot.val());
    }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
    });

}

function deleteHabit(){

    var myFirebaseRef = new Firebase("https://torrid-fire-6209.firebaseio.com");

    var habitsRef = myFirebaseRef.child("habits");

    // TODO: Insert unique ID of habit object here for deletion
    var deleteRef = habitsRef.child("");

    var onComplete = function(error) {
        if (error) {
            console.log('Synchronization failed');
        } else {
            console.log('Synchronization succeeded');
        }
    };
    deleteRef.remove(onComplete);

}

function updateHabit(){

    var myFirebaseRef = new Firebase("https://torrid-fire-6209.firebaseio.com");

    var habitsRef = myFirebaseRef.child("habits");

    // TODO: Insert unique ID of updated habit object here
    var updateRef = habitsRef.child("");

    var onComplete = function(error) {
        if (error) {
            console.log('Synchronization failed');
        } else {
            console.log('Synchronization succeeded');
        }
    };

    // TODO: Insert new data here to update the given object
    updateRef.update(
        {
            title: "",
            icon: "",
            weeklyfrequency: {
                sun: "",
                mon: "",
                tues: "",
                wed: "",
                thurs: "",
                fri: "",
                sat: ""
            },
            dailyfrequency: ""
        }
        ,onComplete);

}