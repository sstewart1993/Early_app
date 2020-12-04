package com.example.demo.models;

import java.util.ArrayList;
import java.util.List;

public class Diary {

    private List<Entry> entries;

    public Diary() {
        this.entries = new ArrayList<>();
    }

    public List<Entry> getEntries() {
        return entries;
    }

    public void setEntries(List<Entry> entries) {
        this.entries = entries;
    }

    public void addEntry(Entry entry){
        entries.add(entry);
    }
}
