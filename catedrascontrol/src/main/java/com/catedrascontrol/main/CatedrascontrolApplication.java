package com.catedrascontrol.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan("com.catedrascontrol.main") //to scan packages mentioned
@EnableJpaRepositories("com.catedrascontrol.main")
public class CatedrascontrolApplication {

	public static void main(String[] args) {
		SpringApplication.run(CatedrascontrolApplication.class, args);
	}

}
