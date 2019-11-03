package com.catedrascontrol.main.service.impl;

import com.catedrascontrol.main.dao.api.TipoPersonaDaoAPI;
import com.catedrascontrol.main.models.TipoPersona;
import com.catedrascontrol.main.service.api.TipoPersonaServiceAPI;
import com.catedrascontrol.main.util.GenericServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

@Service
public class TipoPersonaImpl extends GenericServiceImpl<TipoPersona, Long> implements TipoPersonaServiceAPI {

    @Autowired
    private TipoPersonaDaoAPI PersonaDao;

    @Override
    public CrudRepository<TipoPersona, Long> getDao() {
        return this.PersonaDao;
    }
}