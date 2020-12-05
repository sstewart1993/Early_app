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
        LocalDate yesterday = LocalDate.of(2020, 12, 04);
        SleepQuality wokeOnce = SleepQuality.WokeOnce;
        SleepQuality poor = SleepQuality.Bad;
        Sleep secondSleep = new Sleep(4.0, poor);
        Sleep firstSleep = new Sleep(8.0, wokeOnce);
        firstSleep.setDream("I dreamed about kittens and rainbows");
        secondSleep.setDream("I dreamed I hadn't studied for an exam");
        Mood happy = new Mood(8.0, 9.0);
        Mood unhappy = new Mood(4.0, 3.0);
        unhappy.addMindReason(Reason.Education);
        unhappy.addBodyReason(Reason.Body);
        happy.addBodyReason(Reason.Exercise);
        happy.addMindReason(Reason.Friends);
        Meditation noMeditation = new Meditation(0, false);
        Meditation littleMeditation = new Meditation(5, true);

        Entry firstEntry = new Entry(today, firstSleep, happy, "I've woken up feeling great", littleMeditation, testDiary);
        entryRepository.save(firstEntry);

        Entry yesterdayEntry = new Entry(yesterday, secondSleep, unhappy, "I do not feel great today", noMeditation, testDiary);
        entryRepository.save(yesterdayEntry);
        testDiary.addEntry(yesterdayEntry);
    }

}
