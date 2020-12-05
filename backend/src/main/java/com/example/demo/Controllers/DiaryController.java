package com.example.demo.Controllers;

import com.example.demo.Repositories.DiaryRepository;
import com.example.demo.models.Diary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class DiaryController {

    @Autowired
    DiaryRepository diaryRepository;

    @GetMapping(value = "/diary")
    public ResponseEntity<List<Diary>> getDiary(){
        return new ResponseEntity<>(diaryRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/diary/{id}")
    public ResponseEntity getDiary(@PathVariable Long id){
        return new ResponseEntity<>(diaryRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/diary")
    public ResponseEntity<Diary> postDiary(@RequestBody Diary diary){
        diaryRepository.save(diary);
        return new ResponseEntity<>(diary, HttpStatus.CREATED);
    }

    @PatchMapping(value = "/diary/{id}")
    public ResponseEntity<Diary> updateDiary(@RequestBody Diary diary){
        diaryRepository.save(diary);
        return new ResponseEntity<>(diary, HttpStatus.OK);
    }

    @DeleteMapping(value = "/diary/{id}")
    public ResponseEntity<Diary> deleteDiary(@PathVariable Long id){
        Diary found = diaryRepository.getOne(id);
        diaryRepository.delete(found);
        return new ResponseEntity<>(found, HttpStatus.OK);
    }

}
