package com.epsi.fr.arosaje.bo;

import jakarta.persistence.*;

import java.io.Serializable;
@Entity
public class Photo implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_photo;
    private String url_photo;

    public Photo() {
    }
    @ManyToOne
    @JoinColumn(name="id_plante")
    private Plante plante;

    public Integer getId_photo() {
        return id_photo;
    }

    public void setId_photo(Integer id_photo) {
        this.id_photo = id_photo;
    }

    public String getUrl_photo() {
        return url_photo;
    }

    public void setUrl_photo(String url_photo) {
        this.url_photo = url_photo;
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("Photo{");
        sb.append("id_photo=").append(id_photo);
        sb.append(", url_photo='").append(url_photo).append('\'');
        sb.append('}');
        return sb.toString();
    }
}
