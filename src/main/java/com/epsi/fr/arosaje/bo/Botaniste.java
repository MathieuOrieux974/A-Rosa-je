package com.epsi.fr.arosaje.bo;

import jakarta.persistence.*;

import java.io.Serializable;
import java.util.Set;

@Entity
public class Botaniste implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_botaniste;
    private String prenom;
    private String nom;
    private String mail;
    private String password;

    public Botaniste() {
    }
    @ManyToMany
    @JoinTable(name="bota_plante",
            joinColumns= @JoinColumn(name="ID_BOT", referencedColumnName="id_botaniste"),
            inverseJoinColumns= @JoinColumn(name="ID_PL", referencedColumnName="id_plante")
    )
    private Set<Plante> plantes;

    public Integer getId_botaniste() {
        return id_botaniste;
    }

    public void setId_botaniste(Integer id_botaniste) {
        this.id_botaniste = id_botaniste;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
