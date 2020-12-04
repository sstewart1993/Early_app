package com.example.demo.models;

import java.util.ArrayList;
import java.util.List;

public class Mood {

    private Double mindScore;
    private Double bodyScore;
    private List<Reason> mindReason;
    private List<Reason> bodyReason;

    public Mood(Double mindScore, Double bodyScore) {
        this.mindScore = mindScore;
        this.bodyScore = bodyScore;
        this.bodyReason = new ArrayList<Reason>();
        this.mindReason = new ArrayList<Reason>();
    }

    public Mood () {}

    public Double getMindScore() {
        return mindScore;
    }

    public void setMindScore(Double mindScore) {
        this.mindScore = mindScore;
    }

    public Double getBodyScore() {
        return bodyScore;
    }

    public void setBodyScore(Double bodyScore) {
        this.bodyScore = bodyScore;
    }

    public List<Reason> getMindReason() {
        return mindReason;
    }

    public void setMindReason(List<Reason> mindReason) {
        this.mindReason = mindReason;
    }

    public List<Reason> getBodyReason() {
        return bodyReason;
    }

    public void setBodyReason(List<Reason> bodyReason) {
        this.bodyReason = bodyReason;
    }

    public void addBodyReason(Reason reason){
        this.bodyReason.add(reason);
    }

    public void addMindReason(Reason reason){
        this.mindReason.add(reason);
    }
}
