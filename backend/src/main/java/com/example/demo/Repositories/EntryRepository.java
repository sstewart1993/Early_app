package com.example.demo.Repositories;

import com.example.demo.models.Entry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface EntryRepository extends JpaRepository<Entry, Long> {

    List<Entry> findBySleepId(Long id);
    List<Entry> findByMeditationId(Long id);
    List<Entry> findByMoodId(Long id);

}
