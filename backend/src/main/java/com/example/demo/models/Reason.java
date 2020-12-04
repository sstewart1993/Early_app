package com.example.demo.models;

public enum Reason {

    Work("Work"),
    Family("Family"),
    Relationship("Relationship"),
    Education("Education"),
    Food("Food"),
    Travelling("Travelling"),
    Friends("Friends"),
    Exercise("Exercise"),
    DontKnow("Dont Know"),
    Body("Body"),
    Covid("Covid");



    private final String Reason;

    Reason(String reason) {
        Reason = reason;
    }

    public String getReason() {
        return Reason;
    }
}
