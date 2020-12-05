package com.example.demo.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;

@Entity
@Table(name = "entry")
public class Entry {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @Column(name="date")
    private LocalDate date;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="sleep_id", referencedColumnName = "id")
    private Sleep sleep;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "mood_id", referencedColumnName = "id")
    private Mood mood;

    @Column(name="prompt")
    private String prompt ;

    @ManyToOne
    @JoinColumn(name="diary_id", nullable = false)
    @JsonIgnoreProperties({"entry"})
    private Diary diary;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="meditation_id", referencedColumnName = "id")
    private Meditation meditation;

    public Entry(LocalDate date, Sleep sleep, Mood mood, String prompt, Meditation meditation, Diary diary) {
        this.date = date;
        this.sleep = sleep;
        this.mood = mood;
        this.prompt = prompt;
        this.meditation = meditation;
        this.diary = diary;
    }
     public Entry(){

     }

    public Diary getDiary() {
        return diary;
    }

    public void setDiary(Diary diary) {
        this.diary = diary;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
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
