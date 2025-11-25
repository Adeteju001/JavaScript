let day = "monday"; 

switch (day) {
    case "monday":
    case "tuesday":
        console.log("8am");
        break;
    case "wednesday":
        console.log("9am");
        break;
    case "thursday":
        console.log("10am");
        break;
    case "friday":
        console.log("5am");
        break;
    case "saturday":
    case "sunday":
        console.log("7am");
        break;
    default:
        console.log("Take a break");
}