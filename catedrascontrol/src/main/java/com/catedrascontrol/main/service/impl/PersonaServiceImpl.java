package com.catedrascontrol.main.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import com.catedrascontrol.main.dao.api.PersonaDaoAPI;
import com.catedrascontrol.main.models.Persona;
import com.catedrascontrol.main.service.api.PersonaServiceAPI;
import com.catedrascontrol.main.util.GenericServiceImpl;

@Service
public class PersonaServiceImpl extends GenericServiceImpl<Persona, Long> implements PersonaServiceAPI {

	@Autowired
	private PersonaDaoAPI personaDaoAPI;

	@Override
	public CrudRepository<Persona, Long> getDao() {
		return this.personaDaoAPI;
	}

}
