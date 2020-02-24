package com.catedrascontrol.main.models;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "personas")
public class Persona {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;

	@Column(name = "dni")
	private Long dni;

	@Column(name = "nombre")
	private String nombre;

	@Column(name = "apellido")
	private String apellido;

	@Column(name = "legajo")
	private Long legajo;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "id_tipopersona", referencedColumnName = "id_tipo")
	private TipoPersona tipopersona;

	@Column(name = "email")
	private String email;

	public Long getId() {
		return id;
	}

	public void setIdpersonas(Long idpersonas) {
		this.id = idpersonas;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public Long getLegajo() {
		return legajo;
	}

	public void setLegajo(Long legajo) {
		this.legajo = legajo;
	}

	public Long getDni() {
		return dni;
	}

	public void setDni(Long dni) {
		this.dni = dni;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public TipoPersona getTipoPersona() {
		return tipopersona;
	}

	public void setTipoPersona(TipoPersona tipoPersona) {
		this.tipopersona = tipoPersona;
	}

}
