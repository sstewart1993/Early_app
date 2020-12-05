package com.example.demo.Controllers;

import com.example.demo.Repositories.DiaryRepository;
import com.example.demo.models.Diary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DiaryController {

    @Autowired
    DiaryRepository diaryRepository;

    @GetMapping(value = "/diary")
    public ResponseEntity<List<Diary>> getDiary(){
        return new ResponseEntity<>(diaryRepository.findAll(), HttpStatus.OK);
    }
}
