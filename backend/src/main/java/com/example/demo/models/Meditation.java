package com.example.demo.models;

import javax.persistence.*;

@Entity
@Table(name="meditations")
public class Meditation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @Column(name="length")
    private int length;

    @Column(name="completed")
    private boolean completed;

    @OneToOne(mappedBy = "meditations")
    private Entry entry;

    public Meditation(int length, boolean completed, Entry entry) {
        this.length = length;
        this.completed = completed;
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

    public Meditation(){}

    public int getLength() {
        return length;
    }

    public void setLength(int length) {
        this.length = length;
    }

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }
}
