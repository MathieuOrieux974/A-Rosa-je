package com.epsi.fr.arosaje.dal;

import com.epsi.fr.arosaje.bo.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource
@CrossOrigin
public interface UtilisateurRepository extends JpaRepository<Utilisateur,Integer> {
}