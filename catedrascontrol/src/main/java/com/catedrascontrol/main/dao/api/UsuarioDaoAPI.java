package com.catedrascontrol.main.dao.api;

import com.catedrascontrol.main.models.Usuario;

import org.springframework.data.repository.CrudRepository;

public interface UsuarioDaoAPI extends CrudRepository<Usuario, Long> {

}