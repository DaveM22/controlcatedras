package com.catedrascontrol.main.service.impl;

import java.util.ArrayList;

import com.catedrascontrol.main.dao.api.UsuarioDaoAPI;
import com.catedrascontrol.main.models.Usuario;
import com.catedrascontrol.main.service.api.UsuarioServiceAPI;
import com.catedrascontrol.main.util.GenericServiceImpl;
import com.catedrascontrol.main.util.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

@Service
public class UsuarioServiceImlp extends GenericServiceImpl<Usuario, Long> implements UsuarioServiceAPI {

    @Autowired
    private UsuarioDaoAPI UsuarioDao;

    @Override
    public CrudRepository<Usuario, Long> getDao() {
        return this.UsuarioDao;
    }

}