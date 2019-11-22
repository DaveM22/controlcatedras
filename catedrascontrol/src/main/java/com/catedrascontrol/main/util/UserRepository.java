package com.catedrascontrol.main.util;

import com.catedrascontrol.main.models.Usuario;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<Usuario, Long> {

    Usuario findUsuarioBynombre(String nombre);
}