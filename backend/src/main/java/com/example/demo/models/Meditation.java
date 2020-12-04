package com.example.demo.models;

public class Meditation {

    private int length;
    private boolean completed;

    public Meditation(int length, boolean completed) {
        this.length = length;
        this.completed = completed;
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
