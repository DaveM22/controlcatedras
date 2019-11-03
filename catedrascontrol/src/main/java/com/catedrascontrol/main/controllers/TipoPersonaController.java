package com.catedrascontrol.main.controllers;

import java.util.List;
import com.catedrascontrol.main.models.TipoPersona;
import com.catedrascontrol.main.service.api.TipoPersonaServiceAPI;

import org.springframework.http.MediaType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST })
public class TipoPersonaController {

    @Autowired
    private TipoPersonaServiceAPI tipopersonaDaoAPI;

    @GetMapping(value = "/tipospersona", produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody List<TipoPersona> personas() {
        return this.tipopersonaDaoAPI.getAll();
    }

}