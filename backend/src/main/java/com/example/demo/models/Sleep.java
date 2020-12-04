package com.example.demo.models;

import javax.persistence.*;

@Entity
@Table(name="sleeps")
public class Sleep {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @Column(name="hours")
    private Double hours;

    @Column(name = "sleepquality")
    private SleepQuality sleepQuality;

    @Column(name = "dream")
    private String dream;

    @OneToOne(mappedBy = "sleeps")
    private Entry entry;

    public Sleep(Double hours, SleepQuality sleepQuality, Entry entry) {
        this.hours = hours;
        this.sleepQuality = sleepQuality;
        this.dream = "";
        this.entry = entry;
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

    public Sleep(){}

    public Double getHours() {
        return hours;
    }

    public void setHours(Double hours) {
        this.hours = hours;
    }

    public SleepQuality getSleepQuality() {
        return sleepQuality;
    }

    public void setSleepQuality(SleepQuality sleepQuality) {
        this.sleepQuality = sleepQuality;
    }

    public String getDream() {
        return dream;
    }

    public void setDream(String dream) {
        this.dream = dream;
    }
}
