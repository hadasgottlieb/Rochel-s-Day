let STORE = {
    eatTimes: [],
    sleepTimes: [],
    feedingAmount: 0,
    naps: [
        {
            number: 1,
            yes: true,
            earlyWakeUp: false,
            no: false,
        },
        {
            number: 2,
            yes: true,
            earlyWakeUp: false,
            no: false,
        },
        {
            number: 3,
            yes: true,
            earlyWakeUp: false,
            no: false,
        },
        {
            number: 4,
            yes: true,
            earlyWakeUp: false,
            no: false,
        },
        {
            number: 5,
            yes: true,
            earlyWakeUp: false,
            no: false,
        },
    ],

}

//app should take input feeding time, make that index 0 in eatTimes array, add 3 hrs to get 4 next array values (ex. 6,9,12,3,6)
//app should take input awake time, add that to each sleepTimes value, push new values to sleepTimes array
//render eat times in feeding slots and sleeptimes in nap/bedtime slots (research how to do this)

function calculateFeeding() {
    //calculates total feeding amount for day, adds up each feeding amount entered, displays the total amount in review box.
    console.log(`calculateFeeding ran.`);
    $("#review-day").one("click", function() {
        $(".feeding").each(function() {
            if($(this).val() !== "") {
                STORE.feedingAmount += parseInt($(this).val());
            };
            $("#feeding-amount").text(STORE.feedingAmount);
        });
    });
}

function allPageFunctions() {
    calculateFeeding();
}

$(allPageFunctions);