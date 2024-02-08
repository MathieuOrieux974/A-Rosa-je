package com.epsi.fr.arosaje.bo;

import jakarta.persistence.*;

import java.io.Serializable;
@Entity
public class Conseil implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_conseil;
    private String contenu;

    public Conseil() {
    }
    @ManyToOne
    @JoinColumn(name="plante_id")
    private Plante plante;

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
