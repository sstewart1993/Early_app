package com.example.demo.Controllers;

import com.example.demo.Repositories.EntryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EntryController {

    @Autowired
    EntryRepository entryRepository;
}
