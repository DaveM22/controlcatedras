package com.catedrascontrol.main.util;

import java.io.Serializable;
import java.util.List;

public interface GenericServiceAPI<T, ID extends Serializable> {
	
	T save(T entidad);
	
	void delete(ID id);
	
	T get(ID id);
	
	List<T> getAll();

}
