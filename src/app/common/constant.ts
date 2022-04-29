export const REGEX={
    //Contains 8 characters atleast 1 number, 1 alphabet, 1 special char
    PASSWORD:/^(?=.{8,})(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[@#$!%^&+=]).*$/, 
    EMAIL:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/
}

export const PARENT_PATH={
    MAIN:'main',
    AUTH:'auth',
    WILDCARD:'**',
    DUMMY:'dummy'
}
export const PATH={
    AUTH:{
        SIGNIN:'signin',
        SIGNUP:'signup',
        VARIFYEMAIL:'varifyemail',
        RESETPASSWORD:'resetpassword'
    },
    MAIN:{
        DASHBOARD:'dashboard'
    },
    DUMMY:{
        TEST:'test'
    }
}

