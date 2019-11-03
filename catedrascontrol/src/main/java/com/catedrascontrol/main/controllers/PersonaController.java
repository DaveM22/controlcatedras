package com.catedrascontrol.main.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.catedrascontrol.main.models.Persona;
import com.catedrascontrol.main.service.api.PersonaServiceAPI;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST })
public class PersonaController {

	@Autowired
	private PersonaServiceAPI personaDaoapi;

	@GetMapping(value = "/personas", produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody List<Persona> personas() {
		return this.personaDaoapi.getAll();
	}

	@PostMapping(value = "/personas")
	public Persona AgregarPersona(@RequestBody Persona p) {
		return this.personaDaoapi.save(p);
	}

}
