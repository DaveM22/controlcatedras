package com.catedrascontrol.main.service.impl;

import com.catedrascontrol.main.dao.api.CursoDaoAPI;
import com.catedrascontrol.main.models.Curso;
import com.catedrascontrol.main.service.api.CursoServiceAPI;
import com.catedrascontrol.main.util.GenericServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

/**
 * CursoServiceImpl
 */
@Service
public class CursoServiceImpl extends GenericServiceImpl<Curso, Long> implements CursoServiceAPI {

    @Autowired
    private CursoDaoAPI cursoDaoAPI;

    @Override
    public CrudRepository<Curso, Long> getDao() {

        return this.cursoDaoAPI;
    }

}