package com.AtlanTech.fr.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.AtlanTech.fr.model.UtilisateurEntity;

/**
 * The Interface UtilisateurDao.
 */
@Repository
public interface UtilisateurDao extends JpaRepository<UtilisateurEntity, Long> {
	UtilisateurEntity findByUsername(String username);
}
