package com.example.demo;

import com.example.demo.Repositories.DiaryRepository;
import com.example.demo.Repositories.EntryRepository;
import com.example.demo.models.*;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.time.LocalDate;
import java.util.List;

import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest
class DemoApplicationTests {

	@Autowired
	DiaryRepository diaryRepository;

	@Autowired
	EntryRepository entryRepository;

	@Test
	void contextLoads() {
	}

	@Test
	public void createDiaryAndEntrySave(){
		Diary newDiary = new Diary();
		diaryRepository.save(newDiary);
		Entry testEntry = new Entry(LocalDate.of(1989, 06, 18), new Sleep(8.0, SleepQuality.Restful), new Mood(8.0, 9.0), "This is a test morning", new Meditation(5, true), newDiary);
		entryRepository.save(testEntry);
	}

	@Test
	public void canDeleteEntry(){
		Diary newDiary = new Diary();
		diaryRepository.save(newDiary);
		Entry testEntry = new Entry(LocalDate.of(1989, 06, 18), new Sleep(8.0, SleepQuality.Restful), new Mood(8.0, 9.0), "This is a test morning", new Meditation(5, true), newDiary);
		entryRepository.save(testEntry);
		entryRepository.delete(testEntry);
		assertEquals(0, newDiary.getEntries().size());
	}

	@Test
	public void canGetEntryBySleepId(){
		List<Entry> foundEntries = entryRepository.findBySleepId(1L);
		assertEquals(1, foundEntries.size());
		assertEquals(LocalDate.of(2020, 12, 05), foundEntries.get(0).getDate());
	}

	@Test
	public void canGetEntryByMoodId(){
		List<Entry> foundEntries = entryRepository.findByMoodId(1L);
		assertEquals(1, foundEntries.size());
		assertEquals(8.0, foundEntries.get(0).getMood().getMindScore(), 0.1);
	}

	@Test
	public void canGetEntryByMeditationId(){
		List<Entry> foundEntries = entryRepository.findByMeditationId(1L);
		assertEquals(1, foundEntries.size());
		assertEquals(5, foundEntries.get(0).getMeditation().getLength());
	}


}
