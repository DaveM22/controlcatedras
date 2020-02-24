package com.catedrascontrol.main.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "comisiones")

public class Comision {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_comision")
    public Long Id;

    @Column(name = "descripcion")
    public String Descripcion;

    @Column(name = "nivel")
    public Long Nivel;

    public Long getNivel() {
        return Nivel;
    }

    public void setNivel(Long nivel) {
        this.Nivel = nivel;
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public String getDescripcion() {
        return Descripcion;
    }

    public void setDescripcion(String descripcion) {
        Descripcion = descripcion;
    }
}