package com.epsi.fr.arosaje.dal;

import com.epsi.fr.arosaje.bo.Photo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface PhotoRepository extends JpaRepository<Photo, Integer> {
}
