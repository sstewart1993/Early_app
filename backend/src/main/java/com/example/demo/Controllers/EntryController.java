package com.example.demo.Controllers;

import com.example.demo.Repositories.EntryRepository;
import com.example.demo.models.Entry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
public class EntryController {

    @Autowired
    EntryRepository entryRepository;

    @GetMapping(value = "/entries")
    public ResponseEntity<List<Entry>> getAllEntries(){
        return new ResponseEntity<>(entryRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/entries/{id}")
    public ResponseEntity getEntry(@PathVariable Long id){
        return new ResponseEntity<>(entryRepository.findById(id), HttpStatus.OK);
    }

    @GetMapping(value="entries/date/{date}")
    public ResponseEntity<List<Entry>> getEntryByDate(@PathVariable LocalDate date){
        return new ResponseEntity<>(entryRepository.findAllByDate(date),HttpStatus.OK);
    }

    @PostMapping(value = "/entries")
    public ResponseEntity<Entry> postEntry(@RequestBody Entry entry){
        entryRepository.save(entry);
        return new ResponseEntity<>(entry, HttpStatus.CREATED);
    }

    @PatchMapping(value = "/entries/{id}")
    public ResponseEntity<Entry> updateEntry(@RequestBody Entry entry){
        entryRepository.save(entry);
        return new ResponseEntity<>(entry, HttpStatus.OK);
    }

    @DeleteMapping(value = "/entries/{id}")
    public ResponseEntity<Entry> deleteEntry(@PathVariable Long id){
        Entry found = entryRepository.getOne(id);
        entryRepository.delete(found);
        return new ResponseEntity<>(found, HttpStatus.OK);
    }
}
