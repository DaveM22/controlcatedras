package com.catedrascontrol.main.dao.api;

import com.catedrascontrol.main.models.Curso;

import org.springframework.data.repository.CrudRepository;

/**
 * CursoDaoAPI
 */
public interface CursoDaoAPI extends CrudRepository<Curso, Long> {

}