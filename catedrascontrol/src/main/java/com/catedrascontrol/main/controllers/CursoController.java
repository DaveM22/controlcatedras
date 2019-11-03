package com.catedrascontrol.main.controllers;

import java.util.List;

import com.catedrascontrol.main.models.Curso;
import com.catedrascontrol.main.service.api.CursoServiceAPI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT })
public class CursoController {

    @Autowired
    private CursoServiceAPI CursoDaoapi;

    @GetMapping(value = "/cursos", produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody List<Curso> cursos() {
        return this.CursoDaoapi.getAll();
    }

    @GetMapping(value = "/cursos/{id}")
    public @ResponseBody Curso getCursoByID(@PathVariable String id) {
        Long idparameter = Long.valueOf(id);
        Curso asd = this.CursoDaoapi.get(idparameter);
        return asd;
    }

    @PostMapping(value = "/cursos")
    public Curso CursoControllertCurso(@RequestBody Curso nuevoCurso) {
        Curso cur = new Curso();
        cur.setDescripcion(nuevoCurso.getDescripcion());
        return this.CursoDaoapi.save(cur);
    }

    @PutMapping(value = "/cursos")
    public void UpdateCurso(@RequestBody Curso curso) {
        this.CursoDaoapi.save(curso);
    }

}