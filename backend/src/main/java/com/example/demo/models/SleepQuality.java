package com.example.demo.models;

public enum SleepQuality {

    Restful(10),
    WokeOnce(8),
    WokeTwice(6),
    RestLess(4),
    Bad(2),
    No(0);

    private final int quality;

    SleepQuality(int quality) {
        this.quality = quality;
    }

    public int getQuality() {
        return quality;
    }
}
