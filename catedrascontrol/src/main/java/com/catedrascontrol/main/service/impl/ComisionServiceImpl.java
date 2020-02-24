package com.catedrascontrol.main.service.impl;

import com.catedrascontrol.main.dao.api.ComisionDaoAPI;
import com.catedrascontrol.main.models.Comision;
import com.catedrascontrol.main.service.api.ComisionServiceAPI;
import com.catedrascontrol.main.util.GenericServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

@Service
public class ComisionServiceImpl extends GenericServiceImpl<Comision, Long> implements ComisionServiceAPI {

    @Autowired
    private ComisionDaoAPI ComisionDaoAPI;

    @Override
    public CrudRepository<Comision, Long> getDao() {
        return this.ComisionDaoAPI;
    }

}