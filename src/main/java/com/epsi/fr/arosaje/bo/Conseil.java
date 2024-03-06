package com.epsi.fr.arosaje.bo;

import jakarta.persistence.*;
import jdk.jshell.execution.Util;

import java.io.Serializable;
import java.util.Set;

@Entity
public class Conseil implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_conseil;
    private String contenu;

    public Conseil() {
    }
    @ManyToOne
    @JoinColumn(name="id_plante")
    private Plante plante;

    @ManyToOne
    @JoinColumn(name="id_utilisateur")
    private Utilisateur utilisateur;



    public Integer getId_conseil() {
        return id_conseil;
    }

    public void setId_conseil(Integer id_conseil) {
        this.id_conseil = id_conseil;
    }

    public String getContenu() {
        return contenu;
    }

    public void setContenu(String contenu) {
        this.contenu = contenu;
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("Conseil{");
        sb.append("id_conseil=").append(id_conseil);
        sb.append(", contenu='").append(contenu).append('\'');
        sb.append('}');
        return sb.toString();
    }
}
