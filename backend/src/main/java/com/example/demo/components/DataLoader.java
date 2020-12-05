package com.example.demo.components;

import com.example.demo.Repositories.DiaryRepository;
import com.example.demo.Repositories.EntryRepository;
import com.example.demo.models.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;
import java.time.LocalDate;

import javax.xml.crypto.Data;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    DiaryRepository diaryRepository;

    @Autowired
    EntryRepository entryRepository;

    public DataLoader(){

    }

    public void run(ApplicationArguments args){
        Diary testDiary = new Diary();
        diaryRepository.save(testDiary);

        LocalDate today = LocalDate.now();
        SleepQuality wokeOnce = SleepQuality.WokeOnce;
        Sleep firstSleep = new Sleep(8.0, wokeOnce);
        Mood happy = new Mood(8.0, 9.0);
        Meditation littleMeditation = new Meditation(5, true);

        Entry firstEntry = new Entry(today, firstSleep, happy, "I've woken up feeling great", littleMeditation, testDiary);
        entryRepository.save(firstEntry);
    }

}
