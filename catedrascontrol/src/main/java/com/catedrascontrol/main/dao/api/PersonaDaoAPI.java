package com.catedrascontrol.main.dao.api;

import org.springframework.data.repository.CrudRepository;

import com.catedrascontrol.main.models.Persona;

public interface PersonaDaoAPI extends CrudRepository<Persona, Long> {

}
