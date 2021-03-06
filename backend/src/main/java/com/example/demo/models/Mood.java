package com.example.demo.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.example.demo.models.Reason;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="moods")
public class Mood {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @Column(name="mindscore")
    private Double mindScore;

    @Column(name="bodyscore")
    private Double bodyScore;

    @Column(name="mindreason")
    private ArrayList<Reason> mindReason;

    @Column(name = "bodyreason")
    private ArrayList<Reason> bodyReason;

    @JsonIgnoreProperties({"entry"})
    @OneToOne(mappedBy = "mood")
    private Entry entry;

    public Mood(Double mindScore, Double bodyScore) {
        this.mindScore = mindScore;
        this.bodyScore = bodyScore;
        this.entry = null;
        this.bodyReason = new ArrayList<Reason>();
        this.mindReason = new ArrayList<Reason>();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Entry getEntry() {
        return entry;
    }

    public void setEntry(Entry entry) {
        this.entry = entry;
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

    public void setMindReason(ArrayList<Reason> mindReason) {
        this.mindReason = mindReason;
    }

    public List<Reason> getBodyReason() {
        return bodyReason;
    }

    public void setBodyReason(ArrayList<Reason> bodyReason) {
        this.bodyReason = bodyReason;
    }

    public void addBodyReason(Reason reason){
        this.bodyReason.add(reason);
    }

    public void addMindReason(Reason reason){
        this.mindReason.add(reason);
    }
}
