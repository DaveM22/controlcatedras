package com.catedrascontrol.main.util;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

@Service
public abstract class GenericServiceImpl<T, ID extends Serializable> implements GenericServiceAPI<T, ID> {

	@Override
	public T save(T entidad) {

		return this.getDao().save(entidad);
	}

	@Override
	public void delete(ID id) {

		this.getDao().deleteById(id);
	}

	@Override
	public T get(ID id) {
		Optional<T> obj = this.getDao().findById(id);
		if (obj.isPresent()) {
			return obj.get();
		}
		return null;
	}

	@Override
	public List<T> getAll() {
		List<T> resultados = new ArrayList<>();
		this.getDao().findAll().forEach(x -> resultados.add(x));
		return resultados;
	}

	public abstract CrudRepository<T, ID> getDao();

}
