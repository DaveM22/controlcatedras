package com.catedrascontrol.main.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import com.catedrascontrol.main.models.Comision;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.http.MediaType;
import com.catedrascontrol.main.service.api.ComisionServiceAPI;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT })
public class ComisionController {

    @Autowired
    private ComisionServiceAPI ComisionServiceAPI;

    @GetMapping(value = "/comisiones", produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody List<Comision> Comisiones() {
        return this.ComisionServiceAPI.getAll();
    }

    @GetMapping(value = "/comisiones/{id}")
    public @ResponseBody Comision getCursoByID(@PathVariable String id) {
        Long idparameter = Long.valueOf(id);
        Comision comision = this.ComisionServiceAPI.get(idparameter);
        return comision;
    }

    @PostMapping(value = "/comisiones")
    public Comision CursoControllertCurso(@RequestBody Comision comision) {
        Comision com = new Comision();
        com.setDescripcion(comision.getDescripcion());
        com.setNivel(comision.getNivel());
        return this.ComisionServiceAPI.save(com);
    }

    @PutMapping(value = "/comisiones")
    public Comision UpdateCurso(@RequestBody Comision comision) {
        return this.ComisionServiceAPI.save(comision);
    }

    @DeleteMapping(value = "/comisiones")
    public void ComisionDelete(@RequestBody Comision comision) {
        this.ComisionServiceAPI.delete(comision.Id);
    }

}