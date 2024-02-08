package com.epsi.fr.arosaje.bo;

import jakarta.persistence.*;

import java.io.Serializable;
@Entity
public class Plante implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_plante;
    private String nom_plante;
    private String description;
    private String lieu;

    public Plante() {
    }
    @ManyToOne
    @JoinColumn(name="id_proprietaire")
    private Utilisateur utilisateur;
    public Integer getId_plante() {
        return id_plante;
    }

    public void setId_plante(Integer id_plante) {
        this.id_plante = id_plante;
    }

    public String getNom_plante() {
        return nom_plante;
    }

    public void setNom_plante(String nom_plante) {
        this.nom_plante = nom_plante;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getLieu() {
        return lieu;
    }

    public void setLieu(String lieu) {
        this.lieu = lieu;
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("Plante{");
        sb.append("id_plante=").append(id_plante);
        sb.append(", nom_plante='").append(nom_plante).append('\'');
        sb.append(", description='").append(description).append('\'');
        sb.append(", lieu='").append(lieu).append('\'');
        sb.append('}');
        return sb.toString();
    }
}
