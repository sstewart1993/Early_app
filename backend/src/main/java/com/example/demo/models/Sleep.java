package com.example.demo.models;

public class Sleep {

    private Double hours;
    private SleepQuality sleepQuality;
    private String dream;

    public Sleep(Double hours, SleepQuality sleepQuality) {
        this.hours = hours;
        this.sleepQuality = sleepQuality;
        this.dream = "";
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
