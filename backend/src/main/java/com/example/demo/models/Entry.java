package com.example.demo.models;

import java.util.Date;

public class Entry {

    private Date date;
    private Sleep sleep;
    private Mood mood;
    private String prompt ;
    private Meditation meditation;

    public Entry(Date date, Sleep sleep, Mood mood, String prompt, Meditation meditation) {
        this.date = date;
        this.sleep = sleep;
        this.mood = mood;
        this.prompt = prompt;
        this.meditation = meditation;
    }
     public Entry(){

     }


    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Sleep getSleep() {
        return sleep;
    }

    public void setSleep(Sleep sleep) {
        this.sleep = sleep;
    }

    public Mood getMood() {
        return mood;
    }

    public void setMood(Mood mood) {
        this.mood = mood;
    }

    public String getPrompt() {
        return prompt;
    }

    public void setPrompt(String prompt) {
        this.prompt = prompt;
    }

    public Meditation getMeditation() {
        return meditation;
    }

    public void setMeditation(Meditation meditation) {
        this.meditation = meditation;
    }
}
