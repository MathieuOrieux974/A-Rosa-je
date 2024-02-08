package com.epsi.fr.arosaje.dal;

import com.epsi.fr.arosaje.bo.Botaniste;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface BotanisteRepository extends JpaRepository<Botaniste,Integer> {
}
