
enum USER_ROLE {
    SYSTEM_ADMIN,
    CONSUMER
}

enum SLOT_STATUS {
    STAGED,
    BOOKED,
    AVAILABLE,
    UNAVAILABLE
}

enum TURF_TYPE {
    FIVES,
    SEVENS
}

enum BOOKING_TYPE {
    SELF,
    WALKIN
}


export class ApplicationEnums {

    static USER_MANAGEMENT = {
        ROLE: USER_ROLE
    }

    static TURF_MANAGEMENT = {
        TURF_TYPE: TURF_TYPE,
        SLOT_STATUS: SLOT_STATUS,
        BOOKING_TYPE: BOOKING_TYPE
    }
}